'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { education } from '@/data/portfolio';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import styles from './EducationSection.module.css';

export default function EducationSection() {
  const { lang } = useLang();

  return (
    <section id="education" className="section">
      <div className="bg-glow bg-glow-2" style={{ top: '-100px', right: '-150px' }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{education.title[lang]}</p>
          <h2 className="section-title font-display">
            {lang === 'id'
              ? <>Latar Belakang <span className="gradient-text">Pendidikan</span></>
              : <>Educational <span className="gradient-text">Background</span></>}
          </h2>
        </motion.div>

        <div className={styles.wrapper}>
          <motion.div
            className={`glass-card ${styles.card}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            {/* Left Decorator */}
            <div className={styles.decor}>
              <div className={styles.iconWrap}>
                <GraduationCap size={24} className={styles.icon} />
              </div>
              <div className={styles.line} />
            </div>

            {/* Content */}
            <div className={styles.content}>
              <span className={styles.badge}>
                {lang === 'id' ? 'Sekolah Menengah Kejuruan' : 'Vocational High School'}
              </span>
              
              <h3 className={`${styles.school} font-display`}>{education.school}</h3>
              
              <p className={styles.major}>
                {lang === 'id' ? 'Jurusan: ' : 'Major: '}
                <strong>{education.major[lang]}</strong>
              </p>

              <p className={styles.desc}>{education.description[lang]}</p>

              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <MapPin size={14} />
                  {education.location[lang]}
                </span>
                <span className={styles.metaItem}>
                  <Calendar size={14} />
                  {education.graduated[lang]}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
