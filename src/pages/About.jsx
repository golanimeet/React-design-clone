import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
import image4 from "../assets/4.webp";
import Footer from "../components/Footer";
import MiniNavbar from "../components/MiniNavbar";
export default function About() {
  const members = [
    {
      name: "Abb-d Taiyo",
      affiliation: "Driftmere",
      image: image1,
    },
    {
      name: "Alexie Sommer",
      affiliation: "URGE Collective",
      image: image2,
    },
    {
      name: "Aurelie Lionet",
      affiliation: "Design for Life",
      image: image3,
    },
    {
      name: "Jo Barnard",
      affiliation: "Morama",
      image: image4,
    },
  ];

  return (
    <div className="bg-black">
      <MiniNavbar />
      {/* About Design Declares section  */}
      <div className="min-h-screen bg-black text-white px-6 py-5 relative overflow-hidden">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Side - Logo and Title */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-semibold">About Design Declares</h2>
          </div>
          {/* Right Side - Headings and Paragraph */}
          <div className="flex justify-end">
            <div className="md:max-w-10xl w-full md:w-3/4 mt-10 text-left md:text-left p-8">
              <h1 className="text-3xl md:text-6xl leading-tight mb-6 mt-5">
                Climate breakdown has begun.
                <br />
                And business as usual is not an option.
              </h1>
              <h3 className="text-2xl font-semibold mb-4 text-gray-300">
                That’s why we started Design Declares.
              </h3>
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                Inspired by a global declaration movement sounding the alarm in
                industries everywhere, we’re an industry-recognised initiative
                representing the fears, hopes and commitment to action of a
                growing group of designers, design studios, agencies and
                institutions.
              </p>
              <button className="bg-white text-black text-xl font-bold px-6 py-3 rounded-full hover:bg-orange-500 transition duration-200">
                See Global Declarations
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-12 text-gray-300">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="grid md:grid-cols-2 text-lg leading-relaxed">
              <p className="mb-5 pl-30">
                Together, we sit at the very beginning of the creative process.
                The tools we use and the choices we make can influence society’s
                behaviour, change economies and challenge everything that’s come
                before.
              </p>
              <p className="pl-10">
                Because design, whether it’s a product, a piece of packaging or
                an exhibition space, has impact. It’s up to us whether that
                impact is harmful or healing.
                <br />
                <br />
                We’re glad you’re here. Let’s get to work.
              </p>
            </div>
            <button className="bg-white text-black text-xl font-bold px-6 py-3 ml-30 mt-8 rounded-full hover:bg-orange-500 transition duration-200">
              Declare Emergrncy Now
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end mt-12 text-gray-300">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="grid md:grid-cols-2 text-lg leading-relaxed pl-23">
              <ul className="list-disc pl-10">
                <li>Design Declares is free.</li>
                <li>
                  ‘Design’ to us means industrial, digital, graphic,
                  communication and service design.
                </li>
                <li>
                  Design Declares offers support to all its signatories through
                  shared best practice, resources and insights, all found in the
                  Toolkit.
                </li>
                <li>
                  Our signatories use the clarity of the 8 Acts of Emergency as
                  a way to start meaningful conversations and actions in
                  collaboration with colleagues, collaborators and clients.
                </li>
              </ul>
              <ul className="list-disc pl-10">
                <li>
                  We welcome declarations from companies with an office and/or
                  employing at least one full-time designer, and from practising
                  freelance designers who are registered as self-employed in the
                  UK. All signatories will be named and published on this site.
                </li>
                <li>
                  As a collective voice, we will liaise with other industry
                  organisations and networks, constructively engaging with
                  government, clients and design media.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Global Partnerships section  */}
      <div className="min-h-screen bg-black text-white px-6 py-10 relative overflow-hidden mt-30">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Side - Logo and Title */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-semibold">Global Partnerships</h2>
          </div>
          <div className="md:max-w-10xl w-full md:w-3/4 text-left md:text-left pl-60">
            <p className="text-3xl md:text-3xl leading-tight mb-6">
              We invite our colleagues from across the design industry to join
              us in declaring an emergency, and starting to take urgent action.*
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end text-gray-300">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="grid md:grid-cols-2 text-lg leading-relaxed">
              <p className="mb-5 pl-30">
                The acts of emergency above are the first (big) steps. As we all
                commit to this work, we must also commit to doing it in a way
                that is genuinely inclusive and equitable.
              </p>
              <p className="pl-10">
                *We are actively seeking partnerships to expand Design Declares
                around the world. If that sounds like something you’re
                interested in, please get in touch.
              </p>
            </div>
            <div className="grid md:grid-cols-2 text-lg leading-relaxed">
              <p className="mb-5 pl-30">
                It doesn’t matter where on the journey you are. What matters is
                that you’re here, and you’re ready to do the work. Because there
                is no design on a dead planet.{" "}
              </p>
              <p className="pl-10">
                Join our list of global partners...
                <br />
                <br />
                <div className="underline">
                  <Link to="/"> UK, </Link>
                  <Link to="/">Ireland, </Link>
                  <Link to="/">Brazil, </Link>
                  <Link to="/">Australia</Link>
                </div>
              </p>
            </div>
            <button className="bg-white text-black text-xl font-bold px-6 py-3 ml-30 mt-8 rounded-full hover:bg-orange-500 transition duration-200">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      {/* The Designers Behind Design Declares UK section  */}
      <div className="min-h-screen bg-black text-white px-6 relative overflow-hidden">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Side - Logo and Title */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-semibold">
              The Designers Behind Design <br /> Declares UK
            </h2>
          </div>
          <div className="md:max-w-10xl w-full md:w-3/4 text-left md:text-left pl-60">
            <p className="text-xl leading-tight mb-6">
              Inspired by the global emergency declaration movement demanding
              accountability and action across industries, Design Declares is
              the initiative of a multidisciplinary group of design
              professionals and agencies who all believe in the power of design
              to change things.{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end text-gray-300 mt-5">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="grid md:grid-cols-2 text-lg leading-relaxed pl-25">
              <p>
                <i className="fa-regular fa-sun text-gray-300 text-3xl mx-3"></i>{" "}
                Design for Life
              </p>
              <p className="text-4xl font-semibold">Driftime®</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end text-gray-300 mt-10">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="grid md:grid-cols-2 text-lg leading-relaxed pl-28">
              <p className="text-4xl">morroma</p>
              <p className="text-3xl">StudioWood</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end text-gray-300 mt-10">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="grid md:grid-cols-2 text-lg leading-relaxed pl-28">
              <p className="bg-white text-black w-50 p-1">
                thomas.matthews <br />
                communication design
              </p>
              <p className="text-3xl font-bold">URGE</p>
            </div>
          </div>
        </div>
      </div>
      {/* last section */}
      <div className="flex flex-col md:flex-row md:justify-between bg-black text-white pb-10 px-10">
        <h2 className="text-3xl font-bold mb-10">Steering Group</h2>
        <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover mb-4 grayscale"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </div>

      {/**footer */}

      <Footer />
    </div>
  );
}
