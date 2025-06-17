import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import toolkitImage from "../assets/image.webp";
import Footer from "../components/Footer";
import DeclareEmrgency from "../components/DeclareEmrgency";
import { Link } from "react-router-dom";
import { links } from "../utils/links";
import {global} from "../utils/631";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullText(true);
    }, 1500);
    const paragraphTimer = setTimeout(() => setShowParagraph(true), 3000);
    return () => clearTimeout(timer);

  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail("");
  };

  if (subscribed) {
    return (
      <div className="max-w-md mx-auto p-5 bg-blue-50 border border-blue-200 rounded-md text-center">
        <p className="text-blue-800">
          Thank you for subscribing to the Design Declares newsletter!
        </p>
      </div>
    );
  }

  const acts = [
    {
      number: "1",
      title: "Sound the Alarm",
      description:
        "Acknowledge and raise awareness of the climate and ecological crisis – including its roots in systems of oppression – in our organisations and our practice.",
    },
    {
      number: "2",
      title: "Start the Journey",
      description:
        "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
    },
    {
      number: "3",
      title: "Bring Clients with Us",
      description:
        "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
    },
    {
      number: "4",
      title: "Measure What We Make",
      description:
        "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
    },
    {
      number: "5",
      title: "Redefine IGood'",
      description:
        "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
    },
    {
      number: "6",
      title: "Educate, Accelerate",
      description:
        "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
    },
    {
      number: "7",
      title: "Design for Justice",
      description:
        "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
    },
    {
      number: "8",
      title: "Amplify Voices for Change",
      description:
        "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
    },
  ];

  const events = [
    {
      tags: ["Events", "D! UK"],
      date: "24.04.2025, 03 PM:30",
      title:
        "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      description: "Recap: SD4P Collective working session – 28th March 2025",
    },
    {
      tags: ["Events", "D! UK"],
      date: "06.12.2024, 02 PM:30",
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      description:
        "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
    },
  ];
  return (
    <>
      <div className="h-screen w-full bg-black text-white relative flex flex-col justify-center px-6 md:flex-row md:items-center md:justify-between">
        <div className="min-h-screen bg-black text-white text-left">
          {!showFullText ? (
            <div className="text-[8rem] font-extrabold animate-d-bang">D!</div>
          ) : (
            <div className="text-[5rem] leading-none font-black tracking-tight uppercase md:text-[10rem]">
              <div className="animate-line1">Design</div>
              <div className="animate-line2">Declares</div>
              <div className="text-orange-500 animate-line3">UK</div>
            </div>
          )}
        </div>

        {/* Right: Description */}
        <div className="min-h-screen mt-6 bg-black text-gray-500 p-3 ">
          {showParagraph && (
            <div className="max-w-lg md:text-left transition duration-500 ease-in-out hover:scale-105 hover:text-white">
              <p className="text-[17px] leading-relaxed text-gray-300">
                Design Declares is a growing group of designers, design studios,
                agencies and institutions here to declare a climate and ecological
                emergency. As part of the global declaration movement, we commit
                to harnessing the tools of our industry to reimagine, rebuild and
                heal our world.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* breackdown */}
      <section className="flex flex-col justify-between md:flex-row bg-black text-white min-h-screen px-8 md:px-10 py-10">
        {/* Top Left Text */}
        <div className="text-lg md:w-[40%] md:text-3xl font-semibold">
          This is Breakdown
        </div>

        {/* Centered Main Text */}
        <div className="md:w-[55%]">
          <h1 className="text-3xl md:text-5xl font-semibold max-w-5xl leading-snug md:leading-[4.5rem]">
            The science is settled. We are in an emergency of climate and
            nature. The world is past breaking point; the breakdown has begun…
          </h1>

          {/* Divider + Toggle Area */}
          <div className="border-t-2 border-white-500 mt-10 pt-6">
            {/* Clickable Toggle Title */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between text-left w-full text-lg md:text-xl text-white font-light"
            >
              <span>The Role of Design</span>
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Collapsible Paragraphs */}
            {isOpen && (
              <div className="grid grid-cols-2 gap-5 w-full text-wrap text-md text-gray-300 mt-6">
                <p>
                  As designers working within an industry that relies on
                  production and powers global consumption, we must acknowledge
                  that we have had a role in bringing them to where we are now,
                  and that we have an important role in what comes next.
                </p>
                <p>
                  Because designers are makers. We make ideas real. We generate
                  solutions. We build the world – dreaming up new futures and
                  bringing them to life in ways that are beautiful, vital and
                  impossible to resist. It’s not quite magic, but it feels like
                  it.
                </p>
              </div>
            )}
          </div>
          {/* second */}
          <div className="border-t-2 border-white-500 mt-10 pt-6">
            {/* Clickable Toggle Title */}
            <button
              onClick={() => setIsOpen2(!isOpen2)}
              className="flex items-center justify-between text-left w-full text-lg md:text-xl text-white font-light"
            >
              <span>Time for Change</span>
              {isOpen2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Collapsible Paragraphs */}
            {isOpen2 && (
              <div className="grid grid-cols-2 gap-5 w-full text-wrap text-md text-gray-300 mt-6">
                <p>
                  Together with our clients, partners and colleagues across the
                  supply chain, we are daring to reimagine the way we create
                  even product, service, campaign and designed solution we put
                  out into the world.
                </p>
                <p>
                  It means introducing principles of sustainability, circularity
                  and - ultimately - regenerative design into our practice to
                  recapture and repurpose resources and materials.
                </p>
                <p>
                  This means measuring and actively reducing the greenhouse gas
                  emissions and resource use linked to our designs.
                </p>
                <p>
                  And it means acting systemically - seeing the bigger picture
                  and working with others to sharpen design's incredible
                  capacity to influence and accelerate climate repair and
                  justice.
                </p>
              </div>
            )}
          </div>
          {/* third */}
          <div className="border-t-2 border-white-500 mt-10 pt-6">
            {/* Clickable Toggle Title */}
            <button
              onClick={() => setIsOpen3(!isOpen3)}
              className="flex items-center justify-between text-left w-full text-lg md:text-xl text-white font-light"
            >
              <span>Act with Urgency</span>
              {isOpen3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Collapsible Paragraphs */}
            {isOpen3 && (
              <div className="grid grid-cols-2 gap-5 w-full text-wrap text-md text-gray-300 mt-6 transition-all delay-1000">
                <p>
                  We know all we need to make this a reality. The information,
                  the guidance, the inspiration and solutions are there. What
                  design needs now is action - meaningful steps that can begin
                  to connect what we know to what we do.
                </p>
                <p>
                  This is the most important brief of our lives. Join us as we
                  begin to design a climate- positive future.
                </p>
              </div>
            )}
          </div>
          <div className="mt-10">
            <button className="bg-white text-black text-xl font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition cursor-pointer">
              View our D! Intro Video
            </button>
          </div>
        </div>
      </section>

      {/* donate section */}
      <section className=" bg-black text-white px-6 md:px-10 py-20">
        <div className="flex flex-col md:justify-between md:flex-row gap-10 md:gap-20 items-start">
          {/* Left Side */}
          <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
            Donate to D!
          </h2>

          {/* Right Side */}
          <div className="md:w-[55%]">
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Design Declares is a CIC and would not exist without our dedicated
              team of co-steers, volunteers, and our passionate community
              working towards change in the creative industry. Your support can
              go a long way, and helps us too continue the valuable work needed
              in tackling the climate crises. If you believe in the work we do,
              please consider a small donation to help us on our journey for a
              more equitable and just planet.
            </p>

            {/* Donation Buttons */}
            <div className="flex flex-wrap gap-4 text-lg">
              <button className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-orange-700 transition cursor-pointer">
                Donate £10
              </button>
              <button className="bg-white text-black font-bold px-6 py-3 rounded-full  hover:bg-orange-700 transition cursor-pointer">
                Donate £20
              </button>
              <button className="bg-white text-black font-bold px-6 py-3 rounded-full  hover:bg-orange-700 transition cursor-pointer">
                Donate £50
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*EmergencyActs */}

      <section className="bg-black text-white px-6 md:px-10 py-16">
        <div className="flex flex-col w-full justify-between md:flex-row gap-10">
          {/* Left Side */}
          <h2 className="text-2xl md:w-[42%] md:text-3xl font-semibold whitespace-nowrap">
            8 Acts of Emergency
          </h2>

          {/* Right Side */}
          <div className="flex-1 md:w-[]">
            <p className="text-gray-300 text-xl font-semibold mb-8">
              What does it take to Declare? It’s accepting we are in an
              emergency of climate and nature, and a commitment to do something
              about it. Here are eight places to start:
            </p>

            {/* Acts */}
            <div className="space-y-4">
              {acts.map((act, index) => (
                <div key={index} className="bg-gray-100 text-black">
                  <div className="flex items-center border border-black p-4">
                    <span className="text-5xl font-semibold w-12">
                      {act.number}
                    </span>
                    <h3 className="text-5xl font-semibold">{act.title}</h3>
                  </div>
                  <p className="border border-t-0 border-black p-4 text-lg">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/** Declar Emergency*/}

      <DeclareEmrgency />

      {/** latest */}
      <section className="bg-black md:flex justify-between text-white py-16 px-6 md:px-10">
        <h2 className="text-2xl font-semibold mb-10">Latest</h2>
        <div className="md:w-[55%]">
          {events.map((event, index) => (
            <div
              key={index}
              className="mb-12 flex flex-col md:flex-row justify-between gap-4"
            >
              {/* Left Side */}
              <div>
                <div className="flex gap-2 mb-2">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-sm text-gray-300">{event.date}</span>
                </div>
                <h3 className="text-2xl font-semibold max-w-xl">
                  {event.title}
                </h3>
              </div>

              {/* Right Side */}
              <div className="max-w-md self-center">
                <p className="mb-2 text-gray-300">{event.description}</p>
                <a href="#" className="underline font-medium hover:text-orange-600">
                  Read story
                </a>
              </div>
            </div>
          ))}

          {/* Button */}
          <div className="mt-10">
            <Link to='/latest' className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-600 cursor-pointer transition">
              See all the latest
            </Link>
          </div>
        </div>
      </section>

      {/*Toolkit */}
      <section className="bg-black text-white px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 items-start">
          {/* Text Left */}
          <div>
            <h2 className="text-2xl md:text-2xl font-semibold mb-6 leading-snug">
              The Design Declares Newsletter and
              <br />
              Toolkit
            </h2>
          </div>

          {/* Image Right */}
          <div>
            <img
              src={toolkitImage}
              alt="Design Declares Toolkit"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Paragraph below image */}
        <div className="mt-10 md:pl-[46%]">
          <p className="text-gray-300 text-lg leading-relaxed">
            Subscribe to the Design Declares UK newsletter to receive the latest
            news and updates. By signing up you will also gain access to The
            Design Declares Toolkit, a live and evolving Notion site co-created
            with our community. It is filled with the latest resources and
            methods to help you on your journey to climate-positive design.
          </p>
          <p className="text-gray-300 mt-5 leading-relaxed">
            Every signatory to Design Declares will receive an access link to
            the Toolkit. If you are unable to declare emergency quite yet, you
            can still access the Toolkit - just register below.
          </p>
          <div className="w-full mt-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email:*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-orange-600"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="updates"
                  required
                  className="mt-2 mr-2"
                />
                <label htmlFor="updates" className="text-gray-700">
                  I would like to be added to the Design Declares! newsletter
                  and receive further updates.
                </label>
              </div>

              <div>
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-600 underline text-[13px]"
                >
                  View our Privacy Policy
                </a>
              </div>

              <button
                type="submit"
                className="bg-white hover:bg-orange-600 text-black font-medium text-lg py-2 px-5 rounded-3xl transition duration-150 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/*512 section */}
      <section className="bg-black text-white px-6 md:px-10 py-16">
        <div className="flex flex-col rounded-lg shadow-md">
          <div className="text-5xl font-bold text-gray-300 mb-2">{"#512"}</div>
          <div className="text-2xl text-white">
            Signatories and counting in{" "}
            <span className="bg-orange-600 rounded-4xl px-3 py-1 text-[10px] font-bold text-black">
              D!UK
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 mt-7">
            {links.map((item, index) => {
              return (
                <a className="hover:underline text-[12px]" href={item.link} key={index}>{item.name}</a>
              ) 
            })}
          </div>
        </div>
      </section>
      {/*661 section */}
      <section className="bg-black text-white px-6 md:px-10 py-16">
        <div className="flex flex-col rounded-lg shadow-md">
          <div className="text-5xl font-bold text-gray-300 mb-2">{"#661"}</div>
          <div className="text-2xl text-white">
            Global Supporters{" "}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 mt-7">
            {global.map((item, index) => {
              return (
                <a className="hover:underline text-[12px]" href={item.link} key={index}>{item.name}</a>
              )
            })}
          </div>
        </div>
      </section>
      {/*footer */}
      <Footer />
    </>
  );
}

export default Home;
