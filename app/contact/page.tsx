"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. ❌");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Something went wrong. ❌");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Contact Me 📬</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange}
          placeholder="Your Name" required className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" />
        
        <input type="email" name="email" value={formData.email} onChange={handleChange}
          placeholder="Your Email" required className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" />

        <textarea name="message" value={formData.message} onChange={handleChange}
          placeholder="Your Message" required rows={4} className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"></textarea>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Send Message 🚀
        </button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
