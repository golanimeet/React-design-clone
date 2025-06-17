import React from "react";

const Card = ({ post }) => {
  return (
    <div className="flex flex-col md:flex-row mb-10">
      <div className="w-full md:w-1/3 h-64 object-cover overflow-hidden mb-4 md:mb-0 md:mr-6 ">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex flex-wrap items-center text-sm mb-2">
          <label className="px-4 py-1 rounded-full text-sm font-medium mr-2 mb-2 bg-zinc-700 text-white">
            {post.category}
          </label>
          <label className="px-4 py-1 rounded-full text-sm font-medium mr-2 mb-2 bg-zinc-700 text-white">
            {post.chapter}
          </label>
          <span className="text-zinc-400 ml-2">{post.date}</span>
        </div>
        <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
        <p className="text-zinc-300">{post.description}</p>
      </div>
    </div>
  );
};
export default Card;
