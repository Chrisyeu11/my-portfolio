export default function ExperiencePage() {
  const experience = [
    {
      title: "Code Path Cybersecurity Program",
      location: "Remote | 02.2025 - Current",
      details: [
        "Engaged in an intensive 12-week cybersecurity training program covering foundational and advanced security concepts.",
        "Gained hands-on experience in penetration testing, network security, vulnerability assessment, and incident response through practical labs.",
        "Developed proficiency in tools like Wireshark, Metasploit, and Nmap for both defensive and offensive cybersecurity techniques."
      ]
    },
    {
      title: "Preload Operations Specialist | UPS",
      location: "Stafford, TX | 10.2024 - Current",
      details: [
        "Coordinated and optimized preload operations, ensuring timely and accurate package handling.",
        "Improved workflow efficiency by identifying bottlenecks and implementing corrective measures.",
        "Communicated with cross-functional teams to address operational challenges and maintain service quality."
      ]
    },
    {
      title: "Houston Environmental Justice | Development Intern",
      location: "Remote | 05.2024 - 08.2024",
      details: [
        "Designed and implemented user-friendly dashboards, enabling stakeholders to interpret environmental data effectively.",
        "Developed data analysis tools using Python and SQL to track environmental justice metrics.",
        "Participated in agile development processes, contributing to sprint planning, backlog refinement, and retrospectives."
      ]
    },
    {
      title: "WiDS Datathon | Data Science Volunteer",
      location: "Remote | 05.2024 - 08.2024",
      details: [
        "Analyzed healthcare inequities using climate pattern data to identify accessibility gaps.",
        "Conducted data cleaning, visualization, and feature engineering using Python and Pandas, leading to actionable insights for stakeholder presentations.",
        "Developed a predictive model utilizing scikit-learn to highlight demographic factors impacting healthcare access disparities."
      ]
    },
    {
      title: "Resident Assistant | Asset Living",
      location: "Houston, TX | 01.2024 - 11.2024",
      details: [
        "Supported community operations, fostering a positive environment for residents during challenging times.",
        "Coordinated events to enhance engagement and addressed resident concerns with a focus on satisfaction.",
        "Streamlined operational workflows, increasing resident retention by 10% through data-driven solutions."
      ]
    }
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
