const translations = {
  en: {
    profile: {
      name: "Xiuyuan Lu",
      emailIntro: "Email:",
      githubLabel: "GitHub:",
    },
    labels: {
      abstract: "Abstract",
    },
    links: {
      notes: "Notes",
      problems: "Problem set",
      slides: "Slides",
      survey: "Survey",
      plan: "Plan",
      thesis: "Thesis",
      report: "Report",
      website: "Website",
      seeResearch: "See Research · Litex",
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
        intro: "I am an undergraduate student at Fudan University, interested in the intersection of mathematics and artificial intelligence—especially formal methods for AI for Math, generative models, and the reliability of large language models. I will spend the 2026 Fall Semester as an exchange student at the University of California, Berkeley.",
        affiliationLabel: "Affiliation",
        affiliation: "School of Mathematical Sciences, Fudan University · Class of 2024",
        majorLabel: "Major",
        major: "Mathematics + Artificial Intelligence Double Degree",
        exchangeLabel: "Exchange",
        exchange: "University of California, Berkeley · 2026 Fall Semester",
        interestsLabel: "Interests",
        interests: "AI for Math & formal languages · generative models · LLM reliability / hallucination · applied mathematical modeling",
        contactNote: "Contact and GitHub links are listed in the sidebar.",
      },
      research: {
        title: "Research",
        seminars: {
          title: "Seminars",
          rep: {
            title: "Finite Group Representation Theory",
            tag: "Math",
            desc: "A reading seminar on the foundations of finite group representation theory. I presented in Week 1 and Week 3, covering G-modules and character orthogonality, with handwritten notes and problem sets.",
            talk1: "Week 1 — G-modules",
            talk2: "Week 3 — Orthogonality relations",
          },
          algo: {
            title: "Frontier AI Algorithms",
            tag: "AI",
            desc: "A seminar on frontier AI algorithms. My talk surveyed the transition from LLM reinforcement learning to agentic RL, covering training paradigms, reward design, and emerging agent frameworks.",
            talk1: "From LLM RL to Agentic RL",
          },
        },
        projects: {
          title: "Research Projects",
          sum: {
            title: "Sum–Product Conjecture",
            tag: "Math",
            advisor: 'Advisor: <a href="https://math.fudan.edu.cn/fa/21/c30607a326177/page.htm" target="_blank" rel="noopener noreferrer">Danqing He</a> (贺丹青), Fudan University',
            desc: "A survey of existing results on the sum–product conjecture and their proof frameworks. I served as the student lead for this project, responsible for designing the discussion outline and research plan.",
          },
          road: {
            title: "Road Traffic Safety Assessment",
            tag: "Applied",
            advisor: 'Advisor: <a href="https://chinaproject.harvard.edu/people/faan-chen" target="_blank" rel="noopener noreferrer">Faan Chen</a> (陈法安), Harvard University',
            desc: "An MCDM-based assessment of U.S. state-level road traffic safety, integrating hybrid objective weighting, interdependent aggregation, and adaptive density-peak clustering for ranking and benchmarking.",
            abstract: "Selecting a robust Multiple Criteria Decision Making (MCDM) pipeline for road safety planning remains difficult because rankings and groupings are sensitive to normalization, weighting, and aggregation choices, while classical Density Peaks Clustering (DPC) still depends on manual center selection. This study proposes an integrated IDOCRIW–DOBI–DPC framework enhanced with KNN-based density estimation and adaptive thresholding (KAT-DPC), and applies it to transport safety assessment for the 50 U.S. states and the District of Columbia. Eight Safety Performance Indicators (SPIs)—highway safety expenditures, registered vehicles, licensed drivers, vehicle miles traveled, road length, road condition, seat belt usage, and fatality rate—are compiled mainly from NHTSA and BTS sources for 2016, 2019, and 2022. IDOCRIW provides hybrid objective weights, DOBI aggregates interdependent criteria into composite scores, and KAT-DPC automates clustering for benchmarking. Results show persistent top performers (notably California, Texas, and Florida) and persistent low performers (e.g., Alaska, Vermont, and the District of Columbia), with selected mid-tier states exhibiting substantial group volatility. Robustness checks across alternative normalization, weighting, and aggregation methods yield high rank correlations (often above 0.90–0.95). Indicator dynamics, composite deconstruction, score-change decomposition, and within-group benchmarking further translate the scores into actionable guidance for state-level safety planning.",
          },
          hall: {
            title: "AI Hallucination",
            tag: "AI",
            advisor: 'Advisor: <a href="https://web.mit.edu/yjfang/www/research_link.html" target="_blank" rel="noopener noreferrer">Yajun Fang</a> (方亚隽), MIT · Universal Village',
            desc: "A series of survey and framework papers on AI hallucination under MIT Universal Village, covering mitigation, evaluation, and a comprehensive UV-oriented perspective on safe and trustworthy AI.",
            item1: "Mitigation — co-first author",
            sum1: "Reframes hallucination mitigation as a lifecycle problem and organizes methods via a three-dimensional taxonomy with an integrative hybrid framework.",
            abs1: "Hallucinations in large language and vision–language models constitute a persistent and systemic failure mode that fundamentally undermines their reliability in high-stakes applications. Rather than framing hallucination as a localized generation error, this paper reconceptualizes it as a lifecycle phenomenon—emerging from upstream deficiencies in data collection, reinforced by training-time biases, and exacerbated by inference-time decoding pathologies. To address this challenge, we propose a unified framework for hallucination mitigation grounded in a structured three-dimensional taxonomy that spans mechanism-based strategies, phase-specific interventions, and cross-phase integrative approaches. This taxonomy elucidates how technical solutions, knowledge-enhanced methods, and framework-level designs can be systematically orchestrated across pre-, in-, and post-generation stages to support more robust, interpretable, and auditable model behavior. Within this paradigm, detection is positioned not as a terminal task, but as a diagnostic backbone that enables adaptive and multi-stage mitigation workflows. Building on this foundation, we introduce an integrative hybrid framework that consolidates previously fragmented techniques into coherent pipelines, demonstrating how cross-phase synergy and iterative refinement can enhance reliability in real-world deployment. This framework further reveals latent connections across diverse strands of research, facilitating the identification of underexplored intersections and the development of synergistic method combinations. By reframing hallucination mitigation as a system-level challenge rather than a set of isolated fixes, this work offers both a theoretical lens and a practical roadmap for advancing the trustworthiness of generative AI systems.",
            item2: "Evaluation — co-third author",
            sum2: "Proposes LENS, a hierarchical evaluation framework that combines broad model comparison with deep diagnostic traces of where hallucinations arise.",
            abs2: "Large Language Models (LLMs) and Vision-Language Models (VLMs) demonstrate remarkable capabilities but remain vulnerable to hallucinations—producing plausible yet factually incorrect content. Despite growing attention, existing hallucination evaluation frameworks remain insufficient to meet critical needs. Through a comprehensive survey of over 100 evaluation methods spanning six methodological paradigms, we identify fundamental limitations in objective comparison, diagnostic insight, domain-evolving benchmarks, and mitigation guidance. We present LENS (Layers of Evaluation of Hallucination in GenAI Systems), a unified framework addressing these gaps through hierarchical, tree-based query decomposition. LENS transforms complex evaluation tasks into multi-layered assessment structures via a six-stage pipeline (task formulation, decomposition, tool-augmented execution, structured generation, multi-dimensional scoring, and trace analysis), enabling MRI-like scanning of inference processes to reveal where and why hallucinations originate. Key innovations include Tool Necessity Detection and Selection (TND/TSA), multi-dimensional metrics beyond binary detection, user-centric benchmark construction, and actionable error attribution with reproducible traces. By combining horizontal breadth with vertical depth, LENS advances hallucination evaluation from post-hoc error detection to proactive risk assessment for safety-critical applications.",
            item3: "Overall survey — co-first author",
            sum3: "Provides a comprehensive taxonomy and mechanistic analysis of AI hallucination, and proposes a UV-oriented framework toward safe and trustworthy AI.",
            abs3: "In this work, we present a comprehensive evaluation of hallucination phenomena in LLMs and multimodal systems. First, we propose a structured taxonomy encompassing factuality-based, faithfulness-based, logical-based, and emergent hybrid forms, extending to multimodal-specific risks such as cross-modal inconsistencies, visual overinterpretation, and modality dominance effects. Second, we conduct a mechanistic analysis that traces hallucinations across the full model lifecycle—data-level origins, training-induced mechanisms, and inference-time vulnerabilities—revealing cascade effects that amplify initial flaws into elaborate but unreliable narratives. Third, we critically assess existing detection and evaluation approaches and survey mitigation strategies organized into mechanism-based, phase-based, and hybrid approaches. Building on these insights, we propose a novel UV-oriented framework for safe and trustworthy AI, inspired by the Universal Village vision of harmonizing human, technological, and environmental systems. Our contributions are threefold: (1) a comprehensive taxonomy linking manifestations with mechanistic drivers; (2) a coherent survey of detection, evaluation, and mitigation that highlights progress and gaps; and (3) a UV-oriented framework that reframes hallucination control as part of a broader, feedback-driven ecosystem for reliable AI.",
          },
          rae: {
            title: "Pixel Diffusion Decoder via RAE",
            tag: "AI",
            advisor: 'Advisor: <a href="https://ai3.fudan.edu.cn/info/1088/1754.htm" target="_blank" rel="noopener noreferrer">Zenglin Xu</a> (徐增林), Fudan University · FDUROP',
            desc: "An FDUROP undergraduate research project exploring whether a pixel-space diffusion decoder can improve RAE detail quality in high-fidelity ImageNet generation. Joint work with teammates.",
            abstract: "Representation Autoencoders (RAE) replace traditional VAE encoders with frozen visual representation encoders and achieve strong results on ImageNet 256×256 class-conditional generation. However, the final image is still produced in one step by a feed-forward ViT decoder, which can yield blurry text, unstable facial structure, and color shifts in detail regions. This project replaces that decoder with a diffusion model operating in pixel space, forming a serial generation pipeline of semantic latent denoising followed by pixel-space diffusion decoding. We implement a full training, sampling, and evaluation pipeline and systematically study synchronous/serial denoising, semantic conditioning, model scale, sampling time shift, classifier-free guidance (CFG), and AutoGuidance. The best model reaches FID50k = 2.065 on ImageNet 256×256, but with substantially higher parameter count and inference cost than the original RAE, and still does not surpass existing RAE results. We conclude that a pixel diffusion decoder is technically feasible as an RAE backend and that serial decoupling with CFG is effective; under current settings, however, the main bottleneck is not only decoder capacity but the lack of sufficient pixel-level information in DINOv2 semantic representations. This provides a fairly complete negative baseline for follow-up work and suggests that simply strengthening the pixel decoder is not an ideal path to improving RAE detail quality.",
          },
          litex: {
            title: "Litex — AI for Math",
            tag: "Open Source",
            meta: "Shanghai AI Laboratory · AI for Science Center · Jan–May 2026",
            desc: "Open-source work on Litex, a formal language for mathematics in the AI-for-Math ecosystem. Contributions include the MiniF2F dataset and the tutorial documentation Mathematics in Litex.",
            item1: "Litex formal language and open-source ecosystem",
            item2: "MiniF2F dataset",
            item3: "Mathematics in Litex (tutorial documentation)",
          },
        },
      },
      internship: {
        title: "Internship",
        pjlab: {
          title: "Shanghai AI Laboratory",
          tag: "AI for Science",
          meta: "Jan 2026 – May 2026 · AI for Science Center",
          desc: "Interned at the AI for Science Center, working on the Litex open-source project. See Research for details.",
        },
      },
      academic: {
        title: "Academic Performance",
        education: {
          title: "Education",
          desc: "School of Mathematical Sciences, Fudan University · Class of 2024",
        },
        honors: {
          title: "Honors & Scholarships",
          item1: "2024–2025 Fudan University Undergraduate Outstanding Student Scholarship",
          item2: "Fudan University Undergraduate Basic Discipline Scholarship",
        },
      },
      publications: {
        title: "Publications",
        venue: "In <em>2024 7th International Conference on Universal Village (UV)</em>, 2024.",
      },
    },
  },
  zh: {
    profile: {
      name: "陆修远",
      emailIntro: "邮箱：",
      githubLabel: "GitHub：",
    },
    labels: {
      abstract: "摘要",
    },
    links: {
      notes: "笔记",
      problems: "问题集",
      slides: "幻灯片",
      survey: "综述",
      plan: "计划",
      thesis: "论文",
      report: "报告",
      website: "网站",
      seeResearch: "详见研究 · Litex",
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
        intro: "我是复旦大学本科生，关注数学与人工智能的交叉，尤其是 AI for Math 中的形式化方法、生成模型，以及大语言模型可靠性等问题。我将于 2026 年秋季学期赴加州大学伯克利分校（UC Berkeley）交换一学期。",
        affiliationLabel: "所属",
        affiliation: "复旦大学数学科学学院 · 2024 级",
        majorLabel: "专业",
        major: "数学 + 人工智能 双学位（Mathematics + Artificial Intelligence Double Degree）",
        exchangeLabel: "交换",
        exchange: "加州大学伯克利分校（UC Berkeley）· 2026 Fall Semester",
        interestsLabel: "兴趣方向",
        interests: "AI for Math 与形式化语言 · 生成模型 · 大语言模型可靠性 / 幻觉 · 应用数学建模",
        contactNote: "邮箱与 GitHub 见左侧边栏。",
      },
      research: {
        title: "研究",
        seminars: {
          title: "讨论班",
          rep: {
            title: "有限群表示论",
            tag: "数学",
            desc: "有限群表示论基础讨论班。我在第一周与第三周分别报告 G-模与特征标正交关系，并整理手写笔记与问题集。",
            talk1: "第一周 — G-模（G-modules）",
            talk2: "第三周 — 正交关系（Orthogonality relations）",
          },
          algo: {
            title: "前沿 AI 算法",
            tag: "AI",
            desc: "前沿 AI 算法讨论班。我的报告梳理了从 LLM 强化学习到 Agentic RL 的发展脉络，覆盖训练范式、奖励设计与新兴 agent 框架。",
            talk1: "From LLM RL to Agentic RL",
          },
        },
        projects: {
          title: "研究课题",
          sum: {
            title: "和积猜想",
            tag: "数学",
            advisor: '指导教师：<a href="https://math.fudan.edu.cn/fa/21/c30607a326177/page.htm" target="_blank" rel="noopener noreferrer">贺丹青</a>（Danqing He），复旦大学',
            desc: "关于和积猜想已有成果及其证明框架的综述性整理。我担任该项目的学生负责人，负责制定讨论大纲与研究计划。",
          },
          road: {
            title: "道路交通安全评估",
            tag: "应用",
            advisor: '指导教师：<a href="https://chinaproject.harvard.edu/people/faan-chen" target="_blank" rel="noopener noreferrer">陈法安</a>（Faan Chen），Harvard University',
            desc: "基于多准则决策分析（MCDM）的美国各州道路交通安全评估，结合混合客观赋权、相互依赖准则聚合，以及自适应密度峰聚类进行排序与对标。",
            abstract: "为道路安全规划选择稳健的多准则决策（MCDM）流程仍然困难：排序与分组对归一化、赋权与聚合方式敏感，而经典密度峰聚类（DPC）仍依赖人工选定中心。本文提出结合 KNN 密度估计与自适应阈值的 IDOCRIW–DOBI–DPC 框架（KAT-DPC），并将其应用于美国 50 个州及哥伦比亚特区的交通安全评估。研究汇集 2016、2019、2022 年主要来自 NHTSA 与 BTS 的八项安全绩效指标（SPIs）：公路安全支出、注册车辆、持证驾驶员、车辆行驶里程、道路长度、道路状况、安全带使用率与死亡率。IDOCRIW 提供混合客观权重，DOBI 将相互依赖准则聚合为综合得分，KAT-DPC 自动完成聚类对标。结果显示持续表现较好的州（如加利福尼亚、得克萨斯、佛罗里达）与持续表现较差的州（如阿拉斯加、佛蒙特、哥伦比亚特区），部分中游州分组波动较大。对不同归一化、赋权与聚合方案的稳健性检验显示秩相关往往高于 0.90–0.95。指标动态、综合得分拆解、得分变化分解与组内对标进一步将结果转化为面向州级安全规划的可操作建议。",
          },
          hall: {
            title: "AI 幻觉",
            tag: "AI",
            advisor: '指导教师：<a href="https://web.mit.edu/yjfang/www/research_link.html" target="_blank" rel="noopener noreferrer">方亚隽</a>（Yajun Fang），MIT · Universal Village',
            desc: "在 MIT Universal Village 指导下完成的 AI 幻觉系列综述与框架工作，分别覆盖缓解、评估，以及面向安全可信 AI 的综合视角。",
            item1: "缓解（Mitigation）— 共同一作",
            sum1: "将幻觉缓解重构为全生命周期问题，并以三维分类体系与整合式混合框架系统组织已有方法。",
            abs1: "大语言与视觉–语言模型中的幻觉是持续且系统性的失效模式，严重削弱其在高风险场景中的可靠性。本文不把幻觉视为局部生成错误，而将其重新理解为贯穿生命周期的现象——源于数据采集上游缺陷、被训练阶段偏差强化，并在推理解码病理中进一步放大。为此，我们提出基于结构化三维分类体系的统一缓解框架，覆盖机制导向策略、阶段特定干预与跨阶段整合方法，说明技术解法、知识增强与框架级设计如何在生成前、生成中与生成后协同编排，以支持更稳健、可解释、可审计的模型行为。在此范式中，检测不再是终点任务，而是支撑自适应多阶段缓解流程的诊断骨干。在此基础上，我们引入整合式混合框架，将碎片化技术收束为连贯流水线，展示跨阶段协同与迭代 refinement 如何提升真实部署可靠性，并揭示不同研究方向之间的潜在连接。通过把幻觉缓解提升为系统级挑战，本工作为推进生成式 AI 可信性提供了理论视角与实践路线图。",
            item2: "评估（Evaluation）— 共同三作",
            sum2: "提出 LENS 分层评估框架，将横向模型比较与纵向诊断轨迹结合，定位幻觉产生位置与原因。",
            abs2: "大语言模型（LLM）与视觉–语言模型（VLM）能力显著，但仍易产生看似合理却事实错误的幻觉。尽管相关研究增多，现有评估框架仍难以满足关键需求。通过对六大方法范式、逾百种评估方法的系统梳理，我们指出客观比较、诊断洞察、可随领域演化的基准，以及缓解指导等方面的根本局限，并提出 LENS（Layers of Evaluation of Hallucination in GenAI Systems）。LENS 以层次化、树状查询分解统一评估流程，经由任务建模、分解、工具增强执行、结构化生成、多维打分与轨迹分析六阶段，对推理过程进行类似 MRI 的扫描，揭示幻觉在何处、因何产生。关键创新包括工具必要性检测与选择（TND/TSA）、超越二值判定的多维指标、用户中心的基准构建，以及可复现的可操作错误归因。通过结合横向广度与纵向深度，LENS 将幻觉评估从事后检错推进到面向安全关键应用的主动风险研判。",
            item3: "整体综述（Survey）— 共同一作",
            sum3: "给出 AI 幻觉的综合分类与机制分析，并提出面向安全可信 AI 的 UV 导向框架。",
            abs3: "本文对 LLM 与多模态系统中的幻觉现象进行综合评估。首先提出涵盖事实性、忠实性、逻辑性及涌现混合形态的结构化分类，并扩展到跨模态不一致、视觉过度解释、模态主导等风险。其次从数据层缺陷、训练诱导机制与推理时脆弱性追踪幻觉全生命周期，揭示独立机制如何级联放大初始缺陷。再次批判性审视现有检测与评估方法，并按机制、阶段与混合路径梳理缓解策略。在此基础上，提出受 Universal Village 愿景启发的 UV 导向安全可信 AI 框架，将幻觉控制置于更广泛的反馈驱动生态之中。贡献包括：（1）连接表象与机制驱动的综合分类；（2）贯通检测、评估与缓解的综述；（3）把幻觉控制重构为可靠 AI 生态组成部分的 UV 框架。",
          },
          rae: {
            title: "像素扩散解码器：基于 RAE 的高保真图像生成",
            tag: "AI",
            advisor: '指导教师：<a href="https://ai3.fudan.edu.cn/info/1088/1754.htm" target="_blank" rel="noopener noreferrer">徐增林</a>（Zenglin Xu），复旦大学 · FDUROP',
            desc: "FDUROP 本科生研究项目：探索像素空间扩散解码器能否改进 RAE 在 ImageNet 高保真生成中的细节质量。与队友合作完成。",
            abstract: "表征自编码器（Representation Autoencoder, RAE）用冻结的视觉表征编码器替代传统 VAE 编码器，在 ImageNet 256×256 类条件生成上取得了很强的结果。然而，RAE 的最终图像仍由一个前馈 ViT 解码器一步得到，细节区域可能出现文字模糊、人脸结构不稳和颜色偏移等问题。本项目尝试用一个在像素空间运行的扩散模型替换这一步解码器，形成“语义潜在空间去噪—像素空间扩散解码”的串行生成框架。我们实现了完整的训练、采样和评估流程，并围绕同步/串行去噪、语义条件注入方式、模型规模、采样 time shift、classifier-free guidance（CFG）和 AutoGuidance 进行了系统实验。最终，最佳模型在 ImageNet 256×256 上达到 FID50k = 2.065，但其参数量和推理开销均显著高于原始 RAE，且仍未超过 RAE 已有结果。我们的结论是：像素扩散解码器作为 RAE 后端在技术上可行，串行解耦和 CFG 设计也确实有效；但在当前条件下，主要瓶颈并不只是解码器容量，而是 DINOv2 语义表征本身缺少足够的像素级信息。该结果为后续研究提供了一个较完整的负面基线，也说明单纯加重像素解码器并不是改进 RAE 细节质量的理想路径。",
          },
          litex: {
            title: "Litex — AI for Math",
            tag: "开源",
            meta: "上海人工智能实验室 · AI for Science 中心 · 2026.1–2026.5",
            desc: "参与 Litex 开源项目，围绕面向数学的形式化语言与 AI for Math 生态开展工作，包括 MiniF2F 数据集与教程向文档 Mathematics in Litex。",
            item1: "Litex 形式化语言与开源生态",
            item2: "MiniF2F 数据集",
            item3: "Mathematics in Litex（教程向文档）",
          },
        },
      },
      internship: {
        title: "实习经历",
        pjlab: {
          title: "上海人工智能实验室",
          tag: "AI for Science",
          meta: "2026.1 – 2026.5 · AI for Science 中心",
          desc: "于 AI for Science 中心实习，参与 Litex 开源项目。详见「研究」。",
        },
      },
      academic: {
        title: "学业表现",
        education: {
          title: "教育背景",
          desc: "复旦大学数学科学学院 · 2024 级",
        },
        honors: {
          title: "荣誉与奖学金",
          item1: "2024～2025 复旦大学本科生优秀学生奖学金",
          item2: "复旦大学本科生基础学科奖学金",
        },
      },
      publications: {
        title: "发表论文",
        venue: "见 <em>2024 年第七届 Universal Village 国际会议（UV）</em> 论文集，2024。",
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
    if (!value) return;
    if (el.dataset.i18nHtml === "true") {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
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
