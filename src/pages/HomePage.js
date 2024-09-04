import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import LandingComponent from '../components/LandingComponent';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <LandingComponent />
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example restaurant cards */}
          <RestaurantCard
            image="https://images.unsplash.com/photo-1617840186940-b8dc3b13d61a"
            name="Italian Bistro"
            description="Authentic Italian cuisine with a modern twist."
          />
          <RestaurantCard
            image="https://images.unsplash.com/photo-1506748686214-e9df14a83e6a"
            name="Sushi Palace"
            description="Fresh sushi and traditional Japanese dishes."
          />
          <RestaurantCard
            image="https://images.unsplash.com/photo-1606061283811-1f24dc93b964"
            name="Taco Haven"
            description="Delicious tacos and Mexican street food."
          />
          <RestaurantCard
            image="https://images.unsplash.com/photo-1574158622686-5b76e68ea3c5"
            name="Vegan Delights"
            description="Healthy and tasty vegan options."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
