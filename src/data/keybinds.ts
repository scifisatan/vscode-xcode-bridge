export interface Keybind {
  id: string;
  title: string;
  action: string;
  shortcut: string;
  vscodeEquivalent?: string;
  description?: string;
  category: string;
}

export const keybinds: Keybind[] = [
  {
    id: "1",
    title: "Build",
    action: "buildActiveRunContext:",
    shortcut: "⌃B",
    vscodeEquivalent: "Ctrl+Shift+B",
    description: "Build the current project",
    category: "Build & Run"
  },
  {
    id: "2",
    title: "Analyze",
    action: "analyzeActiveRunContext:",
    shortcut: "⌃⌥B",
    vscodeEquivalent: "N/A",
    description: "Run static analysis on the project",
    category: "Build & Run"
  },
  {
    id: "3",
    title: "Clean Build Folder",
    action: "cleanActiveRunContext:",
    shortcut: "⌃⌥K",
    vscodeEquivalent: "N/A",
    description: "Clean the build folder",
    category: "Build & Run"
  },
  {
    id: "4",
    title: "Show Debug Area",
    action: "toggleDebuggerVisibility:",
    shortcut: "⌘J",
    vscodeEquivalent: "Ctrl+`",
    description: "Toggle debug area visibility",
    category: "Debug"
  },
  {
    id: "5",
    title: "Duplicate Line",
    action: "duplicate:",
    shortcut: "⌥⇧D",
    vscodeEquivalent: "Shift+Alt+Down",
    description: "Duplicate the current line",
    category: "Edit"
  },
  {
    id: "6",
    title: "Show Inspector",
    action: "toggleInspectorArea:",
    shortcut: "⇧⌘B",
    vscodeEquivalent: "N/A",
    description: "Toggle inspector area visibility",
    category: "View"
  },
  {
    id: "7",
    title: "Jump to Line",
    action: "jumpToLine:",
    shortcut: "⌃G",
    vscodeEquivalent: "Ctrl+G",
    description: "Jump to a specific line number",
    category: "Navigate"
  },
  {
    id: "8",
    title: "Move Focus to Editor",
    action: "moveFocusToEditor:",
    shortcut: "⌘1",
    vscodeEquivalent: "Ctrl+1",
    description: "Move focus to the editor area",
    category: "Navigate"
  },
  {
    id: "9",
    title: "Show Project Navigator",
    action: "changeToStructureNavigator:",
    shortcut: "⇧⌘E",
    vscodeEquivalent: "Ctrl+Shift+E",
    description: "Show the project navigator",
    category: "Navigate"
  },
  {
    id: "10",
    title: "Show Navigator",
    action: "toggleNavigator:",
    shortcut: "⌘B",
    vscodeEquivalent: "Ctrl+B",
    description: "Toggle navigator visibility",
    category: "View"
  },
  {
    id: "11",
    title: "New Folder",
    action: "newFolder:",
    shortcut: "⌥⌘N",
    vscodeEquivalent: "N/A",
    description: "Create a new folder",
    category: "File"
  },
  {
    id: "12",
    title: "Open Quickly",
    action: "openQuickly:",
    shortcut: "⌘P",
    vscodeEquivalent: "Ctrl+P",
    description: "Quick open files",
    category: "File"
  },
  {
    id: "13",
    title: "Select Next Occurrence",
    action: "selectNextOccurrence:",
    shortcut: "⌘D",
    vscodeEquivalent: "Ctrl+D",
    description: "Select next occurrence of current selection",
    category: "Edit"
  },
  {
    id: "14",
    title: "Move Line Down",
    action: "moveCurrentLineDown:",
    shortcut: "⌥↓",
    vscodeEquivalent: "Alt+Down",
    description: "Move current line down",
    category: "Edit"
  },
  {
    id: "15",
    title: "Move Line Up",
    action: "moveCurrentLineUp:",
    shortcut: "⌥↑",
    vscodeEquivalent: "Alt+Up",
    description: "Move current line up",
    category: "Edit"
  },
  {
    id: "16",
    title: "Rename Symbol",
    action: "renameRefactor:",
    shortcut: "F2",
    vscodeEquivalent: "F2",
    description: "Rename symbol at cursor",
    category: "Refactor"
  },
  {
    id: "17",
    title: "Delete Line",
    action: "deleteLine:",
    shortcut: "⇧⌘K",
    vscodeEquivalent: "Ctrl+Shift+K",
    description: "Delete the current line",
    category: "Edit"
  },
  {
    id: "18",
    title: "Select Line",
    action: "selectLine:",
    shortcut: "⌘L",
    vscodeEquivalent: "Ctrl+L",
    description: "Select the entire current line",
    category: "Edit"
  }
];

export const categories = Array.from(new Set(keybinds.map(k => k.category))).sort();