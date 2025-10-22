import { GraduationCap, School } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      specialization: "Data Science",
      institution: "Takshashila University",
      period: "Present",
      icon: GraduationCap,
      description: "Pursuing advanced studies in computer applications with a focus on data science, machine learning, and modern software development practices.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Saraswathy College of Arts and Science",
      period: "2022 - 2025",
      icon: GraduationCap,
      description: "Completed undergraduate studies with a strong foundation in programming, web development, database management, and software engineering principles.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Secondary School",
      period: "Completed",
      icon: School,
      description: "Built a solid academic foundation with a focus on mathematics and computer science, preparing for a career in technology.",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:glow-effect transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <edu.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-accent font-medium mb-2">
                        {edu.specialization}
                      </p>
                    )}
                    <p className="text-muted-foreground font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {edu.period}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
