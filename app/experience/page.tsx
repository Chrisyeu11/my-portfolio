export default function ExperiencePage() {
  const experience = [

    
    {
      title: "Preload | UPS",
      location: "Stafford, TX. | 10.2023 - Current Position",
      details: [
        "Optimized loading workflows by mapping 3D spatial arrangements to stack and position 900+ packages per shift efficiently, enhancing route efficiency and minimizing delivery delays.",
        "Leveraged logistics systems and internal tools to enhance accuracy and maintain data integrity across outbound operations, including edge cases and exception workflows.",
        "Coordinated with the management to resolve conflicts and onboard new hires, sharing techniques in load balancing scan compliance, and safety protocol adherence."  ~
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
