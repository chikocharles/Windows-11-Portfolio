import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "../ui/card";

const experiences = [
  {
    title: "IT Specialist - Mobility Systems",
    company: "Delta Beverages Pvt Ltd",
    location: "Harare, Zimbabwe",
    period: "January 2022 - Present",
    duration: "3 years 11 months",
    description: "Leading mobility systems and IT infrastructure initiatives for one of Zimbabwe's premier beverage companies.",
  },
  {
    title: "Founder & CTO",
    company: "Concentric Solutions ZW",
    location: "Harare, Zimbabwe",
    period: "January 2023 - Present",
    duration: "2 years 11 months",
    description: "Building innovative technology solutions and leading strategic technology initiatives.",
  },
  {
    title: "Founder",
    company: "Genius Technology ZW",
    location: "Harare, Zimbabwe",
    period: "January 2020 - Present",
    duration: "5 years 11 months",
    description: "Providing custom writing services and academic support, helping students build greater understanding in their subject areas. Currently serving as a Data Analyst Mentor.",
  },
  {
    title: "Assistant ICT Specialist",
    company: "Delta Beverages Pvt Ltd",
    location: "Mutare, Manicaland, Zimbabwe",
    period: "March 2021 - January 2022",
    duration: "11 months",
    description: "Supported ICT operations and infrastructure management.",
  },
  {
    title: "Information Communication Technology Assistant",
    company: "Mutare Bottling Company",
    location: "Mutare, Zimbabwe",
    period: "January 2021 - March 2021",
    duration: "3 months",
    responsibilities: [
      "Installing and configuring computer hardware, operating systems and applications",
      "Monitoring and proactively maintaining computer systems and networks",
      "Troubleshooting system and network problems",
      "Training customers on software and hardware usage",
      "Maintenance and updating of company websites",
      "Managing ICT infrastructure, email system, servers, Internet, LAN",
    ],
  },
  {
    title: "Computer Systems Intern",
    company: "Grain Marketing Board",
    location: "Harare, Zimbabwe",
    period: "February 2018 - January 2019",
    duration: "1 year",
    responsibilities: [
      "Installing and configuring computer hardware, software, systems, networks",
      "Monitoring and maintaining computer systems and networks",
      "Responding to service issues and requests in a timely manner",
    ],
  },
];

export const ExperienceWindow = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Professional Experience</h1>
          <p className="text-muted-foreground">My career journey and accomplishments</p>
        </div>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-5 hover:shadow-lg transition-all border-2">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                <p className="text-base font-medium">{exp.company}</p>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium whitespace-nowrap">
                {exp.duration}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{exp.period}</span>
              </div>
            </div>

            {exp.description && (
              <p className="text-sm text-foreground/80 mb-2">{exp.description}</p>
            )}

            {exp.responsibilities && (
              <ul className="space-y-1 mt-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
