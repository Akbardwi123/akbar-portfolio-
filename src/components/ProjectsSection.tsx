'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { projects } from '@/data/portfolio';
import { ExternalLink, Star } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const { lang } = useLang();

  return (
    <section id="projects" className="section">
      <div className="bg-glow bg-glow-2" style={{ bottom: '-100px', left: '-100px' }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{lang === 'id' ? 'Proyek Unggulan' : 'Featured Projects'}</p>
          <h2 className="section-title font-display">
            {lang === 'id' ? <>Yang Sudah Saya <span className="gradient-text">Bangun</span></> : <>What I've <span className="gradient-text">Built</span></>}
          </h2>
          <p className={styles.subtitle}>
            {lang === 'id'
              ? 'Proyek nyata yang mencerminkan kemampuan teknis dan inisiatif saya sebagai developer.'
              : 'Real-world projects that reflect my technical capabilities and initiative as a developer.'}
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`glass-card ${styles.card} ${project.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              {project.featured && (
                <div className={styles.featuredBadge}>
                  <Star size={11} fill="currentColor" />
                  {lang === 'id' ? 'Unggulan' : 'Featured'}
                </div>
              )}

              {/* Icon + Title */}
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{project.icon}</span>
                </div>
                <div className={styles.titleGroup}>
                  <h3 className={`${styles.title} font-display`}>{project.title}</h3>
                  <span className={styles.date}>{project.date[lang]}</span>
                </div>
              </div>

              {/* Description */}
              <p className={styles.desc}>{project.description[lang]}</p>

              {/* Highlights */}
              <ul className={styles.highlights}>
                {project.highlights[lang].map((h, j) => (
                  <li key={j} className={styles.highlightItem}>
                    <span className={styles.bullet} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className={styles.techRow}>
                {project.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className={styles.actions}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${project.featured ? 'btn-primary' : 'btn-outline'} ${styles.actionBtn}`}
                  id={`project-github-${project.id}`}
                >
                  <GithubIcon size={15} />
                  {lang === 'id' ? 'Lihat Kode' : 'View Code'}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconBtn}
                  id={`project-ext-${project.id}`}
                  aria-label="Open repository"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className={styles.githubCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className={styles.ctaText}>
            {lang === 'id' ? 'Lihat semua proyek saya di GitHub' : 'See all my projects on GitHub'}
          </p>
          <a
            href="https://github.com/Akbardwi123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="projects-github-all"
          >
            <GithubIcon size={16} />
            github.com/Akbardwi123
          </a>
        </motion.div>
      </div>
    </section>
  );
}
