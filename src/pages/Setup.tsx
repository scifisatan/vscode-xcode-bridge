import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Copy,
  ExternalLink 
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";

const Setup = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const handleCopy = (text: string, stepNumber: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepNumber);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Menu Key Bindings</key>
	<dict>
		<key>Key Bindings</key>
		<array>
			<!-- Your custom keybinds here -->
		</array>
		<key>Version</key>
		<integer>3</integer>
	</dict>
	<key>Text Key Bindings</key>
	<dict>
		<key>Key Bindings</key>
		<dict>
			<!-- Your text keybinds here -->
		</dict>
		<key>Version</key>
		<integer>3</integer>
	</dict>
</dict>
</plist>`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-vscode to-xcode bg-clip-text text-transparent">
            Setup Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Install custom Xcode keybinds to make it feel like VSCode
          </p>
        </div>

        <Navigation />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This guide will help you install custom Xcode keybinds that closely mirror VSCode shortcuts. 
                These configurations will make your transition from VSCode to Xcode much smoother.
              </p>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  <strong>Important:</strong> Always backup your existing keybinds before making changes.
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                Backup Existing Keybinds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Before installing custom keybinds, backup your current Xcode configuration.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p className="text-sm font-medium">Location:</p>
                <div className="flex items-center gap-2">
                  <code className="bg-background px-2 py-1 rounded text-sm flex-1">
                    ~/Library/Developer/Xcode/UserData/KeyBindings/
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy("~/Library/Developer/Xcode/UserData/KeyBindings/", 1)}
                  >
                    {copiedStep === 1 ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                Download Keybind File
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Create a new keybind file with VSCode-inspired shortcuts.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">VSCode-Xcode.idekeybindings</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy(xmlContent, 2)}
                  >
                    {copiedStep === 2 ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy XML
                  </Button>
                </div>
                <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                  <code>{xmlContent}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                Install in Xcode
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Place the keybind file in the correct Xcode directory.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Save the XML content</p>
                    <p className="text-sm text-muted-foreground">Save as <code>VSCode-Xcode.idekeybindings</code></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Move to Xcode directory</p>
                    <p className="text-sm text-muted-foreground">Place in <code>~/Library/Developer/Xcode/UserData/KeyBindings/</code></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Restart Xcode</p>
                    <p className="text-sm text-muted-foreground">Close and reopen Xcode for changes to take effect</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                Activate Keybinds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Select your new keybind set in Xcode preferences.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Open Xcode Preferences</p>
                    <p className="text-sm text-muted-foreground">⌘, or Xcode → Preferences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Go to Key Bindings tab</p>
                    <p className="text-sm text-muted-foreground">Select the Key Bindings section</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Select VSCode-Xcode</p>
                    <p className="text-sm text-muted-foreground">Choose your custom keybind set from the dropdown</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Reference */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Quick Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Once installed, you can use our keybind lookup to see all available shortcuts.
              </p>
              <Button asChild>
                <a href="/">
                  View Keybind Lookup
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Setup;