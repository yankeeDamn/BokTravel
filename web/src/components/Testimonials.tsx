const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Kolkata',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Amazing experience! The booking process was so smooth and the operator was notified instantly. The QR ticket worked perfectly.',
  },
  {
    name: 'Rahul Basu',
    location: 'Delhi',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Finally a booking system that works in the Sundarbans! No more uncertainty about boat availability. Highly recommended.',
  },
  {
    name: 'Anita Das',
    location: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'The SMS confirmation feature is brilliant. Even with spotty internet, the operator knew we were coming. Great service!',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">What Travelers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from tourists who've experienced the beauty of Sundarbans islands with BokTravel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
