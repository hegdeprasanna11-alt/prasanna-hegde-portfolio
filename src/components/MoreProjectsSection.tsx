import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { moreProjects } from '@/data/projects';

const getBadgeClass = (variant: string) => {
  const classes: Record<string, string> = {
    green: 'badge-green',
    blue: 'badge-navy',
    purple: 'badge-purple',
    orange: 'badge-orange',
    gold: 'badge-gold',
    gray: 'bg-muted text-muted-foreground border-border',
    teal: 'badge-teal',
  };
  return classes[variant] || classes.gray;
};

export const MoreProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="more-projects" className="section-container">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          More Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Additional enterprise, telecom, and consulting engagements demonstrating breadth of experience
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreProjects.map((project) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover bg-card rounded-xl border border-border shadow-soft overflow-hidden"
          >
            <div className="p-5">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className={`text-xs ${getBadgeClass(badge.variant)}`}>
                    {badge.label}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <p className="text-xs text-muted-foreground mb-1">{project.timeline}</p>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.tagline}</p>

              {/* Metrics Preview */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.slice(0, 2).map((metric, index) => (
                  <div key={index} className="bg-muted/50 rounded-md px-3 py-1.5">
                    <span className="font-semibold text-sm text-foreground">{metric.value}</span>
                    <span className="text-xs text-muted-foreground ml-1">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* View Details Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full justify-center gap-2 text-accent hover:text-accent hover:bg-accent/10"
              >
                {expandedId === project.id ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    View Details <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                    {/* All Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Metrics</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.metrics.map((metric, index) => (
                          <div key={index} className="flex justify-between items-center bg-muted/30 rounded-md px-3 py-2">
                            <span className="text-sm text-muted-foreground">{metric.label}</span>
                            <span className="font-semibold text-sm text-foreground">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs badge-teal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
