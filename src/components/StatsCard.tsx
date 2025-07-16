import { Card, CardContent } from "./ui/card";

interface StatsCardProps {
  totalKeybinds: number;
  filteredKeybinds: number;
  searchTerm: string;
}

export function StatsCard({ totalKeybinds, filteredKeybinds, searchTerm }: StatsCardProps) {
  return (
    <Card className="bg-card/50 border-border/50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {searchTerm ? `Found ${filteredKeybinds} of ${totalKeybinds} keybinds` : `${totalKeybinds} keybinds available`}
          </span>
          {searchTerm && (
            <span className="text-primary">
              Searching: "{searchTerm}"
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}