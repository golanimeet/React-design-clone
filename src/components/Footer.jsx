import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <div className="bg-black">
        <section className="bg-orange-500 rounded-t-4xl">
          <div className="grid md:grid-cols-3 md:gap-2 gap-6 p-8">
            <div className="text-5xl font-bold flex flex-col">
              <span>DESIGN</span>
              <span>DECLARES</span>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
            <div>
              <h2 className="font-bold text-xl">
                Sign up to the D! Newsletter
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-medium text-black"
                  >
                  
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email:*"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-black focus:outline-none focus:border-white"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="checked"
                    required
                    className="mt-2 mr-2"
                  />
                  <label htmlFor="checked" className="text-black">
                    I would like to be added to the Design Declares! newsletter
                    and receive further updates.
                  </label>
                </div>

                <div className="flex justify-content-around items-center gap-50">
                  <div>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-white underline text-[13px]"
                  >
                    View our Privacy Policy
                  </a>
                </div>

                <button
                  type="submit"
                  className="bg-white hover:bg-black text-black hover:text-white font-medium text-lg py-2 px-5 rounded-3xl transition duration-150 ease-in-out"
                >
                  Subscribe
                </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full text-left md:pl-100 px-10  py-10 text-sm">
            <p className="">
              This website has been built following low-carbon principles of web
              development and hosted using serverless computing, by only
              allocating energy when needed and on demand.{" "}
            
              <a href="#" className="underline hover:text-white">
                Learn more about our carbon footprint.
              </a>
            </p>
            <p>
              Empowered by{" "}
              <a href="#" className="underline hover:text-white">
                Driftime®
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
