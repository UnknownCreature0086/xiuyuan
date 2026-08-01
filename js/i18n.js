const translations = {
  en: {
    profile: {
      name: "Xiuyuan Lu",
      emailIntro: "Email:",
      githubLabel: "GitHub:",
    },
    nav: {
      general: "General Info",
      research: "Research Interest",
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
        title: "Research Interest",
        placeholder: "Content coming soon. Describe your research areas and ongoing projects here.",
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
    nav: {
      general: "基本信息",
      research: "研究兴趣",
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
        title: "研究兴趣",
        placeholder: "内容待补充。在此介绍研究方向与进行中的项目。",
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
