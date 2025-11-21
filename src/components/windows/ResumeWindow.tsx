import { FileText, Download, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Button } from "../ui/button";

export const ResumeWindow = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <p className="text-muted-foreground">Full curriculum vitae</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border-2 border-primary/20">
        <h2 className="text-3xl font-bold mb-2">Charles Chiko</h2>
        <p className="text-lg text-primary font-semibold mb-4">
          Data Scientist | Dashboard Expert | Reporting Analyst | OpenAI
        </p>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>(+263) 717665346</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>charliechicco@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Harare, Zimbabwe</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-primary" />
            <a
              href="https://www.linkedin.com/in/charleschiko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/charleschiko
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <a
              href="https://chikocharles.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Portfolio Website
            </a>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-primary">Professional Summary</h3>
        <p className="text-foreground/90 leading-relaxed">
          Highly skilled data scientist, dashboard expert, and reporting analyst with extensive experience 
          in IT infrastructure, mobility systems, and business operations. Proven track record of founding 
          and leading successful technology ventures while maintaining expertise in operations management, 
          financial management, and HR management. Passionate about mentoring aspiring data professionals 
          and driving technological innovation in Zimbabwe and beyond.
        </p>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-primary">Education</h3>
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-lg">First Class Degree</p>
              <p className="text-muted-foreground">Academic Excellence Award</p>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              🏆 Honors
            </span>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-primary">Key Achievements</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Founded and successfully operate two technology companies: Genius Technology ZW and Concentric Solutions ZW</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Leading IT Specialist for mobility systems at Delta Beverages Pvt Ltd, Zimbabwe's premier beverage company</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Mentoring aspiring data professionals and students through Genius Technology</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Completed multiple industry-recognized certifications in Machine Learning, Google Cloud, and Microsoft 365</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Graduated with First Class honors demonstrating academic excellence</span>
          </li>
        </ul>
      </div>

      {/* Download Button */}
      <div className="flex justify-center pt-4">
        <Button size="lg" className="gap-2">
          <Download className="h-5 w-5" />
          Download Full Resume (PDF)
        </Button>
      </div>
    </div>
  );
};
