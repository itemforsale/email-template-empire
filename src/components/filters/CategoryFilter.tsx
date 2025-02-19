import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    // Smooth scroll to templates section
    const templatesSection = document.querySelector('.grid');
    if (templatesSection) {
      templatesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button
        variant={selectedCategory === "" ? "default" : "outline"}
        className="rounded-full transition-all duration-200 hover:scale-105"
        onClick={() => handleCategoryClick("")}
      >
        All Categories
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className="rounded-full transition-all duration-200 hover:scale-105"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}