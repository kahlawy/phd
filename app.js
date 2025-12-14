function parseXmlQuestions(xmlText){
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "application/xml");

  // Detect XML parser errors
  const pe = doc.querySelector("parsererror");
  if (pe) {
    // common cause: unescaped & in text/options
    throw new Error("XML parse error (often caused by unescaped '&' -> use &amp;).");
  }

  // Accept multiple possible roots:
  // <quiz><question> OR <questions><question> OR any root containing <question>
  let qNodes = Array.from(doc.querySelectorAll("quiz > question"));
  if (qNodes.length === 0) qNodes = Array.from(doc.querySelectorAll("questions > question"));
  if (qNodes.length === 0) qNodes = Array.from(doc.querySelectorAll("question"));

  if (qNodes.length === 0) {
    throw new Error("No <question> nodes found in questions.xml.");
  }

  const keyOrder = ["A","B","C","D"];

  const parsed = qNodes.map((qn, i) => {
    const id = Number(qn.getAttribute("id") || (i+1));
    const topic = qn.getAttribute("topic") || "General";
    const difficulty = qn.getAttribute("difficulty") || "Medium";

    const tNode = qn.querySelector("text") || qn.querySelector("questionText") || qn.querySelector("title");
    const question = (tNode ? tNode.textContent : "").trim();
    if (!question) throw new Error(`Question ${id}: missing <text>.`);

    // Options: supports <option key="A">.. OR <choice>.. etc
    let optNodes = Array.from(qn.querySelectorAll("option"));
    if (optNodes.length === 0) optNodes = Array.from(qn.querySelectorAll("choice"));

    if (optNodes.length < 4) {
      throw new Error(`Question ${id}: needs at least 4 options (<option>).</option>`);
    }

    // Take first 4 and sort by key if available
    const optionsSorted = optNodes.slice(0,4).sort((a,b)=>{
      const ka = (a.getAttribute("key")||"").toUpperCase();
      const kb = (b.getAttribute("key")||"").toUpperCase();
      const ia = keyOrder.indexOf(ka);
      const ib = keyOrder.indexOf(kb);
      if(ia === -1 && ib === -1) return 0;
      if(ia === -1) return 1;
      if(ib === -1) return -1;
      return ia - ib;
    });

    const options = optionsSorted.map(o => (o.textContent || "").trim());

    // Correct option:
    // Preferred: correct="true"
    let correctIndex = optionsSorted.findIndex(o => (o.getAttribute("correct")||"false").toLowerCase() === "true");

    // Fallback: answer="B" on <question> (if your XML uses that style)
    if (correctIndex === -1) {
      const ans = (qn.getAttribute("answer") || "").toUpperCase().trim();
      if (ans) correctIndex = keyOrder.indexOf(ans);
    }

    if (correctIndex < 0 || correctIndex > 3) {
      throw new Error(`Question ${id}: no correct answer marked. Use correct="true" on one <option>.`);
    }

    const eNode = qn.querySelector("explanation") || qn.querySelector("reason");
    const reason = (eNode ? eNode.textContent : "").trim();

    return { id, topic, difficulty, question, options, correctIndex, reason };
  });

  parsed.sort((a,b)=>a.id-b.id);
  return parsed;
}

async function loadXml(){
  setSetupMessage("Loading questions.xml ...");

  try{
    const xmlUrl = new URL("./questions.xml", window.location.href).toString();

    const res = await fetch(xmlUrl, { cache: "no-store" });
    if(!res.ok){
      throw new Error(`Failed to load questions.xml (${res.status})`);
    }

    const xmlText = await res.text();

    // Quick sanity check (helps if server returns HTML instead of XML)
    if (xmlText.trim().startsWith("<!doctype") || xmlText.trim().startsWith("<html")) {
      throw new Error("Server returned HTML instead of XML. Check filename/path.");
    }

    allQuestions = parseXmlQuestions(xmlText);

    const max = allQuestions.length;
    countInput.max = String(max);
    if(Number(countInput.value) > max) countInput.value = String(max);
    countHint.textContent = `Max available: ${max}`;

    setSetupMessage(`Loaded ${max} questions successfully.`);
    console.log("Loaded XML OK:", xmlUrl, "Questions:", max);

  }catch(err){
    allQuestions = [];
    countHint.textContent = "Max depends on questions.xml";
    setSetupMessage(err.message || "Failed to load XML.", true);
    console.error("XML load/parse error:", err);
  }
}
