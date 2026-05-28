'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import FooterSection from '@/components/FooterSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.appContainer}>
      {/* Background Decorators */}
      <div className="bg-glow bg-glow-1" style={{ top: '15%' }} />
      <div className="bg-glow bg-glow-2" style={{ top: '45%' }} />
      <div className="bg-glow bg-glow-1" style={{ top: '75%' }} />
      
      {/* Header / Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main className={styles.main}>
        {/* 1. Hero */}
        <HeroSection />

        <div className="divider" />

        {/* 2. About */}
        <AboutSection />

        <div className="divider" />

        {/* 3. Experience */}
        <ExperienceSection />

        <div className="divider" />

        {/* 4. Projects */}
        <ProjectsSection />

        <div className="divider" />

        {/* 5. Certifications */}
        <CertificationsSection />

        <div className="divider" />

        {/* 6. Skills */}
        <SkillsSection />

        <div className="divider" />

        {/* 7. Education */}
        <EducationSection />
      </main>

      {/* 8. Footer / Contact */}
      <FooterSection />
    </div>
  );
}
