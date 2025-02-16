import React, { useState } from 'react';
import { Star, User, MessageSquare } from 'lucide-react';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    feedback: ''
  });

  const [reviews] = useState([
    {
      id: 1,
      name: 'John Smith',
      rating: 5,
      feedback: 'Excellent service and quality! The team was professional and the results exceeded our expectations.',
      date: '2024-03-15'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 4,
      feedback: 'Great color selection and helpful staff. Would definitely recommend!',
      date: '2024-03-14'
    },
    {
      id: 3,
      name: 'Michael Brown',
      rating: 5,
      feedback: 'The paint quality is outstanding. My walls look amazing!',
      date: '2024-03-13'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      rating: 5,
      feedback: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Feedback</h1>
          <p className="text-xl text-gray-600">
            Share your experience with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Review</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= formData.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews Display */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <User className="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}