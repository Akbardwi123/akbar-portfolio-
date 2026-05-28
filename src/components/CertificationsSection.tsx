'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { certifications } from '@/data/portfolio';
import { Award, CheckCircle, Calendar, Hash } from 'lucide-react';
import styles from './CertificationsSection.module.css';

export default function CertificationsSection() {
  const { lang } = useLang();

  return (
    <section id="certifications" className="section">
      <div className="bg-glow bg-glow-1" style={{ top: '0', right: '-200px' }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{lang === 'id' ? 'Sertifikasi' : 'Certifications'}</p>
          <h2 className="section-title font-display">
            {lang === 'id' ? <>Kompetensi yang <span className="gradient-text">Terverifikasi</span></> : <>Verified <span className="gradient-text">Competencies</span></>}
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Top accent bar */}
              <div className={styles.accentBar} style={{ background: cert.color }} />

              <div className={styles.cardInner}>
                {/* Icon */}
                <div className={styles.iconWrap} style={{ background: `${cert.color}18`, borderColor: `${cert.color}33` }}>
                  <Award size={24} style={{ color: cert.color }} />
                </div>

                {/* Type badge */}
                <div className={styles.typeBadge} style={{ color: cert.color, background: `${cert.color}12`, borderColor: `${cert.color}25` }}>
                  {cert.type[lang]}
                </div>

                {/* Title */}
                <h3 className={`${styles.title} font-display`}>{cert.title[lang]}</h3>

                {/* Issuer */}
                <p className={styles.issuer}>{cert.issuer}</p>

                {/* Description */}
                <p className={styles.desc}>{cert.description[lang]}</p>

                {/* Grade (if exists) */}
                {cert.grade && (
                  <div className={styles.gradeBadge}>
                    <CheckCircle size={13} style={{ color: '#22c55e' }} />
                    <span>{cert.grade[lang]}</span>
                  </div>
                )}

                <div className={styles.divider} />

                {/* Meta info */}
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <Hash size={12} />
                    <span className={styles.metaLabel}>{lang === 'id' ? 'No. Sertifikat' : 'Cert. Number'}</span>
                    <code className={styles.certNum}>{cert.number}</code>
                  </div>
                  <div className={styles.metaItem}>
                    <Calendar size={12} />
                    <span className={styles.metaLabel}>{lang === 'id' ? 'Valid hingga' : 'Valid until'}</span>
                    <span className={styles.validDate}>{cert.validUntil[lang]}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
