'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { experiences } from '@/data/portfolio';
import { MapPin, Calendar, GitBranch, ExternalLink } from 'lucide-react';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const { lang } = useLang();
  const exp = experiences[0];

  return (
    <section id="experience" className="section">
      <div className="bg-glow bg-glow-1" style={{ top: '0', right: '-200px' }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{lang === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}</p>
          <h2 className="section-title font-display">
            {lang === 'id' ? <>Perjalanan <span className="gradient-text">Profesional</span></> : <>Professional <span className="gradient-text">Journey</span></>}
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {/* Timeline line */}
          <div className={styles.timelineLine}>
            <motion.div
              className={styles.timelineProgress}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>

          {/* Experience Card */}
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Dot */}
            <div className={styles.dot}>
              <div className={styles.dotInner} />
            </div>

            {/* Card */}
            <div className={`glass-card ${styles.card}`}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardTitleGroup}>
                  <div className={styles.roleBadge}>{exp.role[lang]}</div>
                  <h3 className={`${styles.company} font-display`}>{exp.company}</h3>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <MapPin size={13} /> {exp.location[lang]}
                    </span>
                    <span className={styles.metaItem}>
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className={`${styles.metaItem} ${styles.duration}`}>
                      <GitBranch size={13} /> {exp.duration[lang]}
                    </span>
                  </div>
                </div>
                <div className={styles.projectBadge}>
                  <span className={styles.projectLabel}>{lang === 'id' ? 'Proyek Utama' : 'Main Project'}</span>
                  <span className={styles.projectName}>{exp.project}</span>
                  <span className={styles.projectDesc}>{exp.projectDesc[lang]}</span>
                </div>
              </div>

              <div className={styles.divider} />

              {/* Highlights */}
              <ul className={styles.highlights}>
                {exp.highlights[lang].map((item, i) => (
                  <motion.li
                    key={i}
                    className={styles.highlight}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className={styles.bullet} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className={styles.techRow}>
                {exp.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Future placeholder */}
          <motion.div
            className={styles.futureDot}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.futureDotInner} />
            <span className={styles.futureLabel}>
              {lang === 'id' ? '✨ Peluang Berikutnya...' : '✨ Next Opportunity...'}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
