export default function ExperiencePage() {
  const experience = [

    
    {
      title: "Preload | UPS",
      location: "Stafford, TX. | 10.2023 - Current Position",
      details: [
        "Optimized loading workflows by organizing 900+ packages daily, enhancing route efficiency and reducing delivery delays.",
        "Ensured shipment accuracy and data integrity using barcode scanning systems and internal logistics software.",
        "Collaborated cross-functionally to resolve routing issues and trained new hires on safety standards and load optimization strategies."
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
        "Increased user engagement by 10% by defining and prioritizing a product roadmap.",
        "Led cross-functional collaboration with engineers and designers, improving UI consistency by 20%.",
        "Enhanced UX by 25% by conducting 10+ user interviews and iterating based on research insights.",
        "Optimized user flows and navigation, reducing friction and decreasing drop-off rates by 15%."
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
