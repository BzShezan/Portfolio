"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = {
  github: "https://github.com/BzShezan",
  linkedin: "https://www.linkedin.com/in/bahadur-zamn-shezan-633141261/",
  scholar: "https://scholar.google.com/citations?user=17FIic0AAAAJ",
  email: "mailto:shezan348@gmail.com",
};

const publications = [
  {
    index: "01",
    area: "MEDICAL IMAGING / COMPUTER VISION",
    title: "Real-Time Brain Tumor Localization and Classification Using YOLOv11 and MONAI MedNeXt",
    summary: "A hybrid deep learning approach combining rapid tumor localization with 3D classification for medical imaging research.",
    tags: ["YOLOv11", "MONAI MedNeXt", "Computer Vision"],
    doi: "https://doi.org/10.1109/COMPAS67506.2025.11381706",
    code: "https://github.com/BzShezan/brain_tumor_system",
    mark: "BT",
  },
  {
    index: "02",
    area: "EDGE AI / ASSISTIVE TECHNOLOGY",
    title: "TinySenseNet: A Lightweight sEMG-IMU Fusion Network Using TinyML for Mechanical Arm Control in Low-Resource Settings",
    summary: "Exploring multimodal sensor fusion and compact neural networks for responsive mechanical arm control on constrained hardware.",
    tags: ["TinyML", "sEMG + IMU", "Sensor Fusion"],
    doi: "https://doi.org/10.1109/COMPAS67506.2025.11381831",
    mark: "TS",
  },
];

const projects = [
  {
    no: "01",
    category: "FEATURED / APPLIED AI",
    title: "AI Talent Match",
    description: "An AI powered recruitment and candidate matching platform, built with a team and recognized at ULAB's Spring 2026 CSE Project Competition.",
    tags: ["Applied AI", "Recruitment", "Team project"],
    award: "CHAMPION · ULAB CSE 2026",
    link: "https://cse.ulab.edu.bd/2026/04/16/cse-project-competition-held-ulab",
    linkText: "View award announcement",
    kind: "talent",
  },
  {
    no: "02",
    category: "AI SYSTEMS / RETRIEVAL",
    title: "Bangladesh Policy RAG System",
    description: "A document processing and retrieval system for Bangladesh policy PDFs, bringing together OCR, embeddings and hybrid search for grounded answers.",
    tags: ["Python", "RAG", "ChromaDB", "BM25"],
    link: "https://github.com/BzShezan/BD-Policy-RAG-System",
    linkText: "Explore repository",
    kind: "rag",
  },
  {
    no: "03",
    category: "SOFTWARE / WEB",
    title: "DS Interior Web Platform",
    description: "A responsive web experience for an interior design company, translating services and portfolio work into a clear online presence.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    link: "https://github.com/BzShezan/ds-interior-landing-page",
    linkText: "Explore repository",
    kind: "web",
  },
];

const skillGroups = [
  { title: "AI & RESEARCH", items: ["Machine Learning", "Deep Learning", "Computer Vision", "Medical Imaging", "TinyML", "Sensor Fusion"] },
  { title: "INTELLIGENT SYSTEMS", items: ["Retrieval-Augmented Generation", "Embeddings", "Hybrid Search", "OCR Pipelines", "Vector Databases"] },
  { title: "ENGINEERING", items: ["Python", "PyTorch", "OpenCV", "Flask", "Next.js", "Git & GitHub"] },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "talent") return <div className="project-visual visual-talent" aria-hidden="true"><div className="visual-grid"/><div className="talent-head"><span className="tiny-symbol">✳</span> TALENT / MATCH <span>●●●</span></div><div className="talent-label">INTELLIGENT MATCHING</div><div className="talent-center"><div className="avatar-shape">A</div><div className="connector-line"><i/><i/><i/></div><div className="match-shape"><span>94%</span><small>FIT SCORE</small></div></div><div className="talent-bottom"><span>PROFILE ANALYSIS</span><span>OPPORTUNITY MATCH</span></div></div>;
  if (kind === "rag") return <div className="project-visual visual-rag" aria-hidden="true"><div className="rag-top">BD / POLICY <span>RETRIEVAL SYSTEM</span></div><div className="rag-workflow"><div><span>01 / SOURCE</span><strong>PDF</strong></div><b>→</b><div><span>02 / PROCESS</span><strong>OCR</strong></div><b>→</b><div><span>03 / RETRIEVE</span><strong>RAG</strong></div></div><div className="rag-lines"><i/><i/><i/><i/></div><div className="rag-bottom">GROUNDED ANSWERS <span>↗</span></div></div>;
  return <div className="project-visual visual-web" aria-hidden="true"><div className="mock-window"><div className="mock-browser"><span>● ● ●</span><span>DS INTERIOR</span><span>☰</span></div><div className="mock-room"><div className="mock-light"/><div className="mock-panel"><small>CURATED SPACES</small><strong>Spaces that<br/>feel like home.</strong><i/></div><div className="mock-chair"/><div className="mock-floor"/></div></div></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const destination = (id: string) => {
      const section = document.getElementById(id);
      if (!section) return null;
      const header = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
      return Math.max(0, window.scrollY + section.getBoundingClientRect().top - header);
    };
    const jumpToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const top = destination(id);
      if (top !== null) window.scrollTo(0, top);
    };
    const initialFrame = window.requestAnimationFrame(jumpToHash);

    const navigate = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      const id = anchor?.getAttribute("href")?.slice(1);
      if (!id) return;
      const top = destination(id);
      if (top === null) return;
      event.preventDefault();
      window.cancelAnimationFrame(frame);
      if (window.location.hash !== `#${id}`) window.history.pushState(null, "", `#${id}`);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo(0, top);
        return;
      }
      const start = window.scrollY;
      const distance = top - start;
      const started = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - started) / 600, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) frame = window.requestAnimationFrame(step);
      };
      frame = window.requestAnimationFrame(step);
    };

    document.addEventListener("click", navigate);
    window.addEventListener("popstate", jumpToHash);
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.cancelAnimationFrame(frame);
      document.removeEventListener("click", navigate);
      window.removeEventListener("popstate", jumpToHash);
    };
  }, []);

  const nav = ["About", "Research", "Projects", "Experience", "Contact"];
  return <>
    <header className="site-header">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Shezan, back to top"><span className="brand-mark">S<span>.</span></span><span className="brand-word">SHEZAN<span>/PORTFOLIO</span></span></a>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        {nav.map((item) => <a className={activeSection === item.toLowerCase() ? "active" : ""} href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="mobile-social" href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
      <a className="header-cta" href={links.email}>Let&apos;s talk <Arrow diagonal /></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-art" aria-hidden="true"><div className="orb orb-1"/><div className="orb orb-2"/><div className="orbit orbit-1"/><div className="orbit orbit-2"/><span className="hero-art-cross">✳</span></div>
        <div className="container hero-inner"><div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/> BASED IN DHAKA, BD</div>
          <p className="hero-kicker">HELLO, I&apos;M</p>
          <h1>Bahadur<br/><em>Zamn</em> Shezan<span className="hero-period">.</span></h1>
          <div className="hero-portrait"><Image src="/images/shezan-portrait.webp" alt="Portrait of Bahadur Zamn Shezan" fill priority sizes="(max-width: 760px) 75vw, (max-width: 1100px) 40vw, 440px" /></div>
          <div className="hero-bottom"><div><p className="hero-role">AI/ML ENGINEER <span>·</span> SOFTWARE DEVELOPER <span>·</span> RESEARCHER</p><p className="hero-description">Turning research into intelligent systems that solve real-world problems.</p><div className="hero-actions"><a className="btn btn-primary" href="#projects">Explore my work <Arrow diagonal /></a><a className="btn btn-text" href="#research">View research <Arrow /></a></div></div><div className="hero-index"><span>SCROLL TO EXPLORE</span><span className="hero-down">↓</span></div></div>
        </div>
        <div className="hero-rail"><span>RESEARCH <i/> ENGINEERING <i/> IMPACT</span><span>© 2026 — BZS</span></div>
      </section>

      <section className="section about-section" id="about"><div className="container"><div className="section-top"><span className="section-number">01 / INTRODUCTION</span><span className="section-rule"/></div><div className="about-layout"><div><p className="overline">A LITTLE ABOUT ME</p><h2>Curiosity meets<br/><em>execution.</em></h2></div><div className="about-copy"><p className="large-copy">I&apos;m an AI/ML engineer, software developer and computer science student at the <strong>University of Liberal Arts Bangladesh.</strong></p><p>My work moves between research and implementation: from deep learning for medical imaging and lightweight assistive systems to practical retrieval and web applications. I enjoy making complex ideas useful, understandable and accessible.</p><a className="under-link" href={links.linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn <Arrow diagonal /></a></div></div><div className="stat-row"><div><strong>02</strong><span>IEEE CONFERENCE PAPERS</span></div><div><strong>01</strong><span>ULAB COMPETITION WIN</span></div><div><strong>03+</strong><span>FIELDS OF INTEREST</span></div></div></div></section>

      <section className="section research-section" id="research"><div className="container"><div className="section-top"><span className="section-number">02 / RESEARCH</span><span className="section-rule"/><span className="section-aside">PUBLISHED WORK · 2025</span></div><div className="section-heading"><div><p className="overline">PEER-REVIEWED PUBLICATIONS</p><h2>Research with<br/><em>purpose.</em></h2></div><p>Two IEEE COMPAS 2025 conference papers spanning medical imaging and resource-aware assistive AI.</p></div><div className="publication-list">{publications.map((paper) => <article className="publication" key={paper.index}><div className="paper-mark"><span>{paper.index}</span><strong>{paper.mark}</strong></div><div className="paper-content"><span className="paper-area">{paper.area}</span><h3>{paper.title}</h3><p>{paper.summary}</p><div className="tags">{paper.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="paper-actions"><span>IEEE COMPAS 2025</span><a href={paper.doi} target="_blank" rel="noreferrer" aria-label={`Read publication: ${paper.title}`}><Arrow diagonal /></a>{paper.code && <a className="implementation-link" href={paper.code} target="_blank" rel="noreferrer">Related code ↗</a>}</div></article>)}</div><a className="under-link" href={links.scholar} target="_blank" rel="noreferrer">View Google Scholar profile <Arrow diagonal /></a></div></section>

      <section className="section projects-section" id="projects"><div className="container"><div className="section-top"><span className="section-number">03 / SELECTED WORK</span><span className="section-rule"/><span className="section-aside">BUILT TO BE USEFUL</span></div><div className="section-heading"><div><p className="overline">FROM IDEAS TO IMPLEMENTATION</p><h2>Selected <em>projects.</em></h2></div><p>A focused selection of AI systems and software work, from award-winning teamwork to document intelligence.</p></div><div className="project-grid">{projects.map((project) => <article className={`project-card project-${project.kind}`} key={project.no}><ProjectVisual kind={project.kind}/><div className="project-card-body"><div className="project-meta"><span>{project.category}</span><span>/{project.no}</span></div><h3>{project.title}</h3>{project.award && <span className="award-badge">✳ &nbsp;{project.award}</span>}<p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkText} <Arrow diagonal /></a></div></article>)}</div><div className="more-work"><span>INTERESTED IN THE REST?</span><a href={links.github} target="_blank" rel="noreferrer">Explore more on GitHub <Arrow diagonal /></a></div></div></section>

      <section className="section experience-section" id="experience"><div className="container"><div className="section-top"><span className="section-number">04 / JOURNEY</span><span className="section-rule"/></div><div className="journey-layout"><div><p className="overline">THE PATH SO FAR</p><h2>Experience<br/>& <em>education.</em></h2><div className="journey-decoration" aria-hidden="true">✳</div></div><div className="timeline"><div className="timeline-group"><span className="timeline-label">EXPERIENCE</span><div className="timeline-item"><span className="timeline-date">MAY 2025 — JAN 2026</span><h3>Researcher</h3><a href="https://www.linkedin.com/company/tiny-neurons-research-group/" target="_blank" rel="noreferrer">Tiny Neurons Research Group ↗</a><p>Contributed to applied AI research in computer vision, medical imaging and lightweight intelligent systems, leading to two co-authored IEEE COMPAS papers.</p></div></div><div className="timeline-group"><span className="timeline-label">EDUCATION</span><div className="timeline-item"><span className="timeline-date">2022 — EXPECTED MAY 2027</span><h3>B.Sc. in Computer Science & Engineering</h3><span className="timeline-place">University of Liberal Arts Bangladesh</span></div><div className="timeline-item"><span className="timeline-date">2020</span><h3>Higher Secondary Certificate</h3><span className="timeline-place">Dania College <i>·</i> GPA 4.94</span></div><div className="timeline-item"><span className="timeline-date">2018</span><h3>Secondary School Certificate</h3><span className="timeline-place">Shamsul Hoque Khan School & College <i>·</i> GPA 4.72</span></div></div></div></div></div></section>

      <section className="section recognition-section"><div className="container"><div className="section-top"><span className="section-number">05 / RECOGNITION</span><span className="section-rule"/></div><div className="section-heading"><div><p className="overline">MILESTONES</p><h2>Work that <em>stands out.</em></h2></div></div><div className="award-list"><div><span>2026 / 01</span><strong>Champion</strong><p>ULAB CSE Project Competition · AI Talent Match</p><a href="https://cse.ulab.edu.bd/2026/04/16/cse-project-competition-held-ulab" target="_blank" rel="noreferrer" aria-label="ULAB award announcement">↗</a></div><div><span>2026 / 02</span><strong>5th Place</strong><p>DUET CSE Carnival · AI Talent Match</p><span className="award-icon">✳</span></div><div><span>2025 / 03</span><strong>2 Publications</strong><p>IEEE 2nd International Conference on Computing, Applications and Systems</p><a href="#research" aria-label="View research">↗</a></div></div><p className="campus-note"><span>CAMPUS INVOLVEMENT</span> &nbsp; Volunteered with the ULAB Film Club during Club Day.</p></div></section>

      <section className="section skills-section" id="skills"><div className="container"><div className="section-top"><span className="section-number">06 / CAPABILITIES</span><span className="section-rule"/></div><div className="skills-layout"><div><p className="overline">TOOLS & DISCIPLINES</p><h2>What I<br/><em>work with.</em></h2><p>Skills grounded in published research and hands-on projects.</p></div><div className="skill-groups">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><div className="skill-group-title"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-chips">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></div></section>

      <section className="section contact-section" id="contact"><div className="container"><div className="section-top"><span className="section-number">07 / CONNECT</span><span className="section-rule"/><span className="section-aside">LET'S BUILD SOMETHING MEANINGFUL</span></div><p className="overline">HAVE A PROJECT IN MIND?</p><h2>Let&apos;s make<br/><em>it happen.</em></h2><div className="contact-bottom"><a className="contact-email" href={links.email}>shezan348@gmail.com <Arrow diagonal /></a><div className="contact-links"><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={links.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a></div></div></div></section>
    </main>
    <footer className="footer"><div className="container"><a href="#home" className="footer-brand">S<span>.</span></a><span>BAHADUR ZAMN SHEZAN © 2026</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </>;
}
