export default function ExperiencePage() {
  const experience = [

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
      title: "Product Management Intern | Houston Environmental Justice",
      location: "Remote | 06.2024 - 08.2024",
      details: [
        "Increased user engagement by 10% by defining and prioritizing a product roadmap.",
        "Led cross-functional collaboration with engineers and designers, improving UI consistency by 20%.",
        "Enhanced UX by 25% by conducting 10+ user interviews and iterating based on research insights.",
        "Optimized user flows and navigation, reducing friction and decreasing drop-off rates by 15%."
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
