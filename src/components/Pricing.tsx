'use client';

import { CheckIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Free Research',
    price: '$0',
    period: 'forever',
    description: 'Perfect for learning and exploring market research',
    features: [
      'Basic market data',
      'Research reports (limited)',
      'Educational content',
      'Community access',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: 'per month',
    description: 'For serious traders and active investors',
    features: [
      'All Free features',
      'Real-time market data',
      'Algo Bot Builder (3 bots)',
      'Advanced Backtester',
      'Market Screener',
      'Sentiment Engine',
      'API access (limited)',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For institutions and professional traders',
    features: [
      'All Pro features',
      'Unlimited algo bots',
      'Advanced quant analytics',
      'White-label options',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 priority support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-dark-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg md:text-xl text-metal-grey max-w-3xl mx-auto">
            Start free, scale when ready. No hidden fees or surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'glass-strong border-2 border-neon-teal shadow-neon-teal scale-105 md:scale-110'
                  : 'glass border border-dark-border/50 hover:border-neon-blue/50'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon-teal text-dark-primary text-xs font-bold">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-metal-grey mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period !== 'forever' && (
                    <span className="text-metal-grey">/ {plan.period}</span>
                  )}
                </div>
                {plan.period === 'forever' && (
                  <p className="text-sm text-metal-grey mt-1">{plan.period}</p>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                  plan.highlighted
                    ? 'bg-neon-teal text-dark-primary hover:bg-neon-cyan hover:shadow-neon-teal'
                    : 'bg-dark-tertiary text-neon-teal border border-neon-teal/30 hover:bg-neon-teal/10'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-neon-teal' : 'text-neon-blue'
                    }`} />
                    <span className="text-sm text-metal-silver">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ / Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="glass p-6 rounded-xl border border-dark-border/50">
            <h4 className="font-heading font-semibold text-xl text-white mb-3">
              All plans include
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-metal-silver">
              <div>✓ SSL Security</div>
              <div>✓ Regular Updates</div>
              <div>✓ Data Encryption</div>
              <div>✓ Cancel Anytime</div>
              <div>✓ 14-day Trial</div>
              <div>✓ Money-back Guarantee</div>
            </div>
          </div>
          
          <p className="text-sm text-metal-grey mt-6">
            Need a custom plan? <a href="#contact" className="text-neon-teal hover:text-neon-cyan">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
}
