'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/context/LangContext';
import { navLinks, personalInfo } from '@/data/portfolio';
import { Menu, X, Globe } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
          <span className={styles.logoIcon}>{'<'}</span>
          <span className="gradient-text font-display" style={{ fontWeight: 700 }}>
            {personalInfo.name.split(' ')[0]}
          </span>
          <span className={styles.logoIcon}>{'/>'}</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.navLink} ${activeSection === href.slice(1) ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label[lang]}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Language Toggle */}
          <button
            className={styles.langBtn}
            onClick={toggleLang}
            aria-label="Toggle language"
            id="lang-toggle"
          >
            <Globe size={14} />
            <span>{lang === 'id' ? 'EN' : 'ID'}</span>
          </button>

          {/* CTA */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.ctaBtn}`}
            id="nav-github-btn"
          >
            GitHub
          </a>

          {/* Mobile Menu */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`${styles.mobileLink} ${activeSection === href.slice(1) ? styles.active : ''}`}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label[lang]}
          </a>
        ))}
        <div className={styles.mobileDivider} />
        <button className={styles.mobileLangBtn} onClick={toggleLang}>
          <Globe size={16} />
          {lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
        </button>
      </div>
    </header>
  );
}
