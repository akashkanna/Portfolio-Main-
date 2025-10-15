import { Code, Palette, Sparkles, GitBranch, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "text-primary",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Framer"],
      color: "text-accent",
    },
    {
      title: "Graphic Design",
      icon: Palette,
      skills: ["Canva"],
      color: "text-primary-glow",
    },
    {
      title: "AI & Prompt Engineering",
      icon: Sparkles,
      skills: [
        "Lovable",
        "Bolt",
        "Gamma",
        "ChatGPT",
        "Lumino",
        "Hellio",
        "Sora",
        "Sona",
        "Vidu",
        "Perplexity",
      ],
      color: "text-accent",
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Netlify", "Vercel"],
      color: "text-primary",
    },
    {
      title: "Programming Languages",
      icon: Terminal,
      skills: ["Python", "Java"],
      color: "text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-flex items-center gap-2">
              <Code className="text-primary" /> Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:glow-effect transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={category.color} size={28} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
