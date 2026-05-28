'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { skills } from '@/data/portfolio';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const { lang } = useLang();

  return (
    <section id="skills" className="section">
      <div className="bg-glow bg-glow-2" style={{ bottom: '-100px', left: '-150px' }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{skills.title[lang]}</p>
          <h2 className="section-title font-display">
            {lang === 'id'
              ? <>Teknologi yang Saya <span className="gradient-text">Kuasai</span></>
              : <>Technologies I <span className="gradient-text">Master</span></>}
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {skills.categories.map((cat, i) => (
            <motion.div
              key={i}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap} style={{ background: `${cat.color}14`, borderColor: `${cat.color}30` }}>
                  <span className={styles.icon}>{cat.icon}</span>
                </div>
                <h3 className={styles.catName} style={{ color: cat.color }}>{cat.name[lang]}</h3>
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                {cat.items.map((item, j) => (
                  <motion.span
                    key={j}
                    className={styles.tag}
                    style={{
                      borderColor: `${cat.color}25`,
                      background: `${cat.color}08`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.06 }}
                    whileHover={{ scale: 1.06, borderColor: cat.color }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
