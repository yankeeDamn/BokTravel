import { useState } from 'react';
import {
  Navbar,
  Hero,
  SearchForm,
  PopularRoutes,
  HowItWorks,
  Features,
  Testimonials,
  Footer,
} from './components';
import { TravelPackages } from './components/TravelPackages';
import { BookingModal } from './components/BookingModal';
import type { SearchParams, Route } from './types';

function App() {
  const [bookingRoute, setBookingRoute] = useState<Route | null>(null);

  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
    const whatsappMessage = encodeURIComponent(
      `Hi! I'd like to book a trip.\nFrom: ${params.from}\nTo: ${params.to}\nDate: ${params.date}\nPassengers: ${params.passengers}`
    );
    window.open(`https://wa.me/919986418638?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar onBookingClick={scrollToSearch} />
      <Hero onSearchClick={scrollToSearch} />
      <SearchForm onSearch={handleSearch} />
      <PopularRoutes onBookRoute={setBookingRoute} />
      <TravelPackages />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
      {bookingRoute && (
        <BookingModal route={bookingRoute} onClose={() => setBookingRoute(null)} />
      )}
    </div>
  );
}

export default App;
