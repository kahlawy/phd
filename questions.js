const LOCAL_XML_DATA = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question id="1" topic="Storage" difficulty="Easy">
    <text>Which statement best describes a datastore in a virtualization platform?</text>
    <option key="A" correct="false">A VLAN used to isolate storage traffic</option>
    <option key="B" correct="true">A manageable logical storage container used to store VM files</option>
    <option key="C" correct="false">A hypervisor scheduling unit</option>
    <option key="D" correct="false">A tool that converts VMs to templates</option>
    <explanation>A datastore is a logical storage container presented to hosts for VM files.</explanation>
  </question>
  <question id="2" topic="Storage" difficulty="Easy">
    <text>Which protocol is commonly associated with NAS for virtualization storage?</text>
    <option key="A" correct="false">Fibre Channel</option>
    <option key="B" correct="true">NFS</option>
    <option key="C" correct="false">FCoE</option>
    <option key="D" correct="false">iSER</option>
    <explanation>NAS commonly exposes file storage using NFS (or SMB/CIFS).</explanation>
  </question>
  <question id="3" topic="Storage" difficulty="Easy">
    <text>Which statement is true about SAN storage?</text>
    <option key="A" correct="false">It provides file-level access only</option>
    <option key="B" correct="false">It always uses NFS</option>
    <option key="C" correct="false">It cannot be shared by multiple hosts</option>
    <option key="D" correct="true">It provides block-level access (LUNs)</option>
    <explanation>SAN typically provides block devices (LUNs) to hosts.</explanation>
  </question>
  <question id="4" topic="Storage" difficulty="Medium">
    <text>Why is shared storage important for live migration in many hypervisor setups?</text>
    <option key="A" correct="true">It allows source and destination hosts to access the same VM disks</option>
    <option key="B" correct="false">It reduces CPU usage</option>
    <option key="C" correct="false">It replaces vSwitches</option>
    <option key="D" correct="false">It eliminates the need for VM memory</option>
    <explanation>Live migration often requires both hosts to see the same VM disk files.</explanation>
  </question>
  <question id="5" topic="Storage" difficulty="Medium">
    <text>What is thin provisioning?</text>
    <option key="A" correct="false">Pre-allocating full disk capacity immediately</option>
    <option key="B" correct="false">Encrypting VM disks by default</option>
    <option key="C" correct="true">Allocating storage space on demand as data grows</option>
    <option key="D" correct="false">Mirroring every write to two arrays</option>
    <explanation>Thin provisioning allocates physical space only when needed.</explanation>
  </question>
  <question id="6" topic="Storage" difficulty="Medium">
    <text>Which feature allows rolling back a VM disk to a previous point in time?</text>
    <option key="A" correct="false">VLAN trunking</option>
    <option key="B" correct="false">Jumbo frames</option>
    <option key="C" correct="true">Snapshot</option>
    <option key="D" correct="false">NIC teaming</option>
    <explanation>Snapshots capture a point-in-time state for rollback.</explanation>
  </question>
  <question id="7" topic="Storage" difficulty="Medium">
    <text>What is a common risk of keeping many snapshots for long periods?</text>
    <option key="A" correct="true">Increases storage overhead and can degrade performance</option>
    <option key="B" correct="false">Improves write performance</option>
    <option key="C" correct="false">Eliminates the need for backups</option>
    <option key="D" correct="false">Prevents VM migration</option>
    <explanation>Snapshot chains can grow and impact performance/management.</explanation>
  </question>
  <question id="8" topic="Storage" difficulty="Easy">
    <text>Which term refers to a block storage unit presented from SAN to a host?</text>
    <option key="A" correct="false">Share</option>
    <option key="B" correct="false">Namespace</option>
    <option key="C" correct="true">LUN</option>
    <option key="D" correct="false">Bucket</option>
    <explanation>A LUN is a logical unit presented as a block device.</explanation>
  </question>
  <question id="9" topic="Storage" difficulty="Medium">
    <text>In iSCSI, what is the role of the initiator?</text>
    <option key="A" correct="true">The host component that connects to iSCSI targets</option>
    <option key="B" correct="false">The storage array that exports LUNs</option>
    <option key="C" correct="false">A VLAN tagging mechanism</option>
    <option key="D" correct="false">A VM template builder</option>
    <explanation>The initiator runs on the host and connects to an iSCSI target.</explanation>
  </question>
  <question id="10" topic="Storage" difficulty="Medium">
    <text>Which statement about multipathing is correct?</text>
    <option key="A" correct="false">It increases CPU cores available</option>
    <option key="B" correct="false">It encrypts VM memory</option>
    <option key="C" correct="false">It tags Ethernet frames with VLAN IDs</option>
    <option key="D" correct="true">It provides multiple paths to storage for redundancy/performance</option>
    <explanation>Multipathing improves availability and can improve performance.</explanation>
  </question>
  <question id="11" topic="Storage" difficulty="Hard">
    <text>What is a typical prerequisite before migrating a datastore?</text>
    <option key="A" correct="false">Disable all VLANs</option>
    <option key="B" correct="false">Convert all VMs to templates</option>
    <option key="C" correct="true">Ensure destination storage has enough capacity and is accessible to required hosts</option>
    <option key="D" correct="false">Remove vCenter</option>
    <explanation>Datastore migration requires connectivity and capacity on the destination.</explanation>
  </question>
  <question id="12" topic="Storage" difficulty="Medium">
    <text>Which is a benefit of storage deduplication?</text>
    <option key="A" correct="true">Reduces capacity by eliminating redundant blocks</option>
    <option key="B" correct="false">Increases duplicate blocks intentionally</option>
    <option key="C" correct="false">Disables snapshots</option>
    <option key="D" correct="false">Forces thick provisioning</option>
    <explanation>Deduplication saves space by removing duplicate data blocks.</explanation>
  </question>
  <question id="13" topic="Storage" difficulty="Medium">
    <text>Which is a benefit of storage replication?</text>
    <option key="A" correct="false">Prevents any VM power-off</option>
    <option key="B" correct="false">Eliminates need for networking</option>
    <option key="C" correct="true">Supports disaster recovery by copying data to another site/system</option>
    <option key="D" correct="false">Guarantees zero latency</option>
    <explanation>Replication is used for DR and continuity.</explanation>
  </question>
  <question id="14" topic="Storage" difficulty="Easy">
    <text>Which file is most commonly associated with a VM’s virtual disk (generic concept)?</text>
    <option key="A" correct="false">TXT</option>
    <option key="B" correct="false">ISO only</option>
    <option key="C" correct="true">VMDK/VHDX/QCOW2</option>
    <option key="D" correct="false">EXE</option>
    <explanation>Virtual disks are stored as files such as VMDK/VHDX/QCOW2 depending on platform.</explanation>
  </question>
  <question id="15" topic="Storage" difficulty="Hard">
    <text>When using snapshots, what typically happens to new writes?</text>
    <option key="A" correct="false">They overwrite the base disk directly with no metadata</option>
    <option key="B" correct="false">They are discarded until snapshot is deleted</option>
    <option key="C" correct="true">They go to a delta/child disk while base remains unchanged</option>
    <option key="D" correct="false">They bypass the storage subsystem</option>
    <explanation>Snapshots usually redirect writes to a delta disk.</explanation>
  </question>
  <question id="16" topic="Storage" difficulty="Medium">
    <text>What does RAID primarily provide at the storage layer?</text>
    <option key="A" correct="false">CPU virtualization</option>
    <option key="B" correct="true">Data redundancy and/or performance using multiple disks</option>
    <option key="C" correct="false">VLAN segmentation</option>
    <option key="D" correct="false">Hypervisor licensing</option>
    <explanation>RAID combines disks for redundancy/performance.</explanation>
  </question>
  <question id="17" topic="Storage" difficulty="Easy">
    <text>Which is a common file-level sharing protocol?</text>
    <option key="A" correct="false">Fibre Channel</option>
    <option key="B" correct="true">NFS</option>
    <option key="C" correct="false">SAS</option>
    <option key="D" correct="false">NVMe-oF</option>
    <explanation>NFS is a file sharing protocol.</explanation>
  </question>
  <question id="18" topic="Storage" difficulty="Medium">
    <text>What is the key difference between NAS and SAN?</text>
    <option key="A" correct="false">NAS is block; SAN is file</option>
    <option key="B" correct="false">SAN must use Ethernet</option>
    <option key="C" correct="false">NAS cannot be shared</option>
    <option key="D" correct="true">NAS is file-level; SAN is block-level</option>
    <explanation>NAS is file-level and SAN is block-level in general.</explanation>
  </question>
  <question id="19" topic="Storage" difficulty="Hard">
    <text>Which scenario benefits most from an IP SAN design?</text>
    <option key="A" correct="false">A single host with one disk</option>
    <option key="B" correct="false">A system with no NICs</option>
    <option key="C" correct="false">An isolated L2 network without IP</option>
    <option key="D" correct="true">A shared block storage over Ethernet using iSCSI</option>
    <explanation>IP SAN typically refers to iSCSI over Ethernet.</explanation>
  </question>
  <question id="20" topic="Storage" difficulty="Medium">
    <text>What is a common purpose of a cluster filesystem (e.g., VMFS-like) on shared storage?</text>
    <option key="A" correct="false">To tag VLAN frames</option>
    <option key="B" correct="true">To allow multiple hosts to safely access VM files concurrently</option>
    <option key="C" correct="false">To run hypercalls</option>
    <option key="D" correct="false">To allocate CPU shares</option>
    <explanation>Cluster filesystems coordinate concurrent access.</explanation>
  </question>
  <question id="21" topic="Storage" difficulty="Medium">
    <text>Which is a common storage performance metric?</text>
    <option key="A" correct="false">VLAN ID</option>
    <option key="B" correct="true">IOPS</option>
    <option key="C" correct="false">MAC address</option>
    <option key="D" correct="false">MTU</option>
    <explanation>IOPS measures I/O operations per second.</explanation>
  </question>
  <question id="22" topic="Storage" difficulty="Hard">
    <text>Why is write cache policy important in virtualization storage?</text>
    <option key="A" correct="true">It impacts latency, durability, and performance under failure scenarios</option>
    <option key="B" correct="false">It sets DHCP leases</option>
    <option key="C" correct="false">It disables snapshots</option>
    <option key="D" correct="false">It forces trunking</option>
    <explanation>Caching affects performance and data safety.</explanation>
  </question>
  <question id="23" topic="Storage" difficulty="Easy">
    <text>Which storage approach is typically the least scalable for clusters?</text>
    <option key="A" correct="false">SAN</option>
    <option key="B" correct="true">Local-only disks in each host with no sharing</option>
    <option key="C" correct="false">NAS</option>
    <option key="D" correct="false">Distributed storage</option>
    <explanation>Local-only storage limits mobility and cluster features.</explanation>
  </question>
  <question id="24" topic="Storage" difficulty="Medium">
    <text>What is a common reason to separate storage traffic from user VM traffic?</text>
    <option key="A" correct="false">To increase broadcast storms</option>
    <option key="B" correct="false">To avoid jumbo frames</option>
    <option key="C" correct="false">To disable routing</option>
    <option key="D" correct="true">To reduce contention and improve security/performance</option>
    <explanation>Segregation reduces interference and improves security/perf.</explanation>
  </question>
  <question id="25" topic="Storage" difficulty="Hard">
    <text>Which is a potential issue if multiple hosts write to the same LUN without coordination?</text>
    <option key="A" correct="false">Improved consistency always</option>
    <option key="B" correct="false">Automatic dedupe</option>
    <option key="C" correct="false">Lower CPU usage</option>
    <option key="D" correct="true">File system corruption</option>
    <explanation>Concurrent writes without coordination can corrupt data.</explanation>
  </question>
  <question id="26" topic="Network" difficulty="Easy">
    <text>At which OSI layer do VLANs primarily operate?</text>
    <option key="A" correct="false">Layer 3</option>
    <option key="B" correct="true">Layer 2</option>
    <option key="C" correct="false">Layer 4</option>
    <option key="D" correct="false">Layer 7</option>
    <explanation>VLANs are a Layer 2 segmentation mechanism.</explanation>
  </question>
  <question id="27" topic="Network" difficulty="Easy">
    <text>What is the purpose of a trunk link?</text>
    <option key="A" correct="false">Carry one VLAN untagged only</option>
    <option key="B" correct="false">Provide DNS resolution</option>
    <option key="C" correct="false">Disable broadcast traffic entirely</option>
    <option key="D" correct="true">Carry multiple VLANs using tagging</option>
    <explanation>Trunks carry multiple VLANs with tags.</explanation>
  </question>
  <question id="28" topic="Network" difficulty="Easy">
    <text>What is the purpose of an access port?</text>
    <option key="A" correct="false">Carry multiple VLANs tagged</option>
    <option key="B" correct="true">Carry a single VLAN (usually untagged)</option>
    <option key="C" correct="false">Encrypt frames end-to-end</option>
    <option key="D" correct="false">Act as a router</option>
    <explanation>Access ports commonly carry one VLAN.</explanation>
  </question>
  <question id="29" topic="Network" difficulty="Medium">
    <text>Which is a main benefit of VLANs in virtualized environments?</text>
    <option key="A" correct="false">Increase disk capacity</option>
    <option key="B" correct="false">Disable switching</option>
    <option key="C" correct="false">Replace IP addressing</option>
    <option key="D" correct="true">Reduce broadcast domain size and improve isolation</option>
    <explanation>VLANs segment broadcasts and isolate traffic.</explanation>
  </question>
  <question id="30" topic="Network" difficulty="Medium">
    <text>What does NIC teaming/bonding provide?</text>
    <option key="A" correct="false">More RAM</option>
    <option key="B" correct="true">Link redundancy and/or increased throughput</option>
    <option key="C" correct="false">Template conversion</option>
    <option key="D" correct="false">Storage dedupe</option>
    <explanation>Teaming provides resiliency and can aggregate bandwidth.</explanation>
  </question>
  <question id="31" topic="Network" difficulty="Medium">
    <text>What is a distributed vSwitch (DVS) typically used for?</text>
    <option key="A" correct="true">Centralized network configuration across multiple hosts</option>
    <option key="B" correct="false">Local-only switching on one host</option>
    <option key="C" correct="false">Disk snapshotting</option>
    <option key="D" correct="false">CPU pinning</option>
    <explanation>DVS centralizes network policy across hosts.</explanation>
  </question>
  <question id="32" topic="Network" difficulty="Medium">
    <text>Which statement about a standard vSwitch is correct?</text>
    <option key="A" correct="false">It is centrally managed across all hosts by default</option>
    <option key="B" correct="true">It is configured per host</option>
    <option key="C" correct="false">It replaces physical switches</option>
    <option key="D" correct="false">It always requires Fibre Channel</option>
    <explanation>Standard vSwitch configuration is per-host.</explanation>
  </question>
  <question id="33" topic="Network" difficulty="Hard">
    <text>Why is traffic shaping important in multi-tenant virtualization?</text>
    <option key="A" correct="false">It disables VLANs</option>
    <option key="B" correct="false">It increases MAC table size</option>
    <option key="C" correct="true">It enforces bandwidth fairness and limits noisy neighbors</option>
    <option key="D" correct="false">It forces jumbo frames</option>
    <explanation>Shaping enforces rate limits and fairness.</explanation>
  </question>
  <question id="34" topic="Network" difficulty="Easy">
    <text>What does MTU define?</text>
    <option key="A" correct="false">Routing protocol</option>
    <option key="B" correct="false">MAC address format</option>
    <option key="C" correct="true">Maximum Transmission Unit (frame/packet size limit)</option>
    <option key="D" correct="false">Disk block size</option>
    <explanation>MTU is the maximum frame/packet payload size.</explanation>
  </question>
  <question id="35" topic="Network" difficulty="Medium">
    <text>What can jumbo frames help with on storage networks (when supported end-to-end)?</text>
    <option key="A" correct="false">Higher CPU overhead</option>
    <option key="B" correct="false">More VLAN IDs</option>
    <option key="C" correct="true">Reduced protocol overhead and improved throughput</option>
    <option key="D" correct="false">Less IP addressing</option>
    <explanation>Larger frames can reduce overhead.</explanation>
  </question>
  <question id="36" topic="Network" difficulty="Hard">
    <text>Which is a common risk if trunking/VLAN configuration is inconsistent?</text>
    <option key="A" correct="false">Guaranteed isolation</option>
    <option key="B" correct="true">VLAN leakage/misrouting or loss of connectivity</option>
    <option key="C" correct="false">Automatic encryption</option>
    <option key="D" correct="false">More CPU cores</option>
    <explanation>Mismatch can cause VLAN issues.</explanation>
  </question>
  <question id="37" topic="Network" difficulty="Medium">
    <text>What is the role of a port group in many hypervisors?</text>
    <option key="A" correct="false">A storage array cache</option>
    <option key="B" correct="false">A disk partition table</option>
    <option key="C" correct="false">A CPU scheduler class</option>
    <option key="D" correct="true">A set of shared network policies for VM/host ports</option>
    <explanation>Port groups apply policies/VLANs to ports.</explanation>
  </question>
  <question id="38" topic="Network" difficulty="Medium">
    <text>What is a common reason to use separate networks for management traffic?</text>
    <option key="A" correct="false">Increase broadcast storms</option>
    <option key="B" correct="false">Disable routing</option>
    <option key="C" correct="true">Security and operational isolation</option>
    <option key="D" correct="false">Force DHCP</option>
    <explanation>Management isolation improves security/reliability.</explanation>
  </question>
  <question id="39" topic="Network" difficulty="Easy">
    <text>Which device forwards frames based on MAC addresses?</text>
    <option key="A" correct="false">Load balancer only</option>
    <option key="B" correct="false">Router</option>
    <option key="C" correct="false">Firewall only</option>
    <option key="D" correct="true">Switch</option>
    <explanation>Switches forward at Layer 2 using MAC.</explanation>
  </question>
  <question id="40" topic="Network" difficulty="Medium">
    <text>In virtualization, what is promiscuous mode related to?</text>
    <option key="A" correct="true">Allowing a vNIC to receive all traffic on a segment</option>
    <option key="B" correct="false">Disk encryption</option>
    <option key="C" correct="false">CPU overcommit</option>
    <option key="D" correct="false">Storage thin provisioning</option>
    <explanation>Promiscuous mode affects traffic visibility.</explanation>
  </question>
  <question id="41" topic="Network" difficulty="Hard">
    <text>What does network I/O control (or shares) help achieve?</text>
    <option key="A" correct="false">Controls VM disk type</option>
    <option key="B" correct="true">Prioritizes and allocates bandwidth among traffic types</option>
    <option key="C" correct="false">Disables VLAN tags</option>
    <option key="D" correct="false">Adds more NICs</option>
    <explanation>I/O control allocates bandwidth by policy.</explanation>
  </question>
  <question id="42" topic="Network" difficulty="Medium">
    <text>Which is commonly required for live migration networks?</text>
    <option key="A" correct="true">Sufficient bandwidth and low latency</option>
    <option key="B" correct="false">Same DNS zone only</option>
    <option key="C" correct="false">Fibre Channel zoning</option>
    <option key="D" correct="false">No IP connectivity</option>
    <explanation>Migration needs adequate bandwidth/latency.</explanation>
  </question>
  <question id="43" topic="Network" difficulty="Easy">
    <text>What is the main function of a router?</text>
    <option key="A" correct="false">Switch frames within a VLAN</option>
    <option key="B" correct="true">Forward packets between networks (Layer 3)</option>
    <option key="C" correct="false">Allocate disk blocks</option>
    <option key="D" correct="false">Convert templates</option>
    <explanation>Routers forward packets at Layer 3.</explanation>
  </question>
  <question id="44" topic="Network" difficulty="Hard">
    <text>What can cause broadcast storms in Layer 2 networks?</text>
    <option key="A" correct="false">Too many routers</option>
    <option key="B" correct="true">Switching loops without STP</option>
    <option key="C" correct="false">iSCSI multipathing</option>
    <option key="D" correct="false">Template cloning</option>
    <explanation>Loops can amplify broadcasts.</explanation>
  </question>
  <question id="45" topic="Network" difficulty="Medium">
    <text>Which statement is correct about VLAN tagging?</text>
    <option key="A" correct="true">802.1Q inserts a VLAN ID in Ethernet frames</option>
    <option key="B" correct="false">Tags are added at Layer 7</option>
    <option key="C" correct="false">Tags replace MAC addresses</option>
    <option key="D" correct="false">Tags are only for Fibre Channel</option>
    <explanation>802.1Q adds VLAN info into Ethernet frames.</explanation>
  </question>
  <question id="46" topic="Network" difficulty="Easy">
    <text>Which protocol is commonly used to obtain IP addresses dynamically?</text>
    <option key="A" correct="false">ICMP</option>
    <option key="B" correct="false">ARP</option>
    <option key="C" correct="true">DHCP</option>
    <option key="D" correct="false">STP</option>
    <explanation>DHCP provides dynamic IP configuration.</explanation>
  </question>
  <question id="47" topic="Network" difficulty="Medium">
    <text>What is a common design goal for IP SAN networks?</text>
    <option key="A" correct="false">Share with guest traffic always</option>
    <option key="B" correct="false">Disable switching</option>
    <option key="C" correct="true">Dedicated VLAN/subnet and adequate throughput</option>
    <option key="D" correct="false">Use only Wi‑Fi</option>
    <explanation>IP SAN often uses dedicated networks.</explanation>
  </question>
  <question id="48" topic="Network" difficulty="Hard">
    <text>Why separate live migration traffic onto its own network?</text>
    <option key="A" correct="false">To increase packet loss</option>
    <option key="B" correct="false">To remove VLAN tagging</option>
    <option key="C" correct="true">To avoid contention with VM traffic and improve reliability</option>
    <option key="D" correct="false">To force routing through WAN</option>
    <explanation>Dedicated migration networks reduce contention.</explanation>
  </question>
  <question id="49" topic="Network" difficulty="Medium">
    <text>What is the role of a physical uplink (pNIC) in a host?</text>
    <option key="A" correct="true">Connects virtual switch to the physical network</option>
    <option key="B" correct="false">Acts as VM disk</option>
    <option key="C" correct="false">Provides CPU virtualization</option>
    <option key="D" correct="false">Creates templates</option>
    <explanation>Uplinks connect vSwitch to physical network.</explanation>
  </question>
  <question id="50" topic="Network" difficulty="Hard">
    <text>Which is a security reason to segment management networks?</text>
    <option key="A" correct="false">Expose management to everyone</option>
    <option key="B" correct="true">Limit access and reduce attack surface</option>
    <option key="C" correct="false">Disable authentication</option>
    <option key="D" correct="false">Increase broadcast traffic</option>
    <explanation>Segmentation reduces attack surface.</explanation>
  </question>
  <question id="51" topic="VMs" difficulty="Easy">
    <text>What is a VM template primarily used for?</text>
    <option key="A" correct="false">Upgrading CPU microcode</option>
    <option key="B" correct="false">Replacing storage arrays</option>
    <option key="C" correct="false">Creating VLANs</option>
    <option key="D" correct="true">Rapid, consistent deployment of new VMs</option>
    <explanation>Templates allow fast, consistent VM provisioning.</explanation>
  </question>
  <question id="52" topic="VMs" difficulty="Medium">
    <text>Which is a typical method to create a VM template?</text>
    <option key="A" correct="false">Disable the hypervisor</option>
    <option key="B" correct="true">Convert a configured VM into a template</option>
    <option key="C" correct="false">Turn a VLAN into a template</option>
    <option key="D" correct="false">Format a datastore</option>
    <explanation>You can convert a prepared VM into a template.</explanation>
  </question>
  <question id="53" topic="VMs" difficulty="Medium">
    <text>What is a clone in virtualization?</text>
    <option key="A" correct="true">A copy of a VM (full or linked depending on platform)</option>
    <option key="B" correct="false">A VLAN trunk</option>
    <option key="C" correct="false">A storage LUN</option>
    <option key="D" correct="false">A hypercall</option>
    <explanation>Cloning duplicates a VM's configuration (and optionally disks).</explanation>
  </question>
  <question id="54" topic="VMs" difficulty="Medium">
    <text>What is a snapshot used for?</text>
    <option key="A" correct="false">Increasing CPU cores</option>
    <option key="B" correct="false">Permanent replacement of backups</option>
    <option key="C" correct="true">Point-in-time capture to rollback VM state</option>
    <option key="D" correct="false">Switching VLAN IDs</option>
    <explanation>Snapshots capture VM state for rollback/testing.</explanation>
  </question>
  <question id="55" topic="VMs" difficulty="Hard">
    <text>Why are snapshots not a substitute for backups?</text>
    <option key="A" correct="true">They rely on the same storage and are operational, not durable backups</option>
    <option key="B" correct="false">They are always offsite</option>
    <option key="C" correct="false">They encrypt data automatically</option>
    <option key="D" correct="false">They reduce disk usage to zero</option>
    <explanation>Snapshots are not independent durable copies like backups.</explanation>
  </question>
  <question id="56" topic="VMs" difficulty="Easy">
    <text>What are VMware Tools / Guest Additions conceptually?</text>
    <option key="A" correct="false">A physical NIC</option>
    <option key="B" correct="true">Guest utilities/drivers improving integration and performance</option>
    <option key="C" correct="false">A storage protocol</option>
    <option key="D" correct="false">A router</option>
    <explanation>Guest tools provide drivers and integration features.</explanation>
  </question>
  <question id="57" topic="VMs" difficulty="Medium">
    <text>Which feature of VM tools often improves user interaction?</text>
    <option key="A" correct="false">Better time sync only</option>
    <option key="B" correct="false">Disk replication</option>
    <option key="C" correct="true">Enhanced drivers and pointer integration</option>
    <option key="D" correct="false">VLAN tagging</option>
    <explanation>Guest tools add improved display/mouse integration.</explanation>
  </question>
  <question id="58" topic="VMs" difficulty="Medium">
    <text>Which is a typical advanced function provided by guest tools?</text>
    <option key="A" correct="false">Automatic storage zoning</option>
    <option key="B" correct="false">Changing VLAN trunk config</option>
    <option key="C" correct="true">Time synchronization and graceful shutdown</option>
    <option key="D" correct="false">Replacing hypervisor</option>
    <explanation>Tools provide time sync, quiescing, and clean shutdowns.</explanation>
  </question>
  <question id="59" topic="VMs" difficulty="Hard">
    <text>What is paravirtualization (PV) primarily about?</text>
    <option key="A" correct="true">Guest aware of virtualization and using optimized interfaces</option>
    <option key="B" correct="false">Running without any hypervisor</option>
    <option key="C" correct="false">Only emulating old hardware</option>
    <option key="D" correct="false">Forcing thick provisioning</option>
    <explanation>PV uses guest–hypervisor cooperation for performance.</explanation>
  </question>
  <question id="60" topic="VMs" difficulty="Medium">
    <text>What is overcommitment?</text>
    <option key="A" correct="false">Assigning one VM per host only</option>
    <option key="B" correct="false">Disabling CPU scheduling</option>
    <option key="C" correct="true">Allocating more virtual resources than physically available</option>
    <option key="D" correct="false">Duplicating VLAN IDs</option>
    <explanation>Overcommit allocates more vCPU/vRAM than physical resources.</explanation>
  </question>
  <question id="61" topic="VMs" difficulty="Hard">
    <text>What is a common risk of CPU overcommitment?</text>
    <option key="A" correct="true">Higher latency/CPU ready time under contention</option>
    <option key="B" correct="false">Guaranteed higher performance</option>
    <option key="C" correct="false">Eliminates need for RAM</option>
    <option key="D" correct="false">Prevents migration</option>
    <explanation>Contention increases wait times and latency.</explanation>
  </question>
  <question id="62" topic="VMs" difficulty="Medium">
    <text>Ballooning is primarily related to:</text>
    <option key="A" correct="true">Memory reclamation technique via guest driver</option>
    <option key="B" correct="false">Storage dedupe</option>
    <option key="C" correct="false">VLAN tagging</option>
    <option key="D" correct="false">NIC teaming</option>
    <explanation>Balloon drivers reclaim memory from guests under pressure.</explanation>
  </question>
  <question id="63" topic="VMs" difficulty="Easy">
    <text>What is the role of a hypervisor?</text>
    <option key="A" correct="true">Manage and run virtual machines by abstracting hardware</option>
    <option key="B" correct="false">Act as a physical switch</option>
    <option key="C" correct="false">Provide only file storage</option>
    <option key="D" correct="false">Replace DNS</option>
    <explanation>Hypervisors abstract hardware and run VMs.</explanation>
  </question>
  <question id="64" topic="VMs" difficulty="Medium">
    <text>Which is a benefit of templates in enterprise environments?</text>
    <option key="A" correct="false">Inconsistent builds</option>
    <option key="B" correct="false">Higher broadcast traffic</option>
    <option key="C" correct="true">Standardization and faster provisioning</option>
    <option key="D" correct="false">More disk fragmentation</option>
    <explanation>Templates standardize provisioning.</explanation>
  </question>
  <question id="65" topic="VMs" difficulty="Hard">
    <text>Why use linked clones (when available)?</text>
    <option key="A" correct="false">Use more storage than full clones</option>
    <option key="B" correct="false">Increase VLAN capacity</option>
    <option key="C" correct="false">Disable snapshots</option>
    <option key="D" correct="true">Save space by sharing a base disk</option>
    <explanation>Linked clones share base images to save space.</explanation>
  </question>
  <question id="66" topic="VMs" difficulty="Medium">
    <text>VM hardware version typically controls:</text>
    <option key="A" correct="true">Virtual device features available to the VM</option>
    <option key="B" correct="false">Guest OS licensing</option>
    <option key="C" correct="false">VLAN trunk capability on switches</option>
    <option key="D" correct="false">Disk array cache</option>
    <explanation>Hardware version defines virtual device feature set.</explanation>
  </question>
  <question id="67" topic="VMs" difficulty="Hard">
    <text>VM isolation mainly means:</text>
    <option key="A" correct="false">All VMs share the same kernel always</option>
    <option key="B" correct="false">Disabling NICs</option>
    <option key="C" correct="false">Forcing shared root passwords</option>
    <option key="D" correct="true">Separating workloads so one VM can't directly interfere with another</option>
    <explanation>Isolation is a key benefit of virtualization.</explanation>
  </question>
  <question id="68" topic="VMs" difficulty="Easy">
    <text>“Guest OS” refers to:</text>
    <option key="A" correct="false">The hypervisor</option>
    <option key="B" correct="true">The operating system running inside the virtual machine</option>
    <option key="C" correct="false">The physical host BIOS</option>
    <option key="D" correct="false">A datastore</option>
    <explanation>Guest OS runs inside the VM.</explanation>
  </question>
  <question id="69" topic="VMs" difficulty="Medium">
    <text>In virtualization, a “host” is:</text>
    <option key="A" correct="false">A VM template</option>
    <option key="B" correct="false">A snapshot</option>
    <option key="C" correct="false">A VLAN ID</option>
    <option key="D" correct="true">The physical machine running the hypervisor</option>
    <explanation>The host is the physical server running the hypervisor.</explanation>
  </question>
  <question id="70" topic="VMs" difficulty="Hard">
    <text>Cold migration typically requires:</text>
    <option key="A" correct="true">VM must be powered off</option>
    <option key="B" correct="false">VM must be in snapshot state only</option>
    <option key="C" correct="false">VM must be encrypted</option>
    <option key="D" correct="false">No network required</option>
    <explanation>Cold migration usually needs the VM powered off.</explanation>
  </question>
  <question id="71" topic="VMs" difficulty="Medium">
    <text>Templates vs snapshots: which is correct?</text>
    <option key="A" correct="true">Templates are for provisioning; snapshots are for rollback/testing</option>
    <option key="B" correct="false">Templates are for rollback; snapshots are for provisioning</option>
    <option key="C" correct="false">Both are identical</option>
    <option key="D" correct="false">Neither stores disks</option>
    <explanation>Templates provision; snapshots rollback.</explanation>
  </question>
  <question id="72" topic="VMs" difficulty="Hard">
    <text>Quiescing during snapshot creation attempts to:</text>
    <option key="A" correct="false">Increase CPU usage</option>
    <option key="B" correct="false">Change VLAN tags</option>
    <option key="C" correct="false">Disable storage</option>
    <option key="D" correct="true">Flush in-guest I/O to improve snapshot consistency</option>
    <explanation>Quiescing flushes writes for consistency.</explanation>
  </question>
  <question id="73" topic="VMs" difficulty="Medium">
    <text>Resource pools/shares are used to:</text>
    <option key="A" correct="false">Create VLAN trunks</option>
    <option key="B" correct="false">Format datastores</option>
    <option key="C" correct="true">Prioritize and control resource allocation among VMs</option>
    <option key="D" correct="false">Disable scheduling</option>
    <explanation>Shares/pools control allocation during contention.</explanation>
  </question>
  <question id="74" topic="VMs" difficulty="Easy">
    <text>A VM “vNIC” represents:</text>
    <option key="A" correct="false">A hypercall</option>
    <option key="B" correct="false">A virtual disk</option>
    <option key="C" correct="false">A datastore</option>
    <option key="D" correct="true">A virtual network interface card</option>
    <explanation>vNIC is a virtual NIC attached to a VM.</explanation>
  </question>
  <question id="75" topic="VMs" difficulty="Hard">
    <text>Before converting a VM to a template, a best practice is to:</text>
    <option key="A" correct="false">Leave unique IDs unchanged</option>
    <option key="B" correct="false">Disable networking permanently</option>
    <option key="C" correct="true">Generalize/clean the system (sysprep/cloud-init)</option>
    <option key="D" correct="false">Remove virtual disk</option>
    <explanation>Generalization removes unique identifiers for cloning.</explanation>
  </question>
  <question id="76" topic="KVM/Xen" difficulty="Easy">
    <text>What is KVM?</text>
    <option key="A" correct="false">A storage array</option>
    <option key="B" correct="false">A VLAN trunk protocol</option>
    <option key="C" correct="false">A SAN filesystem</option>
    <option key="D" correct="true">A Linux kernel module that enables virtualization</option>
    <explanation>KVM is kernel-based virtualization in Linux.</explanation>
  </question>
  <question id="77" topic="KVM/Xen" difficulty="Medium">
    <text>What is the role of QEMU in KVM-based virtualization?</text>
    <option key="A" correct="false">Allocates VLAN IDs</option>
    <option key="B" correct="true">Provides device emulation and userspace VM process</option>
    <option key="C" correct="false">Manages Fibre Channel zoning</option>
    <option key="D" correct="false">Replaces the guest OS</option>
    <explanation>QEMU provides userspace emulation/VM process, often accelerated by KVM.</explanation>
  </question>
  <question id="78" topic="KVM/Xen" difficulty="Medium">
    <text>Which statement about Xen Dom0 is correct?</text>
    <option key="A" correct="false">It is always an unprivileged guest</option>
    <option key="B" correct="false">It is a VLAN port group</option>
    <option key="C" correct="true">It is the privileged management domain</option>
    <option key="D" correct="false">It is a SAN LUN</option>
    <explanation>Dom0 is the privileged domain managing hardware and guests.</explanation>
  </question>
  <question id="79" topic="KVM/Xen" difficulty="Medium">
    <text>In Xen terminology, what is DomU?</text>
    <option key="A" correct="false">The management domain</option>
    <option key="B" correct="false">A storage target</option>
    <option key="C" correct="false">A virtual switch</option>
    <option key="D" correct="true">An unprivileged guest domain (a VM)</option>
    <explanation>DomU refers to guest VMs.</explanation>
  </question>
  <question id="80" topic="KVM/Xen" difficulty="Hard">
    <text>What is the Xen control API used for?</text>
    <option key="A" correct="false">Formatting disks</option>
    <option key="B" correct="false">Encrypting storage</option>
    <option key="C" correct="false">Assigning VLAN tags</option>
    <option key="D" correct="true">Managing VM lifecycle operations (create/start/stop/migrate)</option>
    <explanation>Control APIs manage VM lifecycle and configuration.</explanation>
  </question>
  <question id="81" topic="KVM/Xen" difficulty="Hard">
    <text>What is a hypercall in Xen?</text>
    <option key="A" correct="false">A VLAN tag insertion</option>
    <option key="B" correct="false">A storage replication job</option>
    <option key="C" correct="true">A privileged call from guest to hypervisor for services</option>
    <option key="D" correct="false">A template conversion</option>
    <explanation>Hypercalls are guest-to-hypervisor calls.</explanation>
  </question>
  <question id="82" topic="KVM/Xen" difficulty="Medium">
    <text>Why is hardware virtualization support (VT-x/AMD-V) important?</text>
    <option key="A" correct="false">It disables the hypervisor</option>
    <option key="B" correct="true">It accelerates virtualization by supporting privileged instructions efficiently</option>
    <option key="C" correct="false">It increases VLAN count</option>
    <option key="D" correct="false">It replaces storage</option>
    <explanation>CPU extensions improve virtualization performance and capability.</explanation>
  </question>
  <question id="83" topic="KVM/Xen" difficulty="Medium">
    <text>Full virtualization typically means:</text>
    <option key="A" correct="false">Guest must be modified</option>
    <option key="B" correct="true">Guest OS runs without modification using virtualization extensions/emulation</option>
    <option key="C" correct="false">No isolation exists</option>
    <option key="D" correct="false">Only containers</option>
    <explanation>Full virtualization can run unmodified guests.</explanation>
  </question>
  <question id="84" topic="KVM/Xen" difficulty="Hard">
    <text>How does KVM relate to the Linux kernel?</text>
    <option key="A" correct="false">KVM is a userspace-only emulator</option>
    <option key="B" correct="false">KVM is a storage protocol</option>
    <option key="C" correct="false">KVM replaces systemd</option>
    <option key="D" correct="true">KVM is built into the kernel as a module exposing /dev/kvm</option>
    <explanation>KVM is a kernel module exposing virtualization interfaces.</explanation>
  </question>
  <question id="85" topic="KVM/Xen" difficulty="Easy">
    <text>Which component commonly provides a management API for KVM?</text>
    <option key="A" correct="false">802.1Q</option>
    <option key="B" correct="false">STP</option>
    <option key="C" correct="false">NFS</option>
    <option key="D" correct="true">libvirt</option>
    <explanation>libvirt commonly manages KVM.</explanation>
  </question>
  <question id="86" topic="KVM/Xen" difficulty="Medium">
    <text>A typical benefit of paravirtual drivers in KVM (virtio) is:</text>
    <option key="A" correct="true">Improved I/O performance with optimized device interfaces</option>
    <option key="B" correct="false">Worse performance</option>
    <option key="C" correct="false">Disables networking</option>
    <option key="D" correct="false">Forces thick provisioning</option>
    <explanation>Virtio provides efficient paravirtualized devices.</explanation>
  </question>
  <question id="87" topic="KVM/Xen" difficulty="Hard">
    <text>The primary role of a hypervisor scheduler is to:</text>
    <option key="A" correct="false">Create templates</option>
    <option key="B" correct="false">Allocate VLAN IDs</option>
    <option key="C" correct="true">Allocate CPU time among VMs</option>
    <option key="D" correct="false">Format datastores</option>
    <explanation>Schedulers allocate CPU across VMs.</explanation>
  </question>
  <question id="88" topic="KVM/Xen" difficulty="Medium">
    <text>Type-1 vs Type-2 hypervisors: which is correct?</text>
    <option key="A" correct="false">Type-2 is always faster</option>
    <option key="B" correct="false">Type-1 requires Windows only; Type-2 requires Linux only</option>
    <option key="C" correct="false">They are identical</option>
    <option key="D" correct="true">Type-1 runs on bare metal; Type-2 runs on top of a host OS</option>
    <explanation>Type-1 is bare-metal; Type-2 runs on a host OS.</explanation>
  </question>
  <question id="89" topic="KVM/Xen" difficulty="Hard">
    <text>In many KVM setups, a bridge/tap interface is used to:</text>
    <option key="A" correct="true">Connect VMs to the host network/switching fabric</option>
    <option key="B" correct="false">Store VM snapshots</option>
    <option key="C" correct="false">Encrypt LUNs</option>
    <option key="D" correct="false">Replace Dom0</option>
    <explanation>Bridges/taps connect VM networking to host networking.</explanation>
  </question>
  <question id="90" topic="KVM/Xen" difficulty="Medium">
    <text>Historically, Xen PV was useful because it:</text>
    <option key="A" correct="false">Ran unmodified guests without extensions</option>
    <option key="B" correct="false">Replaced TCP/IP</option>
    <option key="C" correct="true">Improved performance when hardware extensions were limited</option>
    <option key="D" correct="false">Eliminated storage</option>
    <explanation>PV improved performance and enabled virtualization before widespread VT-x/AMD-V.</explanation>
  </question>
  <question id="91" topic="KVM/Xen" difficulty="Easy">
    <text>Which component often emulates legacy devices when needed?</text>
    <option key="A" correct="false">NFS daemon</option>
    <option key="B" correct="false">DHCP server</option>
    <option key="C" correct="false">VLAN trunk</option>
    <option key="D" correct="true">QEMU</option>
    <explanation>Emulation is commonly provided by QEMU.</explanation>
  </question>
  <question id="92" topic="KVM/Xen" difficulty="Hard">
    <text>A security advantage of separate VMs is:</text>
    <option key="A" correct="true">Fault and security isolation boundaries</option>
    <option key="B" correct="false">Shared kernel vulnerabilities always</option>
    <option key="C" correct="false">Eliminates updates</option>
    <option key="D" correct="false">Disables network segmentation</option>
    <explanation>VM boundaries improve isolation (with caveats).</explanation>
  </question>
  <question id="93" topic="KVM/Xen" difficulty="Medium">
    <text>Live migration primarily moves:</text>
    <option key="A" correct="true">Running VM state (memory/CPU state) to another host with minimal downtime</option>
    <option key="B" correct="false">Only the VM disk format</option>
    <option key="C" correct="false">Only VLAN configuration</option>
    <option key="D" correct="false">Only templates</option>
    <explanation>Live migration moves running state with minimal downtime.</explanation>
  </question>
  <question id="94" topic="KVM/Xen" difficulty="Hard">
    <text>Storage access can be a bottleneck because:</text>
    <option key="A" correct="false">No VM does I/O</option>
    <option key="B" correct="true">Many VMs share the same underlying storage resources</option>
    <option key="C" correct="false">Storage always scales linearly</option>
    <option key="D" correct="false">Hypervisors disable caching</option>
    <explanation>Consolidation increases shared I/O contention.</explanation>
  </question>
  <question id="95" topic="KVM/Xen" difficulty="Medium">
    <text>QEMU without KVM acceleration:</text>
    <option key="A" correct="false">Cannot run VMs</option>
    <option key="B" correct="true">Can run via pure emulation but typically slower</option>
    <option key="C" correct="false">Becomes a router</option>
    <option key="D" correct="false">Becomes Dom0</option>
    <explanation>Pure emulation is slower than hardware acceleration.</explanation>
  </question>
  <question id="96" topic="KVM/Xen" difficulty="Hard">
    <text>Device passthrough (PCI passthrough) allows:</text>
    <option key="A" correct="false">VM shares the same kernel always</option>
    <option key="B" correct="true">VM uses a physical device directly (with IOMMU support)</option>
    <option key="C" correct="false">VM cannot access any device</option>
    <option key="D" correct="false">Forces VLAN trunking</option>
    <explanation>Passthrough allows direct device access using IOMMU.</explanation>
  </question>
  <question id="97" topic="KVM/Xen" difficulty="Medium">
    <text>A common requirement for safe PCI passthrough is:</text>
    <option key="A" correct="false">No IOMMU needed</option>
    <option key="B" correct="false">DomU must be Dom0</option>
    <option key="C" correct="false">NFS only</option>
    <option key="D" correct="true">IOMMU support (VT-d/AMD-Vi) and proper isolation groups</option>
    <explanation>IOMMU is required for DMA isolation.</explanation>
  </question>
  <question id="98" topic="KVM/Xen" difficulty="Easy">
    <text>In many KVM toolchains, VM definitions are stored as:</text>
    <option key="A" correct="true">libvirt XML</option>
    <option key="B" correct="false">STP tables</option>
    <option key="C" correct="false">802.1Q headers</option>
    <option key="D" correct="false">RAID parity</option>
    <explanation>libvirt commonly stores VM definitions in XML.</explanation>
  </question>
  <question id="99" topic="KVM/Xen" difficulty="Hard">
    <text>A reason to prefer Type-1 hypervisors in production is:</text>
    <option key="A" correct="true">Reduced overhead and better isolation by running directly on hardware</option>
    <option key="B" correct="false">They run only on laptops</option>
    <option key="C" correct="false">They require no hardware</option>
    <option key="D" correct="false">They disable VM mobility</option>
    <explanation>Type-1 generally offers better performance/isolation characteristics.</explanation>
  </question>
  <question id="100" topic="KVM/Xen" difficulty="Medium">
    <text>Control plane tools in virtualization typically handle:</text>
    <option key="A" correct="false">Formatting Ethernet frames</option>
    <option key="B" correct="false">Replacing storage arrays</option>
    <option key="C" correct="false">Disabling VLANs</option>
    <option key="D" correct="true">Provisioning, orchestration, and lifecycle management</option>
    <explanation>Control plane tools manage provisioning and operations.</explanation>
  </question>
</quiz>`;
