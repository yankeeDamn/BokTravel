import { useState } from 'react';

interface Package {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  includes: string[];
  image: string;
  tag?: string;
}

const packages: Package[] = [
  {
    id: 'jammudeep',
    name: 'Jammu Deep Adventure',
    description:
      'Explore the remote Jammu Deep island with its untouched mangrove forests and pristine beaches. A perfect getaway for nature lovers.',
    duration: '1 Day',
    price: 1500,
    includes: [
      'Boat ride from Bokkhali',
      'Guided island tour',
      'Lunch on the island',
      'Life jackets & safety gear',
    ],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    id: 'mousni',
    name: 'Mousni Island Escape',
    description:
      'Visit the beautiful Mousni Island known for its serene beaches, red crabs, and breathtaking sunsets over the Bay of Bengal.',
    duration: '1 Day',
    price: 1200,
    includes: [
      'Return boat ride',
      'Beach activities',
      'Snacks & refreshments',
      'Local guide',
    ],
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  },
  {
    id: 'henry',
    name: 'Henry Island Discovery',
    description:
      'Discover the enchanting Henry Island with its lighthouse, dense forests, and diverse birdlife. Ideal for photography enthusiasts.',
    duration: '1 Day',
    price: 1800,
    includes: [
      'Boat transfer',
      'Lighthouse visit',
      'Bird watching tour',
      'Lunch & snacks',
    ],
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
  {
    id: 'cargil',
    name: 'Cargil Beach Retreat',
    description:
      'Relax at the quiet and unspoiled Cargil Beach. Enjoy the calm waves, fishing boats, and local seafood in a peaceful setting.',
    duration: 'Half Day',
    price: 800,
    includes: [
      'Transport to beach',
      'Beach tent setup',
      'Fresh seafood lunch',
      'Photography assistance',
    ],
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
  },
  {
    id: 'honeymoon',
    name: 'Laxmipur Beach — Honeymoon Package',
    description:
      'A romantic getaway to Laxmipur Beach with private boat rides, candlelight dinner on the beach, and a memorable sunset cruise.',
    duration: '2 Days / 1 Night',
    price: 4500,
    includes: [
      'Private boat ride',
      'Beachside accommodation',
      'Candlelight dinner',
      'Sunset cruise',
      'Complimentary photography',
    ],
    image:
      'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&q=80',
    tag: 'Honeymoon Special',
  },
];

export function TravelPackages() {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

  const handleBookPackage = (pkg: Package) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the "${pkg.name}" package (₹${pkg.price}/person, ${pkg.duration}). Please share more details.`
    );
    window.open(`https://wa.me/919986418638?text=${message}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Exclusive Offers
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            Travel Packages
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our curated travel packages to explore the best of
            Sundarbans. Each package includes boat rides, guided tours, and
            meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                {pkg.tag && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                    {pkg.tag}
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-semibold rounded-full">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                    Includes
                  </h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-green-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      ₹{pkg.price}
                    </span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Package Details Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-3xl max-w-lg w-full border border-gray-700 shadow-2xl overflow-hidden">
            <div className="relative h-48">
              <img
                src={selectedPkg.image}
                alt={selectedPkg.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <button
                onClick={() => setSelectedPkg(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-1">
                {selectedPkg.name}
              </h3>
              <p className="text-blue-400 text-sm mb-4">
                {selectedPkg.duration} • ₹{selectedPkg.price}/person
              </p>
              <p className="text-gray-400 mb-4">{selectedPkg.description}</p>
              <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                What's Included
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedPkg.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-green-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <button
                  onClick={() => handleBookPackage(selectedPkg)}
                  className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Book via WhatsApp
                </button>
                <button
                  onClick={() => setSelectedPkg(null)}
                  className="px-5 py-3 bg-gray-800 text-gray-300 font-semibold rounded-xl hover:bg-gray-700 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
