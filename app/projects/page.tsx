export default function Projects() {
  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {/* Hackathon Swap Project */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Hackathon Swap Project</h2>
        <p className="italic">Houston, TX | 01.2025 - 02.2025</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Developed a <strong>Python-based</strong> pipeline to collect, process, and visualize cryptocurrency swap transactions.
          </li>
          <li>
            Extracted and processed over 2GB of Binance ETH/USDT trade data using <strong>Pandas</strong> and <strong>PyArrow</strong>, ensuring structured storage in <strong>Parquet format</strong>.
          </li>
          <li>
            Transformed raw trading data with <strong>NumPy</strong>, ensuring data consistency and accuracy.
          </li>
          <li>
            Resolved <strong>API</strong> deprecation issues by transitioning from the <strong>Uniswap GraphQL API</strong>.
          </li>
          <li>
            Automated data validation using <strong>Pandas</strong>, reducing processing errors by 30%.
          </li>
          <li>
            Applied software testing practices, including <strong>debugging, assertion checks, and logging</strong>.
          </li>
          <li>
            Created <strong>data visualizations</strong> with <strong>Matplotlib</strong> and <strong>Seaborn</strong>, applying <strong>logarithmic scaling</strong> for readability.
          </li>
        </ul>
      </section>

      {/* Crypto Donation Platform Mockup */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Crypto Donation Platform Mockup</h2>
        <p className="italic">Houston, TX | 01.2025 - 02.2025</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Developed a responsive cryptocurrency donation platform using <strong>HTML, CSS, and JavaScript</strong>.
          </li>
          <li>
            Integrated wallet connection functionality with <strong>MetaMask</strong> and implemented blockchain interactions using <strong>ethers.js</strong>.
          </li>
          <li>
            Created a user-friendly interface for inputting donation amounts and simulating transactions.
          </li>
          <li>
            Gained hands-on experience with <strong>Web3</strong> technologies and decentralized wallets.
          </li>
        </ul>
      </section>

      {/* Vertex Bank */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Vertex Bank</h2>
        <p className="italic">Houston, TX | 05.2024 - 08.2024</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Developed a <strong>C++</strong>-based Bank Account Management System with deposit, withdrawal, and balance tracking features.
          </li>
          <li>
            Applied <strong>OOP principles</strong> and <strong>dynamic memory management</strong> for efficient data handling.
          </li>
          <li>
            Ensured a scalable and modular design using <strong>STL</strong> and object-oriented techniques.
          </li>
          <li>
            Designed for future expansion into a <strong>GUI or web-based system</strong> to enhance user experience.
          </li>
        </ul>
      </section>
    </div>
  );
}
