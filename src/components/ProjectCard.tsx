import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

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

const getCategoryColor = (category: string) => {
  if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('ml')) {
    return 'border-l-purple-ai';
  }
  if (category.toLowerCase().includes('national') || category.toLowerCase().includes('government')) {
    return 'border-l-teal';
  }
  if (category.toLowerCase().includes('startup') || category.toLowerCase().includes('marketplace')) {
    return 'border-l-orange-500';
  }
  if (category.toLowerCase().includes('enterprise') || category.toLowerCase().includes('crm')) {
    return 'border-l-navy dark:border-l-blue-400';
  }
  if (category.toLowerCase().includes('compliance') || category.toLowerCase().includes('regulatory')) {
    return 'border-l-emerald-500';
  }
  return 'border-l-muted-foreground';
};

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`card-hover bg-card rounded-xl border border-border shadow-soft overflow-hidden border-l-4 ${getCategoryColor(project.category)}`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.badges.map((badge, index) => (
            <Badge key={index} variant="outline" className={`text-xs ${getBadgeClass(badge.variant)}`}>
              {badge.label}
            </Badge>
          ))}
        </div>

        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{project.timeline}</p>
            <h3 className="font-display font-semibold text-xl text-foreground">{project.title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{project.tagline}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {project.metrics.slice(0, 4).map((metric, index) => (
            <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="font-display font-bold text-lg text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 5).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="secondary" className="text-xs">
              +{project.techStack.length - 5} more
            </Badge>
          )}
        </div>

        {/* Expand/Collapse Button */}
        {featured && (project.challenge || project.solution || project.businessImpact) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-center gap-2 text-accent hover:text-accent hover:bg-accent/10"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && featured && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-6 space-y-6">
              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{project.challenge}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="bg-muted/30 rounded-lg p-4">
                        <h5 className="font-medium text-foreground mb-2">{feature.title}</h5>
                        <ul className="space-y-1">
                          {feature.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Impact */}
              {project.businessImpact && project.businessImpact.length > 0 && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Business Impact</h4>
                  <ul className="space-y-2">
                    {project.businessImpact.map((impact, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-display font-semibold text-foreground mb-3">Product Learnings</h4>
                  <ol className="space-y-2">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="font-bold text-accent">{index + 1}.</span>
                        {learning}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Full Tech Stack */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Skills Demonstrated</h4>
                <div className="flex flex-wrap gap-2">
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
  );
};
