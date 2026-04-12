const features = [
  {
    icon: '📱',
    title: 'SMS & WhatsApp Notifications',
    description: 'Operators receive instant booking alerts via SMS or WhatsApp, ensuring delivery even in low connectivity areas.',
  },
  {
    icon: '🎫',
    title: 'QR Ticket System',
    description: 'Digital QR tickets that can be scanned by operators. No need for paper tickets or printouts.',
  },
  {
    icon: '💳',
    title: 'Secure Payments',
    description: 'Pay securely with Razorpay. Multiple payment options including UPI, cards, and net banking.',
  },
  {
    icon: '🔒',
    title: 'Safety First',
    description: 'We collect emergency contacts and verify operator licenses for your safety.',
  },
  {
    icon: '📞',
    title: 'Admin Support',
    description: 'Book via phone call if you prefer. Our admin team can create bookings for you.',
  },
  {
    icon: '⚡',
    title: 'Real-time Confirmation',
    description: 'Operators can confirm or update bookings instantly through our app or simple SMS reply.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Built for Local Tourism</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BokTravel is designed specifically for the Sundarbans region, 
            addressing unique challenges like unreliable internet connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
