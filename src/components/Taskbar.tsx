import { useState, useEffect } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { StartMenu } from "./StartMenu";
import { Input } from "./ui/input";
//import techIcons from "@/assets/tech-icons.png";

interface TaskbarProps {
  openWindows: Array<{ id: string; title: string; icon: React.ReactNode }>;
  onWindowClick: (id: string) => void;
  onOpenWindow: (id: string) => void;
}

export const Taskbar = ({ openWindows, onWindowClick, onOpenWindow }: TaskbarProps) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      {showStartMenu && (
        <StartMenu onClose={() => setShowStartMenu(false)} onOpenWindow={onOpenWindow} />
      )}
      
      <div className="fixed bottom-0 left-0 right-0 h-16 glass-taskbar flex items-center justify-center px-4 z-50 border-t border-glass-border">
        {/* Centered Dock with Tech Icons and Open Windows */}

        <form className="w-60 mr-10">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              value={""}
              onChange={(e) => (e.target.value)}
              className="h-12 bg-background/20 backdrop-blur-x5 border-background/40 text-foreground placeholder:text-foreground/60 pr-12"
              autoFocus
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-md hover:bg-background/20"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>

        <div className="flex items-end gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
          {/* Tech Stack Icons */}
          <img src={"https://camo.githubusercontent.com/e33c2722bc49b4b7c2a45d5a09f8f04b1390dfed4e602559d459e1ac3978c22f/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/172955bb3607509689ce7f348b40c8c7bbe6335b071db669635340784ce610ec/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d637373"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/9b22ad5bbacacd6daebb55f074aab70c451caf161711956a6bb1b70972268f04/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a617661736372697074"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/26f6cb8597b93a72e469fd1274b0990218fea21eaa495dd88b5d49b0a9d63e1e/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/95b7647104525fdd09b73628aab20c8c04be6b170d7bae5a374f8ac24afe08a2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7461696c77696e64"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/e8e3150052ccc7ce0fedf704278bbe1f136dc684c7d619b14d385b7d47b8c60c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e6f64656a73"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/6c581f9592fa01dbdcf471f2691504e88c96d4840ce2710e9080513cdbed7c21/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d65787072657373"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/8849a139746ee5851d881984102d2929345b91541276e3ec6fe74343c23d2016/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d707974686f6e"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/6896d0498ca718dae1560c59c2d5deb52e0fd72c35ccaab16a368893b2c7adcb/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d646a616e676f"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/3f64455ed2487f1300832f38d3de984a7260ba5c5887f4d9e4e9959e8911e64a/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d6f6e676f6462"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/bff695f8afffa56236d175e6697488503ac96e59a5747bdd0d8c97072699b571/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d706f737467726573716c"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/89465c2c49ac408ee5167a1aa1fe7bc8dc9d0c6c7f204bc631d5e6f13733698e/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d7973716c"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/e2a58fa150850c12f8b8785212c8becf348cfbbfbe789ccb24e8b97bd166d6cf/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d676974"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/1e321c65f17c033c981549fa030b2f9df52d03f3a536e79d91d4b6676642ce40/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7673636f6465"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          <img src={"https://camo.githubusercontent.com/3405b634afef4ec9f4725561b719b9f4a744468903c57db8a8052be1aecb7774/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d646f636b6572"} alt="Tech Stack" className="h-10 object-contain hover:bg-taskbar-hover hover-bounce" />
          {/* <img src={techIcons} alt="Tech Stack" className="h-10 object-contain" /> */}
          
          {/* Divider */}
          {openWindows.length > 0 && (
            <div className="h-10 w-px bg-border mx-1" />
          )}
          
          {/* Open Windows */}
          {openWindows.map((window) => (
            <button
              key={window.id}
              className="dock-icon h-10 w-10 rounded-xl bg-white/90 flex items-center justify-center hover:bg-white transition-all cursor-pointer"
              onClick={() => onWindowClick(window.id)}
            >
              <div className="text-primary">{window.icon}</div>
            </button>
          ))}
        </div>

        {/* System Tray - Positioned absolutely */}
        <div className="absolute right-4 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="taskbar-button h-8 w-8 rounded-md hover:bg-taskbar-hover hover-bounce"
          >
            <span className="text-xl">🔔</span>
          </Button>
          
          {/* Clock */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-taskbar-hover transition-colors cursor-pointer">
            <span className="text-m font-medium">{formatTime(currentTime)}</span>
            <span className="text-[18px] text-muted-foreground">{formatDate(currentTime)}</span>
          </div>
        </div>
        
        {/* Start Menu Button - Positioned absolutely */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-96 taskbar-button h-8 w-8 rounded-md hover:bg-taskbar-hover"
          onClick={() => setShowStartMenu(!showStartMenu)}
        >
          {/* <Menu className="h-4 w-4 text-primary" /> */}
          <img src={"\\src\\assets\\windows_logo-removebg-preview.png"} alt="Tech Stack" className="h-10 w-30 object-contain " />
          {/*<img src={"https://www.citypng.com/public/uploads/preview/hd-windows-11-logo-icon-transparent-background-11663458838jo5iexhr4e.png"} alt="Tech Stack" className="h-10 w-30 object-contain hover:bg-taskbar-hover hover-bounce" /> */}
        </Button>
      </div>
    </>
  );
};
