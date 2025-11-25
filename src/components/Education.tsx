'use client';

import { BookOpenIcon, AcademicCapIcon, VideoCameraIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const resources = [
  {
    category: 'Research Reports',
    icon: DocumentTextIcon,
    items: [
      { title: 'Q1 2025 Market Analysis', type: 'PDF', date: 'Jan 2025' },
      { title: 'Algorithmic Trading Strategies Guide', type: 'PDF', date: 'Dec 2024' },
      { title: 'Risk Management Best Practices', type: 'PDF', date: 'Nov 2024' },
    ],
  },
  {
    category: 'Video Tutorials',
    icon: VideoCameraIcon,
    items: [
      { title: 'Building Your First Algo Bot', type: 'Video', date: '45 min' },
      { title: 'Backtesting Strategies Effectively', type: 'Video', date: '32 min' },
      { title: 'Market Screening Techniques', type: 'Video', date: '28 min' },
    ],
  },
  {
    category: 'Webinars',
    icon: AcademicCapIcon,
    items: [
      { title: 'Advanced Quant Strategies', type: 'Live', date: 'Feb 15' },
      { title: 'AI in Trading: What Works', type: 'Recorded', date: 'Jan 20' },
      { title: 'Portfolio Optimization Workshop', type: 'Recorded', date: 'Jan 5' },
    ],
  },
  {
    category: 'Courses & Certifications',
    icon: BookOpenIcon,
    items: [
      { title: 'NISM Certification Prep', type: 'Course', date: '8 weeks' },
      { title: 'Quantitative Trading Masterclass', type: 'Course', date: '12 weeks' },
      { title: 'Algorithmic Trading Fundamentals', type: 'Course', date: '6 weeks' },
    ],
  },
];

const blogPosts = [
  {
    title: 'Understanding Market Microstructure',
    excerpt: 'Deep dive into how modern markets work and how to leverage microstructure for better execution.',
    date: 'Jan 20, 2025',
    readTime: '8 min read',
    category: 'Quant Research',
  },
  {
    title: 'Building Robust Trading Systems',
    excerpt: 'Key principles for designing algorithmic trading systems that can withstand various market conditions.',
    date: 'Jan 15, 2025',
    readTime: '12 min read',
    category: 'Algo Trading',
  },
  {
    title: 'AI vs Traditional Indicators',
    excerpt: 'Comparative analysis of machine learning models versus classical technical indicators.',
    date: 'Jan 10, 2025',
    readTime: '10 min read',
    category: 'AI & ML',
  },
];

export default function Education() {
  return (
    <section id="research" className="section bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Education</span> & Research
          </h2>
          <p className="text-lg md:text-xl text-metal-grey max-w-3xl mx-auto">
            Comprehensive learning resources, market research, and professional certifications
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource) => (
            <div
              key={resource.category}
              className="glass-strong p-6 rounded-xl border border-dark-border/50 hover:border-neon-teal/50 transition-colors"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-neon-teal/10 border border-neon-teal/30">
                  <resource.icon className="h-6 w-6 text-neon-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white">
                  {resource.category}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-3">
                {resource.items.map((item) => (
                  <li key={item.title} className="group">
                    <a href="#" className="block hover:bg-dark-tertiary/50 p-2 rounded transition-colors">
                      <p className="text-sm text-metal-silver group-hover:text-neon-teal transition-colors mb-1">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-metal-grey">
                        <span className="px-2 py-0.5 rounded bg-neon-blue/20 text-neon-blue">
                          {item.type}
                        </span>
                        <span>{item.date}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* View All Link */}
              <button className="mt-4 text-sm font-medium text-neon-teal hover:text-neon-cyan transition-colors flex items-center gap-1">
                View all
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Blog Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-heading font-bold text-3xl text-white">
              Latest from <span className="gradient-text">PRYNEX Blog</span>
            </h3>
            <a href="#blog" className="text-neon-teal hover:text-neon-cyan transition-colors font-medium">
              View all posts →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="glass p-6 rounded-xl border border-dark-border/50 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-neon-teal/10 text-neon-teal border border-neon-teal/30">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-neon-teal transition-colors">
                  {post.title}
                </h4>

                {/* Excerpt */}
                <p className="text-sm text-metal-grey leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-metal-grey">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 glass-strong p-8 md:p-12 rounded-2xl border border-neon-teal/30 text-center max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Join the <span className="gradient-text">PRYNEX Community</span>
          </h3>
          <p className="text-metal-grey mb-6">
            Get weekly market insights, research reports, and exclusive algo trading strategies
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-dark-tertiary border border-dark-border text-white placeholder-metal-grey focus:outline-none focus:border-neon-teal transition-colors"
            />
            <button
              type="submit"
              className="btn-neon-teal px-6 py-3 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-metal-grey mt-4">
            Research, tools & algo strategies (education-first). Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
