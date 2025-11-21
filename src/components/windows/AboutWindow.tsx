import { MapPin, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Badge } from "../ui/badge";

export const AboutWindow = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-6">
        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-5xl font-bold shadow-xl flex-shrink-0">
          CC
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Charles Chiko</h1>
          <p className="text-xl text-primary font-semibold mb-3">
            Data Scientist | Dashboard Expert | Reporting Analyst
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Harare, Zimbabwe</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>Delta Beverages Pvt Ltd</span>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          About Me
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          I am a highly skilled data scientist, dashboard expert, and reporting analyst with a diverse 
          background in information technology. With expertise spanning operations management, financial 
          management, and HR management, I bring a comprehensive approach to solving complex data challenges.
        </p>
        <p className="text-foreground/90 leading-relaxed">
          Currently serving as an IT Specialist - Mobility Systems at Delta Beverages, I combine technical 
          excellence with business acumen. As the founder of Genius Technology ZW and Concentric Solutions ZW, 
          I'm passionate about mentoring aspiring data professionals and driving technological innovation in 
          Zimbabwe and beyond.
        </p>
      </div>

      {/* Top Skills */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Top Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5">
            Operations Management
          </Badge>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5">
            Financial Management
          </Badge>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5">
            HR Management
          </Badge>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5">
            Data Science
          </Badge>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5">
            Machine Learning
          </Badge>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5">
            Dashboard Development
          </Badge>
        </div>
      </div>

      {/* Honors & Awards */}
      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-primary mb-2">🏆 First Class Degree</h3>
        <p className="text-sm text-muted-foreground">
          Recognized for academic excellence and outstanding performance
        </p>
      </div>
    </div>
  );
};
