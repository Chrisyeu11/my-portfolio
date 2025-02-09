export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">My Resume</h1>
      <p className="mb-6 text-lg">Click the button below to view or download my resume.</p>
      
      <a 
        href="/resume.pdf" 
        download="Chris_Yeu_Resume.pdf"
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
      >
        📄 Download Resume
      </a>
    </div>
  );
}
