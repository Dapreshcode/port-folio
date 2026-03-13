export default function FeaturedProject() {
    return(
<section className="py-24 px-6 bg-[#020617] text-white">

<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

{/* Project Image */}
<img
  src="/src/assets/featuredImg1.jpg"
  alt="Featured Project"
  className="rounded-xl shadow-xl"
/>

{/* Project Info */}
<div>

<h2 className="text-4xl font-bold mb-4">
Featured Project
</h2>

<h3 className="text-2xl font-semibold mb-4">
Real Estate Platform
</h3>

<p className="text-gray-400 mb-6">
A modern real estate web application that allows users to browse
properties, explore listings and experience a responsive UI built
with modern frontend technologies.
</p>

<div className="flex gap-3 mb-6">

<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">React</span>
<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Tailwind</span>
<span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Framer Motion</span>

</div>

<div className="flex gap-4">

<a
href="https://real-est-web.vercel.app/"
className="bg-yellow-400 text-black px-5 py-2 rounded-lg"
>
Live Demo
</a>

<a
href="https://github.com/Dapreshcode/Real-Est-web"
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