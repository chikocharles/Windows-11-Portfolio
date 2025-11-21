import { Award, Code, Database, Brain, Shield, Users } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

const skillCategories = [
  {
    category: "Data Science & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "H2O.ai", level: 80 },
      { name: "Model Deployment", level: 85 },
      { name: "Data Analysis", level: 95 },
    ],
  },
  {
    category: "Business Management",
    icon: Users,
    skills: [
      { name: "Operations Management", level: 90 },
      { name: "Financial Management", level: 85 },
      { name: "HR Management", level: 85 },
      { name: "Project Management", level: 88 },
    ],
  },
  {
    category: "Technical Skills",
    icon: Code,
    skills: [
      { name: "Dashboard Development", level: 95 },
      { name: "Data Visualization", level: 92 },
      { name: "Reporting & Analytics", level: 93 },
      { name: "System Administration", level: 85 },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: Database,
    skills: [
      { name: "Google Cloud Platform", level: 82 },
      { name: "Microsoft 365", level: 88 },
      { name: "IT Infrastructure", level: 90 },
      { name: "Network Management", level: 85 },
    ],
  },
  {
    category: "Security",
    icon: Shield,
    skills: [
      { name: "Phishing Prevention", level: 88 },
      { name: "Spear Phishing", level: 85 },
      { name: "Security Analysis", level: 82 },
    ],
  },
];

const certifications = [
  "Machine Learning Model Deployment",
  "Learning Microsoft 365 Copilot",
  "Google Cloud Machine Learning with TensorFlow",
  "Data Science and Machine Learning Fundamentals",
  "Learning H2O.ai",
];

export const SkillsWindow = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Skills & Expertise</h1>
          <p className="text-muted-foreground">Technical and professional competencies</p>
        </div>
      </div>

      {/* Skills by Category */}
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <Card key={index} className="p-5 border-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{category.category}</h3>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Certifications */}
      <Card className="p-5 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Certifications
        </h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, idx) => (
            <Badge
              key={idx}
              className="bg-white/80 text-primary hover:bg-white px-3 py-1.5"
            >
              {cert}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Languages */}
      <Card className="p-5 border-2">
        <h3 className="font-semibold text-lg mb-3">Languages</h3>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5">
            English - Professional Working Proficiency
          </Badge>
        </div>
      </Card>
    </div>
  );
};
