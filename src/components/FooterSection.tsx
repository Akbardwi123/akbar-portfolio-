'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { personalInfo } from '@/data/portfolio';
import { Mail, Phone, ArrowUp, Send, Check } from 'lucide-react';

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
import React, { useState } from 'react';
import styles from './FooterSection.module.css';

export default function FooterSection() {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className="bg-glow bg-glow-1" style={{ bottom: '-200px', right: '-100px' }} />
      
      <div className="container">
        {/* Contact Banner / Card */}
        <motion.div
          className={`glass-card ${styles.contactCard}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.cardGlow} />
          
          <div className={styles.cardContent}>
            <p className={styles.badge}>
              {lang === 'id' ? 'Mari Bekerja Sama' : 'Let\'s Work Together'}
            </p>
            
            <h2 className={`${styles.title} font-display`}>
              {lang === 'id'
                ? <>Tertarik untuk <span className="gradient-text">Merekrut</span> Saya?</>
                : <>Interested in <span className="gradient-text">Hiring</span> Me?</>}
            </h2>
            
            <p className={styles.desc}>
              {lang === 'id'
                ? 'Saya siap berkontribusi penuh sebagai Junior Web Developer. Jangan ragu untuk menghubungi saya melalui kontak di bawah ini!'
                : 'I am ready to contribute fully as a Junior Web Developer. Feel free to reach out to me through any of the channels below!'}
            </p>

            <div className={styles.actions}>
              {/* WhatsApp Button */}
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="contact-whatsapp-btn"
              >
                <Phone size={16} />
                WhatsApp (+62)
              </a>

              {/* Email Copy Button */}
              <button
                className="btn btn-outline"
                onClick={copyEmail}
                id="contact-copy-email-btn"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} style={{ color: '#22c55e' }} /> : <Mail size={16} />}
                {copied 
                  ? (lang === 'id' ? 'Email Disalin!' : 'Email Copied!') 
                  : (lang === 'id' ? 'Salin Email' : 'Copy Email')}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Links & Info */}
        <div className={styles.bottom}>
          <div className={styles.info}>
            <a href="#hero" className={styles.logo}>
              <span className={styles.logoIcon}>{'<'}</span>
              <span className="gradient-text font-display" style={{ fontWeight: 700 }}>
                {personalInfo.name.split(' ')[0]}
              </span>
              <span className={styles.logoIcon}>{'/>'}</span>
            </a>
            <p className={styles.tagline}>
              {personalInfo.title[lang]}
            </p>
          </div>

          {/* Socials */}
          <div className={styles.socials}>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
              id="footer-github-link"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              aria-label="Email"
              id="footer-email-link"
            >
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="WhatsApp"
              id="footer-whatsapp-link"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Copyright */}
        <div className={styles.copyrightRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <button
            className={styles.scrollTop}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            id="footer-scroll-top"
          >
            <span>{lang === 'id' ? 'Kembali ke atas' : 'Back to top'}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
