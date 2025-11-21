import { LucideIcon } from "lucide-react";

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const DesktopIcon = ({ icon: Icon, label, onClick }: DesktopIconProps) => {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/10 icon-hover group w-24"
    >
      <div className="p-3 bg-white/90 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <span className="text-sm font-medium text-white drop-shadow-lg text-center">
        {label}
      </span>
    </button>
  );
};
