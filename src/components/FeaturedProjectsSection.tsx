import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ProjectCard';
import { useProjectFilter } from '@/hooks/useProjectFilter';

export const FeaturedProjectsSection = () => {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    featuredFiltered,
    clearFilters,
    hasActiveFilters,
    categories,
  } = useProjectFilter();

  return (
    <section id="featured-projects" className="section-container bg-muted/30">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Flagship products and platforms that drove significant business impact
        </motion.p>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 space-y-4"
      >
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent/10 hover:text-accent hover:border-accent'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search projects by skills, tech stack, or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
              onClick={() => setSearchQuery('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="text-center">
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-accent">
              Clear all filters
            </Button>
          </div>
        )}
      </motion.div>

      {/* Projects Grid */}
      {featuredFiltered.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredFiltered.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          <Button variant="link" onClick={clearFilters} className="text-accent mt-2">
            Clear filters to see all projects
          </Button>
        </motion.div>
      )}
    </section>
  );
};
