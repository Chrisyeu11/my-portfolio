export default function ExperiencePage() {
  const experience = [

    {
      title: "Test Engineer | Foxconn Industrial Internet",
      location: "Houston, TX | 05.2025 – Present",
      details: [
  "Conducted comprehensive diagnostics on NVIDIA rack-mounted servers using Python and MobaXterm, detecting and resolving 20+ firmware anomalies, reducing downtime by 35%.",
  "Evaluated server performance metrics, identifying critical firmware discrepancies that increased system stability by 40%.",
  "Automated testing protocols for firmware updates, streamlining workflows and cutting testing time by 30%.",
  "Partnered with engineering and QA teams to resolve 15+ hardware and firmware inconsistencies, enhancing product integrity and reducing error rates by 25%.",
  "Compiled detailed diagnostic reports, logging 50+ system configurations and test outcomes to establish a robust knowledge base for future testing cycles."
  ]
    },

    {
      title: "Preload Manual Operation | UPS",
      location: "Stafford, TX | 10.2023 – Present",
      details: [
  "Streamlined package handling workflows, strategically arranging 900+ packages per shift to reduce loading time by 20%.",
  "Utilized logistics software to verify data accuracy, minimizing scanning errors by 15%.",
  "Facilitated the onboarding of 10+ new hires, conducting operational training and implementing conflict resolution strategies to improve team cohesion."
]

    },
    {
      title: "Software Engineer / Data Analyst | Childhood Cancer Society Hackathon",
      location: "New York, NY. | 1.2025 - 02.2025",
      details: [
        "Built a crypto analytics tool to analyze and visualize ETH/USDT trade data, winning 1st place in a national social impact hackathon.",
        "Developed an end-to-end ETL pipeline using Pandas and PyArrow to process and structure over 2GB+ of trade data.",
        "Visualized trading trends and patterns using Matplotlib and Seaborn, enhancing data insights for informed decision-making."
      ]
    },
   
    {
      title: "Frontend Develop Intern | Houston Environmental Justice",
      location: "Houston, TX. | 06.2024 - 08.2024",
      details: [
        "Developed and styled responsive web pages using HTML, CSS, and JavaScript based on client requirements.",
        "Collaborated with designers to translate wireframes and mockups into functional UI components.",
        "Debugged and resolved front-end issues to ensure seamless user interactions and improved website functionality."
      ]
    },
   
    {
      title: "Data analytic research | College of Science, Engineering, and Technology (COSET) Summer Research",
      location: "Houston, TX. | 06.2024 - 08.2024",
      details: [
        "Assisted in cleaning and preprocessing datasets using Pandas and NumPy.",
        "Designed visualizations with Matplotlib and Seaborn.",
        "Documented analysis methodologies and presented results"
      ]
    },
   
    ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold">{exp.title}</h2>
          <p className="text-gray-500">{exp.location}</p>
          <ul className="list-disc pl-6">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
