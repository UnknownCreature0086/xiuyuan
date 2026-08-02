const transcriptData = [
  {
    titles: {
      en: "2024–2025 Academic Year · Fall",
      zh: "2024–2025 学年第一学期",
    },
    courses: [
      { en: "Programming in Python", zh: "Python程序设计", credits: 1, grade: "A" },
      { en: "Fudan English Test", zh: "复旦大学英语水平测试", credits: 0, grade: "A" },
      { en: "Ideology, Morality and the Rule of Law", zh: "思想道德与法治", credits: 3, grade: "A-" },
      { en: "Introduction to Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era", zh: "习近平新时代中国特色社会主义思想概论", credits: 3, grade: "A" },
      { en: "Mental Health and College Life", zh: "心理健康与大学生活", credits: 1, grade: "P" },
      { en: "Ultimate Frisbee I", zh: "极限飞盘（一）", credits: 1, grade: "A-" },
      { en: "The Path of Building a Powerful Country: Situation, Policy and Mission I", zh: "强国之路：形势、政策与使命 I", credits: 0.5, grade: "A" },
      { en: "Advanced Algebra I", zh: "高等代数 I", credits: 5, grade: "A-" },
      { en: "Mathematical Analysis A I", zh: "数学分析 A I", credits: 5, grade: "A-" },
      { en: "Analytic Geometry", zh: "解析几何", credits: 4, grade: "A-" },
    ],
  },
  {
    titles: {
      en: "2024–2025 Academic Year · Spring",
      zh: "2024–2025 学年第二学期",
    },
    courses: [
      { en: "Programming", zh: "程序设计", credits: 4, grade: "A" },
      { en: "Aesthetics of Chinese and Foreign Music", zh: "中外音乐审美", credits: 2, grade: "A" },
      { en: "Critical Thinking in English Argumentation", zh: "英语论辩与思辨", credits: 2, grade: "A" },
      { en: "Conspectus of Chinese Modern History", zh: "中国近现代史纲要", credits: 3, grade: "A-" },
      { en: "Military Theory", zh: "军事理论", credits: 2, grade: "A-" },
      { en: "Aerobics II", zh: "健美操（二）", credits: 1, grade: "P" },
      { en: "The Path of Building a Powerful Country: Situation, Policy and Mission II", zh: "强国之路：形势、政策与使命 II", credits: 0.5, grade: "A" },
      { en: "Mathematical Analysis A II", zh: "数学分析 A II", credits: 5, grade: "B+" },
      { en: "Advanced Algebra II", zh: "高等代数 II", credits: 5, grade: "A" },
      { en: "College Physics B I", zh: "大学物理B（上）", credits: 4, grade: "B+" },
    ],
  },
  {
    titles: {
      en: "2025 Summer Semester",
      zh: "2025 年暑期学期",
    },
    courses: [
      { en: "Military Skills", zh: "军事技能", credits: 2, grade: "P" },
    ],
  },
  {
    titles: {
      en: "2025–2026 Academic Year · Fall",
      zh: "2025–2026 学年第一学期",
    },
    courses: [
      { en: "Principles of Computer Systems", zh: "计算机系统基础", credits: 3, grade: "B+" },
      { en: "Data Structure", zh: "数据结构", credits: 4, grade: "A-" },
      { en: "The Basic Principles of Marxism", zh: "马克思主义基本原理", credits: 3, grade: "A-" },
      { en: "Badminton I", zh: "羽毛球（一）", credits: 1, grade: "P" },
      { en: "The Path of Building a Powerful Country: Situation, Policy and Mission III", zh: "强国之路：形势、政策与使命 III", credits: 0.5, grade: "A" },
      { en: "National Security Education for College Students", zh: "大学生国家安全教育", credits: 1, grade: "P" },
      { en: "Mathematical Analysis A III", zh: "数学分析 A III", credits: 5, grade: "A-" },
      { en: "Ordinary Differential Equations", zh: "常微分方程", credits: 4, grade: "B+" },
      { en: "Abstract Algebra", zh: "抽象代数", credits: 4, grade: "B+" },
      { en: "College Physics B II", zh: "大学物理B（下）", credits: 4, grade: "C" },
    ],
  },
  {
    titles: {
      en: "2025–2026 Academic Year · Spring",
      zh: "2025–2026 学年第二学期",
    },
    courses: [
      { en: "Introduction to Artificial Intelligence", zh: "人工智能导论", credits: 3, grade: "A" },
      { en: "Foundations of Software for Artificial Intelligence", zh: "人工智能的软件基础", credits: 3, grade: "A" },
      { en: "An Introduction to Mao Zedong Thought and the Theoretical System of Socialism with Chinese Characteristics", zh: "毛泽东思想和中国特色社会主义理论体系概论", credits: 3, grade: "A-" },
      { en: "Badminton II", zh: "羽毛球（二）", credits: 1, grade: "P" },
      { en: "The Path of Building a Powerful Country: Situation, Policy and Mission IV", zh: "强国之路：形势、政策与使命 IV", credits: 0.5, grade: "A+" },
      { en: "Functions of a Complex Variable", zh: "复变函数", credits: 4, grade: "B" },
      { en: "Functions of a Real Variable", zh: "实变函数", credits: 4, grade: "A-" },
      { en: "Topology", zh: "拓扑学", credits: 4, grade: "A-" },
      { en: "The Ethics and Governance of AI", zh: "人工智能的伦理与治理", credits: 2, grade: "A" },
    ],
  },
];

const transcriptHeaders = {
  en: { course: "Course", credits: "Credits", grade: "Grade" },
  zh: { course: "课程", credits: "学分", grade: "成绩" },
};

function renderTranscript(lang) {
  const root = document.getElementById("transcript-root");
  if (!root) return;

  const headers = transcriptHeaders[lang] || transcriptHeaders.en;
  root.innerHTML = "";

  transcriptData.forEach((semester) => {
    const block = document.createElement("div");
    block.className = "transcript-block";

    const title = document.createElement("h4");
    title.className = "transcript-term";
    title.textContent = semester.titles[lang] || semester.titles.en;
    block.appendChild(title);

    const table = document.createElement("table");
    table.className = "transcript-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th scope="col">${headers.course}</th>
          <th scope="col">${headers.credits}</th>
          <th scope="col">${headers.grade}</th>
        </tr>
      </thead>
    `;

    const tbody = document.createElement("tbody");
    semester.courses.forEach((course) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${course[lang] || course.en}</td>
        <td>${course.credits}</td>
        <td>${course.grade}</td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    block.appendChild(table);
    root.appendChild(block);
  });
}
