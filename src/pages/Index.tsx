import { useState, useMemo } from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { KeybindCard } from "../components/KeybindCard";
import { StatsCard } from "../components/StatsCard";
import { keybinds, categories } from "../data/keybinds";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredKeybinds = useMemo(() => {
    return keybinds.filter(keybind => {
      const matchesSearch = searchTerm === "" || 
        keybind.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        keybind.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        keybind.shortcut.toLowerCase().includes(searchTerm.toLowerCase()) ||
        keybind.vscodeEquivalent?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === null || keybind.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Header />
        
        <div className="space-y-8">
          {/* Search Section */}
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by title, description, or shortcut..."
          />
          
          {/* Category Filter */}
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          {/* Stats */}
          <StatsCard 
            totalKeybinds={keybinds.length}
            filteredKeybinds={filteredKeybinds.length}
            searchTerm={searchTerm}
          />
          
          {/* Results */}
          <div className="space-y-4">
            {filteredKeybinds.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No keybinds found matching your criteria.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try adjusting your search term or category filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredKeybinds.map((keybind) => (
                  <KeybindCard 
                    key={keybind.id} 
                    keybind={keybind} 
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
