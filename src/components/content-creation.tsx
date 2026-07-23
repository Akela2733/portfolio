import * as React from "react";
import { Video, PenTool, Mic, Smartphone, MessageCircle, ArrowUpRight, PlayCircle } from "lucide-react";

type ThemeMode = "2D" | "3D";

interface ContentCreationSectionProps {
  theme: ThemeMode;
}

const experiences = [
  {
    icon: <Video className="h-6 w-6" />,
    title: "Promotional Videos",
    description: "Product promotion, brand awareness, and full marketing campaigns.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "TikTok & Reels",
    description: "Short-form video creation, trend adaptation, and creative concepts.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Script Writing",
    description: "Engaging video scripts, marketing copy, and storytelling.",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Voice Over",
    description: "Professional narration and advertisement voice work.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Social Media",
    description: "Content planning, posting strategy, and community engagement.",
  },
];

const galleryItems = [
  { category: "Video Production", title: "Brand Launch Video" },
  { category: "Social Media", title: "Instagram Growth Strategy" },
  { category: "Writing", title: "Tech Blog Series" },
  { category: "Marketing Campaigns", title: "Product Promo Campaign" },
];

const caseStudies = [
  {
    title: "SaaS Product Launch Campaign",
    role: "Content Creator | Script Writer | Presenter",
    challenge: "Explain a complex technical product to a non-technical audience within 60 seconds.",
    approach: "Developed a trend-focused short-form video strategy highlighting pain points and presenting the software as the hero.",
    outcome: "Generated 50k+ organic views across platforms and increased signups by 15% during launch week.",
    tools: ["CapCut", "Figma", "TikTok Ads"],
  },
];

export default function ContentCreationSection({ theme }: ContentCreationSectionProps) {
  const [activeFilter, setActiveFilter] = React.useState("All");
  
  const filters = ["All", "Video Production", "Social Media", "Writing", "Marketing Campaigns"];

  return (
    <section id="creative" className="relative pt-24 pb-20 px-6 max-w-6xl mx-auto border-t border-border/40">
      
      {/* 1. Hero Introduction */}
      <div className="mb-24 text-center max-w-3xl mx-auto space-y-6">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 border rounded-full text-[10px] font-display-blackout uppercase tracking-wider mb-4 transition-all ${
          theme === "2D"
            ? "border-border bg-white text-foreground"
            : "border-slate-800 bg-slate-900 text-slate-200"
        }`}>
          <SparkleIcon theme={theme} /> Content Creator & Marketer
        </div>
        
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display-blackout leading-tight uppercase tracking-wider">
          Beyond Code: Creating <br />
          <span className={theme === "3D" ? "bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent" : "text-foreground"}>
            Stories & Brands
          </span>
        </h2>
        
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
          I combine software engineering knowledge with content creation, storytelling, and digital marketing skills to help brands communicate their ideas effectively. I can build your product AND help you explain and promote it.
        </p>
      </div>

      {/* 2. Content Creation Experience */}
      <div className="mb-24">
        <h3 className="font-display-blackout text-xl mb-8 uppercase tracking-wide">Creative Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                theme === "2D" 
                  ? "bg-white border-border hover:shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]" 
                  : "bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900"
              }`}
            >
              <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                theme === "2D" ? "bg-zinc-100 text-foreground" : "bg-indigo-500/10 text-indigo-400"
              }`}>
                {exp.icon}
              </div>
              <h4 className="font-bold mb-2 font-display-blackout uppercase tracking-wide text-sm">{exp.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Portfolio Gallery */}
      <div className="mb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h3 className="font-display-blackout text-xl uppercase tracking-wide">Media Gallery</h3>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[10px] rounded-full font-display-blackout uppercase tracking-wider transition-all border ${
                  activeFilter === filter 
                    ? (theme === "2D" ? "bg-foreground text-background border-foreground" : "bg-indigo-600 text-white border-indigo-500") 
                    : (theme === "2D" ? "bg-transparent border-border text-foreground hover:bg-zinc-100" : "bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200")
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems
            .filter(item => activeFilter === "All" || item.category === activeFilter)
            .map((item, idx) => (
            <div 
              key={idx}
              className={`group relative aspect-video rounded-2xl border overflow-hidden cursor-pointer ${
                theme === "2D" ? "border-border bg-zinc-100" : "border-slate-800 bg-slate-900"
              }`}
            >
              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-slate-800 dark:to-slate-900 opacity-50 group-hover:opacity-30 transition-opacity" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-transform duration-500 group-hover:scale-105">
                <PlayCircle className={`w-12 h-12 mb-4 opacity-50 group-hover:opacity-100 transition-opacity ${
                  theme === "2D" ? "text-foreground" : "text-indigo-400"
                }`} />
                <h4 className="font-display-blackout uppercase tracking-wide text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-2">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Case Studies */}
      <div className="mb-12">
        <h3 className="font-display-blackout text-xl mb-8 uppercase tracking-wide">Featured Campaigns</h3>
        
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row gap-8 p-6 lg:p-8 rounded-3xl border ${
                theme === "2D" 
                  ? "bg-white border-border" 
                  : "bg-slate-900/40 border-slate-800"
              }`}
            >
              {/* Media side */}
              <div className={`w-full lg:w-2/5 aspect-[4/3] rounded-2xl flex items-center justify-center border border-dashed ${
                theme === "2D" ? "bg-zinc-50 border-zinc-300" : "bg-slate-900 border-slate-700"
              }`}>
                <div className="text-center p-6">
                  <Video className="w-8 h-8 mx-auto mb-3 text-muted-foreground/50" />
                  <p className="text-xs text-muted-foreground font-display-blackout uppercase tracking-wider">Campaign Visuals</p>
                </div>
              </div>

              {/* Info side */}
              <div className="w-full lg:w-3/5 space-y-6 flex flex-col justify-center">
                <div>
                  <h4 className="font-display-blackout text-2xl uppercase tracking-wide mb-2">{study.title}</h4>
                  <p className={`text-xs font-semibold inline-block px-3 py-1 rounded-full ${
                    theme === "2D" ? "bg-zinc-100 text-zinc-600" : "bg-indigo-500/10 text-indigo-400"
                  }`}>{study.role}</p>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <strong className={theme === "2D" ? "text-foreground" : "text-slate-200"}>Challenge:</strong> {study.challenge}
                  </div>
                  <div>
                    <strong className={theme === "2D" ? "text-foreground" : "text-slate-200"}>Creative Approach:</strong> {study.approach}
                  </div>
                  <div>
                    <strong className={theme === "2D" ? "text-foreground" : "text-slate-200"}>Outcome:</strong> {study.outcome}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tools.map(tool => (
                    <span 
                      key={tool} 
                      className={`text-[10px] px-2.5 py-1 rounded border font-display-blackout uppercase tracking-wider ${
                        theme === "2D" ? "border-border text-zinc-500" : "border-slate-700 text-slate-400"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SparkleIcon({ theme }: { theme: ThemeMode }) {
  return (
    <svg 
      width="12" 
      height="12" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={theme === "3D" ? "text-indigo-400" : "text-foreground"}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  );
}
