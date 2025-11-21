import { Code, ExternalLink, Building2 } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const projects = [
  {
    name: "Genius Technology ZW",
    role: "Founder",
    description: "Academic support and custom writing services platform helping students build understanding in their subject areas. Includes Data Analyst mentorship program.",
    website: "geniustechnology.co.zw",
    tags: ["Education", "Mentorship", "Data Analytics"],
  },
  {
    name: "Concentric Solutions ZW",
    role: "Founder & CTO",
    description: "Technology solutions company providing innovative software and consulting services to businesses across Zimbabwe.",
    website: "concentricsolutions.co.zw",
    tags: ["Technology", "Consulting", "Software"],
  },
  {
    name: "Delta Beverages Mobility Systems",
    role: "IT Specialist",
    description: "Leading the implementation and management of enterprise mobility systems for one of Zimbabwe's largest beverage companies.",
    tags: ["Enterprise", "Mobility", "IT Infrastructure"],
  },
  {
    name: "Data Science Portfolio",
    role: "Personal Project",
    description: "Comprehensive portfolio showcasing machine learning projects, data visualizations, and analytics dashboards.",
    website: "chikocharles.github.io/portfolio",
    tags: ["Machine Learning", "Data Visualization", "Analytics"],
  },
];

export const ProjectsWindow = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Projects & Ventures</h1>
          <p className="text-muted-foreground">Initiatives and companies I've built</p>
        </div>
      </div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="p-5 hover:shadow-lg transition-all border-2">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-primary font-medium">{project.role}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground/80 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-primary/5 text-primary hover:bg-primary/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {project.website && (
              <Button
                variant="outline"
                size="sm"
                className="group"
                onClick={() => window.open(`https://${project.website}`, "_blank")}
              >
                Visit Website
                <ExternalLink className="h-3 w-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
