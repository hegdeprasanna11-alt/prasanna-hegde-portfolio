import { useState, useEffect, useMemo } from 'react';
import { allProjects, Project, projectCategories } from '@/data/projects';

export const useProjectFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Category filter
      if (activeCategory !== 'All') {
        const categoryMatch = project.badges.some((badge) =>
          badge.label.toLowerCase().includes(activeCategory.toLowerCase())
        ) || project.category.toLowerCase().includes(activeCategory.toLowerCase());
        if (!categoryMatch) return false;
      }

      // Search filter
      if (debouncedSearch) {
        const searchLower = debouncedSearch.toLowerCase();
        const searchableText = [
          project.title,
          project.tagline,
          project.category,
          ...project.techStack,
          ...project.skills,
          ...(project.businessImpact || []),
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(searchLower)) return false;
      }

      return true;
    });
  }, [activeCategory, debouncedSearch]);

  const featuredFiltered = useMemo(() => 
    filteredProjects.filter((p) => p.featured), 
    [filteredProjects]
  );

  const moreFiltered = useMemo(() => 
    filteredProjects.filter((p) => !p.featured), 
    [filteredProjects]
  );

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  const hasActiveFilters = activeCategory !== 'All' || searchQuery !== '';

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredProjects,
    featuredFiltered,
    moreFiltered,
    clearFilters,
    hasActiveFilters,
    categories: projectCategories,
  };
};
