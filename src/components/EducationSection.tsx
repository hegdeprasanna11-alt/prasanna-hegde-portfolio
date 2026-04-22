import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { educationList, certifications } from '@/data/career';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const EducationSection = () => {
  return (
    <section id="education" className="section-container bg-muted/30">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education & Credentials
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-navy/10 dark:bg-blue-400/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-navy dark:text-blue-400" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground">Education</h3>
          </div>

          <div className="space-y-4">
            {educationList.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="card-hover bg-card rounded-xl border border-border p-5 shadow-soft"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="font-display font-semibold text-foreground">{edu.institution}</h4>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-accent font-medium text-sm mb-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-ai/10 flex items-center justify-center">
              <Award className="h-5 w-5 text-purple-ai" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground">Certifications</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="card-hover bg-card rounded-xl border border-border p-5 shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-accent font-medium mb-2">{cert.provider}</p>
                    <p className="text-sm text-muted-foreground">{cert.focus}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
