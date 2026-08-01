const translations = {
  en: {
    profile: {
      name: "Xiuyuan Lu",
      emailIntro: "Email:",
      githubLabel: "GitHub:",
    },
    links: {
      notes: "Notes",
      problems: "Problem set",
      slides: "Slides",
      survey: "Survey",
      plan: "Plan",
      thesis: "Thesis",
      report: "Report",
    },
    nav: {
      general: "General Info",
      research: "Research",
      internship: "Internship",
      academic: "Academic Performance",
      publications: "Publications",
    },
    sections: {
      general: {
        title: "General Info",
        placeholder: "Content coming soon. Add your bio, contact information, and links here.",
      },
      research: {
        title: "Research",
        seminars: {
          title: "Seminars",
          rep: {
            title: "Finite Group Representation Theory",
            tag: "Math",
            desc: "Reading seminar on finite group representation theory. I presented in Week 1 and Week 3.",
            talk1: "Week 1 — G-modules",
            talk2: "Week 3 — Orthogonality relations",
          },
          algo: {
            title: "Frontier AI Algorithms",
            tag: "AI",
            desc: "Seminar on frontier AI algorithms. I presented on reinforcement learning from LLMs to agentic systems.",
            talk1: "From LLM RL to Agentic RL",
          },
        },
        projects: {
          title: "Research Projects",
          sum: {
            title: "Sum–Product Conjecture",
            tag: "Math",
            desc: "Survey of existing results on the sum–product conjecture and their proof frameworks.",
          },
          road: {
            title: "Road Traffic Safety Assessment",
            tag: "Applied",
            meta: "With a faculty mentor at Harvard",
            desc: "Multi-criteria decision analysis (MCDM) for evaluating road traffic safety in the United States.",
          },
          hall: {
            title: "AI Hallucination",
            tag: "AI",
            meta: "MIT Universal Village",
            desc: "Survey work on AI hallucination, with three outcomes covering mitigation, evaluation, and an overall survey.",
            item1: "Mitigation",
            item2: "Evaluation",
            item3: "Overall survey",
          },
          rae: {
            title: "Pixel Diffusion Decoder via RAE",
            tag: "AI",
            meta: "FDUROP Undergraduate Research Grant",
            desc: "High-fidelity image generation with a pixel diffusion decoder based on Representation Autoencoders (RAE). Funded under Fudan University’s FDUROP undergraduate academic research program with teammates.",
          },
        },
      },
      internship: {
        title: "Internship",
        placeholder: "Content coming soon. List your internship experiences and outcomes here.",
      },
      academic: {
        title: "Academic Performance",
        placeholder: "Content coming soon. Add coursework, honors, and academic achievements here.",
      },
      publications: {
        title: "Publications",
        placeholder: "Content coming soon. Link to papers, preprints, and other publications here.",
      },
    },
  },
  zh: {
    profile: {
      name: "陆修远",
      emailIntro: "邮箱：",
      githubLabel: "GitHub：",
    },
    links: {
      notes: "笔记",
      problems: "问题集",
      slides: "幻灯片",
      survey: "综述",
      plan: "计划",
      thesis: "论文",
      report: "报告",
    },
    nav: {
      general: "基本信息",
      research: "研究",
      internship: "实习经历",
      academic: "学业表现",
      publications: "发表论文",
    },
    sections: {
      general: {
        title: "基本信息",
        placeholder: "内容待补充。在此添加个人简介、联系方式和相关链接。",
      },
      research: {
        title: "研究",
        seminars: {
          title: "讨论班",
          rep: {
            title: "有限群表示论",
            tag: "数学",
            desc: "有限群表示论讨论班。我在第一周与第三周分别做了报告。",
            talk1: "第一周 — G-模（G-modules）",
            talk2: "第三周 — 正交关系（Orthogonality relations）",
          },
          algo: {
            title: "前沿 AI 算法",
            tag: "AI",
            desc: "前沿 AI 算法讨论班。我做了关于从 LLM 强化学习到 Agentic RL 的报告。",
            talk1: "From LLM RL to Agentic RL",
          },
        },
        projects: {
          title: "研究课题",
          sum: {
            title: "和积猜想",
            tag: "数学",
            desc: "关于和积猜想已有成果及其证明框架的综述性整理。",
          },
          road: {
            title: "道路交通安全评估",
            tag: "应用",
            meta: "跟随 Harvard 老师开展",
            desc: "基于多准则决策分析（MCDM）的美国道路交通安全评估。",
          },
          hall: {
            title: "AI 幻觉",
            tag: "AI",
            meta: "MIT Universal Village",
            desc: "关于 AI 幻觉的综述工作，产出三份成果，分别涉及缓解、评估与整体综述。",
            item1: "缓解（Mitigation）",
            item2: "评估（Evaluation）",
            item3: "整体综述（Survey）",
          },
          rae: {
            title: "像素扩散解码器：基于 RAE 的高保真图像生成",
            tag: "AI",
            meta: "FDUROP 本科生学术研究资助计划立项",
            desc: "基于 Representation Autoencoders（RAE）的像素扩散解码器，用于高保真图像生成。与队友以此项目申请并获批复旦大学 FDUROP 本科生学术研究资助计划立项。",
          },
        },
      },
      internship: {
        title: "实习经历",
        placeholder: "内容待补充。在此列出实习经历与成果。",
      },
      academic: {
        title: "学业表现",
        placeholder: "内容待补充。在此添加课程、荣誉与学术成就。",
      },
      publications: {
        title: "发表论文",
        placeholder: "内容待补充。在此链接论文、预印本及其他发表成果。",
      },
    },
  },
};

function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNestedValue(dict, key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.title = dict.profile?.name ?? document.title;

  localStorage.setItem("lang", lang);
}

function initI18n() {
  const saved = localStorage.getItem("lang");
  const lang = saved === "zh" || saved === "en" ? saved : "en";
  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}
