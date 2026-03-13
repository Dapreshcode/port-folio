import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      form.current,
      import.meta.env.VITE_EMAIL_KEY
    )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
          <p className="text-gray-400">
            Interested in working together or have a project in mind?
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1f2937] p-8 rounded-2xl border border-gray-700 space-y-5"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="bg-yellow-400 text-black font-medium py-3 px-6 rounded-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </button>

          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >

            <h3 className="text-2xl font-semibold">
              Let's Connect
            </h3>

            <p className="text-gray-400">
              I'm always open to discussing new opportunities,
              collaborations, or interesting projects.
            </p>

            {/* Email */}
            <div>
             <a
    href="https://wa.me/2349064789243?text=Hello%20I%20saw%20your%20portfolio"
    target="_blank"
    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
  >
    <MessageCircle size={20} />
    Chat on WhatsApp
  </a>
            </div>

            {/* GitHub */}
            <div>
              <p className="text-gray-500 text-sm">GitHub</p>
                <a
    href="https://github.com/Dapreshcode"
    target="_blank"
    className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition"
  >
    <Github size={20} />
    GitHub
  </a>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="text-gray-500 text-sm">LinkedIn</p>
              <a
    href="https://www.linkedin.com/in/precious-michael-8b5a9725a"
    target="_blank"
    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
  >
    <Linkedin size={20} />
    LinkedIn
  </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;