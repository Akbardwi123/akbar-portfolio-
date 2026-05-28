'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowDown, Download } from 'lucide-react';

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
import { useLang } from '@/context/LangContext';
import { personalInfo, stats } from '@/data/portfolio';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { lang } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      {/* Background Glows */}
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />
      <div className={`${styles.glow} ${styles.glow3}`} />

      <div className={`container ${styles.inner}`}>
        {/* Left — Text */}
        <div className={styles.textCol}>
          {/* Status Badge */}
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.statusDot} />
            {lang === 'id' ? 'Terbuka untuk Peluang Baru' : 'Open to New Opportunities'}
          </motion.div>

          {/* Greeting */}
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {lang === 'id' ? 'Halo, saya' : "Hi, I'm"}
          </motion.p>

          {/* Name */}
          <motion.h1
            className={`${styles.name} font-display`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="gradient-text">Akbar Dwi</span>
            <br />
            <span>Pebriansyah</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            className={styles.titleRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className={styles.titleText}>{personalInfo.title[lang]}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {personalInfo.subtitle[lang]}
          </motion.p>

          {/* Location */}
          <motion.div
            className={styles.location}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <MapPin size={14} />
            <span>{personalInfo.location[lang]}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              id="hero-view-projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {lang === 'id' ? 'Lihat Proyek' : 'View Projects'}
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-outline"
              id="hero-contact-btn"
            >
              <Mail size={16} />
              {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={styles.socialRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
              id="hero-github-link"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              aria-label="Email"
              id="hero-email-link"
            >
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="WhatsApp"
              id="hero-whatsapp-link"
            >
              <Phone size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          className={styles.avatarCol}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarRing1} />
            <div className={styles.avatarRing2} />
            <div className={styles.avatarGlow} />
            <div className={styles.avatarFrame}>
              <Image
                src="/avatar.png"
                alt="Akbar Dwi Pebriansyah"
                width={340}
                height={340}
                className={styles.avatarImg}
                priority
              />
            </div>
            {/* Floating badges */}
            <motion.div
              className={`${styles.floatBadge} ${styles.badgeLaravel}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              🚀 Laravel
            </motion.div>
            <motion.div
              className={`${styles.floatBadge} ${styles.badgeNode}`}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              ⚡ Node.js
            </motion.div>
            <motion.div
              className={`${styles.floatBadge} ${styles.badgeGit}`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              📦 Git
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div
        className={`container ${styles.statsRow}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statValue}>
              {stat.value}
              <span className={styles.statSuffix}>{stat.suffix}</span>
            </span>
            <span className={styles.statLabel}>{stat.label[lang]}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <button className={styles.scrollIndicator} onClick={scrollToNext} aria-label="Scroll down">
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
