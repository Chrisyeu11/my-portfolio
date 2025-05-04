export default function Projects() {
  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

{/* Stock Dashboard – Real-Time Market Tracker */}
<section className="mb-8">
  <h2 className="text-2xl font-bold">Stock Dashboard: Real-Time Market Tracker</h2>
  <p className="italic">Next.js, TypeScript, Tailwind CSS, Chart.js, Finnhub API</p>
  <ul className="list-disc pl-6 mt-2">
    <li>Built a responsive dashboard with **Next.js** and **Tailwind CSS**, displaying live stock data via the **Finnhub API**.</li>
    <li>Implemented search, sorting by percent change, and dynamic charting with **Chart.js** for interactive data visualization.</li>
    <li>Handled loading states, error responses, and deployed the app to **Vercel** with secure **environment variable** configuration.</li>
  </ul>
</section>

{/* VaultTrack – Personal Finance Dashboard */}
<section className="mb-8">
  <h2 className="text-2xl font-bold">VaultTrack: Personal Finance Dashboard</h2>
  <p className="italic">Spring Boot, PostgreSQL, Maven, REST APIs</p>
  <ul className="list-disc pl-6 mt-2">
    <li>Developed **RESTful APIs** using **Spring Boot**, enabling CRUD operations and transaction management with **Jakarta Validation**.</li>
    <li>Configured **PostgreSQL** schema with relational mappings, implementing repositories using **Hibernate** and **JPA**.</li>
    <li>Resolved critical issues with **Maven dependency conflicts**, database connectivity, and server-side debugging.</li>
    <li>Validated endpoints with **Postman** to ensure proper HTTP methods and response structures.</li>
    <li>Maintained clean version control with consistent Git workflows and regular commits to **GitHub**.</li>
  </ul>
</section>

{/* CalculatorGUI – Java Swing Desktop App */}
<section className="mb-8">
  <h2 className="text-2xl font-bold">CalculatorGUI: Java Swing Desktop App</h2>
  <p className="italic">Java, Swing, IntelliJ, Git, GitHub</p>
  <ul className="list-disc pl-6 mt-2">
    <li>Built a responsive **desktop calculator** using **Java Swing** with interactive GUI components like <code>JFrame</code>, <code>JButton</code>, and <code>JTextField</code>.</li>
    <li>Implemented **keyboard bindings** for number pad, operators, backspace, and delete keys, enhancing accessibility and UX.</li>
    <li>Added features like **Dark Mode toggle**, **scrollable history log**, and **current operation display** for modern UI polish.</li>
    <li>Handled error cases gracefully (e.g., **divide by zero**, malformed input) with clear status messaging.</li>
    <li>Used **Git** for version control and pushed source code to **GitHub**, following professional commit practices.</li>
  </ul>
</section>


      {/* Portfolio*/}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <p className="italic">Next.js, Tailwind CSS, API, Vercel</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Increased **page load speed by 40%** by designing and deploying a fast, responsive portfolio site using **Next.js** and **Tailwind CSS**.</li>
          <li>Improved user retention by integrating a **custom music player** with **YouTube API** and **local storage**.</li>
          <li>Boosted engagement with **smooth animations** for GitHub and LinkedIn icons.</li>
          <li>Achieved **99.9% uptime** by optimizing build processes and resolving conflicts on **Vercel**.</li>
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
    </div>
    
  );
}
