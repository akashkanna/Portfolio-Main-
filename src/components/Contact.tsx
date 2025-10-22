import { Mail, Github, Linkedin, MessageSquare, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-flex items-center gap-2">
              <MessageSquare className="text-primary" /> Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's connect and create something amazing together!
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out through
                any of these platforms:
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 flex-wrap">
                <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                  <a href="mailto:akashkannamp@gmail.com">
                    <Mail size={20} />
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                  <a href="tel:+919944737206">
                    <Phone size={20} />
                    Call Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                  <a href="https://wa.me/919944737206" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                  <a href="https://github.com/akashkanna" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                  <a href="http://www.linkedin.com/in/akash-kanna" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-muted-foreground">
            <p>© 2025 Akash Kanna S. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
