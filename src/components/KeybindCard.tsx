import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Code, ArrowRight } from "lucide-react";
import type { Keybind } from "../data/keybinds";

interface KeybindCardProps {
  keybind: Keybind;
  searchTerm?: string;
}

function highlightText(text: string, searchTerm: string): React.ReactNode {
  if (!searchTerm) return text;
  
  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return parts.map((part, i) => 
    part.toLowerCase() === searchTerm.toLowerCase() 
      ? <mark key={i} className="bg-search-highlight/30 text-foreground rounded px-1">{part}</mark>
      : part
  );
}

export function KeybindCard({ keybind, searchTerm = "" }: KeybindCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/30">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">
                {highlightText(keybind.title, searchTerm)}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {keybind.category}
              </Badge>
            </div>
            
            {keybind.description && (
              <p className="text-sm text-muted-foreground">
                {highlightText(keybind.description, searchTerm)}
              </p>
            )}
            
            <div className="flex items-center gap-4 pt-2">
              {keybind.vscodeEquivalent && keybind.vscodeEquivalent !== "N/A" && (
                <>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-vscode" />
                    <span className="text-sm font-medium text-muted-foreground">VSCode:</span>
                    <kbd className="bg-vscode/10 text-vscode px-2 py-1 rounded text-sm font-mono border border-vscode/20">
                      {keybind.vscodeEquivalent}
                    </kbd>
                  </div>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                </>
              )}
              
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-xcode" />
                <span className="text-sm font-medium text-muted-foreground">Xcode:</span>
                <kbd className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-mono border">
                  {keybind.shortcut}
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}