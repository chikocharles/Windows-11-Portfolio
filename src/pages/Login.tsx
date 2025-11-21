import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Power, Wifi } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import wallpaper from "@/assets/wallpaper.jpg";

const Login = () => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password) {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/desktop");
      }, 500);
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Login Area */}
      <div className="flex flex-col items-center gap-6 z-10">
        {/* User Avatar */}
        <Avatar className="h-40 w-40 border-4 border-background/20">
          <AvatarFallback className="bg-muted text-6xl">
            <img src={"https://avatars.githubusercontent.com/u/56394931?v=4"} alt="Tech Stack" />
          </AvatarFallback>
        </Avatar>

        {/* Username */}
        <h1 className="text-3xl font-light text-foreground">Charles Chiko</h1>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="w-80">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-background/20 backdrop-blur-xl border-background/40 text-foreground placeholder:text-foreground/60 pr-12"
              autoFocus
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              disabled={!password || isLoading}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-md hover:bg-background/20"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>

      {/* User Profiles - Bottom Left */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-3">
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass-window cursor-pointer hover:bg-background/10 transition-colors">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-muted text-sm">👤</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">Charles Chiko</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass-window cursor-pointer hover:bg-background/10 transition-colors opacity-60">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-muted text-sm">👤</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">Guest</span>
        </div>
      </div>

      {/* System Icons - Bottom Right */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-md glass-window hover:bg-background/10"
        >
          <Wifi className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-md glass-window hover:bg-background/10"
        >
          <Power className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Login;
