import { useState } from "react";
import { Rnd } from "react-rnd";
import { X, Minus, Square } from "lucide-react";
import { Button } from "./ui/button";

interface WindowProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  zIndex: number;
  onFocus: () => void;
}

export const Window = ({
  id,
  title,
  icon,
  children,
  onClose,
  onMinimize,
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 800, height: 600 },
  zIndex,
  onFocus,
}: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <Rnd
      default={{
        ...defaultPosition,
        ...defaultSize,
      }}
      minWidth={400}
      minHeight={300}
      bounds="parent"
      dragHandleClassName="window-titlebar"
      className="window-enter"
      style={{ zIndex }}
      onMouseDown={onFocus}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
    >
      <div className="flex flex-col h-full glass-window rounded-xl overflow-hidden">
        {/* Title Bar */}
        <div className="window-titlebar flex items-center justify-between px-4 py-2 bg-white/40 border-b border-white/20 cursor-move">
          <div className="flex items-center gap-2">
            <div className="text-primary">{icon}</div>
            <span className="text-sm font-medium text-foreground">{title}</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-muted rounded-md"
              onClick={onMinimize}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-muted rounded-md"
              onClick={() => setIsMaximized(!isMaximized)}
            >
              <Square className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-destructive/20 hover:text-destructive rounded-md"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 bg-white/30">
          {children}
        </div>
      </div>
    </Rnd>
  );
};
