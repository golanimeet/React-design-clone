import React, { useState } from "react";

const DeclareEmrgency = () => {
  const [formData, setFormData] = useState({
    role: "",
    businessName: "",
    website: "",
    country: "United Kingdom",
    discipline: "",
    email: "",
    reason: "",
    consent: false,
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-full mb-12">
        <h1 className="text-2xl font-bold text-start">Declare Emergency Now</h1>
        <p className="text-xl leading-relaxed md:w-[55%] text-gray-300">
          Design Declares is open to individuals and institutions working in
          industrial, digital, graphic, communication and service design. To
          declare here, you must be a company with an office in the UK employing
          at least one full-time designer. We also welcome declarations from
          practising freelance designers who are registered as self-employed in
          the UK, and global supporters from other countries. All declarations
          will be named and published on this site.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-end">
        <form
          onSubmit={handleSubmit}
          className="border border-white p-8 md:w-[55%]"
        >
          <h2 className="text-5xl font-semibold mb-6">
            I am Declaring Emergency
          </h2>

          {/* Role Selection */}
          <div className="flex flex-wrap gap-4 mb-6">
            {[
              "As a business",
              "As an individual",
              "As a public institution",
              "As a team or department",
            ].map((role, i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={formData.role === role}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span>{role}</span>
              </label>
            ))}
          </div>

          {/* Input Fields */}
          <div className="text-xl">
            <input
              type="text"
              name="businessName"
              placeholder="Business Name:*"
              className="w-full p-2 bg-transparent  border border-gray-500"
              value={formData.businessName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="website"
              placeholder="Website:*"
              className="w-full p-2 bg-transparent border border-gray-500"
              value={formData.website}
              onChange={handleChange}
            />

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 bg-black border border-white text-white"
            >
              {[
                "United Kingdom",
                "Ukraine",
                "United Arab Emirates",
                "Turkey",
                "Tunisia",
                "Tonga",
              ].map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              name="discipline"
              value={formData.discipline}
              onChange={handleChange}
              className="w-full p-2 bg-black border text-white"
            >
              <option value="">Discipline:*</option>
              <option value="Communication Design">Communication Design</option>
              <option value="Digital Design">Digital Design</option>
              <option value="Service Design">Service Design</option>
              <option value="Product Design">Product Design</option>
            </select>

            <input
              type="email"
              name="email"
              placeholder="Email:*"
              className="w-full p-2 bg-transparent border border-gray-500"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="reason"
              placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
              rows="5"
              className="w-full p-2 bg-transparent border border-gray-500"
              value={formData.reason}
              onChange={handleChange}
            />
          </div>

          {/* Consent & Newsletter */}
          <div className="mt-6 space-y-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-15 h-5 mt-1"
                required
              />
              <span className="text-sm">
                I consent for my data to be used for the purpose of the
                Declaration, and for my name and reason for joining to be used
                in the promotion of the Declaration on this site and across our
                social channels.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="w-5 h-5 mt-1"
              />
              <span className="text-sm">
                I would like to be added to the Design Declares! newsletter and
                receive further updates.
              </span>
            </label>

            <a href="#" className="text-sm underline text-gray-400 hover:text-orange-600">
              View our Privacy Policy
            </a>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-white text-black text-xl px-6 py-3 rounded-full font-semibold hover:bg-orange-600"
            >
              Declare Emergency Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeclareEmrgency;
