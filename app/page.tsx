"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 45);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const selectors = [
      ".about-copy > :not(.eyebrow)", ".about-skills > :not(.eyebrow)",
      ".service-card", ".research-copy > h2", ".research-copy > .section-intro",
      ".paper", ".research-copy > .text-link", ".projects-heading > *",
      ".project-card", ".all-work", ".experience-copy > :not(.eyebrow)",
      ".education-copy > :not(.eyebrow)", ".recognition-inner > h2",
      ".recognition-grid > *", ".campus-note", ".skills-section h2",
      ".skills-intro", ".skill-group", ".contact-form-panel > :not(.eyebrow)",
      ".contact-info > :not(.eyebrow)",
    ];
    const targets = document.querySelectorAll<HTMLElement>(selectors.join(","));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });

    targets.forEach((target) => {
      target.classList.add("scroll-reveal");
      if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
        target.classList.add("is-visible");
      } else {
        observer.observe(target);
      }
    });
    document.documentElement.classList.add("reveal-ready");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const destination = (id: string) => {
      const section = document.getElementById(id);
      if (!section) return null;
      const header = 66;
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
      if (window.location.hash !== "#" + id) window.history.pushState(null, "", "#" + id);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { window.scrollTo(0, top); return; }
      const start = window.scrollY;
      const distance = top - start;
      const started = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - started) / 650, 1);
        window.scrollTo(0, start + distance * (1 - Math.pow(1 - progress, 3)));
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

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent("Portfolio inquiry from " + name);
    const body = encodeURIComponent(message + "\n\nFrom: " + name + "\nReply to: " + email);
    window.location.href = links.email + "?subject=" + subject + "&body=" + body;
  };

  const nav = [["Home", "home"], ["About Me", "about"], ["Research", "research"], ["Projects", "projects"], ["Experiences", "experience"], ["Contact", "contact"]];
  return <>
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>Shezan<span>.</span></a>
      <nav className={"nav" + (menuOpen ? " open" : "")} aria-label="Primary navigation">
        {nav.map(([label, id]) => <a className={activeSection === id ? "active" : ""} href={"#" + id} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <button className={"menu-toggle" + (menuOpen ? " open" : "")} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-photo photo-panel"><Image src="/images/shezan-workspace-hq.webp" alt="Bahadur Zamn Shezan seated at a desk" fill priority unoptimized sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="hero-copy"><div className="hero-content"><p className="eyebrow">WELCOME TO MY PORTFOLIO</p><h1>Hello, I&apos;m <strong>Bahadur Zamn Shezan.</strong></h1><p className="hero-role">AI/ML Engineer <span>/</span> Software Developer <span>/</span> Researcher</p><p className="hero-description">Turning research into intelligent systems that solve real-world problems.</p><a className="outline-button" href="#about">Get started <span>→</span></a></div></div>
      </section>

      <section className="about-grid" id="about">
        <div className="about-copy panel-pad"><p className="eyebrow">01 / ABOUT ME</p><h2>Curiosity meets <em>execution.</em></h2><p className="lead">I&apos;m an AI/ML engineer, software developer and computer science student at the <strong>University of Liberal Arts Bangladesh.</strong></p><p>My work moves between research and implementation: from deep learning for medical imaging and lightweight assistive systems to practical retrieval and web applications. I enjoy making complex ideas useful, understandable and accessible.</p><a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn <Arrow diagonal /></a></div>
        <div className="about-photo photo-panel"><Image src="/images/shezan-portrait-hq.webp" alt="Portrait of Bahadur Zamn Shezan" fill unoptimized sizes="(max-width: 760px) 50vw, 25vw" /></div>
        <div className="about-skills panel-pad"><p className="eyebrow">THE FOCUS</p><h2>What I do.</h2><div><span>01</span><strong>AI & Research</strong><small>Machine learning / Medical imaging</small></div><div><span>02</span><strong>Intelligent Systems</strong><small>RAG / Retrieval / TinyML</small></div><div><span>03</span><strong>Engineering</strong><small>Software / Web applications</small></div><a href="#skills">Explore my skills <Arrow diagonal /></a></div>
      </section>

      <section className="services" aria-label="Areas of work"><div className="service-card service-ochre"><span className="service-icon" aria-hidden="true">✳</span><h3>AI Research</h3><p>Exploring deep learning, medical imaging and resource-aware systems.</p></div><div className="service-card service-coral"><span className="service-icon" aria-hidden="true">◈</span><h3>Intelligent Systems</h3><p>Building retrieval, search and assistive applications that work in practice.</p></div><div className="service-card service-dark"><span className="service-icon" aria-hidden="true">⌘</span><h3>Software Development</h3><p>Turning complex ideas into useful, approachable digital experiences.</p></div><div className="service-card service-light"><span className="service-icon" aria-hidden="true">◎</span><h3>Collaboration</h3><p>Working across research and engineering to bring ideas into the world.</p></div></section>

      <section className="split-section research-section" id="research"><div className="research-photo photo-panel"><Image src="/images/research-workspace.webp" alt="Research workspace with laptop and notes" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="research-copy panel-pad"><p className="eyebrow">02 / PUBLISHED RESEARCH</p><h2>Research with <em>purpose.</em></h2><p className="section-intro">Two IEEE COMPAS 2025 conference papers spanning medical imaging and resource-aware assistive AI.</p><div className="paper-list">{publications.map((paper) => <article className="paper" key={paper.index}><span className="paper-index">{paper.index} / {paper.area}</span><h3>{paper.title}</h3><p>{paper.summary}</p><div className="tags">{paper.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="paper-links"><a href={paper.doi} target="_blank" rel="noreferrer">Read IEEE paper <Arrow diagonal /></a>{paper.code && <a href={paper.code} target="_blank" rel="noreferrer">Related code <Arrow diagonal /></a>}</div></article>)}</div><a className="text-link" href={links.scholar} target="_blank" rel="noreferrer">Google Scholar profile <Arrow diagonal /></a></div></section>

      <section className="projects-section" id="projects"><div className="wide-container"><div className="projects-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Ideas made <em>real.</em></h2></div><p>A focused selection of AI systems and software work, from award-winning teamwork to document intelligence.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.no}><ProjectVisual kind={project.kind}/><div className="project-body"><span className="project-category">{project.no} / {project.category}</span><h3>{project.title}</h3>{project.award && <span className="award-badge">✳ {project.award}</span>}<p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkText} <Arrow diagonal /></a></div></article>)}</div><a className="all-work" href={links.github} target="_blank" rel="noreferrer">More work on GitHub <Arrow diagonal /></a></div></section>

      <section className="split-section experience-section" id="experience"><div className="experience-photo photo-panel"><Image src="/images/shezan-workspace-hq.webp" alt="Shezan working at a desk" fill unoptimized sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="experience-copy panel-pad"><p className="eyebrow">04 / MY JOURNEY</p><h2>My <em>experience.</em></h2><p className="section-intro">Research and engineering, from exploration to real-world applications.</p><div className="experience-item"><span className="item-icon" aria-hidden="true">✦</span><div><h3>Researcher <small>May 2025 — Jan 2026</small></h3><a href="https://www.linkedin.com/company/tiny-neurons-research-group/" target="_blank" rel="noreferrer">Tiny Neurons Research Group <Arrow diagonal /></a><p>Contributed to applied AI research in computer vision, medical imaging and lightweight intelligent systems, leading to two co-authored IEEE COMPAS papers.</p></div></div></div></section>

      <section className="split-section education-section"><div className="education-copy panel-pad"><p className="eyebrow">05 / LEARNING</p><h2>My <em>education.</em></h2><div className="education-item"><span className="item-icon" aria-hidden="true">✦</span><div><span className="date">2022 — EXPECTED MAY 2027</span><h3>B.Sc. in Computer Science & Engineering</h3><p>University of Liberal Arts Bangladesh</p></div></div><div className="education-item"><span className="item-icon" aria-hidden="true">✦</span><div><span className="date">2020</span><h3>Higher Secondary Certificate</h3><p>Dania College · GPA 4.94</p></div></div><div className="education-item"><span className="item-icon" aria-hidden="true">✦</span><div><span className="date">2018</span><h3>Secondary School Certificate</h3><p>Shamsul Hoque Khan School & College · GPA 4.72</p></div></div></div><div className="education-photo photo-panel"><Image src="/images/research-workspace.webp" alt="Workspace with laptop and study materials" fill sizes="(max-width: 760px) 100vw, 50vw" /></div></section>

      <section className="recognition-section" id="recognition"><div className="recognition-backdrop"/><div className="recognition-inner"><p className="eyebrow">06 / RECOGNITION</p><h2>Work that <em>stands out.</em></h2><div className="recognition-grid"><div><strong>Champion</strong><p>ULAB CSE Project Competition · AI Talent Match</p><a href="https://cse.ulab.edu.bd/2026/04/16/cse-project-competition-held-ulab" target="_blank" rel="noreferrer">Award announcement <Arrow diagonal /></a></div><div><strong>5th Place</strong><p>DUET CSE Carnival · AI Talent Match</p></div><div><strong>2 Publications</strong><p>IEEE 2nd International Conference on Computing, Applications and Systems</p><a href="#research">View research <Arrow diagonal /></a></div></div><p className="campus-note">CAMPUS INVOLVEMENT &nbsp;·&nbsp; Volunteered with the ULAB Film Club during Club Day.</p></div></section>

      <section className="skills-section" id="skills"><div className="wide-container"><p className="eyebrow">07 / CAPABILITIES</p><h2>What I <em>work with.</em></h2><p className="skills-intro">Skills grounded in published research and hands-on projects.</p><div className="skill-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><div className="skill-chips">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="contact-form-panel panel-pad"><p className="eyebrow">08 / CONTACT</p><h2>Let&apos;s make <em>it happen.</em></h2><p>Have a project in mind? Write me a note and your email app will open with the message ready to send.</p><form onSubmit={sendMessage}><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" placeholder="Your name" required/><label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" placeholder="Your email" required/><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" placeholder="Tell me about your idea" rows={4} required/><button className="outline-button light-button" type="submit">Open email to send <span>→</span></button></form></div><div className="contact-photo photo-panel"><Image src="/images/research-workspace.webp" alt="Warm workspace" fill sizes="(max-width: 760px) 100vw, 25vw" /></div><div className="contact-info panel-pad"><p className="eyebrow">LET&apos;S CONNECT</p><h2>Say hello.</h2><div className="contact-detail"><span>EMAIL</span><a href={links.email}>shezan348@gmail.com</a></div><div className="contact-detail"><span>LOCATION</span><p>Dhaka, Bangladesh</p></div><div className="contact-detail"><span>FOLLOW</span><a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={links.scholar} target="_blank" rel="noreferrer">Google Scholar <Arrow diagonal /></a></div></div></section>
    </main>
    <footer className="footer"><span>Bahadur Zamn Shezan © 2026</span><a href="#home">Back to top ↑</a></footer>
  </>;
}
