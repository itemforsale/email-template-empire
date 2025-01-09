import { Globe } from "lucide-react";

export function PageHeader() {
  const scrollToCategories = () => {
    const categoriesSection = document.querySelector('.flex.flex-wrap.justify-center.gap-3');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative mb-12 text-center">
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground transition-all duration-300 sm:text-5xl">
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent animate-pulse">Domain Name</span>
            <span> Outreach</span>
          </h1>
        </div>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground transition-all duration-300">
          Free Domain Outbound Templates to Drive Your Sales Success
        </p>
        <button 
          onClick={scrollToCategories}
          className="mt-6 w-full max-w-xl mx-auto bg-[#F2FCE2] hover:bg-[#E5F7D3] text-green-700 font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
        >
          <span>Click Below to Access Free Domain Outbound Templates!</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}