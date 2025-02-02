import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './components/PropertyCard';
import AddPropertyForm from './components/AddPropertyForm';

function App() {
  const [properties, setProperties] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleAddProperty = async (property) => {
    try {
      await axios.post('http://localhost:3001/api/properties', property);
      fetchProperties();
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Real Estate</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {showAddForm ? 'Cancel' : 'Add Property'}
          </button>
        </div>

        {showAddForm && (
          <div className="mb-8">
            <AddPropertyForm onSubmit={handleAddProperty} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
