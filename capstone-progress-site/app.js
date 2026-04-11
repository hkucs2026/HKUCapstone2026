const DATA = {
  project: {
    title: "Capstone Progress",
    subtitle: "Multimodal AI · Household Maintenance",
    name: "A Multimodal AI-Based Mobile Application for Intelligent Household Maintenance Diagnostics and Management",
    description:
      "A multimodal AI-powered iOS application that supports image + text issue reporting, grounded troubleshooting via retrieval-augmented generation (RAG), severity classification with safety disclaimers, and centralized appliance maintenance management.",
    status: "in_progress",
    startDate: "2026-03-11",
    endDate: "2026-07-31",
    school: "The University of Hong Kong",
    programme: "MSc",
    year: "2026",
    advisor: "Dr. CHIM Tat Wing",
    owner: "Capstone Team",
    aim: "Household maintenance in Hong Kong is a persistent challenge, characterized by high repair costs, limited technical knowledge, and a consumer culture that often favors replacement over repair. Furthermore, homeowners typically lack the expertise to assess fault severity independently, making them vulnerable to information asymmetry and exploitative repair practices. This project aims to design and implement a multimodal AI-powered mobile application capable of household issues diagnostics, grounded repair guidance, and centralizing appliance maintenance management.",
    goals: [
      "Develop a vision-language diagnostic module for image understanding",
      "Integrate natural language processing for conversational troubleshooting",
      "Implement a Retrieval-Augmented Generation (RAG) framework grounded in trusted documentation",
      "Design a severity classification mechanism with safety-aware disclaimers",
      "Develop an appliance asset management and maintenance scheduling module",
      "Ensure secure backend architecture and cloud-based deployment",
      "Evaluate system performance",
    ],
    literatureReview: [
      "Vision-language models (VLMs) support image-based fault identification and can interpret equipment images for diagnostics, root-cause analysis, and repair recommendations.",
      "Multimodal generative AI assistants can process multiple modalities (images, manuals, videos, audio) via multimodal retrieval-augmented generation (RAG), improving troubleshooting speed and accuracy.",
      "RAG frameworks reduce hallucinations by grounding answers in trusted manuals and repair documents through semantic retrieval and context injection.",
      "Consumer tools (e.g., repair assistants using computer vision + retrieval over large guide/manual collections) show real-world feasibility, but no unified consumer mobile app integrates VLM + RAG + conversational UI + safety mechanisms + maintenance management in one system.",
    ],
    deliverables: [
      "Working iOS mobile application prototype",
      "Multimodal AI diagnostic backend",
      "RAG knowledge retrieval system",
      "Centralized appliance management module",
      "Evaluation results and performance analysis",
      "Complete technical documentation",
      "Final written dissertation",
    ],
    technology: [
      "iOS frontend: Swift + SwiftUI (Keychain, AVFoundation + Vision framework)",
      "Backend/API: Python + FastAPI (JWT-based authentication)",
      "AI: Vision-Language Model (VLM) + Large Language Model (LLM)",
      "RAG: preprocessing + embeddings + vector database (FAISS for local prototyping / Pinecone for cloud)",
      "Data: PostgreSQL (structured) + vector index (manual embeddings)",
      "Deployment/Security: Docker, HTTPS/TLS, rate limiting",
      "Evaluation: RAGAS (grounding/faithfulness), Precision@5 / Recall@5, latency targets",
    ],
    methodology: [
      "Knowledge base construction and document preprocessing",
      "Backend API and database development (user + appliance management)",
      "RAG pipeline implementation (retrieval + context injection)",
      "AI integration and prompt engineering (structured output + severity classification)",
      "iOS frontend development (camera + conversational UI + dashboards)",
      "Testing, evaluation, and refinement (retrieval quality + grounding + usability)",
    ],
  },
  milestones: [
    {
      id: "m1",
      title: "Milestone 1: Data Collection & Knowledge Base Construction",
      description:
        "Identify and collect trusted data sources (manufacturer manuals, reputable troubleshooting guides). Preprocess and index documents for RAG (metadata design and vectorization). Create project webpage.",
      plannedStart: "2026-03-11",
      plannedEnd: "2026-04-13",
      actualCompletion: "",
      status: "in_progress",
      percentComplete: 70,
      learningHours: 50,
      notes: "",
      blockers: [],
      dependencies: [],
    },
    {
      id: "m2",
      title: "Milestone 2: Backend & AI Integration",
      description:
        "Implement Python backend services (user/appliance management, retrieval endpoints, RAG orchestration). Integrate VLM/LLM APIs for multimodal and text-only queries, plus safety/uncertainty handling.",
      plannedStart: "2026-04-15",
      plannedEnd: "2026-05-04",
      actualCompletion: "",
      status: "not_started",
      percentComplete: 0,
      learningHours: 75,
      notes: "",
      blockers: [],
      dependencies: ["m1"],
    },
    {
      id: "m3",
      title: "Milestone 3: iOS Frontend Development",
      description:
        "Develop core mobile interfaces for image capture, query input, result display, and appliance library management. Implement reminder notifications, basic settings, and data synchronization with the backend.",
      plannedStart: "2026-05-06",
      plannedEnd: "2026-05-30",
      actualCompletion: "",
      status: "not_started",
      percentComplete: 0,
      learningHours: 75,
      notes: "",
      blockers: [],
      dependencies: ["m2"],
    },
    {
      id: "m4",
      title: "Milestone 4: System Refinement & Extended Features",
      description:
        "Polish workflows, improve retrieval quality and prompts, refine error handling and UX. Implement optional features (e.g., repair reports, contractor links) if time permits.",
      plannedStart: "2026-06-02",
      plannedEnd: "2026-06-15",
      actualCompletion: "",
      status: "not_started",
      percentComplete: 0,
      learningHours: 40,
      notes: "",
      blockers: [],
      dependencies: ["m3"],
    },
    {
      id: "m5",
      title: "Milestone 5: Testing, Evaluation & Optimization",
      description:
        "Conduct systematic functional and usability testing with diverse household scenarios. Evaluate performance (latency, accuracy, user satisfaction) and iterate on model configuration and UI design.",
      plannedStart: "2026-06-17",
      plannedEnd: "2026-07-05",
      actualCompletion: "",
      status: "not_started",
      percentComplete: 0,
      learningHours: 30,
      notes: "",
      blockers: [],
      dependencies: ["m4"],
    },
    {
      id: "m6",
      title: "Milestone 6: Documentation, Webpage & Finalization",
      description:
        "Prepare user documentation, technical documentation, and deployment instructions. Finalize demo videos, screenshots, and publish the project webpage (by 2026-07-13). Prepare final project report and oral examination.",
      plannedStart: "2026-07-07",
      plannedEnd: "2026-07-16",
      actualCompletion: "",
      status: "not_started",
      percentComplete: 0,
      learningHours: 30,
      notes: "",
      blockers: [],
      dependencies: ["m5"],
    },
  ],
  keyDates: [
    {
      date: "2026-04-13",
      title: "Preparation for Project Progress Updates 1 (due)",
      type: "deadline",
      description: "Prepare and consolidate Milestone 1 deliverables and progress update materials.",
    },
    { date: "2026-04-14", title: "Project Progress Updates 1", type: "event", description: "Submit / present Progress Update 1." },
    {
      date: "2026-05-04",
      title: "Preparation for Project Progress Updates 2 (due)",
      type: "deadline",
      description: "Prepare and consolidate Milestone 2 progress update materials.",
    },
    { date: "2026-05-05", title: "Project Progress Updates 2", type: "event", description: "Submit / present Progress Update 2." },
    {
      date: "2026-05-30",
      title: "Preparation for Interim Report and Presentation (due)",
      type: "deadline",
      description: "Prepare interim report draft and presentation materials.",
    },
    {
      date: "2026-06-01",
      title: "Interim Report and Presentation",
      type: "event",
      description: "Submit interim report and deliver interim presentation.",
    },
    {
      date: "2026-06-15",
      title: "Preparation for Project Progress Updates 3 (due)",
      type: "deadline",
      description: "Prepare and consolidate Milestone 4 progress update materials.",
    },
    { date: "2026-06-16", title: "Project Progress Updates 3", type: "event", description: "Submit / present Progress Update 3." },
    {
      date: "2026-07-05",
      title: "Preparation for Project Progress Updates 4 (due)",
      type: "deadline",
      description: "Prepare and consolidate Milestone 5 progress update materials.",
    },
    { date: "2026-07-06", title: "Project Progress Updates 4", type: "event", description: "Submit / present Progress Update 4." },
    {
      date: "2026-07-13",
      title: "Publish project webpage (target)",
      type: "milestone",
      description: "Publish the project webpage (target date stated in the proposal).",
    },
    {
      date: "2026-07-17",
      title: "Submission of Final Project Report",
      type: "deadline",
      description: "Submit the final written dissertation / project report.",
    },
    {
      date: "2026-07-28",
      title: "Oral Examination (late July, date TBC)",
      type: "event",
      description: "Oral examination scheduled in late July 2026 (exact date to be confirmed).",
    },
  ],
  updates: [],
  tasks: [],
  team: [
    {
      name: "MOK Yuen Man",
      role: "Student 1 (Leader)",
      email: "",
      bio: "Student ID: 3036383381",
    },
    {
      name: "KWAN Kai Yin",
      role: "Student 2",
      email: "",
      bio: "Student ID: 3036412182",
    },
    {
      name: "LAI Long Wah",
      role: "Student 3",
      email: "",
      bio: "Student ID: 3036383276",
    },
    {
      name: "Dr. CHIM Tat Wing",
      role: "Mentor",
      email: "",
      bio: "",
    },
  ],
  documents: [
    {
      title: "Project Proposal (PDF)",
      description: "CS_Project_Proposal_A Multimodal AI-Based Mobile Application for Intelligent Household Maintenance Diagnostics and Management.pdf",
      url: "../CS_Project_Proposal_A Multimodal AI-Based Mobile Application for Intelligent Household Maintenance Diagnostics and Management.pdf",
    },
  ],
  references: [
    {
      title:
        "Amazon Web Services. (2025). Build a multimodal generative AI assistant for root-cause diagnosis in predictive maintenance using Amazon Bedrock.",
      description:
        "https://aws.amazon.com/blogs/machine-learning/build-a-multimodal-generative-ai-assistant-for-root-cause-diagnosis-in-predictive-maintenance-using-amazon-bedrock/",
      url: "https://aws.amazon.com/blogs/machine-learning/build-a-multimodal-generative-ai-assistant-for-root-cause-diagnosis-in-predictive-maintenance-using-amazon-bedrock/",
    },
    {
      title:
        "Elasticsearch. (2025). Turbocharge your troubleshooting: Building a RAG Application for appliance manuals with Elasticsearch.",
      description: "https://www.elastic.co/search-labs/blog/build-rag-app-elastic",
      url: "https://www.elastic.co/search-labs/blog/build-rag-app-elastic",
    },
    {
      title: "iFixit. (2025, December 9). Introducing FixBot.",
      description: "https://www.ifixit.com/News/114700/introducing-fixbot",
      url: "https://www.ifixit.com/News/114700/introducing-fixbot",
    },
    {
      title:
        "Kumar, A., Singh, B., & Lee, C. (2024). Diagnostics-LLaVA: A visual language model for domain-specific diagnostics of equipment.",
      description: "https://papers.phmsociety.org/index.php/phmconf/article/view/4147",
      url: "https://papers.phmsociety.org/index.php/phmconf/article/view/4147",
    },
  ],
};

const STATUS = {
  not_started: { label: "Not Started", tone: "neutral", dot: "" },
  in_progress: { label: "In Progress", tone: "warn", dot: "warn" },
  completed: { label: "Completed", tone: "good", dot: "good" },
  delayed: { label: "Delayed", tone: "bad", dot: "bad" },
  on_track: { label: "On Track", tone: "good", dot: "good" },
  milestone: { label: "Milestone", tone: "neutral", dot: "" },
  deadline: { label: "Deadline", tone: "warn", dot: "warn" },
  event: { label: "Event", tone: "good", dot: "good" },
  key_date: { label: "Key Date", tone: "neutral", dot: "" },
};

let milestoneSort = { key: "plannedStart", dir: "asc" };
let timelineAutoScrolled = false;
let scheduleSort = { key: "start", dir: "asc" };
let selectedScheduleId = "";
let scheduleContext = { project: null, milestones: [], keyDates: [] };

function $(id) {
  return document.getElementById(id);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function parseDate(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function toISODate(d) {
  return d.toISOString().slice(0, 10);
}

function formatDateISO(iso) {
  const d = parseDate(iso);
  if (!d) return "—";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

function diffDays(a, b) {
  const ms = parseDate(b).getTime() - parseDate(a).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function safeText(value) {
  return value == null || value === "" ? "—" : String(value);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value).replaceAll("\r", "").replaceAll("\n", "&#10;");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)+/g, "")
    .slice(0, 40);
}

function renderExpandableText(id, value, maxChars) {
  const el = $(id);
  if (!el) return;

  const text = safeText(value);
  if (text === "—") {
    el.textContent = "—";
    return;
  }

  const limit = Number.isFinite(maxChars) ? maxChars : 260;
  if (text.length <= limit) {
    el.textContent = text;
    return;
  }

  const short = text.slice(0, limit).trimEnd() + "…";
  el.innerHTML = `<div class="expand-block"><div class="body">${escapeHTML(short)}</div><details class="details"><summary>Read full</summary><div class="details-body body">${escapeHTML(
    text
  )}</div></details></div>`;
}

function statusBadge(status) {
  const meta = STATUS[status] ?? { label: status, tone: "neutral" };
  const cls = meta.tone ? `badge ${meta.tone}` : "badge";
  return `<span class="${cls}">${escapeHTML(meta.label)}</span>`;
}

function statusChip(status) {
  const meta = STATUS[status] ?? { label: status, dot: "" };
  const dotClass = meta.dot ? `status-dot ${meta.dot}` : "status-dot";
  return `<span class="status-chip"><span class="${dotClass}"></span>${escapeHTML(meta.label)}</span>`;
}

function computeOverallCompletion(milestones) {
  if (!milestones.length) return 0;
  const avg = milestones.reduce((sum, m) => sum + clamp(Number(m.percentComplete) || 0, 0, 100), 0) / milestones.length;
  return Math.round(avg);
}

function getCurrentMilestone(milestones) {
  const inProgress = milestones.find((m) => m.status === "in_progress");
  if (inProgress) return inProgress;
  const next = milestones.find((m) => m.status === "not_started" || m.status === "delayed");
  return next ?? null;
}

function getNextDeadline(milestones) {
  const candidates = milestones
    .filter((m) => m.status !== "completed")
    .map((m) => ({ milestone: m, end: parseDate(m.plannedEnd) }))
    .filter((x) => x.end);
  candidates.sort((a, b) => a.end.getTime() - b.end.getTime());
  return candidates[0]?.milestone ?? null;
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function setHTML(id, html) {
  const el = $(id);
  if (el) el.innerHTML = html;
}

function renderHomeContacts(team, advisor) {
  const el = $("homeContacts");
  if (!el) return;

  const mentor =
    team.find((m) => (m.role || "").toLowerCase().includes("mentor")) ??
    team.find((m) => (m.role || "").toLowerCase().includes("supervisor")) ??
    null;

  const leader =
    team.find((m) => (m.role || "").toLowerCase().includes("leader")) ??
    team.find((m) => (m.role || "").toLowerCase().includes("student 1")) ??
    null;

  const items = [];
  if (mentor?.name) items.push({ title: "Mentor", value: mentor.name });
  else if (advisor) items.push({ title: "Mentor", value: advisor });

  const members = team.filter((m) => m !== mentor);
  for (const m of members) {
    const title = m.role ? `${m.name} (${m.role})` : m.name;
    const valueParts = [];
    if (m.bio) valueParts.push(m.bio);
    if (m.email) valueParts.push(m.email);
    items.push({ title, value: valueParts.join(" · ") });
  }

  el.innerHTML =
    `<div class="contact-grid">` +
    items
      .map((x) => {
        const value = x.value ? `<div class="muted mono">${escapeHTML(x.value)}</div>` : "";
        return `<div class="update-card"><div class="card-title">${escapeHTML(x.title)}</div>${value}</div>`;
      })
      .join("") +
    `</div>`;
}

function renderAimObjectives(project) {
  const el = $("aimText");
  if (el) el.textContent = safeText(project.aim);
  setHTML("objectives", (project.goals || []).map((g) => `<li>${escapeHTML(g)}</li>`).join(""));
}

function renderLiterature(project) {
  const el = $("literatureReview");
  if (!el) return;
  const paragraphs = project.literatureReview || [];
  el.innerHTML = paragraphs.map((p) => `<div class="body">${escapeHTML(p)}</div>`).join("");
}

function renderMethodology(project) {
  setHTML("technology", (project.technology || []).map((t) => `<li>${escapeHTML(t)}</li>`).join(""));
  setHTML("methodologyList", (project.methodology || []).map((m) => `<li>${escapeHTML(m)}</li>`).join(""));
}

function renderDeliverables(project) {
  setHTML("deliverables", (project.deliverables || []).map((d) => `<li>${escapeHTML(d)}</li>`).join(""));
}

function renderTeam(team) {
  const html = team
    .map((m) => {
      const email = m.email ? `<div class="muted mono">${escapeHTML(m.email)}</div>` : "";
      const bio = m.bio ? `<p class="body">${escapeHTML(m.bio)}</p>` : "";
      return `<div class="card"><div class="card-title">${escapeHTML(m.name)}</div><div class="muted">${escapeHTML(
        m.role
      )}</div>${email}<div class="divider"></div>${bio}</div>`;
    })
    .join("");
  setHTML("teamGrid", html);
}

function renderDocuments(documents) {
  const html = documents
    .map((d) => {
      const url = d.url ? escapeHTML(d.url) : "";
      const title = escapeHTML(d.title);
      const desc = d.description ? `<p class="body">${escapeHTML(d.description)}</p>` : "";
      const link = url ? `<a class="button-link" href="${url}" target="_blank" rel="noreferrer">Open</a>` : "";
      return `<div class="card"><div class="card-title">${title}</div>${desc}${link}</div>`;
    })
    .join("");
  setHTML("documentsGrid", html);
}

function renderReferences(references) {
  const html = (references || [])
    .map((r) => {
      const url = r.url ? escapeHTML(r.url) : "";
      const title = escapeHTML(r.title);
      const desc = r.description ? `<p class="body">${escapeHTML(r.description)}</p>` : "";
      const link = url ? `<a class="button-link" href="${url}" target="_blank" rel="noreferrer">Open</a>` : "";
      return `<div class="card"><div class="card-title">${title}</div>${desc}${link}</div>`;
    })
    .join("");
  setHTML("referencesGrid", html);
}

function compareMilestones(a, b, key) {
  if (key === "title") return (a.title || "").localeCompare(b.title || "");
  if (key === "plannedStart") return (a.plannedStart || "").localeCompare(b.plannedStart || "");
  if (key === "plannedEnd") return (a.plannedEnd || "").localeCompare(b.plannedEnd || "");
  if (key === "learningHours") return (Number(a.learningHours) || 0) - (Number(b.learningHours) || 0);
  if (key === "status") return (a.status || "").localeCompare(b.status || "");
  return 0;
}

function getSortLabel(key, label) {
  const active = milestoneSort.key === key;
  if (!active) return label;
  return milestoneSort.dir === "asc" ? `${label} ▲` : `${label} ▼`;
}

function compareScheduleItems(a, b, key) {
  if (key === "type") return (a.type || "").localeCompare(b.type || "");
  if (key === "title") return (a.title || "").localeCompare(b.title || "");
  if (key === "start") return (a.start || "").localeCompare(b.start || "");
  if (key === "end") return (a.end || "").localeCompare(b.end || "");
  if (key === "hours") return (Number(a.hours) || 0) - (Number(b.hours) || 0);
  if (key === "status") return (a.status || "").localeCompare(b.status || "");
  return 0;
}

function getScheduleSortLabel(key, label) {
  const active = scheduleSort.key === key;
  if (!active) return label;
  return scheduleSort.dir === "asc" ? `${label} ▲` : `${label} ▼`;
}

function buildScheduleItems(milestones, keyDates) {
  const items = [];
  for (const m of milestones || []) {
    items.push({
      id: `m:${m.id || slugify(m.title)}`,
      type: "milestone",
      title: m.title || "—",
      start: m.plannedStart || "",
      end: m.plannedEnd || "",
      hours: Number.isFinite(m.learningHours) ? m.learningHours : "",
      status: m.status || "not_started",
      detailsTitle: m.title || "Milestone",
      detailsBody: [
        m.title || "Milestone",
        `Start: ${formatDateISO(m.plannedStart)}`,
        `End: ${formatDateISO(m.plannedEnd)}`,
        `Hours: ${Number.isFinite(m.learningHours) ? m.learningHours : "—"}`,
        `Status: ${m.status || "—"}`,
        "",
        m.description || "",
      ]
        .filter(Boolean)
        .join("\n"),
      hasDetails: Boolean(m.description),
    });
  }

  for (const k of keyDates || []) {
    if (!k?.date) continue;
    const kind = (k.type || "event").toLowerCase();
    items.push({
      id: `k:${k.date}:${slugify(k.title)}`,
      type: "key date",
      title: k.title || "—",
      start: k.date,
      end: k.date,
      hours: "",
      status: kind === "deadline" ? "deadline" : kind === "milestone" ? "milestone" : "event",
      detailsTitle: k.title || "Key Date",
      detailsBody: `${k.title || "—"}\nDate: ${formatDateISO(k.date)}\nType: ${k.type || "—"}${
        k.description ? `\n\n${k.description}` : ""
      }`,
      hasDetails: true,
    });
  }
  return items;
}

function assignKeyDateToMilestoneId(dateISO, milestones) {
  const d = parseDate(dateISO);
  if (!d) return "";

  let bestId = "";
  let bestScore = Number.POSITIVE_INFINITY;

  for (const m of milestones || []) {
    const s = parseDate(m.plannedStart);
    const e = parseDate(m.plannedEnd);
    if (!s || !e) continue;

    const inRange = d.getTime() >= s.getTime() && d.getTime() <= e.getTime();
    if (inRange) return m.id || "";

    const score = Math.min(Math.abs(d.getTime() - s.getTime()), Math.abs(d.getTime() - e.getTime()));
    if (score < bestScore) {
      bestScore = score;
      bestId = m.id || "";
    }
  }

  return bestId;
}

function setSelectedScheduleItem(id, options) {
  const nextId = id || "";
  selectedScheduleId = nextId;

  renderScheduleTable(scheduleContext.milestones, scheduleContext.keyDates);

  const scrollTable = options?.scrollTable !== false;
  if (scrollTable && nextId) {
    const row = document.querySelector(`#scheduleTable tr[data-item-id="${CSS.escape(nextId)}"]`);
    row?.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}

function getSchedulePlan(project, milestones, keyDates) {
  const findKey = (predicate) => (keyDates || []).find(predicate) || null;
  const keyId = (k) => (k?.date ? `k:${k.date}:${slugify(k.title)}` : "");

  const byMilestoneId = new Map((milestones || []).map((m) => [m.id, m]));
  const m = (id) => byMilestoneId.get(id) || null;
  const mId = (id) => `m:${id}`;

  const kPpu1 = findKey((k) => k?.date === "2026-04-14" && (k.title || "").includes("Progress Updates 1"));
  const kPpu2 = findKey((k) => k?.date === "2026-05-05" && (k.title || "").includes("Progress Updates 2"));
  const kInterim = findKey((k) => k?.date === "2026-06-01" && (k.title || "").includes("Interim Report"));
  const kPpu3 = findKey((k) => k?.date === "2026-06-16" && (k.title || "").includes("Progress Updates 3"));
  const kPpu4 = findKey((k) => k?.date === "2026-07-06" && (k.title || "").includes("Progress Updates 4"));
  const kFinal = findKey((k) => k?.date === "2026-07-17" && (k.title || "").includes("Final Project Report"));
  const kOral = findKey((k) => (k.title || "").toLowerCase().includes("oral examination"));

  const detailsByTask = {
    m1: [
      "ò Identify and collect trusted data sources: manufacturer manuals, reputable troubleshooting guides, curated reference materials.",
      "ò Pre-process and index documents for the RAG module, including metadata design and vectorization.",
      "ò Create project webpage",
      "ò Preparation for Project Progress Updates 1",
    ],
    m2: [
      "ò Implement Python backend services: user/appliance management, retrieval endpoints, RAG orchestration.",
      "ò Integrate VLM/LLM APIs for multimodal and text only queries and implement safety/uncertainty handling strategies",
      "ò Preparation for Project Progress Updates 2",
    ],
    m3: [
      "ò Develop core mobile interfaces for image capture, query input, result display, and appliance library management.",
      "ò Implement reminder notifications, basic settings, and data synchronization with the backend.",
      "ò Preparation for Interim Report and Presentation",
    ],
    m4: [
      "ò Polish key workflows, improve retrieval quality and prompts, and refine error handling and UX.",
      "ò Begin implementing optional features (e.g., repair reports, contractor links) if time permits.",
      "ò Preparation for Project Progress Updates 3",
    ],
    m5: [
      "ò Conduct systematic functional and usability testing with diverse household scenarios.",
      "ò Evaluate performance (latency, accuracy, user satisfaction) and iterate on model configuration and UI design.",
      "ò Preparation for Project Progress Updates 4",
    ],
    m6: [
      "ò Prepare user documentation, technical documentation, and deployment instructions.",
      "ò Finalize demo videos, screenshots, and publish the Project Webpage (by 13 July 2026)",
      "ò Prepare final project report and Oral Examination",
    ],
  };

  const taskLines = (title, lines) => [title, ...(lines || [])].filter(Boolean);

  return [
    {
      itemId: mId("m1"),
      kind: "milestone",
      no: "1",
      title: "Data Collection and Knowledge Base Construction",
      lines: taskLines("Data Collection and Knowledge Base Construction", detailsByTask.m1),
      dateLabel: "13 April 2026",
      dateISO: "2026-04-13",
      hours: "50",
      startISO: m("m1")?.plannedStart || project?.startDate || "",
      endISO: m("m1")?.plannedEnd || "2026-04-13",
    },
    { itemId: keyId(kPpu1), kind: "event", no: "", title: "Project Progress Updates 1", lines: ["Project Progress Updates 1"], dateLabel: "14 April 2026", dateISO: "2026-04-14", hours: "" },
    {
      itemId: mId("m2"),
      kind: "milestone",
      no: "2",
      title: "Backend and AI Integration",
      lines: taskLines("Backend and AI Integration", detailsByTask.m2),
      dateLabel: "4 May 2026",
      dateISO: "2026-05-04",
      hours: "75",
      startISO: m("m2")?.plannedStart || "2026-04-15",
      endISO: m("m2")?.plannedEnd || "2026-05-04",
    },
    { itemId: keyId(kPpu2), kind: "event", no: "", title: "Project Progress Updates 2", lines: ["Project Progress Updates 2"], dateLabel: "5 May 2026", dateISO: "2026-05-05", hours: "" },
    {
      itemId: mId("m3"),
      kind: "milestone",
      no: "3",
      title: "iOS Frontend Development",
      lines: taskLines("iOS Frontend Development", detailsByTask.m3),
      dateLabel: "30 May 2026",
      dateISO: "2026-05-30",
      hours: "75",
      startISO: m("m3")?.plannedStart || "2026-05-06",
      endISO: m("m3")?.plannedEnd || "2026-05-30",
    },
    { itemId: keyId(kInterim), kind: "event", no: "", title: "Interim Report and Presentation", lines: ["Interim Report and Presentation"], dateLabel: "1 June 2026", dateISO: "2026-06-01", hours: "" },
    {
      itemId: mId("m4"),
      kind: "milestone",
      no: "4",
      title: "System Refinement and Extended Features",
      lines: taskLines("System Refinement and Extended Features", detailsByTask.m4),
      dateLabel: "15 June 2026",
      dateISO: "2026-06-15",
      hours: "40",
      startISO: m("m4")?.plannedStart || "2026-06-02",
      endISO: m("m4")?.plannedEnd || "2026-06-15",
    },
    { itemId: keyId(kPpu3), kind: "event", no: "", title: "Project Progress Updates 3", lines: ["Project Progress Updates 3"], dateLabel: "16 June 2026", dateISO: "2026-06-16", hours: "" },
    {
      itemId: mId("m5"),
      kind: "milestone",
      no: "5",
      title: "Testing, Evaluation, and Optimization",
      lines: taskLines("Testing, Evaluation, and Optimization", detailsByTask.m5),
      dateLabel: "5 July 2026",
      dateISO: "2026-07-05",
      hours: "30",
      startISO: m("m5")?.plannedStart || "2026-06-17",
      endISO: m("m5")?.plannedEnd || "2026-07-05",
    },
    { itemId: keyId(kPpu4), kind: "event", no: "", title: "Project Progress Updates 4", lines: ["Project Progress Updates 4"], dateLabel: "6 July 2026", dateISO: "2026-07-06", hours: "" },
    {
      itemId: mId("m6"),
      kind: "milestone",
      no: "6",
      title: "Documentation, Webpage, and Finalization",
      lines: taskLines("Documentation, Webpage, and Finalization", detailsByTask.m6),
      dateLabel: "16 July 2026",
      dateISO: "2026-07-16",
      hours: "30",
      startISO: m("m6")?.plannedStart || "2026-07-07",
      endISO: m("m6")?.plannedEnd || "2026-07-16",
    },
    { itemId: keyId(kFinal), kind: "deadline", no: "", title: "Submission of Final Project Report", lines: ["Submission of Final Project Report"], dateLabel: "17 July 2026", dateISO: "2026-07-17", hours: "" },
    { itemId: keyId(kOral), kind: "event", no: "", title: "Oral Examination", lines: ["Oral Examination"], dateLabel: "Late July 2026", dateISO: project?.endDate || "", hours: "" },
    { itemId: "", kind: "total", no: "", title: "", lines: [], dateLabel: "", dateISO: "", hours: "Total: 300" },
  ];
}

function renderScheduleOverview(project, milestones, keyDates) {
  const container = $("scheduleOverview");
  if (!container) return;

  const rows = getSchedulePlan(project, milestones, keyDates).filter((r) => r.kind !== "total");
  const minISO = project?.startDate || rows.map((r) => r.startISO || r.dateISO).filter(Boolean).sort()[0] || "";
  const maxISO = project?.endDate || rows.map((r) => r.endISO || r.dateISO).filter(Boolean).sort().slice(-1)[0] || "";
  const minDate = parseDate(minISO);
  const maxDate = parseDate(maxISO);
  const total = minDate && maxDate ? Math.max(1, diffDays(toISODate(minDate), toISODate(maxDate))) : 1;

  const xPct = (iso) => {
    const d = parseDate(iso);
    if (!d || !minDate) return 0;
    const days = diffDays(toISODate(minDate), toISODate(d));
    return (clamp(days, 0, total) / total) * 100;
  };

  container.innerHTML = rows
    .map((r) => {
      const selected = r.itemId && r.itemId === selectedScheduleId ? " overview-row-selected" : "";
      const meta = [r.dateLabel ? `Due: ${r.dateLabel}` : "", r.hours ? `Hours: ${r.hours}` : ""].filter(Boolean).join(" · ");
      const markerClass = r.kind === "deadline" ? "deadline" : r.kind === "milestone" ? "milestone" : "event";
      const track =
        r.kind === "milestone"
          ? (() => {
              const left = xPct(r.startISO || r.dateISO);
              const right = xPct(r.endISO || r.dateISO);
              const width = Math.max(2, right - left);
              return `<div class="overview-track"><div class="overview-bar" style="left:${left}%; width:${width}%;"></div></div>`;
            })()
          : (() => {
              const at = xPct(r.dateISO || "");
              return `<div class="overview-track"><div class="overview-marker ${markerClass}" style="left:${at}%;"></div></div>`;
            })();

      return `<div class="overview-row${selected}" data-item-id="${escapeAttr(r.itemId)}">
        <div class="overview-no">${escapeHTML(r.no || "")}</div>
        <div class="overview-main">
          <div class="overview-title">${escapeHTML(r.title || "")}</div>
          <div class="overview-meta">${escapeHTML(meta)}</div>
          ${track}
        </div>
      </div>`;
    })
    .join("");

  container.querySelectorAll("[data-item-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-item-id") || "";
      if (!id) return;
      setSelectedScheduleItem(id, { scrollTimeline: false, scrollTable: true });
    });
  });
}

function renderScheduleTable(milestones, keyDates) {
  const project = scheduleContext.project;
  const plan = getSchedulePlan(project, milestones, keyDates);
  const body = plan
    .map((r) => {
      const selected = r.itemId && r.itemId === selectedScheduleId ? " row-selected" : "";
      const className =
        r.kind === "milestone"
          ? `schedule-group schedule-root schedule-milestone-root${selected}`
          : r.kind === "total"
            ? `${selected}`
            : `schedule-child${selected}`;
      const attrs = r.itemId ? ` data-item-id="${escapeAttr(r.itemId)}"` : "";
      const milestoneTitle = escapeHTML(r.title || (r.lines || [])[0] || "—");
      const milestoneDetails = (r.lines || []).slice(1);
      const statusKey = r.kind === "milestone" ? milestones.find((m) => `m:${m.id}` === r.itemId)?.status || "not_started" : r.kind;
      const detailsOpen = r.kind === "milestone" && statusKey === "in_progress" ? " open" : "";
      const detailsHtml = milestoneDetails.length
        ? `<details class="table-details"${detailsOpen}><summary class="tag tag-expand"><span class="tag-expand-label">Details</span><span class="tag-expand-icon" aria-hidden="true"></span></summary><div class="table-details-body"><ul class="table-details-list">${milestoneDetails
            .map((x) => String(x || "").replace(/^ò\s*/u, "").trim())
            .filter(Boolean)
            .map((x) => `<li>${escapeHTML(x)}</li>`)
            .join("")}</ul></div></details>`
        : "";
      const taskHtml = r.kind === "milestone" ? `${milestoneTitle}${detailsHtml}` : escapeHTML(r.title || "");
      const titleCell = r.kind === "milestone" ? taskHtml : `<span class="child-title">${taskHtml}</span>`;
      const statusCell = statusBadge(statusKey);
      return `<tr class="${className}"${attrs}>
        <td class="mono">${escapeHTML(r.no || "")}</td>
        <td>${titleCell}</td>
        <td class="mono">${escapeHTML(r.dateLabel || "")}</td>
        <td class="mono">${escapeHTML(r.hours || "")}</td>
        <td>${statusCell}</td>
      </tr>`;
    })
    .join("");

  setHTML(
    "scheduleTable",
    `<table>
      <thead>
        <tr>
          <th colspan="2">Tasks</th>
          <th>Estimated completion time</th>
          <th>Estimated number of learning hours</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>${body}</tbody>
    </table>`
  );

  const container = $("scheduleTable");
  const table = container?.querySelector("table");
  if (!table) return;
  table.querySelectorAll("tbody tr[data-item-id]").forEach((tr) => {
    tr.onclick = (e) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.closest("details")) return;
      const id = tr.getAttribute("data-item-id") || "";
      if (!id) return;
      setSelectedScheduleItem(id, { scrollTimeline: true, scrollTable: false });
    };
  });
}

function renderUpdates(updates, query, tag) {
  const q = (query || "").trim().toLowerCase();
  const filtered = updates.filter((u) => {
    if (tag && tag !== "all" && !(u.tags || []).includes(tag)) return false;
    if (!q) return true;
    const hay = `${u.title} ${u.week} ${(u.completed || []).join(" ")} ${(u.workingOn || []).join(" ")} ${(u.challenges || []).join(
      " "
    )} ${(u.plans || []).join(" ")} ${(u.tags || []).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });

  const html = filtered
    .map((u) => {
      const tags = (u.tags || []).map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join("");
      const section = (label, items) => {
        if (!items?.length) return "";
        return `<div class="body"><strong>${escapeHTML(label)}:</strong> ${escapeHTML(items.join(" · "))}</div>`;
      };
      return `
        <div class="update-card">
          <div class="update-top">
            <div>
              <div class="card-title">${escapeHTML(u.title)}</div>
              <div class="update-date">${escapeHTML(u.week)} · ${escapeHTML(formatDateISO(u.date))}</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="stack">
            ${section("Completed", u.completed)}
            ${section("Working on", u.workingOn)}
            ${section("Challenges", u.challenges)}
            ${section("Next", u.plans)}
          </div>
          ${tags ? `<div class="tag-row">${tags}</div>` : ""}
        </div>
      `;
    })
    .join("");

  setHTML("updatesList", html || `<div class="muted">No updates match the current filter.</div>`);
}

function renderLatestUpdates(updates, count) {
  const sorted = [...updates].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const html = sorted
    .slice(0, count)
    .map((u) => {
      return `
        <div class="update-card">
          <div class="update-top">
            <div class="card-title">${escapeHTML(u.title)}</div>
            <div class="update-date">${escapeHTML(formatDateISO(u.date))}</div>
          </div>
          <div class="muted">${escapeHTML(u.week || "")}</div>
        </div>
      `;
    })
    .join("");
  setHTML("latestUpdates", html || `<div class="muted">No updates yet.</div>`);
}

function buildTagOptions(updates) {
  const set = new Set();
  for (const u of updates) for (const t of u.tags || []) set.add(t);
  const tags = Array.from(set).sort((a, b) => a.localeCompare(b));
  const el = $("updatesTagFilter");
  if (!el) return;
  el.innerHTML = `<option value="all">All</option>` + tags.map((t) => `<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join("");
}

function buildMilestoneOptions(milestones) {
  const el = $("taskMilestoneFilter");
  if (!el) return;
  const opts = milestones
    .map((m) => `<option value="${escapeHTML(m.id)}">${escapeHTML(m.title)}</option>`)
    .join("");
  el.innerHTML = `<option value="all">All</option>` + opts;
}

function taskMatches(task, statusFilter, milestoneFilter, query) {
  if (statusFilter !== "all" && task.status !== statusFilter) return false;
  if (milestoneFilter !== "all" && task.milestoneId !== milestoneFilter) return false;
  if (!query) return true;
  const q = query.trim().toLowerCase();
  const hay = `${task.title} ${task.owner} ${task.priority} ${task.status}`.toLowerCase();
  return hay.includes(q);
}

function renderTasks(tasks, milestones, statusFilter, milestoneFilter, query) {
  const milestoneMap = new Map(milestones.map((m) => [m.id, m.title]));
  const filtered = tasks.filter((t) => taskMatches(t, statusFilter, milestoneFilter, query));
  const rows = filtered
    .sort((a, b) => (a.dueDate || "").localeCompare(b.dueDate || ""))
    .map((t) => {
      const milestoneTitle = milestoneMap.get(t.milestoneId) ?? t.milestoneId ?? "—";
      const pr = escapeHTML(t.priority || "—");
      const st = escapeHTML(t.status || "—");
      return `<tr>
        <td>${escapeHTML(t.title)}</td>
        <td>${escapeHTML(t.owner || "—")}</td>
        <td class="mono">${pr}</td>
        <td class="mono">${escapeHTML(formatDateISO(t.dueDate))}</td>
        <td>${escapeHTML(milestoneTitle)}</td>
        <td class="mono">${st}</td>
      </tr>`;
    })
    .join("");

  const html = `
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Owner</th>
          <th>Priority</th>
          <th>Due</th>
          <th>Milestone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${rows || `<tr><td colspan="6" class="muted">No tasks match the current filter.</td></tr>`}
      </tbody>
    </table>
  `;
  setHTML("tasksTable", html);
}

function computeTimelineRange(project, milestones) {
  const dates = [];
  const ps = parseDate(project.startDate);
  const pe = parseDate(project.endDate);
  if (ps) dates.push(ps);
  if (pe) dates.push(pe);
  for (const m of milestones) {
    const s = parseDate(m.plannedStart);
    const e = parseDate(m.plannedEnd);
    if (s) dates.push(s);
    if (e) dates.push(e);
  }
  if (!dates.length) return null;
  const min = new Date(Math.min(...dates.map((d) => d.getTime())));
  const max = new Date(Math.max(...dates.map((d) => d.getTime())));
  return { min, max };
}

function renderKeyDates(keyDates) {
  const el = $("keyDatesList");
  if (!el) return;

  const sorted = [...(keyDates || [])]
    .filter((k) => k?.date)
    .sort((a, b) => (a.date || "").localeCompare(b.date || ""));

  if (!sorted.length) {
    el.innerHTML = "";
    return;
  }

  const blocks = [];
  let currentMonth = "";
  for (const k of sorted) {
    const month = (k.date || "").slice(0, 7);
    if (month && month !== currentMonth) {
      currentMonth = month;
      blocks.push(
        `<div class="muted mono" style="padding: 2px 2px;">${escapeHTML(
          new Date(`${month}-01`).toLocaleDateString(undefined, { year: "numeric", month: "long" })
        )}</div>`
      );
    }
    const kind = (k.type || "event").toLowerCase();
    blocks.push(
      `<button type="button" class="key-date" data-title="${escapeAttr(k.title || "Key Date")}" data-body="${escapeAttr(
        `${k.title || "—"}\nDate: ${formatDateISO(k.date)}\nType: ${k.type || "—"}`
      )}">
        <div>
          <div class="key-date-title">${escapeHTML(k.title || "—")}</div>
          <div class="muted mono">${escapeHTML(k.type || "—")}</div>
        </div>
        <div class="key-date-meta mono">${escapeHTML(formatDateISO(k.date))}</div>
      </button>`
    );
  }
  el.innerHTML = blocks.join("");

  el.onclick = (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest(".key-date");
    if (!btn) return;
    const title = btn.getAttribute("data-title") || "Key Date";
    const body = btn.getAttribute("data-body") || "—";
    openModal(title, body);
  };
}

function openModal(title, text) {
  const dialog = $("modal");
  const titleEl = $("modalTitle");
  const bodyEl = $("modalBody");
  const closeBtn = $("modalClose");

  if (titleEl) titleEl.textContent = title || "Details";
  if (bodyEl) bodyEl.innerHTML = formatModalBodyHTML(text);

  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
    closeBtn?.addEventListener("click", () => dialog.close(), { once: true });
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
  } else {
    alert(`${title}\n\n${text}`);
  }
}

function formatModalBodyHTML(text) {
  const raw = safeText(text);
  if (raw === "—") return `<div class="modal-pre">—</div>`;

  const lines = raw.split(/\r?\n/);
  const splitAt = lines.findIndex((l) => l.trim() === "");
  const headLines = (splitAt === -1 ? lines : lines.slice(0, splitAt)).map((l) => l.trimEnd());
  const restLines = (splitAt === -1 ? [] : lines.slice(splitAt + 1)).map((l) => l.trimEnd());

  const kv = [];
  const introLines = [];

  for (const line of headLines) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      const k = line.slice(0, idx).trim();
      const v = line.slice(idx + 1).trim();
      if (k && v) kv.push([k, v]);
      else if (line.trim()) introLines.push(line.trim());
    } else if (line.trim()) {
      introLines.push(line.trim());
    }
  }

  if (!kv.length) {
    return `<div class="modal-pre">${escapeHTML(raw)}</div>`;
  }

  const intro = introLines.join(" ");
  const details = restLines.join("\n").trim();

  const kvHTML =
    `<div class="modal-kv">` +
    kv
      .map(([k, v]) => {
        return `<div class="kv-row"><div class="kv-key">${escapeHTML(k)}</div><div class="kv-val">${escapeHTML(v)}</div></div>`;
      })
      .join("") +
    `</div>`;

  const detailsHTML = details
    ? `<div class="modal-section"><div class="modal-section-title">Details</div><div class="modal-pre">${escapeHTML(
        details
      )}</div></div>`
    : "";

  return `<div class="modal-sections">${intro ? `<div class="modal-intro">${escapeHTML(intro)}</div>` : ""}${kvHTML}${detailsHTML}</div>`;
}

function computeTimelineRangeWithKeyDates(project, milestones, keyDates) {
  const base = computeTimelineRange(project, milestones);
  const dates = [];
  if (base?.min) dates.push(base.min);
  if (base?.max) dates.push(base.max);

  for (const k of keyDates || []) {
    const d = parseDate(k?.date);
    if (d) dates.push(d);
  }

  if (!dates.length) return null;
  const min = new Date(Math.min(...dates.map((d) => d.getTime())));
  const max = new Date(Math.max(...dates.map((d) => d.getTime())));
  return { min, max };
}

function renderInteractiveTimeline(project, milestones, keyDates) {
  const svg = $("timelineSvg");
  if (!svg) return;

  const zoomEl = $("timelineZoom");
  const showMilestonesEl = $("timelineShowMilestones");
  const showKeyDatesEl = $("timelineShowKeyDates");

  const pxPerDay = clamp(Number(zoomEl?.value) || 6, 2, 12);
  const showMilestones = showMilestonesEl?.checked !== false;
  const showKeyDates = showKeyDatesEl?.checked !== false;

  const range = computeTimelineRangeWithKeyDates(project, milestones, keyDates);
  if (!range) {
    svg.innerHTML = "";
    return;
  }

  const start = new Date(range.min.getTime());
  const end = new Date(range.max.getTime());
  start.setDate(start.getDate() - 7);
  end.setDate(end.getDate() + 7);

  const totalDays = Math.max(1, diffDays(toISODate(start), toISODate(end)));
  const leftPad = 24;
  const axisTop = 22;
  const axisHeight = 28;
  const keyLaneHeight = showKeyDates ? 34 : 0;
  const rowHeight = 42;
  const visibleMilestones = showMilestones ? milestones : [];
  const height = axisTop + axisHeight + keyLaneHeight + visibleMilestones.length * rowHeight + 24;
  const width = leftPad + totalDays * pxPerDay + 40;

  const minISO = toISODate(start);

  const xForDate = (iso) => {
    const d = parseDate(iso);
    if (!d) return leftPad;
    const days = diffDays(minISO, toISODate(d));
    return leftPad + clamp(days, 0, totalDays) * pxPerDay;
  };

  const monthTicks = [];
  const tickDate = new Date(start.getFullYear(), start.getMonth(), 1);
  while (tickDate <= end) {
    const iso = toISODate(tickDate);
    const x = xForDate(iso);
    const label = tickDate.toLocaleDateString(undefined, { month: "short", year: "numeric" });
    monthTicks.push({ x, label });
    tickDate.setMonth(tickDate.getMonth() + 1);
  }

  const todayISO = toISODate(new Date());
  const todayX = xForDate(todayISO);

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", `${width}`);
  svg.setAttribute("height", `${height}`);
  svg.style.width = `${width}px`;
  svg.style.height = `${height}px`;

  const lines = [];
  lines.push(`<rect x="0" y="0" width="${width}" height="${height}" fill="transparent" />`);

  for (const t of monthTicks) {
    lines.push(`<line x1="${t.x}" y1="${axisTop}" x2="${t.x}" y2="${height - 12}" stroke="rgba(231, 238, 252, 0.08)" />`);
    lines.push(
      `<text x="${t.x + 6}" y="${axisTop + 14}" fill="rgba(231, 238, 252, 0.72)" font-size="12" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace">${escapeHTML(
        t.label
      )}</text>`
    );
  }

  lines.push(`<line x1="${leftPad}" y1="${axisTop + axisHeight}" x2="${width - 16}" y2="${axisTop + axisHeight}" stroke="rgba(231, 238, 252, 0.12)" />`);

  if (todayISO >= minISO && todayISO <= toISODate(end)) {
    lines.push(`<line x1="${todayX}" y1="${axisTop}" x2="${todayX}" y2="${height - 12}" stroke="rgba(251, 113, 133, 0.55)" />`);
    lines.push(
      `<text x="${todayX + 6}" y="${axisTop + 32}" fill="rgba(251, 113, 133, 0.95)" font-size="12" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace">Today</text>`
    );
  }

  const keyLaneY = axisTop + axisHeight + 12;
  if (showKeyDates) {
    for (const k of keyDates || []) {
      if (!k?.date) continue;
      const x = xForDate(k.date);
      const kind = (k.type || "event").toLowerCase();
      const stroke =
        kind === "deadline"
          ? "rgba(251, 191, 36, 0.95)"
          : kind === "milestone"
            ? "rgba(99, 179, 255, 0.95)"
            : "rgba(45, 212, 191, 0.95)";
      const title = `${k.title || "Key Date"}\nDate: ${formatDateISO(k.date)}\nType: ${k.type || "—"}`;
      const itemId = `k:${k.date}:${slugify(k.title)}`;
      const selected = itemId === selectedScheduleId;
      const strokeWidth = selected ? 2 : 1;
      if (kind === "deadline") {
        const points = `${x},${keyLaneY} ${x + 8},${keyLaneY + 14} ${x - 8},${keyLaneY + 14}`;
        lines.push(
          `<polygon points="${points}" fill="rgba(251, 191, 36, 0.12)" stroke="${stroke}" stroke-width="${strokeWidth}" data-modal-title="${escapeAttr(
            k.title || "Deadline"
          )}" data-modal-body="${escapeAttr(title)}" data-item-id="${escapeAttr(itemId)}"><title>${escapeHTML(title)}</title></polygon>`
        );
      } else if (kind === "milestone") {
        lines.push(
          `<rect x="${x - 7}" y="${keyLaneY + 1}" width="14" height="14" rx="4" fill="rgba(99, 179, 255, 0.10)" stroke="${stroke}" stroke-width="${strokeWidth}" data-modal-title="${escapeAttr(
            k.title || "Milestone"
          )}" data-modal-body="${escapeAttr(title)}" data-item-id="${escapeAttr(itemId)}"><title>${escapeHTML(title)}</title></rect>`
        );
      } else {
        lines.push(
          `<circle cx="${x}" cy="${keyLaneY + 7}" r="6.5" fill="rgba(45, 212, 191, 0.10)" stroke="${stroke}" stroke-width="${strokeWidth}" data-modal-title="${escapeAttr(
            k.title || "Event"
          )}" data-modal-body="${escapeAttr(title)}" data-item-id="${escapeAttr(itemId)}"><title>${escapeHTML(title)}</title></circle>`
        );
      }
    }
  }

  const baseY = axisTop + axisHeight + keyLaneHeight + 10;
  for (let i = 0; i < visibleMilestones.length; i++) {
    const m = visibleMilestones[i];
    const y = baseY + i * rowHeight;
    const x1 = xForDate(m.plannedStart);
    const x2 = xForDate(m.plannedEnd);
    const w = Math.max(4, x2 - x1);
    const status = (m.status || "not_started").toLowerCase();
    const fill =
      status === "completed"
        ? "rgba(45, 212, 191, 0.30)"
        : status === "in_progress"
          ? "rgba(251, 191, 36, 0.28)"
          : status === "delayed"
            ? "rgba(251, 113, 133, 0.28)"
            : "rgba(99, 179, 255, 0.22)";
    const stroke =
      status === "completed"
        ? "rgba(45, 212, 191, 0.72)"
        : status === "in_progress"
          ? "rgba(251, 191, 36, 0.72)"
          : status === "delayed"
            ? "rgba(251, 113, 133, 0.72)"
            : "rgba(99, 179, 255, 0.55)";

    const label = m.title || `Milestone ${i + 1}`;
    const itemId = `m:${m.id || slugify(m.title)}`;
    const selected = itemId === selectedScheduleId;
    const strokeWidth = selected ? 2 : 1;
    const detailLines = [
      label,
      `Start: ${formatDateISO(m.plannedStart)}`,
      `End: ${formatDateISO(m.plannedEnd)}`,
      `Hours: ${Number.isFinite(m.learningHours) ? m.learningHours : "—"}`,
      `Status: ${m.status || "—"}`,
      "",
      m.description || "",
    ]
      .filter(Boolean)
      .join("\n");


    lines.push(
      `<rect x="${x1}" y="${y + 4}" width="${w}" height="18" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" data-modal-title="${escapeAttr(
        label
      )}" data-modal-body="${escapeAttr(detailLines)}" data-item-id="${escapeAttr(itemId)}"><title>${escapeHTML(
        detailLines
      )}</title></rect>`
    );
    lines.push(
      `<text x="${x1 + 8}" y="${y + 18}" fill="rgba(231, 238, 252, 0.92)" font-size="12" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, 'Noto Sans', 'Liberation Sans', sans-serif">${escapeHTML(
        label
      )}</text>`
    );
  }

  svg.innerHTML = lines.join("");

  if (!timelineAutoScrolled) {
    const focus = getNextKeyDate(keyDates)?.date || toISODate(new Date());
    const focusX = xForDate(focus);
    const scroller = svg.closest(".timeline-scroll");
    if (scroller) scroller.scrollLeft = Math.max(0, focusX - 320);
    timelineAutoScrolled = true;
  }

  svg.onclick = (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const el = target.closest("[data-modal-title][data-modal-body]");
    if (!el) return;
    const id = el.getAttribute("data-item-id") || "";
    if (id) setSelectedScheduleItem(id, { scrollTable: true, scrollTimeline: false });
    openModal(el.getAttribute("data-modal-title") || "Details", el.getAttribute("data-modal-body") || "—");
  };
}

function getNextKeyDate(keyDates) {
  const today = toISODate(new Date());
  const sorted = [...(keyDates || [])]
    .filter((k) => k?.date && k.date >= today)
    .sort((a, b) => (a.date || "").localeCompare(b.date || ""));
  return sorted[0] || null;
}

function init() {
  const { project, milestones, keyDates, updates, tasks, team, documents, references } = DATA;
  scheduleContext = { project, milestones, keyDates };

  document.title = project.title || "Capstone Progress";

  setText("projectTitle", project.title);
  setText("projectSubtitle", project.subtitle);
  setText("projectName", project.name);
  setText("projectDescription", project.description);
  setHTML("overallStatusChip", statusChip(project.status));

  const overall = computeOverallCompletion(milestones);
  setText("overallPercent", `${overall}%`);
  const bar = $("overallProgressBar");
  if (bar) bar.style.width = `${overall}%`;

  const current = getCurrentMilestone(milestones);
  setText("currentMilestone", current ? current.title : "—");
  setText(
    "currentMilestoneDates",
    current ? `${formatDateISO(current.plannedStart)} → ${formatDateISO(current.plannedEnd)}` : "—"
  );

  const nextKey = getNextKeyDate(keyDates);
  if (nextKey) {
    setText("nextDeadline", `${nextKey.title}`);
    const today = toISODate(new Date());
    const remaining = diffDays(today, nextKey.date);
    setText("daysRemaining", Number.isFinite(remaining) ? `${remaining} days remaining` : "—");
  } else {
    const next = getNextDeadline(milestones);
    if (next) {
      setText("nextDeadline", `${next.title}`);
      const today = toISODate(new Date());
      const remaining = diffDays(today, next.plannedEnd);
      setText("daysRemaining", Number.isFinite(remaining) ? `${remaining} days remaining` : "—");
    } else {
      setText("nextDeadline", "—");
      setText("daysRemaining", "—");
    }
  }

  setText("milestoneCount", String(milestones.length));
  setText("milestoneCompletedCount", String(milestones.filter((m) => m.status === "completed").length));
  setText("milestoneInProgressCount", String(milestones.filter((m) => m.status === "in_progress").length));
  setText("milestoneDelayedCount", String(milestones.filter((m) => m.status === "delayed").length));

  renderAimObjectives(project);
  renderLiterature(project);
  renderMethodology(project);
  renderScheduleTable(milestones, keyDates);
  renderDeliverables(project);
  renderTeam(team);
  renderDocuments(documents);
  renderReferences(references);

  setText("footerLeft", `${project.school} · ${project.programme} · ${project.year}`);
  setText("footerLeft", "Capstone Progress");
  setText("footerRight", "Multimodal AI · Household Maintenance");

  initDemoFlowControls();
}

function initDemoFlowControls() {
  return;
}

init();
