import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>
        <p className="text-gray-600 mb-4">{property.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${property.price}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
