import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return(
        <footer className="bg-[#0b0f19]/100 text-gray-400 py-8">

<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

<p>
© {new Date().getFullYear()} Precious Baribe
</p>

<div className="flex gap-6 mt-4 md:mt-0">

 <a
    href="https://github.com/yourusername"
    target="_blank"
    className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition"
  >
    <Github size={20} />
    GitHub
  </a>

 {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/yourprofile"
    target="_blank"
    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
  >
    <Linkedin size={20} />
    LinkedIn
  </a>

<a
href="#contact"
className="hover:text-yellow-400 transition"
>
Contact
</a>

</div>

</div>

</footer>
    )
}