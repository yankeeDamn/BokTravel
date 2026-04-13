const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Search & Select',
    description: 'Browse available boat schedules from Bokkhali to your dream island destination.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Book via WhatsApp',
    description: 'Send your booking details directly via WhatsApp for instant confirmation. Quick and easy!',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    title: 'Get QR Ticket',
    description: 'Receive your QR ticket instantly. Show it to the operator when boarding — no printout needed!',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Operator Confirms',
    description: 'The boat operator receives SMS/WhatsApp notification and confirms your booking within minutes.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Book your boat trip in 4 simple steps. Our platform ensures seamless communication 
            between you and local operators even in low connectivity areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-blue-700/30" />
              )}
              
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
