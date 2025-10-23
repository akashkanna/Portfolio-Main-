import { ExternalLink, Github, Palette, Code, Brain, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio showcasing my work and skills with glassmorphism design",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "UI/UX Design System",
      description: "Comprehensive design system created in Figma with reusable components",
      technologies: ["Figma", "Design Tokens", "Component Library"],
      icon: <Palette className="w-6 h-6" />,
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "AI Prompt Collection",
      description: "Curated collection of effective prompts for various AI tools and use cases",
      technologies: ["AI Tools", "Prompt Engineering", "Documentation"],
      icon: <Brain className="w-6 h-6" />,
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Oil Seed AI Platform",
      description: "Curated collection of effective prompts for various AI tools and use cases",
      technologies: ["AI Tools", "Lovable", "React", "Lucide"],
      icon: <Leaf className="w-6 h-6" />,
      github: "https://github.com/akashkanna/oilseed-ai-grow-main",
      demo: "https://oilseed-ai-platform.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-flex items-center gap-2">
            <Code className="text-primary" /> My Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work and creative experiments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-border hover:glow-effect transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {project.icon}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
