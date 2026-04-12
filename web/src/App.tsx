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
import type { SearchParams } from './types';

function App() {
  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
    // TODO: Implement search functionality
    alert(`Searching for trips from ${params.from} to ${params.to} on ${params.date} for ${params.passengers} passenger(s)`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookingClick={scrollToSearch} />
      <Hero onSearchClick={scrollToSearch} />
      <SearchForm onSearch={handleSearch} />
      <PopularRoutes />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
