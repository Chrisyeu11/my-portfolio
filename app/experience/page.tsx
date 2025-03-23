export default function ExperiencePage() {
  const experience = [

    {
      title: "Childhood Cancer Society Hackathon",
      location: "New York, NY | 1.2025 - 2.2025",
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
