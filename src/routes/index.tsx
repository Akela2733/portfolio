import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, PenTool } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import bloomcareMockup from "@/assets/bloomcare-mockup.png";
import fragwaterMockup from "@/assets/fragwater-mockup.png";
import ecosphereCollage from "@/assets/ecosphere-collage.png";
import ServicesSection from "@/components/services";
// import ContentCreationSection from "@/components/content-creation";
import ecosphere1 from "@/assets/ecosphere-1.png";
import ecosphere2 from "@/assets/ecosphere-2.png";
import ecosphere3 from "@/assets/ecosphere-3.png";
import liyoCollage from "@/assets/liyo-collage.png";
import byowCollage from "@/assets/byow-collage.png";
import velvetCover from "@/assets/velvet & bars cover.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakuni Akela — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sakuni Akela — Full-stack developer engineering scalable web applications.",
      },
    ],
  }),
  component: Portfolio,
});

function useScrollPosition() {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
}

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

type ThemeMode = "2D" | "3D";
export const ThemeContext = React.createContext<{
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}>({
  theme: "2D",
  setTheme: () => {},
});

function Nav() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`fixed top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${
      theme === "2D" ? "bg-background/80 border-border/40" : "bg-slate-950/80 border-slate-900"
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left Badge */}
        <div className={`hidden sm:flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-display-blackout transition-all shadow-sm ${
          theme === "2D" ? "border-border bg-white text-foreground" : "border-slate-800 bg-slate-900 text-slate-200"
        }`}>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for New Project
        </div>

        {/* Brand visual watermark on mobile */}
        <div className="sm:hidden font-display-blackout text-xs uppercase tracking-wider">
          /SAKUNI.A
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-display-blackout tracking-wider text-muted-foreground uppercase">
          <a href="#about" className={`hover:text-foreground transition-colors ${theme === "3D" ? "hover:text-white" : ""}`}>
            About <span className="text-muted-foreground/60">[2y+]</span>
          </a>
          <a href="#skills" className={`hover:text-foreground transition-colors ${theme === "3D" ? "hover:text-white" : ""}`}>
            Skills <span className="text-muted-foreground/60">[6]</span>
          </a>
          <a href="#work" className={`hover:text-foreground transition-colors ${theme === "3D" ? "hover:text-white" : ""}`}>
            Work <span className="text-muted-foreground/60">[4]</span>
          </a>
          <a href="#service" className={`hover:text-foreground transition-colors ${theme === "3D" ? "hover:text-white" : ""}`}>
            Services
          </a>
          {/* <a href="#creative" className={`hover:text-foreground transition-colors ${theme === "3D" ? "hover:text-white" : ""}`}>
            Creative
          </a> */}
          <a href="#contact" className={`hover:text-foreground transition-colors ${theme === "3D" ? "hover:text-white" : ""}`}>
            Contact
          </a>
        </nav>

        {/* Right Switch & CTAs */}
        <div className="flex items-center gap-3">
          {/* Custom Theme Switcher Single Circular Button with Icon */}
          <button
            onClick={() => setTheme(theme === "2D" ? "3D" : "2D")}
            className={`p-2.5 border rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
              theme === "2D" 
                ? "border-border bg-zinc-100 text-foreground hover:bg-zinc-200" 
                : "border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:border-slate-700"
            }`}
            title={theme === "2D" ? "Switch to 3D Professional Theme" : "Switch to 2D Hand-drawn Theme"}
          >
            {theme === "2D" ? (
              <Sparkles className="h-4 w-4 text-indigo-500 animate-pulse" />
            ) : (
              <PenTool className="h-4 w-4 text-[#8b5cf6]" />
            )}
          </button>

          {/* Desktop CTA */}
          <a
            href="mailto:sakuniakela273@gmail.com"
            className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-display-blackout uppercase tracking-wider rounded-full px-5 py-2.5 transition-all shadow-sm ${
              theme === "2D" 
                ? "bg-foreground text-background hover:bg-zinc-800" 
                : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-md shadow-indigo-500/20"
            }`}
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2.5 rounded-full border flex items-center justify-center transition-all cursor-pointer shadow-sm ${
              theme === "2D" 
                ? "border-border bg-white text-foreground hover:bg-zinc-50" 
                : "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation links panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t ${
        isMenuOpen ? "max-h-[350px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
      } ${
        theme === "2D" 
          ? "border-border bg-white text-foreground" 
          : "border-slate-900 bg-slate-950 text-slate-100"
      }`}>
        <div className="flex flex-col gap-5 px-6 text-xs font-display-blackout uppercase tracking-widest">
          <a 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors py-1.5 ${theme === "3D" ? "hover:text-[#8b5cf6]" : "hover:text-zinc-500"}`}
          >
            About <span className="text-muted-foreground/60">[2y+]</span>
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors py-1.5 ${theme === "3D" ? "hover:text-[#8b5cf6]" : "hover:text-zinc-500"}`}
          >
            Skills <span className="text-muted-foreground/60">[6]</span>
          </a>
          <a 
            href="#work" 
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors py-1.5 ${theme === "3D" ? "hover:text-[#8b5cf6]" : "hover:text-zinc-500"}`}
          >
            Work <span className="text-muted-foreground/60">[4]</span>
          </a>
          <a 
            href="#service" 
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors py-1.5 ${theme === "3D" ? "hover:text-[#8b5cf6]" : "hover:text-zinc-500"}`}
          >
            Services
          </a>
          {/* <a 
            href="#creative" 
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors py-1.5 ${theme === "3D" ? "hover:text-[#8b5cf6]" : "hover:text-zinc-500"}`}
          >
            Creative
          </a> */}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors py-1.5 ${theme === "3D" ? "hover:text-[#8b5cf6]" : "hover:text-zinc-500"}`}
          >
            Contact
          </a>

          {/* Mobile Talk CTA inside menu dropdown */}
          <div className="pt-2">
            <a
              href="mailto:sakuniakela273@gmail.com"
              className={`inline-flex w-full justify-center items-center gap-1.5 text-center text-xs font-display-blackout uppercase tracking-wider rounded-full px-5 py-3 transition-all shadow-sm ${
                theme === "2D" 
                  ? "bg-foreground text-background hover:bg-zinc-800" 
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-md shadow-indigo-500/20"
              }`}
            >
              Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { theme } = React.useContext(ThemeContext);
  const scrollY = useScrollPosition();

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden"
    >
      {/* Backdrop Accent Grid */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
        theme === "2D" 
          ? "bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" 
          : "bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"
      }`} />

      {/* Futuristic Background Glow behind portrait under 3D theme */}
      {theme === "3D" && (
        <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 to-indigo-600/0 rounded-full blur-[120px] w-[500px] h-[500px] pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
      )}

      <div className="relative w-full max-w-6xl px-6 flex flex-col justify-end flex-grow mt-2">
        {/* Huge Center Name Header (Background Layer) */}
        <div 
          className="hidden md:block absolute inset-x-0 top-[9%] z-0 select-none pointer-events-none text-center transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h1 className="text-[clamp(2.2rem,7.2vw,5.8rem)] tracking-wider leading-none flex justify-center gap-x-4 whitespace-nowrap">
            <span className={theme === "2D" ? "font-display text-foreground" : "font-sans font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"}>
              SAKUNI
            </span>
            <span className={theme === "2D" ? "font-display-blackout text-foreground" : "font-sans font-black text-white"}>
              AKELA
            </span>
          </h1>
        </div>

        {/* 3-Column Interactive Grid Layout (Foreground Layer) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10 mt-16">
          {/* Left Column: Role & Bio */}
          <div className="col-span-12 md:col-span-4 space-y-4 pb-2 md:pb-6">
            <div className="space-y-1">
              <h2 className="font-display-blackout text-2xl tracking-wide">
                Full-stack Developer
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
                Engineering scalable production systems with high-performance frameworks and clean
                business logic mapping.
              </p>
            </div>
            <div>
              <a
                href="mailto:sakuniakela273@gmail.com"
                className={`inline-flex items-center gap-2 text-xs font-display-blackout uppercase tracking-wider rounded-full px-5 py-3 transition-all ${
                  theme === "2D"
                    ? "bg-foreground text-background hover:bg-zinc-800 animate-pulse shadow-md"
                    : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-indigo-500/25"
                }`}
              >
                Let's collaborate <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Center Column: Portrait Cutout */}
          <div 
            className="col-span-12 md:col-span-4 flex justify-center items-end h-[340px] sm:h-[430px] transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${scrollY * -0.06}px)` }}
          >
            <img
              src={heroPortrait}
              alt="Portrait of Sakuni Akela"
              className={`h-full w-auto object-contain filter contrast-[1.03] brightness-[0.98] transition-all duration-300 ${
                theme === "2D" 
                  ? "grayscale drop-shadow-[0_15px_30px_rgba(9,9,11,0.18)]" 
                  : "grayscale-0 drop-shadow-[0_20px_40px_rgba(99,102,241,0.15)]"
              }`}
            />
          </div>

          {/* Right Column: Social Pills */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-2.5 md:items-end pb-2 md:pb-6">
            {[
              {
                label: "GitHub",
                href: "https://github.com/Akela2733",
                icon: <Github className="h-3.5 w-3.5 text-muted-foreground" />,
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/sakuni-akela-80500a241",
                icon: <Linkedin className="h-3.5 w-3.5 text-muted-foreground" />,
              },
              {
                label: "Email",
                href: "mailto:sakuniakela273@gmail.com",
                icon: <Mail className="h-3.5 w-3.5 text-muted-foreground" />,
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-between gap-6 px-5 py-2.5 rounded-full text-xs font-display-blackout uppercase tracking-wider transition-all shadow-sm w-full md:w-[220px] ${
                  theme === "2D"
                    ? "border border-border bg-white text-foreground hover:bg-zinc-50 hover:border-foreground"
                    : "border border-slate-800 bg-slate-900/40 text-slate-200 hover:border-slate-700 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {social.icon}
                  {social.label}
                </span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground/60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: "EcoSphere - Environmental & Sustainable Living Platform",
    category: "Real Project",
    summary:
      "A community-first sustainability platform designed to make eco-conscious living feel clear, hopeful, and actionable.",
    year: "2024",
    role: "Frontend & UI Systems",
    tags: ["React", "Tailwind CSS", "Netlify"],
    images: [ecosphereCollage, ecosphere1, ecosphere2, ecosphere3],
    liveUrl: "https://ecosphere-web.netlify.app/",
    gitUrl: "https://github.com/Akela2733/ecosphere-website.git",
  },
  {
    id: 2,
    title: "Liyo Salon - Premium Flagship Hair Experience",
    category: "Real Project",
    summary:
      "A flagship console booking application and visual landing built around luxury salon bookings and personalized scheduling.",
    year: "2024",
    role: "Frontend Engineer",
    tags: ["React", "Tailwind CSS", "Vercel"],
    images: [liyoCollage],
    liveUrl: "https://liyo-salon.vercel.app/",
    gitUrl: "https://github.com/Akela2733/Liyo-salon.git",
  },
  {
    id: 3,
    title: "BYOW - Custom Design & Agency Showcase",
    category: "Real Project",
    summary:
      "A high-touch agency landing and products platform built to showcase blueprinting services, smooth interactions, and fast production deliveries.",
    year: "2024",
    role: "Frontend Developer",
    tags: ["Vite", "Tailwind CSS", "Vercel"],
    images: [byowCollage],
    liveUrl: "https://byow.lk/",
    gitUrl: "https://github.com/codezelat/byow-static-site.git",
  },
  {
    id: 4,
    title: "Velvet & Brass - Artisanal Espresso Bar",
    category: "Real Project",
    summary:
      "A luxury coffee shop web platform featuring online ordering, custom drink builders, and real-time extraction tracking for premium artisanal espresso experiences.",
    year: "2025",
    role: "Full-Stack Developer",
    tags: ["React", "Tailwind CSS", "Vercel"],
    images: [velvetCover],
    liveUrl: "https://velvet-brass-espresso-bar.vercel.app/",
    gitUrl: "https://github.com/Akela2733/Velvet---Brass-Espresso-Bar.git",
  },
];

function ProjectCard({ project }: { project: any }) {
  const { theme } = React.useContext(ThemeContext);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!isHovered || !project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, project.images]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  return (
    <div className="group block space-y-4">
      {/* Image Container Card */}
      <a
        href={project.liveUrl && project.liveUrl !== "#" ? project.liveUrl : "#"}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative aspect-[4/3] w-full block overflow-hidden rounded-2xl transition-all duration-500 ${
          theme === "2D"
            ? "border border-border/85 bg-white p-4 shadow-sm group-hover:shadow-md"
            : "border border-slate-800 bg-slate-900/30 p-4 shadow-xl backdrop-blur-md hover:border-slate-700"
        }`}
      >
        <div className={`w-full h-full overflow-hidden rounded-xl relative border ${
          theme === "2D" ? "bg-zinc-50 border-border/40" : "bg-slate-950 border-slate-900"
        }`}>
          {project.images.map((img: string, idx: number) => (
            <img
              key={idx}
              src={img}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Hover Overlay Circular Arrow */}
          <div className="absolute bottom-4 right-4 h-10 w-10 bg-white rounded-full border border-border flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
            <ArrowUpRight className="h-4 w-4 text-foreground" />
          </div>
        </div>
      </a>

      {/* Text Metadata */}
      <div className="space-y-2 px-1">
        <h3 className={`font-sans text-base font-semibold tracking-tight transition-colors ${
          theme === "2D" ? "text-foreground hover:text-zinc-800" : "text-white hover:text-slate-200"
        }`}>
          <a
            href={project.liveUrl && project.liveUrl !== "#" ? project.liveUrl : "#"}
            target="_blank"
            rel="noreferrer"
          >
            {project.title}
          </a>
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {project.year && <span>{project.year}</span>}
          {project.role && <span>• {project.role}</span>}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1.5">
          {/* Tags */}
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-display-blackout uppercase tracking-wider ${
                theme === "2D"
                  ? "border border-border bg-white text-muted-foreground"
                  : "border border-slate-800 bg-slate-900 text-slate-400"
              }`}
            >
              {tag}
            </span>
          ))}

          <span className="flex-grow" />

          {/* Links */}
          {project.gitUrl && project.gitUrl !== "#" && (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-display-blackout uppercase tracking-wider transition-all shadow-sm ${
                theme === "2D"
                  ? "border border-border bg-white text-foreground hover:bg-zinc-50 hover:border-foreground"
                  : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-display-blackout uppercase tracking-wider transition-all shadow-sm ${
                theme === "2D"
                  ? "bg-foreground text-background hover:bg-zinc-800"
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-md shadow-indigo-500/20"
              }`}
            >
              Live Demo <ArrowUpRight className="h-2.5 w-2.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SelectedWork() {
  const { theme } = React.useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );

  return (
    <section id="work" className={`py-24 border-t transition-colors duration-300 ${
      theme === "2D" ? "border-border/40 bg-zinc-50/50" : "border-slate-900 bg-slate-950"
    }`}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Layered Title Block */}
        <div className="relative mb-16 select-none text-center md:text-left">
          {/* Background outline word */}
          <span className={`font-display-watermark text-[clamp(4rem,12vw,9.5rem)] block leading-none tracking-wider transition-all ${
            theme === "2D" ? "text-transparent [-webkit-text-stroke:1px_rgba(9,9,11,0.12)]" : "text-transparent [-webkit-text-stroke:1px_rgba(156,163,175,0.35)]"
          }`}>
            PORTFOLIO
          </span>
          {/* Foreground solid title */}
          <h2 className={`font-display-blackout text-2xl md:text-3xl uppercase tracking-widest leading-none mt-[-2rem] md:mt-[-3.5rem] relative z-10 pl-2 ${
            theme === "2D" ? "text-foreground" : "text-white"
          }`}>
            /SELECTED WORK
          </h2>
        </div>

        {/* Categories Bar */}
        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 pb-6 border-b ${
          theme === "2D" ? "border-border/60" : "border-slate-900"
        }`}>
          {/* Left Filter Tabs */}
          <div className="flex items-center gap-6 text-xs font-display-blackout tracking-wider uppercase">
            {["All", "Real Project", "Exploration"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`transition-colors cursor-pointer py-1 ${
                  theme === "2D"
                    ? activeFilter === cat
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    : activeFilter === cat
                      ? "text-white border-b-2 border-white"
                      : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right CTAs */}
          <div>
            <a
              href="#all-work"
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-display-blackout uppercase tracking-wider transition-all shadow-sm ${
                theme === "2D"
                  ? "border border-border bg-white text-foreground hover:bg-zinc-50 hover:border-foreground"
                  : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              View All Work <ArrowUpRight className="h-3 w-3 text-muted-foreground/80" />
            </a>
          </div>
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredProjects.map((project, idx) => {
            const isLastOdd = idx === filteredProjects.length - 1 && filteredProjects.length % 2 !== 0;
            return (
              <div 
                key={project.id} 
                className={isLastOdd ? "md:col-span-2 flex justify-center w-full" : "w-full"}
              >
                <div className={isLastOdd ? "w-full md:max-w-[calc(50%-16px)]" : "w-full"}>
                  <ProjectCard project={project} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const experienceItems = [
  {
    company: "MORAI",
    role: "Full-stack Developer (Full-time)",
    focus: "Full production ownership, core feature engineering, architectural scalability.",
    dates: "Jan 2026 – Present",
    image: ecosphereCollage,
  },
  {
    company: "Codezela Technologies",
    role: "Digital Transformation Consultant",
    focus: "Business infrastructure analysis, modern web tech migration strategy, system prototyping.",
    dates: "Aug 2025 – Jan 2026",
    image: liyoCollage,
  },
  {
    company: "Codezela Technologies",
    role: "Associate Full-Stack Developer",
    focus: "Rapid feature deployment, full-stack database integration, interface development.",
    dates: "May 2025 – Aug 2025",
    image: bloomcareMockup,
  },
  {
    company: "Codezela Technologies",
    role: "Frontend Developer (Internship)",
    focus: "Component optimization, layout design implementation, frontend system logic.",
    dates: "Aug 2024 – Jun 2025",
    image: fragwaterMockup,
  },
];

function Experience() {
  const { theme } = React.useContext(ThemeContext);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="experience" className={`py-24 border-t transition-colors duration-300 ${
      theme === "2D" ? "bg-white border-border/40" : "bg-slate-950 border-slate-900"
    }`}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Dark / Violet Container Card */}
        <div className={`rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border transition-all duration-300 ${
          theme === "2D"
            ? "bg-zinc-950 text-white border-zinc-900"
            : "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white border-transparent shadow-2xl shadow-indigo-500/20"
        }`}>
          {/* Header Block */}
          <div className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-12 border-b pb-8 ${
            theme === "2D" ? "border-zinc-900" : "border-white/15"
          }`}>
            <div className="relative select-none">
              {/* Background outline word */}
              <span className={`font-display-watermark text-[clamp(2.5rem,8vw,6rem)] block leading-none tracking-wider uppercase transition-all ${
                theme === "2D" ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.06)]" : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)]"
              }`}>
                EXPERIENCE
              </span>
              {/* Foreground solid title */}
              <h3 className="font-display-blackout text-xl md:text-2xl uppercase tracking-widest leading-none mt-[-1.2rem] md:mt-[-2.2rem] pl-1 relative z-10">
                /EXPERIENCE
              </h3>
            </div>
            
            <div className={`font-display-blackout text-[10px] md:text-xs uppercase tracking-wider ${
              theme === "2D" ? "text-zinc-500" : "text-indigo-200"
            }`}>
              2+ Years of Experience
            </div>
          </div>

          {/* List Layout with Mouse Tracking */}
          <div 
            className={`relative divide-y ${theme === "2D" ? "divide-zinc-900" : "divide-white/10"}`}
            onMouseMove={handleMouseMove}
          >
            {experienceItems.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`py-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4 cursor-pointer group relative z-10 transition-colors ${
                  theme === "2D" ? "hover:text-white" : "hover:text-white"
                }`}
              >
                <div className="space-y-1">
                  <h4 className={`font-display-blackout text-base transition-colors ${
                    theme === "2D" ? "text-zinc-300 group-hover:text-white" : "text-white group-hover:text-white"
                  }`}>
                    {item.company}
                  </h4>
                  <p className={`font-sans text-xs font-semibold transition-colors ${
                    theme === "2D" ? "text-zinc-400 group-hover:text-zinc-200" : "text-indigo-100 group-hover:text-white"
                  }`}>
                    {item.role}
                  </p>
                  <p className={`font-sans text-xs transition-colors leading-relaxed max-w-xl ${
                    theme === "2D" ? "text-zinc-500 group-hover:text-zinc-400" : "text-indigo-200/90 group-hover:text-indigo-100"
                  }`}>
                    {item.focus}
                  </p>
                </div>

                <div className={`font-display-blackout text-xs uppercase tracking-wider transition-colors md:text-right md:pt-1 ${
                  theme === "2D" ? "text-zinc-500 group-hover:text-zinc-300" : "text-indigo-200 group-hover:text-white"
                }`}>
                  {item.dates}
                </div>
              </div>
            ))}

            {/* Floating preview thumbnail container */}
            {hoveredIndex !== null && experienceItems[hoveredIndex].image && (
              <div
                className={`pointer-events-none absolute z-20 w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-100 ease-out hidden md:block border ${
                  theme === "2D"
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-indigo-400/30 bg-indigo-950/90 shadow-2xl shadow-indigo-950/50"
                }`}
                style={{
                  left: `${mousePos.x + 24}px`,
                  top: `${mousePos.y - 80}px`,
                  transform: "rotate(3deg)",
                }}
              >
                <img
                  src={experienceItems[hoveredIndex].image}
                  alt="Preview Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Education Sub-section */}
          <div className={`mt-16 pt-12 border-t ${theme === "2D" ? "border-zinc-900" : "border-white/10"}`}>
            <div className="relative select-none mb-8">
              {/* Background outline word */}
              <span className={`font-display-watermark text-[clamp(2rem,6vw,4.5rem)] block leading-none tracking-wider uppercase transition-all ${
                theme === "2D" ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.06)]" : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)]"
              }`}>
                EDUCATION
              </span>
              {/* Foreground solid title */}
              <h3 className={`font-display-blackout text-sm md:text-base uppercase tracking-widest leading-none mt-[-0.9rem] md:mt-[-1.6rem] pl-1 relative z-10 ${
                theme === "2D" ? "text-zinc-300" : "text-white"
              }`}>
                /ACADEMIC HISTORY
              </h3>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-1">
                <h4 className={`font-display-blackout text-base ${theme === "2D" ? "" : "text-white"}`}>
                  Open University of Sri Lanka
                </h4>
                <p className={`font-sans text-xs font-semibold ${theme === "2D" ? "text-zinc-400" : "text-indigo-100"}`}>
                  Bachelor of Software Engineering Honours
                </p>
                <p className={`font-sans text-xs ${theme === "2D" ? "text-zinc-500" : "text-indigo-200/90"}`}>
                  Concentration Specialization: Computer Software Engineering
                </p>
              </div>
              <div className={`font-display-blackout text-xs uppercase tracking-wider md:text-right md:pt-1 ${
                theme === "2D" ? "text-zinc-500" : "text-indigo-200"
              }`}>
                2021 – Present
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const skillsCategories = {
  "Languages": [
    { name: "TypeScript", level: "90%", slug: "typescript" },
    { name: "JavaScript", level: "95%", slug: "javascript" },
    { name: "Python", level: "80%", slug: "python" },
    { name: "SQL", level: "85%", slug: "postgresql" },
    { name: "HTML5", level: "95%", slug: "html5" },
    { name: "CSS3", level: "90%", slug: "css3" },
  ],
  "Frontend": [
    { name: "React", level: "95%", slug: "react" },
    { name: "Next.js", level: "90%", slug: "nextdotjs" },
    { name: "Vite", level: "90%", slug: "vite" },
    { name: "Tailwind CSS", level: "95%", slug: "tailwindcss" },
    { name: "Redux", level: "80%", slug: "redux" },
    { name: "Shadcn / UI", level: "95%", slug: "shadcnui" },
  ],
  "Backend": [
    { name: "Node.js", level: "90%", slug: "nodedotjs" },
    { name: "Express", level: "90%", slug: "express" },
    { name: "MongoDB", level: "85%", slug: "mongodb" },
    { name: "PostgreSQL", level: "80%", slug: "postgresql" },
    { name: "Firebase", level: "85%", slug: "firebase" },
    { name: "REST APIs", level: "95%", slug: "postman" },
  ],
  "DevOps & Tools": [
    { name: "Git / GitHub", level: "90%", slug: "git" },
    { name: "Docker", level: "75%", slug: "docker" },
    { name: "Vercel", level: "95%", slug: "vercel" },
    { name: "Netlify", level: "95%", slug: "netlify" },
    { name: "Postman", level: "90%", slug: "postman" },
    { name: "Figma", level: "85%", slug: "figma" },
  ],
};

const marqueeSkills = [
  "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Docker", "MongoDB", "Figma"
];

function SkillsSection() {
  const { theme } = React.useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = React.useState<keyof typeof skillsCategories>("Languages");

  return (
    <section id="skills" className={`py-24 border-t transition-colors duration-300 ${
      theme === "2D" ? "border-border/40 bg-zinc-50/30" : "border-slate-900 bg-slate-950"
    } overflow-hidden`}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Layered Title Block */}
        <div className="relative mb-16 select-none text-center md:text-left">
          {/* Background outline word */}
          <span className={`font-display-watermark text-[clamp(4.2rem,12vw,9.5rem)] block leading-none tracking-wider transition-all ${
            theme === "2D" ? "text-transparent [-webkit-text-stroke:1px_rgba(9,9,11,0.12)]" : "text-transparent [-webkit-text-stroke:1px_rgba(156,163,175,0.35)]"
          }`}>
            SKILLS
          </span>
          {/* Foreground solid title */}
          <h2 className="font-display-blackout text-2xl md:text-3xl uppercase tracking-widest leading-none mt-[-2.2rem] md:mt-[-3.5rem] relative z-10 pl-2">
            /TECH STACK
          </h2>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-12">
          {Object.keys(skillsCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof skillsCategories)}
              className={`px-5 py-2.5 rounded-xl text-xs font-display-blackout uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                theme === "2D"
                  ? activeCategory === category
                    ? "bg-foreground text-background border-2 border-foreground"
                    : "bg-white text-foreground border-2 border-foreground hover:bg-zinc-50 shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]"
                  : activeCategory === category
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-2 border-transparent shadow-md shadow-indigo-500/20"
                    : "bg-slate-900 text-slate-300 border-2 border-slate-800 hover:bg-slate-800 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stickers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
          {skillsCategories[activeCategory].map((skill, idx) => {
            const rotations = ["hover:rotate-3", "hover:rotate-[-3deg]", "hover:rotate-2", "hover:rotate-[-2deg]", "hover:rotate-4", "hover:rotate-[-4deg]"];
            const rotationClass = rotations[idx % rotations.length];

            return (
              <div
                key={skill.name}
                className={`flex flex-col justify-between aspect-square transition-all duration-300 relative group ${rotationClass} ${
                  theme === "2D"
                    ? "bg-white border-2 border-foreground rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_rgba(9,9,11,1)] hover:shadow-[6px_6px_0px_rgba(9,9,11,1)] hover:-translate-y-1 text-foreground"
                    : "bg-slate-900/30 border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-md hover:border-slate-700 hover:-translate-y-1 text-slate-100"
                }`}
              >
                <div className="relative pr-6">
                  <div className="text-[10px] sm:text-xs font-display-blackout tracking-wide uppercase leading-tight break-words">
                    {skill.name}
                  </div>
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@11.12.0/icons/${skill.slug}.svg`}
                    alt={skill.name}
                    className={`absolute top-0.5 right-0 h-4 w-4 sm:h-4.5 sm:w-4.5 object-contain shrink-0 transition-all ${
                      theme === "2D" 
                        ? "brightness-0 opacity-80" 
                        : "brightness-0 invert opacity-75 group-hover:opacity-100"
                    }`}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                
                {/* Visual Sketchy Indicator */}
                <div className="space-y-1.5 mt-auto">
                  <div className={`h-1.5 w-full rounded-full overflow-hidden border ${
                    theme === "2D" ? "bg-zinc-100 border-foreground" : "bg-slate-950 border-slate-800"
                  }`}>
                    <div 
                      className={`h-full skill-progress-bar ${
                        theme === "2D" ? "bg-foreground" : "bg-gradient-to-r from-violet-500 to-indigo-500"
                      }`}
                      style={{ "--skill-level": skill.level } as React.CSSProperties}
                    />
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase text-right">
                    {skill.level}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Infinite Horizontal Running Marquee Ticker */}
      <div className={`w-full py-4 select-none relative z-10 overflow-hidden flex whitespace-nowrap border-y transition-colors duration-300 ${
        theme === "2D" ? "border-foreground bg-white" : "border-slate-900 bg-slate-950"
      }`}>
        <div className="flex shrink-0 animate-marquee gap-8 items-center pr-8">
          {marqueeSkills.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className={`text-4xl tracking-widest uppercase transition-all duration-300 ${
                theme === "2D" 
                  ? "font-display text-transparent [-webkit-text-stroke:1.5px_#09090b]" 
                  : "font-sans font-black text-[#8b5cf6]"
              }`}>
                {item}
              </span>
              <span className={`h-2 w-2 rounded-full shrink-0 ${theme === "2D" ? "bg-foreground" : "bg-slate-800"}`} />
            </React.Fragment>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-8 items-center pr-8" aria-hidden="true">
          {marqueeSkills.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className={`text-4xl tracking-widest uppercase transition-all duration-300 ${
                theme === "2D" 
                  ? "font-display text-transparent [-webkit-text-stroke:1.5px_#09090b]" 
                  : "font-sans font-black text-[#8b5cf6]"
              }`}>
                {item}
              </span>
              <span className={`h-2 w-2 rounded-full shrink-0 ${theme === "2D" ? "bg-foreground" : "bg-slate-800"}`} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <footer id="contact" className={`py-24 border-t relative overflow-hidden flex flex-col items-center text-center transition-colors duration-300 ${
      theme === "2D" ? "bg-white border-border/40 text-foreground" : "bg-slate-950 border-slate-900 text-slate-100"
    }`}>
      {/* Background Subtle Cloud-like Soft Gradients */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-50 z-0 transition-colors ${
        theme === "2D" ? "bg-zinc-100" : "bg-violet-900/10"
      }`} />

      <div className="mx-auto max-w-4xl px-6 relative z-10 flex flex-col items-center">
        {/* Availability Status Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full text-[10px] font-display-blackout uppercase tracking-wider shadow-sm mb-8 transition-all ${
          theme === "2D"
            ? "border-border bg-white text-foreground"
            : "border-slate-800 bg-slate-900 text-slate-200"
        }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for New Project
        </div>

        {/* Call to Action Title */}
        <h2 className="font-display-blackout text-[clamp(1.8rem,5vw,3.5rem)] leading-none uppercase tracking-wide mb-4 max-w-2xl">
          HAVE A PROJECT IN MIND?
        </h2>

        {/* Description */}
        <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
          Together, we can create something clear and impactful. Let's collaborate to bring our ideas to life in a way that resonates with everyone.
        </p>

        {/* Primary Contact CTA Button */}
        <a
          href="mailto:sakuniakela273@gmail.com"
          className={`inline-flex items-center gap-1.5 px-6 py-3.5 font-display-blackout text-xs uppercase tracking-wider rounded-full transition-all shadow-md mb-16 ${
            theme === "2D"
              ? "bg-foreground text-background hover:bg-zinc-800"
              : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-indigo-500/25"
          }`}
        >
          Contact Me <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        {/* Social Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          {/* Avatar Name Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 border rounded-full text-[10px] font-display-blackout uppercase tracking-wider shadow-sm transition-all ${
            theme === "2D"
              ? "border-border bg-white text-foreground"
              : "border-slate-800 bg-slate-900 text-slate-200"
          }`}>
            <img
              src={heroPortrait}
              alt="Sakuni Akela"
              className={`w-4 h-4 rounded-full object-cover border ${
                theme === "2D" ? "border-border/80" : "border-slate-700"
              }`}
            />
            Sakuni Akela
          </div>

          {/* GitHub Badge */}
          <a
            href="https://github.com/Akela2733"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 px-4 py-2 border rounded-full text-[10px] font-display-blackout uppercase tracking-wider transition-all shadow-sm ${
              theme === "2D"
                ? "border-border bg-white text-foreground hover:border-foreground hover:bg-zinc-50"
                : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            GitHub <ArrowUpRight className="h-2.5 w-2.5 text-muted-foreground" />
          </a>

          {/* LinkedIn Badge */}
          <a
            href="https://www.linkedin.com/in/sakuni-akela-80500a241"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 px-4 py-2 border rounded-full text-[10px] font-display-blackout uppercase tracking-wider transition-all shadow-sm ${
              theme === "2D"
                ? "border-border bg-white text-foreground hover:border-foreground hover:bg-zinc-50"
                : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            LinkedIn <ArrowUpRight className="h-2.5 w-2.5 text-muted-foreground" />
          </a>

          {/* Email Badge */}
          <a
            href="mailto:sakuniakela273@gmail.com"
            className={`inline-flex items-center gap-1 px-4 py-2 border rounded-full text-[10px] font-display-blackout uppercase tracking-wider transition-all shadow-sm ${
              theme === "2D"
                ? "border-border bg-white text-foreground hover:border-foreground hover:bg-zinc-50"
                : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            Email <ArrowUpRight className="h-2.5 w-2.5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  const [theme, setTheme] = React.useState<ThemeMode>("2D");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-500 ${
        theme === "2D" 
          ? "bg-background text-foreground font-2d" 
          : "bg-slate-950 text-slate-100 font-3d dark"
      }`}>
        <Nav />
        <Hero />
        <ScrollReveal>
          <SelectedWork />
        </ScrollReveal>
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        {/* <ScrollReveal>
          <ContentCreationSection theme={theme} />
        </ScrollReveal> */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </ThemeContext.Provider>
  );
}
