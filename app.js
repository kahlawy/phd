/* ============================================================
   Virtualization Quiz (XML Driven)
   - Setup screen: choose question count + timer before start
   - Quiz screen: 1 question per screen (A/B/C/D), Submit then Next
   - Reads from questions.xml
   - Teacher mode shows correct answer & explanation after submit
   - GitHub Pages friendly
   ============================================================ */

(() => {
  // ===== DOM =====
  const setupScreen = document.getElementById("setupScreen");
  const quizScreen  = document.getElementById("quizScreen");

  const countInput = document.getElementById("countInput");
  const timeInput  = document.getElementById("timeInput");
  const shuffleToggle = document.getElementById("shuffleToggle");
  const teacherToggle = document.getElementById("teacherToggle");
  const btnStart = document.getElementById("btnStart");
  const btnLoad  = document.getElementById("btnLoad");
  const setupMsg = document.getElementById("setupMsg");
  const countHint = document.getElementById("countHint");

  const elQ = document.getElementById("questionText");
  const elGrid = document.getElementById("optionsGrid");
  const elProgressText = document.getElementById("progressText");
  const elProgressFill = document.getElementById("progressFill");
  const elScoreText = document.getElementById("scoreText");
  const elTimerText = document.getElementById("timerText");
  const elFeedback = document.getElementById("feedbackBox");

  const btnSubmit = document.getElementById("btnSubmit");
  const btnNext = document.getElementById("btnNext");
  const btnPrev = document.getElementById("btnPrev");
  const btnRestart = document.getElementById("btnRestart");

  // ===== State =====
  let allQuestions = [];
  let quizQuestions = [];
  let answers = [];           // per quizQuestions index -> 0..3 or null
  let idx = 0;                // current question index (within quizQuestions)
  let submitted = false;

  // Timer
  let timerInterval = null;
  let secondsLeft = 0;

  // Persist teacher mode
  const TEACHER_KEY = "quiz_teacher_mode";
  teacherToggle.checked = localStorage.getItem(TEACHER_KEY) === "1";
  teacherToggle.addEventListener("change", () => {
    localStorage.setItem(TEACHER_KEY, teacherToggle.checked ? "1" : "0");
  });

  // ===== Utilities =====
  function showSetup() {
    quizScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");
  }

  function showQuiz() {
    setupScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
  }

  function setSetupMessage(msg, isError = false) {
    setupMsg.style.color = isError ? "#842029" : "#6b7280";
    setupMsg.textContent = msg;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  function startTimer(minutes) {
    stopTimer();

    if (minutes <= 0) {
      secondsLeft = 0;
      elTimerText.textContent = "--:--";
      return;
    }

    secondsLeft = Math.max(1, Math.floor(minutes * 60));
    elTimerText.textContent = formatTime(secondsLeft);

    timerInterval = setInterval(() => {
      secondsLeft--;
      elTimerText.textContent = formatTime(Math.max(0, secondsLeft));

      if (secondsLeft <= 0) {
        stopTimer();
        finishQuiz(true);
      }
    }, 1000);
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function computeScore() {
    let correct = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
      const q = quizQuestions[i];
      if (answers[i] !== null && answers[i] === q.correctIndex) correct++;
    }
    return correct;
  }

  function computeAnsweredCount() {
    return answers.filter(a => a !== null).length;
  }

  // ===== XML Parsing =====
  /*
    Expected XML:

    <quiz>
      <question id="1" topic="Storage" difficulty="Easy">
        <text>Question...</text>
        <option key="A" correct="false">...</option>
        <option key="B" correct="true">...</option>
        <option key="C" correct="false">...</option>
        <option key="D" correct="false">...</option>
        <explanation>...</explanation>
      </question>
    </quiz>
  */
  function parseXmlQuestions(xmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, "application/xml");

    const pe = doc.querySelector("parsererror");
    if (pe) {
      throw new Error("XML parse error. Please verify questions.xml is valid.");
    }

    const qNodes = Array.from(doc.querySelectorAll("quiz > question"));
    if (qNodes.length === 0) {
      throw new Error("No <question> nodes found under <quiz>.");
    }

    const keyOrder = ["A", "B", "C", "D"];

    const parsed = qNodes.map((qn, i) => {
      const id = Number(qn.getAttribute("id") || (i + 1));
      const topic = qn.getAttribute("topic") || "General";
      const difficulty = qn.getAttribute("difficulty") || "Medium";

      const tNode = qn.querySelector("text");
      const question = (tNode ? tNode.textContent : "").trim();

      const optNodes = Array.from(qn.querySelectorAll("option"));
      if (optNodes.length < 4) {
        throw new Error(`Question ${id}: needs at least 4 <option> elements.`);
      }

      // Sort first 4 by key A-D if present
      const optionsSorted = optNodes.slice(0, 4).sort((a, b) => {
        const ka = (a.getAttribute("key") || "").toUpperCase();
        const kb = (b.getAttribute("key") || "").toUpperCase();
        const ia = keyOrder.indexOf(ka);
        const ib = keyOrder.indexOf(kb);
        if (ia === -1 && ib === -1) return 0;
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
      });

      const options = optionsSorted.map(o => (o.textContent || "").trim());

      const correctIndex = optionsSorted.findIndex(
        o => (o.getAttribute("correct") || "false").toLowerCase() === "true"
      );
      if (correctIndex === -1) {
        throw new Error(`Question ${id}: no correct option marked correct="true".`);
      }

      const eNode = qn.querySelector("explanation");
      const reason = (eNode ? eNode.textContent : "").trim();

      return { id, topic, difficulty, question, options, correctIndex, reason };
    });

    parsed.sort((a, b) => a.id - b.id);
    return parsed;
  }

  async function loadXml() {
    setSetupMessage("Loading questions.xml ...");
    try {
      const res = await fetch("questions.xml", { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load questions.xml (${res.status})`);
      const xmlText = await res.text();

      allQuestions = parseXmlQuestions(xmlText);

      const max = allQuestions.length;
      countInput.max = String(max);
      if (Number(countInput.value) > max) countInput.value = String(max);
      countHint.textContent = `Max available: ${max}`;

      setSetupMessage(`Loaded ${max} questions successfully.`);
    } catch (err) {
      allQuestions = [];
      countHint.textContent = "Max depends on questions.xml";
      setSetupMessage(err.message || "Failed to load XML.", true);
    }
  }

  // ===== Render / UI =====
  function setProgress() {
    const current = idx + 1;
    const total = quizQuestions.length;

    elProgressText.textContent = `Question ${current} / ${total}`;
    elProgressFill.style.width = `${Math.round((current / total) * 100)}%`;

    // NOTE: scoreText element is just a number in latest UI
    elScoreText.textContent = String(computeScore());
  }

  function resetFeedback() {
    elFeedback.className = "feedback";
    elFeedback.textContent = "";
  }

  function renderQuestion() {
    const q = quizQuestions[idx];
    if (!q) return;

    submitted = false;

    btnPrev.disabled = (idx === 0);
    btnNext.disabled = true;

    const selectedIndex = answers[idx];
    btnSubmit.disabled = (selectedIndex === null);

    resetFeedback();
    setProgress();

    elQ.textContent = q.question || "(No question text)";
    elGrid.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    q.options.slice(0, 4).forEach((opt, i) => {
      const choice = document.createElement("div");
      choice.className = "choice";
      choice.dataset.key = letters[i];
      choice.setAttribute("role", "button");
      choice.setAttribute("tabindex", "0");

      if (selectedIndex === i) choice.classList.add("selected");

      choice.innerHTML = `
        <div class="letter">${letters[i]}</div>
        <div class="text">${escapeHtml(opt)}</div>
      `;

      choice.addEventListener("click", () => {
        if (submitted) return;
        selectOption(i);
      });

      choice.addEventListener("keydown", (e) => {
        if (submitted) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectOption(i);
        }
      });

      elGrid.appendChild(choice);
    });
  }

  function selectOption(i) {
    answers[idx] = i;
    btnSubmit.disabled = false;

    [...elGrid.querySelectorAll(".choice")].forEach((c, k) => {
      c.classList.toggle("selected", k === i);
    });
  }

  function submitAnswer() {
    if (submitted) return;

    const q = quizQuestions[idx];
    const selectedIndex = answers[idx];
    if (selectedIndex === null) return;

    submitted = true;

    const cards = [...elGrid.querySelectorAll(".choice")];
    cards.forEach((c, i) => {
      c.classList.remove("correct", "wrong");
      if (i === q.correctIndex) c.classList.add("correct");
      if (i === selectedIndex && i !== q.correctIndex) c.classList.add("wrong");
    });

    const isCorrect = (selectedIndex === q.correctIndex);
    elScoreText.textContent = String(computeScore());

    const teacherMode = !!teacherToggle.checked;
    const correctLetter = ["A", "B", "C", "D"][q.correctIndex];

    if (isCorrect) {
      elFeedback.className = "feedback good";
      elFeedback.innerHTML = teacherMode && q.reason
        ? `✅ Correct. <span style="opacity:.9">(${escapeHtml(q.reason)})</span>`
        : `✅ Correct.`;
    } else {
      elFeedback.className = "feedback bad";
      elFeedback.innerHTML = teacherMode
        ? `❌ Wrong. Correct is <b>${correctLetter}</b>. ${q.reason ? `<span style="opacity:.9">(${escapeHtml(q.reason)})</span>` : ""}`
        : `❌ Wrong.`;
    }

    btnNext.disabled = false;
    btnNext.textContent = (idx === quizQuestions.length - 1) ? "Finish" : "Next";
  }

  function nextQuestion() {
    if (!submitted) return;

    if (idx === quizQuestions.length - 1) {
      finishQuiz(false);
      return;
    }
    idx++;
    renderQuestion();
  }

  function prevQuestion() {
    if (idx === 0) return;
    idx--;
    renderQuestion();
  }

  function finishQuiz(auto) {
    stopTimer();

    const total = quizQuestions.length;
    const correct = computeScore();
    const answered = computeAnsweredCount();
    const wrong = answered - correct;
    const unanswered = total - answered;
    const percent = Math.round((correct / total) * 100);

    // Show final summary in the ribbon
    elQ.textContent = "Quiz Finished!";
    elGrid.innerHTML = "";

    btnSubmit.disabled = true;
    btnNext.disabled = true;
    btnPrev.disabled = false;

    elFeedback.className = "feedback good";
    elFeedback.innerHTML = `
      <b>Final Result</b><br/>
      Correct: <b>${correct}</b> • Wrong: <b>${wrong}</b> • Unanswered: <b>${unanswered}</b><br/>
      Score: <b>${percent}%</b>
      ${auto ? `<br/><span style="opacity:.9">Time is up. Auto-finished.</span>` : ""}
    `;

    elTimerText.textContent = auto ? "00:00" : elTimerText.textContent;
    elScoreText.textContent = String(correct);
    elProgressText.textContent = `Question ${total} / ${total}`;
    elProgressFill.style.width = "100%";
  }

  function restartToSetup() {
    stopTimer();

    // Reset quiz state
    quizQuestions = [];
    answers = [];
    idx = 0;
    submitted = false;

    // Reset quiz buttons
    btnSubmit.disabled = true;
    btnNext.disabled = true;
    btnPrev.disabled = true;
    btnNext.textContent = "Next";

    // Reset quiz UI bits
    elQ.textContent = "Loading question...";
    elGrid.innerHTML = "";
    resetFeedback();

    elProgressText.textContent = "Question 0 / 0";
    elProgressFill.style.width = "0%";
    elScoreText.textContent = "0";
    elTimerText.textContent = "--:--";

    showSetup();
    setSetupMessage(allQuestions.length ? `Loaded ${allQuestions.length} questions.` : "Load questions.xml first.");
  }

  function startQuiz() {
    if (!allQuestions.length) {
      setSetupMessage("No questions loaded. Ensure questions.xml is in the same folder.", true);
      return;
    }

    const desiredCount = Math.max(1, Math.min(Number(countInput.value || 1), allQuestions.length));
    const minutes = Math.max(0, Number(timeInput.value || 0));
    const doShuffle = !!shuffleToggle.checked;

    // Build quiz pool
    let pool = allQuestions.slice();
    if (doShuffle) pool = shuffleArray(pool);
    quizQuestions = pool.slice(0, desiredCount);

    answers = new Array(quizQuestions.length).fill(null);
    idx = 0;
    submitted = false;

    // Switch view and start timer
    showQuiz();
    startTimer(minutes);

    // Render first question
    renderQuestion();
  }

  // ===== Events =====
  btnSubmit.addEventListener("click", submitAnswer);
  btnNext.addEventListener("click", nextQuestion);
  btnPrev.addEventListener("click", prevQuestion);
  btnRestart.addEventListener("click", restartToSetup);

  btnStart.addEventListener("click", startQuiz);
  btnLoad.addEventListener("click", loadXml);

  // ===== Initial State (Important fix) =====
  // Prevent both screens from showing
  showSetup();
  quizScreen.classList.add("hidden");

  // Load questions.xml
  loadXml();
})();
