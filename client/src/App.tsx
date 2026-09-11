import { motion } from "motion/react";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      <nav className="border-b border-border px-8 py-4 flex justify-between items-center">
        <Hero />

        <div className="flex gap-6 text-sm">
          <a href="#" className="text-muted hover:text-primary transition-colors">Work</a>
          <a href="#" className="text-muted hover:text-primary transition-colors">About</a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--glow)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-bg px-4 py-2 rounded-md font-medium"
          >
            Contact
          </motion.a>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-8 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-heading mb-4"
        >
          Hi, I'm <span className="text-primary">Ian Josh </span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted mb-10"
        >
          Frontend developer. I build fast, accessible interfaces.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--glow)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-bg px-8 py-3 rounded-lg font-semibold"
        >
          View Projects
        </motion.button>
      </section>

      <section className="max-w-4xl mx-auto px-8 pb-24 grid md:grid-cols-2 gap-4">
        {[
          { title: "Project One", tech: "React · TypeScript" },
          { title: "Project Two", tech: "Next.js · Tailwind" },
        ].map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ boxShadow: "0 0 20px var(--glow)" }}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <h3 className="font-semibold text-heading mb-1">{p.title}</h3>
            <p className="text-sm text-muted">{p.tech}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}   