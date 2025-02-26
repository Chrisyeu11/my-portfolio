export default function Projects() {
  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {/* Dynamic Portfolio Website */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Dynamic Portfolio Website with Interactive Features</h2>
        <p className="italic">Next.js, Tailwind CSS, API, Vercel</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Increased **page load speed by 40%** by designing and deploying a fast, responsive portfolio site using **Next.js** and **Tailwind CSS**.</li>
          <li>Improved user retention by integrating a **custom music player** with **YouTube API** and **local storage**.</li>
          <li>Boosted engagement with **smooth animations** for GitHub and LinkedIn icons.</li>
          <li>Achieved **99.9% uptime** by optimizing build processes and resolving conflicts on **Vercel**.</li>
        </ul>
      </section>

      {/* Hackathon Swap Project */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Hackathon Swap Project</h2>
        <p className="italic">Python, Pandas, NumPy, Matplotlib, Seaborn</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Processed **2GB+** of **Binance ETH/USDT** trade data with **Pandas** and **PyArrow** using an **ETL pipeline**.</li>
          <li>Improved **data consistency** by aligning swap prices with mid-market values using **NumPy**.</li>
          <li>Ensured continuous data collection by transitioning from **Uniswap GraphQL API** to **Binance datasets**.</li>
          <li>Reduced **processing errors by 30%** through automated data validation.</li>
          <li>Enhanced data readability via **Matplotlib and Seaborn** visualizations with **logarithmic scaling**.</li>
        </ul>
      </section>

      {/* Coffee Shop Sales Performance Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Coffee Shop Sales Performance Analysis</h2>
        <p className="italic">Python, SQL, Pandas, NumPy, Tableau</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Queried and analyzed **50,000+ transactions** using **SQL and Pandas**, identifying a **35% increase in weekend sales** and seasonal demand shifts.</li>
          <li>Optimized pricing strategy with **correlation analysis** between unit price and sales volume using **NumPy**.</li>
          <li>Evaluated store-level performance in **Tableau**, identifying key locations and recommending targeted promotions.</li>
          <li>Developed **time-series dashboards** for revenue trends, guiding data-driven decisions on inventory and pricing.</li>
        </ul>
      </section>

      {/* Crypto Donation Platform Mockup */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Crypto Donation Platform Mockup</h2>
        <p className="italic">HTML, CSS, JavaScript, MetaMask, ethers.js</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Developed a **responsive cryptocurrency donation platform** using **HTML, CSS, and JavaScript**.</li>
          <li>Integrated **MetaMask** wallet functionality and implemented **blockchain interactions** using **ethers.js**.</li>
          <li>Designed an **intuitive interface** allowing users to input donation amounts and simulate transactions.</li>
          <li>Enhanced **user experience** by ensuring seamless wallet integration and transaction simulation.</li>
        </ul>
      </section>
    </div>
  );
}
