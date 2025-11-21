import { useState } from "react";
import { User, Briefcase, Code, Award, FileText, Mail } from "lucide-react";
import { DesktopIcon } from "@/components/DesktopIcon";
import { Window } from "@/components/Window";
import { Taskbar } from "@/components/Taskbar";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { ExperienceWindow } from "@/components/windows/ExperienceWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { SkillsWindow } from "@/components/windows/SkillsWindow";
import { ResumeWindow } from "@/components/windows/ResumeWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import wallpaper from "@/assets/wallpaper.jpg";

interface OpenWindow {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const desktopIcons = [
  { id: "about", icon: User, label: "About Me" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Code, label: "Projects" },
  { id: "skills", icon: Award, label: "Skills" },
  { id: "resume", icon: FileText, label: "Resume" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const Index = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(1);
  const [windowZIndices, setWindowZIndices] = useState<Record<string, number>>({});

  const getWindowContent = (id: string) => {
    switch (id) {
      case "about":
        return <AboutWindow />;
      case "experience":
        return <ExperienceWindow />;
      case "projects":
        return <ProjectsWindow />;
      case "skills":
        return <SkillsWindow />;
      case "resume":
        return <ResumeWindow />;
      case "contact":
        return <ContactWindow />;
      default:
        return null;
    }
  };

  const getWindowConfig = (id: string) => {
    const baseX = 100 + openWindows.length * 30;
    const baseY = 50 + openWindows.length * 30;

    const configs: Record<string, any> = {
      about: { width: 700, height: 600 },
      experience: { width: 900, height: 700 },
      projects: { width: 850, height: 650 },
      skills: { width: 800, height: 700 },
      resume: { width: 750, height: 700 },
      contact: { width: 900, height: 650 },
    };

    return {
      position: { x: baseX, y: baseY },
      size: configs[id] || { width: 800, height: 600 },
    };
  };

  const openWindow = (id: string) => {
    if (openWindows.find((w) => w.id === id)) {
      focusWindow(id);
      return;
    }

    const iconData = desktopIcons.find((icon) => icon.id === id);
    if (!iconData) return;

    const config = getWindowConfig(id);
    const newZIndex = highestZIndex + 1;

    const newWindow: OpenWindow = {
      id,
      title: iconData.label,
      icon: <iconData.icon className="h-4 w-4" />,
      component: getWindowContent(id),
      ...config,
    };

    setOpenWindows([...openWindows, newWindow]);
    setWindowZIndices({ ...windowZIndices, [id]: newZIndex });
    setHighestZIndex(newZIndex);
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter((w) => w.id !== id));
    const newIndices = { ...windowZIndices };
    delete newIndices[id];
    setWindowZIndices(newIndices);
  };

  const minimizeWindow = (id: string) => {
    closeWindow(id);
  };

  const focusWindow = (id: string) => {
    const newZIndex = highestZIndex + 1;
    setWindowZIndices({ ...windowZIndices, [id]: newZIndex });
    setHighestZIndex(newZIndex);
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden relative"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 grid grid-cols-1 gap-2">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            onClick={() => openWindow(icon.id)}
          />
        ))}
      </div>

      {/* Open Windows */}
      {openWindows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          icon={window.icon}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          defaultPosition={window.position}
          defaultSize={window.size}
          zIndex={windowZIndices[window.id] || 1}
          onFocus={() => focusWindow(window.id)}
        >
          {window.component}
        </Window>
      ))}

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows.map((w) => ({
          id: w.id,
          title: w.title,
          icon: w.icon,
        }))}
        onWindowClick={focusWindow}
        onOpenWindow={openWindow}
      />
    </div>
  );
};

export default Index;
