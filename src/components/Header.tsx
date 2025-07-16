import { Code2, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <div className="text-center space-y-4 mb-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex items-center gap-2 text-vscode">
          <Code2 className="h-8 w-8" />
          <span className="text-2xl font-bold">VSCode</span>
        </div>
        <ArrowRight className="h-6 w-6 text-muted-foreground" />
        <div className="flex items-center gap-2 text-xcode">
          <Code2 className="h-8 w-8" />
          <span className="text-2xl font-bold">Xcode</span>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-vscode to-xcode bg-clip-text text-transparent">
        Keybind Lookup
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Quick reference for VSCode developers transitioning to Xcode. 
        Find equivalent shortcuts and learn new workflows.
      </p>
    </div>
  );
}