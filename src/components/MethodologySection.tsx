import { motion } from 'framer-motion';
import { Search, Target, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Research',
    color: 'text-teal',
    bgColor: 'bg-teal/10',
    borderColor: 'border-teal',
    items: [
      'User interviews & stakeholder workshops to uncover needs',
      'Market analysis & competitive research for positioning',
      'Data-driven problem identification using analytics',
      'Customer journey mapping and pain point analysis',
    ],
  },
  {
    icon: Target,
    title: 'Strategy & Planning',
    color: 'text-navy dark:text-blue-400',
    bgColor: 'bg-navy/10 dark:bg-blue-400/10',
    borderColor: 'border-navy dark:border-blue-400',
    items: [
      'Vision and product roadmap development',
      'OKRs and North Star metrics definition',
      'JTBD framework and prioritization',
      'Feature prioritization using RICE/MoSCoW',
    ],
  },
  {
    icon: Zap,
    title: 'Execution & Delivery',
    color: 'text-purple-ai',
    bgColor: 'bg-purple-ai/10',
    borderColor: 'border-purple-ai',
    items: [
      'Agile/Scrum methodologies with iterative sprints',
      'Cross-functional team leadership',
      'Iterative development & continuous feedback loops',
      'Risk management and mitigation strategies',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Measurement & Optimization',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    items: [
      'KPI tracking and analytics dashboards',
      'A/B testing and experimentation frameworks',
      'Data-driven iteration cycles based on metrics',
      'Post-launch monitoring and continuous improvement',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const MethodologySection = () => {
  return (
    <section id="methodology" className="section-container bg-muted/30">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My Product Approach
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          A proven 4-step framework for building successful products
        </motion.p>
      </div>

      {/* Process Flow */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal via-purple-ai to-emerald-500 opacity-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Number */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center border-2 ${step.borderColor}`}>
                  <step.icon className={`h-6 w-6 ${step.color}`} />
                </div>
                <span className={`font-display font-bold text-2xl ${step.color}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content Card */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  {step.title}
                </h3>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className={`${step.color} mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0`} style={{ backgroundColor: 'currentColor' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[88px] -right-4 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
