import React from "react";
import project3 from "../assets/project3.jpeg";

export default function FeaturedProject() {
    return(
<section className="py-24 px-6 bg-[#020617] text-white">

<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

{/* Project Image */}
<img
  src={project3}
  alt="Featured Project"
  className="rounded shadow-xl"
/>

{/* Project Info */}
<div>

<h2 className="text-4xl font-bold mb-4">
Featured Project
</h2>

<h3 className="text-2xl font-semibold mb-4">
Blog website built with mdx, next js and tailwind css
</h3>

<p className="text-gray-400 mb-6">
Engineered a high-performance, SEO-optimized blogging platform using Next.js, MDX, and Tailwind CSS, designed for scalability and content-driven growth. Implemented dynamic routing, MDX-based content management, and a responsive UI, alongside conversion-focused features such as call-to-actions, affiliate components, and structured content layouts to enhance user engagement and monetization potential.
</p>

<div className="flex gap-3 mb-6">

<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">React</span>
<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Next js</span>
<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">MDX</span>
<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Tailwind</span>
<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Framer Motion</span>

</div>

<div className="flex gap-4">

<a
href="https://smart-income-builders.vercel.app/"
className="bg-yellow-400 text-black px-5 py-2 rounded-lg"
>
Live Demo
</a>

<a
href="https://github.com/Dapreshcode/smart-income-builders.git"
className="border border-gray-600 px-5 py-2 rounded-lg"
>
Source Code
</a>

</div>

</div>

</div>
</section>
    )
}