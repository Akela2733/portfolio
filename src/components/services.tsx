import * as React from "react";
import { ThemeContext } from "@/routes/index";

const services = [
  { id: "uiux", title: "UI/UX Design", description: "Designing clear and scalable interfaces for dashboards, mobile apps, and websites. Focused on hierarchy, motion, and accessibility." },
  { id: "web", title: "Web Design & Development", description: "Full-stack web development including responsive UIs, CMS integrations, SEO-minded markup, and progressive enhancement." },
  { id: "branding", title: "Branding", description: "Identity systems, voice, and visual guidelines that scale across web and marketing experiences." },
  { id: "motion", title: "Motions & Animations", description: "Micro-interactions and meaningful page motion to increase perceived performance and guide attention." },
  { id: "api", title: "API Development", description: "Designing robust REST/GraphQL APIs, authentication flows, and client contracts for predictable integrations." },
  { id: "architecture", title: "Systems Architecture", description: "End-to-end architecture for reliable, maintainable systems: data modeling, caching, and service boundaries." },
  { id: "devops", title: "DevOps & CI/CD", description: "Automated deployments, containerization, monitoring, and environment parity for stable delivery." },
  { id: "testing", title: "Testing & QA", description: "Unit, integration and e2e testing strategies to keep releases safe and regressions minimal." },
  { id: "performance", title: "Performance Optimization", description: "Performance profiling, critical rendering path work, and bundle tuning for fast user experiences." },
  { id: "accessibility", title: "Accessibility", description: "WCAG-informed accessibility audits and remediation to ensure inclusive products." },
];

function ServiceItem({ service }: { service: any }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="group relative w-full">
      <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
        theme === "2D"
          ? "border-border bg-white"
          : "border-slate-800 bg-slate-900/30 backdrop-blur-md"
      }`}>
        <div className={`flex items-center justify-between px-6 py-6 transition-colors duration-300 ${
          theme === "2D"
            ? "group-hover:bg-foreground group-hover:text-background"
            : "group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-white"
        }`}>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
          </div>
          <div className="text-muted-foreground group-hover:text-inherit transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className={`px-6 max-h-0 overflow-hidden group-hover:max-h-40 transition-[max-height] duration-300 ${
          theme === "2D"
            ? "bg-white group-hover:bg-foreground group-hover:text-background"
            : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-white"
        }`}>
          <p className={`py-4 text-sm transition-colors ${
            theme === "2D"
              ? "text-muted-foreground group-hover:text-background/90"
              : "text-slate-400 group-hover:text-slate-100"
          }`}>{service.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <section id="service" className={`py-24 border-t transition-colors duration-300 ${
      theme === "2D" ? "bg-background text-foreground border-border/40" : "bg-slate-950 text-slate-100 border-slate-900"
    }`}>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-12">
          <h1 className="font-display-blackout text-4xl md:text-6xl tracking-widest uppercase">/SERVICES</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            I provide end-to-end product and platform work — from pixel-perfect UI to scalable backend systems. Hover a service to expand details.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {services.map((s) => (
            <ServiceItem key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
