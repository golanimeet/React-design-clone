import React, { useEffect, useState } from "react";
import MiniNavbar from "../components/MiniNavbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/NAvbar";

const categories = ["All", "Events", "Case Studies", "Updates", "Perspective"];
const chapters = ["All", "D! UK", "D! Ireland", "D! Australia"];

const posts = [
  {
    title: "Embedding Sustainability in the Design Curriculum",
    description:
      "Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.",
    date: "30.04.2025, 04 PM:30",
    chapter: "D! Ireland",
    category: "Case Studies",
    image:
      "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3xff4iuw%2Fproduction%2Fd23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png%3Fmax-w%3D1440&w=1080&q=75",
  },
  {
    title:
      "SD4P Collective: How can Service Design drive meaningful sustainability impact",
    description: "Recap: SD4P Collective working session – 28th March 2025",
    date: "24.04.2025, 03 PM:30",
    chapter: "D! UK",
    category: "Events",
    image:
      "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F1012aa8c47395cb7ffbb2892f27a6ca6c33c996b-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75",
  },
   {
    title: "Sasha Titchkosky Interview",
    description:
      "An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky",
    date: "30.04.2025, 04 PM:30",
    chapter: "Perspective",
    category: "D! Australia",
    image:
      "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6sp3gm8t%2Fproduction%2F9d6e15d759ea86a10645893c3dcf0d4df49e31d2-720x400.jpg%3Fmax-w%3D1440&w=1080&q=75",
  },
  {
    title: "Embedding Sustainability in the Design Curriculum",
    description:
      "Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.",
    date: "30.04.2025, 04 PM:30",
    chapter: "D! Ireland",
    category: "Case Studies",
    image:
      "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3xff4iuw%2Fproduction%2Fd23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png%3Fmax-w%3D1440&w=1080&q=75",
  },
  {
    title:
      "SD4P Collective: How can Service Design drive meaningful sustainability impact",
    description: "Recap: SD4P Collective working session – 28th March 2025",
    date: "24.04.2025, 03 PM:30",
    chapter: "D! UK",
    category: "Events",
    image:
      "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F1012aa8c47395cb7ffbb2892f27a6ca6c33c996b-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75",
  },
   {
    title: "Sasha Titchkosky Interview",
    description:
      "An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky",
    date: "30.04.2025, 04 PM:30",
    chapter: "Perspective",
    category: "D! Australia",
    image:
      "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6sp3gm8t%2Fproduction%2F9d6e15d759ea86a10645893c3dcf0d4df49e31d2-720x400.jpg%3Fmax-w%3D1440&w=1080&q=75",
  },
];

const Latest = () => {
  const [newPosts, setNewPosts] = useState(posts);
  const filterCards = (c) => {
    if (c === "All") {
      setNewPosts(posts);
    } else {
      const newArray = posts.filter(
        (post) => post.category === c || post.chapter === c
      );
      setNewPosts(newArray);
    }
  };
  return (
    <>
      <MiniNavbar />
      <div className="bg-black text-white min-h-screen py-5 px-10 flex flex-col lg:flex-row gap-10">
        {/* Left Filter Sidebar */}
        <div className="lg:w-2/4">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap mb-8">
            {categories.map((c, i) => (
              <label
                key={i}
                className="px-4 py-1 rounded-full text-sm font-medium mr-2 mb-2 bg-zinc-700 hover:bg-zinc-400 text-white cursor-pointer"
                onClick={() => filterCards(c)}
              >
                {c}
              </label>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4">View by Chapter</h2>
          <div className="flex flex-wrap">
            {chapters.map((c, i) => (
              <label
                key={i}
                className="px-4 py-1 rounded-full text-sm font-medium mr-2 mb-2 bg-zinc-700 hover:bg-zinc-400 text-white cursor-pointer"
                onClick={() => filterCards(c)}
              >
                {c}
              </label>
            ))}
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-3/4 h-[100vh] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          {newPosts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Latest;
