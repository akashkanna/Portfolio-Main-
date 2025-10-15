import { Award, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Certificates = () => {
  const certificates = [
    {
      title: "National Level Disaster Management",
      issuer: "National Disaster Management Authority",
      description: "Completed comprehensive training on disaster preparedness, response, and management strategies",
      date: "2024"
    },
    {
      title: "Canva Bootcamp",
      issuer: "Canva Design School",
      description: "Advanced graphic design techniques and creative workflows using Canva",
      date: "2024"
    },
    {
      title: "Prompt Injection Security",
      issuer: "AI Security Institute",
      description: "Understanding and preventing prompt injection vulnerabilities in AI systems",
      date: "2024"
    },
    {
      title: "Figma Bootcamp",
      issuer: "Figma Academy",
      description: "Professional UI/UX design and prototyping using Figma's advanced features",
      date: "2024"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-flex items-center gap-2">
            <Award className="text-primary" /> Certificates
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card key={index} className="glass-card border-border hover:glow-effect transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
                <CardDescription className="text-primary text-sm">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
