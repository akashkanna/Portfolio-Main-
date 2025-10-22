import { User, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-flex items-center gap-2">
              <User className="text-primary" /> About Me
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6">
            <div className="flex items-start gap-3">
              <Sparkles className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-semibold mb-3">Current Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently pursuing my Master of Computer Applications (MCA) with a
                  specialization in Data Science at Takshashila University. My passion lies
                  in combining technology with creative design to build intuitive and
                  impactful digital experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-semibold mb-3">My Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I completed my Bachelor of Computer Applications (BCA) from Saraswathy
                  College of Arts and Science (2022-2025). Throughout my academic journey,
                  I've developed a strong foundation in programming, web development, and
                  emerging technologies, particularly in the field of artificial intelligence
                  and prompt engineering.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-semibold mb-3">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in frontend development, creating responsive and visually
                  appealing web applications using modern technologies like React.js. I'm
                  also passionate about UI/UX design, graphic design, and leveraging AI tools
                  to enhance productivity and creativity in my projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
