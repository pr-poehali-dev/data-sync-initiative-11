import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { SectionProps } from "@/types"

export default function Section({ id, title, label, subtitle, content, isActive, showButton, buttonText, formula, table, keywords }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-28 py-12">
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      {label && (
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4 font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-3xl mt-6 text-neutral-400 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {formula && (
        <motion.div
          className="mt-6 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="font-mono text-xl md:text-2xl text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 px-6 py-3 rounded-lg">
            {formula}
          </div>
        </motion.div>
      )}
      {table && (
        <motion.div
          className="mt-6 overflow-x-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-2 pr-4 text-neutral-400 font-normal">Материал</th>
                <th className="text-center py-2 px-3 text-neutral-400 font-normal">T_min, °C</th>
                <th className="text-center py-2 px-3 text-neutral-400 font-normal">T_max, °C</th>
                <th className="text-center py-2 px-3 text-neutral-400 font-normal">A₁</th>
                <th className="text-center py-2 px-3 text-neutral-400 font-normal">n₁</th>
                <th className="text-center py-2 px-3 text-neutral-400 font-normal">A₂</th>
                <th className="text-center py-2 px-3 text-neutral-400 font-normal">n₂</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row) => (
                <tr key={row.material} className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                  <td className="py-2 pr-4 text-white font-medium">{row.material}</td>
                  <td className="py-2 px-3 text-center text-neutral-300">{row.t_min}</td>
                  <td className="py-2 px-3 text-center text-emerald-400">{row.t_max}</td>
                  <td className="py-2 px-3 text-center text-neutral-300">{row.a1}</td>
                  <td className="py-2 px-3 text-center text-neutral-300">{row.n1}</td>
                  <td className="py-2 px-3 text-center text-neutral-300">{row.a2}</td>
                  <td className="py-2 px-3 text-center text-neutral-300">{row.n2}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-neutral-600 mt-2">Таблица 1 — Параметры уравнений, характеризующих самовозгорание</p>
        </motion.div>
      )}
      {keywords && (
        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {keywords.map((kw) => (
            <Badge key={kw} variant="outline" className="text-neutral-400 border-neutral-700 text-xs">
              {kw}
            </Badge>
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <button className="text-emerald-400 border border-emerald-500 bg-transparent hover:bg-emerald-500/10 transition-colors px-6 py-3 rounded-lg text-sm tracking-wide">
            {buttonText}
          </button>
        </motion.div>
      )}
    </section>
  )
}
