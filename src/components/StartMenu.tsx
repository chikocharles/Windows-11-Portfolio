import { User, Briefcase, Code, Award, FileText, Mail, Settings, Power } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface StartMenuProps {
  onClose: () => void;
  onOpenWindow: (id: string) => void;
}

const menuItems = [
  { id: "about", icon: User, label: "About Me" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Code, label: "Projects" },
  { id: "skills", icon: Award, label: "Skills" },
  { id: "resume", icon: FileText, label: "Resume" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export const StartMenu = ({ onClose, onOpenWindow }: StartMenuProps) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onClose();
    navigate("/");
  };
  const handleItemClick = (id: string) => {
    onOpenWindow(id);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Start Menu */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-[600px] z-50 animate-scale-in">
        <div className="glass-window rounded-xl p-6 shadow-2xl">
          {/* Pinned Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Pinned</h3>
            <div className="grid grid-cols-3 gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-center">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                CC
              </div>
              <div>
                <p className="text-sm font-medium">Charles Chiko</p>
                <p className="text-xs text-muted-foreground">Data Scientist</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={handleSignOut}>
              <Power className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
