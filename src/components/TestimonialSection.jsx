import { useState, useEffect } from "react";

// Sample testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Dorothy C. Swarts",
    position: "Product Designer",
    rating: 4.7,
    comment: "I've been using pagedone for a year now and it's made managing my finances so much easier and quick.",
    image: "/img/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Gary F. Wilson",
    position: "Sales Manager",
    rating: 4.5,
    comment: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
    image: "/img/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Ronald S. Price",
    position: "CEO",
    rating: 4.4,
    comment: "With pagedone, I can easily track my investments and see how they're performing in real-time.",
    image: "/img/avatar-3.jpg"
  },
  {
    id: 4,
    name: "Elsie K. Beauc",
    position: "Design Lead",
    rating: 4.3,
    comment: "I was hesitant to try pagedone at first, but I'm so glad I did it's exceeded all of my expectations.",
    image: "/img/avatar-4.jpg"
  },
  {
    id: 5,
    name: "James R. Anderson",
    position: "Financial Analyst",
    rating: 4.8,
    comment: "The dashboard analytics provided by pagedone give me insights I couldn't get anywhere else.",
    image: "/img/avatar-5.jpg"
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center">
      <span className="text-lg font-semibold mr-2">{rating.toFixed(1)}</span>
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < fullStars ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : hasHalfStar && i === fullStars ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="halfStar">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="flex p-6">
        <div className="flex-shrink-0 mr-6">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-24 h-24 rounded-lg object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.src = "/img/default-avatar.jpg";
            }}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <span className="text-gray-500 text-sm ml-4">|</span>
              <span className="text-gray-500 text-sm ml-4">{testimonial.position}</span>
            </div>
            <StarRating rating={testimonial.rating} />
          </div>
          <p className="mt-2 text-gray-600">{testimonial.comment}</p>
        </div>
      </div>
    </div>
  );
};

// For preview purposes only - using placeholders
const PreviewImage = ({ index }) => {
  return (
    <img 
      src={`/api/placeholder/${200 + index * 10}/${200 + index * 10}`} 
      alt={`Avatar ${index}`} 
      className="w-24 h-24 rounded-lg object-cover"
    />
  );
};

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setTestimonials(testimonialData);
  }, []);
  
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="bg-orange-100 p-2 rounded-lg">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="text-orange-500 font-medium">Testimonial</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Happy User Says !</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore testimonials highlighting the ease and effectiveness of our financial tools from satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200">
            Trusted by over 10,000 global businesses. Try Skywave today!
          </button>
        </div>
      </div>
    </div>
  );
}