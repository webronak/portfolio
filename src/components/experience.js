function getDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  if (yearDiff === 0 && monthDiff === 0) {
    return "less than a month";
  } else {
    const yearString = yearDiff > 1 ? `${yearDiff} years` : `${yearDiff} year`;
    const monthString =
      monthDiff > 1 ? `${monthDiff} months` : `${monthDiff} month`;

    if (yearDiff === 0) {
      return monthString;
    } else if (monthDiff === 0) {
      return yearString;
    } else {
      return `${yearString} ${monthString}`;
    }
  }
}

const data = [
  {
    jobTitle: "Javascript Developer - Internship",
    company: "Cracker Digital Media",
    timeSpan: "Apr 2021 - Jun 2021",
    time: "3 Months",
    technicalSkills: ["Javascript", "Vue.js", "SCSS", "CSS", "HTML"],
    Responsibilities: ["Logic building", "Responsive UI building", "Designing"],
  },
  {
    jobTitle: "Frontend Developer",
    company: "Fyntune sloutions",
    timeSpan: "Jun 2021 - May 2022",
    time: "1 Year",
    technicalSkills: [
      "Javascript",
      "React.js",
      "Redux",
      "Redux-thunk",
      "RTK-queries",
      "Axios",
      "Bootstrap",
      "SCSS",
      "CSS",
      "HTML",
      "Styled-components",
    ],
    Responsibilities: [
      "Building reuseable components",
      "Logic building",
      "Responsive UI building",
      "Designing",
      "Web Performance",
      "Optimizing applications",
    ],
  },
  {
    jobTitle: "SDE-1 ( Frontend )",
    company: "Scalereal Technologies",
    timeSpan: "May 2022 - Current...",
    time: getDateDifference(new Date("May 2022"), new Date()),
    technicalSkills: [
      "Javascript",
      "React.js",
      "Redux",
      "Redux-thunk",
      "Redux-saga",
      "RTK-queries",
      "Material-ui",
      "web-sockets",
      "Axios",
      "SCSS",
      "CSS",
      "HTML",
      "Styled-components",
      "Jest",
      "React-testing-library",
    ],
    Responsibilities: [
      "Building reuseable components",
      "Logic building",
      "Responsive UI building",
      "Designing UI",
      "Testing/Debugging",
      "Web Performance",
    ],
  },
];

export default data;
