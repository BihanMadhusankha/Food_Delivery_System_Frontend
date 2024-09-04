import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
  const restaurants = [
    {
      id: 1,
      imageUrl: 'https://example.com/restaurant1.jpg',
      name: 'Restaurant Name 1',
      description: 'Delicious food, quick delivery',
    },
    {
      id: 2,
      imageUrl: 'https://example.com/restaurant2.jpg',
      name: 'Restaurant Name 2',
      description: 'Authentic cuisine, fresh ingredients',
    },
    // Add more restaurants as needed
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          imageUrl={restaurant.imageUrl}
          name={restaurant.name}
          description={restaurant.description}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
