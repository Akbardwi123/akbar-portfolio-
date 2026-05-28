'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import { about, personalInfo, stats } from '@/data/portfolio';
import { Code2, Layers, GitBranch, Zap } from 'lucide-react';
import styles from './AboutSection.module.css';

const iconMap = [<Code2 key="c" size={20}/>, <Layers key="l" size={20}/>, <GitBranch key="g" size={20}/>, <Zap key="z" size={20}/>];

export default function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="section">
      <div className="bg-glow bg-glow-2" />
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Avatar + decoration */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageBg} />
              <div className={styles.imageFrame}>
                <Image
                  src="/avatar.png"
                  alt="Akbar Dwi Pebriansyah"
                  width={380}
                  height={380}
                  className={styles.avatarImg}
                />
              </div>
              {/* Stats card overlay */}
              <div className={`glass-card ${styles.statsCard}`}>
                {stats.map((s, i) => (
                  <div key={i} className={styles.miniStat}>
                    <span className={styles.miniStatVal}>{s.value}{s.suffix}</span>
                    <span className={styles.miniStatLabel}>{s.label[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="section-label">{lang === 'id' ? 'Tentang Saya' : 'About Me'}</p>
            <h2 className={`section-title font-display`}>
              {lang === 'id'
                ? <>Passion dalam <span className="gradient-text">Membangun</span> & <span className="gradient-text">Belajar</span></>
                : <>Passion for <span className="gradient-text">Building</span> & <span className="gradient-text">Learning</span></>}
            </h2>

            <p className={styles.desc}>{about.description[lang]}</p>
            <p className={styles.desc}>{about.description2[lang]}</p>

            {/* Highlight boxes */}
            <div className={styles.highlights}>
              {[
                {
                  icon: iconMap[0],
                  title: lang === 'id' ? 'Full-Stack Dev' : 'Full-Stack Dev',
                  desc: lang === 'id' ? 'Laravel Backend + Blade Frontend' : 'Laravel Backend + Blade Frontend',
                },
                {
                  icon: iconMap[2],
                  title: lang === 'id' ? 'Git Profesional' : 'Professional Git',
                  desc: lang === 'id' ? '1.300+ commits, 14 branch aktif' : '1,300+ commits, 14 active branches',
                },
                {
                  icon: iconMap[1],
                  title: 'SaaS Builder',
                  desc: lang === 'id' ? 'Arsitektur multi-tenant' : 'Multi-tenant architecture',
                },
                {
                  icon: iconMap[3],
                  title: lang === 'id' ? 'Cepat Belajar' : 'Fast Learner',
                  desc: lang === 'id' ? 'AI, Data Science, Node.js' : 'AI, Data Science, Node.js',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`glass-card ${styles.highlightCard}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className={styles.highlightIcon}>{item.icon}</span>
                  <div>
                    <p className={styles.highlightTitle}>{item.title}</p>
                    <p className={styles.highlightDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact quick info */}
            <div className={styles.contactRow}>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
                ✉️ {personalInfo.email}
              </a>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                🔗 {personalInfo.github}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
