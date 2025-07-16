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
			<dict>
				<key>Action</key>
				<string>analyzeActiveRunContext:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Analyze</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Analyze</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^@b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Analyze</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>buildActiveRunContext:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Build</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Build</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Build</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>cleanActiveRunContext:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Clean</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Clean</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^@k</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Clean Build Folder…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>compileFile:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.CompileFile</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.CompileFile</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Perform Action</string>
				<key>Title</key>
				<string>Compile File</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>toggleDebuggerVisibility:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.DebuggerToggleVisibility</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.DebuggerToggleVisibility</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@j</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Debug Area</string>
				<key>Title</key>
				<string>Show Debug Area</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>duplicate:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Duplicate</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Duplicate</string>
				<key>Group</key>
				<string>Edit Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~$</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Duplicate</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>editAndAnalyzeActiveRunContext:</string>
				<key>Alternate</key>
				<string>YES</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.EditAndAnalyze</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.EditAndAnalyze</string>
				<key>Group</key>
				<string>Product Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^~@b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Analyze…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>toggleInspectorArea:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Inspectors.ToggleVisibility</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Inspectors.ToggleVisibility</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>$@B</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Inspectors</string>
				<key>Title</key>
				<string>Show Inspector</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Commit Sheet</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Documentation</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.DocViewingNavigateMenu</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>jumpToLine:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>
				<key>Group</key>
				<string>Navigate Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>^g</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Jump to…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveFocusToEditor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.MoveFocusToEditor</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.MoveFocusToEditor</string>
				<key>Group</key>
				<string>Navigate Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@1</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Move Focus to Editor…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>changeToStructureNavigator:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsStructure</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsStructure</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>$@E</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Navigators</string>
				<key>Title</key>
				<string>Project</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>toggleNavigator:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsToggleVisibility</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.NavigatorsToggleVisibility</string>
				<key>Group</key>
				<string>View Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@b</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Navigators</string>
				<key>Title</key>
				<string>Show Navigator</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>newFolder:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>IDENewGrouping</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.NewFolder</string>
				<key>Group</key>
				<string>File Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~@n</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>New</string>
				<key>Title</key>
				<string>Folder</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>openQuickly:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.OpenQuickly</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.OpenQuickly</string>
				<key>Group</key>
				<string>File Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@p</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Open Quickly…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>printDocument:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.Print</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.Print</string>
				<key>Group</key>
				<string>File Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Print…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>selectNextOccurrence:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.SelectNextOccurrence</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.SelectNextOccurrence</string>
				<key>Group</key>
				<string>Find Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>@d</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Select Next Occurrence</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>useSelectionForReplace:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEKit.CmdDefinition.UseSelectionForReplace</string>
				<key>CommandID</key>
				<string>Xcode.IDEKit.CmdDefinition.UseSelectionForReplace</string>
				<key>Group</key>
				<string>Find Menu</string>
				<key>GroupID</key>
				<string>Xcode.IDEKit.MenuDefinition.Main</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Use Selection for Replace</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineDown:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>Group</key>
				<string>Editor Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Down</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineDown:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>Group</key>
				<string>Editor Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Down</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineDown:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>
				<key>Group</key>
				<string>Editor Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Down</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineUp:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>Group</key>
				<string>Editor Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Up</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineUp:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>Group</key>
				<string>Editor Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Up</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>moveCurrentLineUp:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>
				<key>Group</key>
				<string>Editor Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string>~</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Structure</string>
				<key>Title</key>
				<string>Move Line Up</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>renameRefactor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>Group</key>
				<string>Editor Menu for Asset Catalog Comparison</string>
				<key>GroupID</key>
				<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string></string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Refactor</string>
				<key>Title</key>
				<string>Rename…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>renameRefactor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>Group</key>
				<string>Editor Menu for Playground</string>
				<key>GroupID</key>
				<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string></string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Refactor</string>
				<key>Title</key>
				<string>Rename…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>renameRefactor:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>CommandID</key>
				<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>
				<key>Group</key>
				<string>Editor Menu for Source Code</string>
				<key>GroupID</key>
				<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Keyboard Shortcut</key>
				<string></string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Parent Title</key>
				<string>Refactor</string>
				<key>Title</key>
				<string>Rename…</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>editorMenuTogglePlayPause:</string>
				<key>Alternate</key>
				<string>NO</string>
				<key>CommandGroupID</key>
				<string>Xcode.SpriteKit.CmdDefinition.TogglePauseSimulate</string>
				<key>CommandID</key>
				<string>Xcode.SpriteKit.CmdDefinition.TogglePauseSimulate</string>
				<key>Group</key>
				<string>Editor Menu for SpriteKit Scene Editor</string>
				<key>GroupID</key>
				<string>Xcode.SpriteKit.Scene.Editor.MenuDefinition</string>
				<key>GroupedAlternate</key>
				<string>NO</string>
				<key>Navigation</key>
				<string>NO</string>
				<key>Title</key>
				<string>Edit / Simulate</string>
			</dict>
		</array>
		<key>Version</key>
		<integer>3</integer>
	</dict>
	<key>Text Key Bindings</key>
	<dict>
		<key>Key Bindings</key>
		<dict>
			<key></key>
			<array>
				<array>
					<string>moveBackward:</string>
					<string>moveToBeginningOfParagraph:</string>
				</array>
				<string>moveBackward:</string>
				<array>
					<string>moveForward:</string>
					<string>moveToEndOfParagraph:</string>
				</array>
				<string>moveParagraphForwardAndModifySelection:</string>
			</array>
			<key>$@K</key>
			<string>deleteLine:</string>
			<key>$</key>
			<string>moveToBeginningOfDocumentAndModifySelection:</string>
			<key>@l</key>
			<string>selectLine:</string>
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
			Credits: <a className="decoration-wavy">https://gist.github.com/hoishing/2b024e625024e5b409f0bb5941688375#vscode-keybindings-for-xcode</a>
		</p>
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
            </CardContent>
          </Card>

          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                Create Keybind File
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Create a new keybind file in your Xcode KeyBindings directory.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p className="text-sm font-medium">Create file:</p>
                <div className="flex items-center gap-2">
                  <code className="bg-background px-2 py-1 rounded text-sm flex-1">
                    ~/Library/Developer/Xcode/UserData/KeyBindings/VSCode.idekeybindings
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy("~/Library/Developer/Xcode/UserData/KeyBindings/VSCode.idekeybindings", 1)}
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
                Copy XML Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Copy the XML content below and paste it into your VSCode.idekeybindings file.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">XML Content</span>
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
                Restart Xcode
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Restart Xcode to load the new keybind configuration.
              </p>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium">Close and reopen Xcode</p>
                  <p className="text-sm text-muted-foreground">This ensures the new keybind file is properly loaded</p>
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
                    <p className="font-medium">Select VSCode</p>
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
