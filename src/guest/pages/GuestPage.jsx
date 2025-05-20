import './GuestPage.css';

const GuestPage = () => {
  const products = [
    {
      id: 1,
      name: 'Nasi Goreng Special',
      price: 35000,
      image: 'https://via.placeholder.com/300x200?text=Nasi+Goreng'
    },
    {
      id: 2,
      name: 'Ayam Bakar Pedas',
      price: 45000,
      image: 'https://via.placeholder.com/300x200?text=Ayam+Bakar'
    },
    {
      id: 3,
      name: 'Mie Ayam Jamur',
      price: 30000,
      image: 'https://via.placeholder.com/300x200?text=Mie+Ayam'
    },
    {
      id: 4,
      name: 'Sate Ayam Madura',
      price: 40000,
      image: 'https://via.placeholder.com/300x200?text=Sate+Ayam'
    },
    {
      id: 5,
      name: 'Sop Buntut',
      price: 55000,
      image: 'https://via.placeholder.com/300x200?text=Sop+Buntut'
    },
    {
      id: 6,
      name: 'Gado-Gado',
      price: 25000,
      image: 'https://via.placeholder.com/300x200?text=Gado-Gado'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Andi Wijaya',
      avatar: 'https://avatar-placeholder.iran.liara.run/?username=Andi+Wijaya',
      rating: 5,
      text: 'Sedap makes ordering food so easy! The delivery is always on time and the food arrives hot and fresh.'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      avatar: 'https://avatar-placeholder.iran.liara.run/?username=Budi+Santoso',
      rating: 4,
      text: 'Great variety of restaurants to choose from. I especially love their exclusive deals!'
    },
    {
      id: 3,
      name: 'Citra Dewi',
      avatar: 'https://avatar-placeholder.iran.liara.run/?username=Citra+Dewi',
      rating: 5,
      text: 'The customer service is excellent. Had an issue with my order and they resolved it immediately.'
    },
    {
      id: 4,
      name: 'Dian Pratama',
      avatar: 'https://avatar-placeholder.iran.liara.run/?username=Dian+Pratama',
      rating: 5,
      text: 'Best food delivery app I\'ve used. The interface is intuitive and the food options are amazing.'
    },
    {
      id: 5,
      name: 'Eka Putri',
      avatar: 'https://avatar-placeholder.iran.liara.run/?username=Eka+Putri',
      rating: 4,
      text: 'Love the weekly promotions and the ability to save my favorite orders for quick reordering.'
    }
  ];

  return (
    <div className="guest-page">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Discover Culinary Delights with Sedap</h1>
            <p className="subheadline">Order your favorite meals from the best restaurants in town, delivered fast to your doorstep.</p>
            <div className="cta-buttons">
              <a href="/register" className="btn btn-primary">Get Started</a>
              <a href="#products" className="btn btn-outline">Explore Menu</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-food.png" alt="Delicious Food" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Sedap</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Sedap is revolutionizing the way you experience food delivery. Our platform connects you with the best local restaurants, offering a seamless ordering experience with fast delivery.</p>
              <div className="features">
                <div className="feature">
                  <i className="fas fa-bolt"></i>
                  <h3>Fast Delivery</h3>
                  <p>Get your food delivered in under 30 minutes.</p>
                </div>
                <div className="feature">
                  <i className="fas fa-star"></i>
                  <h3>Quality Guarantee</h3>
                  <p>Only the best restaurants in our network.</p>
                </div>
                <div className="feature">
                  <i className="fas fa-utensils"></i>
                  <h3>Wide Variety</h3>
                  <p>From local favorites to international cuisine.</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/about-food.png" alt="About Sedap" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2 className="section-title">Our Top Products</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">Rp{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`fas fa-star ${i < testimonial.rating ? 'filled' : ''}`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestPage;