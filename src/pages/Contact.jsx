import React, { useState } from "react";
import MiniNavbar from "../components/MiniNavbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    enquiry: "",
    message: "",
    newsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Add your submit logic here
    console.log("Form submitted:", formData);
  };

  const errorClass = "border-red-500";

  return (
    <>
    <MiniNavbar />
      <div className="min-h-screen flex md:flex-row flex-col justify-between bg-black text-white p-8">
        <h1 className="text-2xl font-bold mb-6">Contact</h1>
        <form
          onSubmit={handleSubmit}
          className="border p-6 w-full md:w-[60%]"
        >
          <h1 className="text-4xl font-bold mb-6">Send Us A Message</h1>
          <div>
            <input
              name="name"
              placeholder="Name:*"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full bg-black border p-3 ${
                submitted && !formData.name ? errorClass : ""
              }`}
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email:*"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full bg-black border p-3 ${
                submitted && !formData.email ? errorClass : ""
              }`}
            />
          </div>

          <div>
            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
              required
              className={`w-full bg-black text-white border p-3 ${
                submitted && !formData.team ? errorClass : ""
              }`}
            >
              <option value="">Team to contact:*</option>
              <option value="D! UK">D! UK</option>
              <option value="D! Ireland">D! Ireland</option>
              <option value="D! Brasil">D! Brasil</option>
              <option value="D! Australia">D! Australia</option>
            </select>
          </div>

          <div>
            <select
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
              className={`w-full bg-black text-white border p-3 ${
                submitted && !formData.enquiry ? errorClass : ""
              }`}
            >
              <option value="">Enquiry type:*</option>
              <option value="Contribute to the toolkit">
                Contribute to the toolkit
              </option>
              <option value="Volunteer my time">Volunteer my time</option>
              <option value="Set up a new chapter">Set up a new chapter</option>
              <option value="Discuss something else">
                Discuss something else
              </option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Please write your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border p-3 h-45"
            />
          </div>

          <div className="flex items-start space-x-2 mt-5">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="newsletter" className="text-sm">
              I would like to be added to the Design Declares! newsletter and
              receive further updates.
            </label>
          </div>
          <div className="mt-5">
              <a href="#" className="underline hover:text-orange-600 text-sm">View our Privacy Policy</a>
          </div>
          <button
            type="submit"
            className="bg-white text-black px-7 py-3 rounded-3xl mt-5 font-medium hover:bg-orange-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
