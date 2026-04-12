import type { Route } from '../types';

const popularRoutes: Route[] = [
  {
    id: '1',
    from: 'Bokkhali',
    to: 'Mousuni Island',
    duration: '45 mins',
    price: 150,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  },
  {
    id: '2',
    from: 'Bokkhali',
    to: 'Jammu Deep',
    duration: '1 hr 30 mins',
    price: 250,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    id: '3',
    from: 'Bokkhali',
    to: 'Henry Island',
    duration: '2 hrs',
    price: 350,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
];

export function PopularRoutes() {
  return (
    <section id="routes" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Explore</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Popular Routes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most loved boat routes from Bokkhali to nearby pristine islands. 
            Each journey offers stunning views of the Sundarbans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularRoutes.map((route) => (
            <div 
              key={route.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={route.image} 
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white gap-2">
                    <span className="font-medium">{route.from}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="font-medium">{route.to}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-gray-900">₹{route.price}</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:-translate-y-0.5">
                  View Schedules
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
