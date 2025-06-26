import React from 'react';
import './Testimonial.scss';

const testimonials = [
  {
    id: '1',
    name: 'Veronica Gleason',
    role: 'Influencer',
    image: 'https://i.pravatar.cc/150?img=1',
    content: 'I got exactly what I needed. The quality is top-notch and the delivery was fast.',
    layout: 'left',
  },
  {
    id: '2',
    name: 'Carolyn Wilms',
    role: 'HR Manager',
    image: 'https://i.pravatar.cc/150?img=5',
    content: 'It\'s the kind of support that makes you a lifelong customer. Thank you!',
    layout: 'right',
  },
  {
    id: '3',
    name: 'Simon Arnold',
    role: 'UI Designer',
    image: 'https://i.pravatar.cc/150?img=8',
    content: 'Clean, consistent, and extremely easy to use. I love it!',
    layout: 'top',
  },
  {
    id: '4',
    name: 'Cecilia Flores',
    role: 'Marketing Expert',
    image: 'https://i.pravatar.cc/150?img=9',
    content: 'The best customer experience I\'ve had in years. Period.',
    layout: 'left',
  },
  {
    id: '5',
    name: 'Ryan Wyman',
    role: 'Photographer',
    image: 'https://i.pravatar.cc/150?img=6',
    content: 'Incredible from start to finish. These folks really know what they’re doing.',
    layout: 'right',
  },
  {
    id: '6',
    name: 'Stacey Picardo',
    role: 'Developer Advocate',
    image: 'https://i.pravatar.cc/150?img=3',
    content: 'With their user-first design, I’m always confident in the results.',
    layout: 'top',
  },
  {
    id: '7',
    name: 'Markus Hayden',
    role: 'CTO at ZenoTech',
    image: 'https://i.pravatar.cc/150?img=11',
    content: 'Robust tools and excellent documentation. Can’t ask for more.',
    layout: 'left',
  },
  {
    id: '8',
    name: 'Natalie Brooks',
    role: 'Startup Founder',
    image: 'https://i.pravatar.cc/150?img=12',
    content: 'Every feature I needed — and some I didn’t know I wanted.',
    layout: 'right',
  },
  {
    id: '9',
    name: 'Jason Roe',
    role: 'Senior Product Manager',
    image: 'https://i.pravatar.cc/150?img=13',
    content: 'Their solutions helped us ship 3x faster. Highly recommend.',
    layout: 'top',
  },
  {
    id: '10',
    name: 'Alexis Rivers',
    role: 'Content Strategist',
    image: 'https://i.pravatar.cc/150?img=14',
    content: 'From onboarding to delivery, every step felt seamless.',
    layout: 'left',
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">Client Testimonials</h2>
      <div className="testimonial-grid mt-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={`testimonial-card layout-${testimonial.layout}`}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <p className="quote">"{testimonial.content}"</p>
              <h5 className="name">{testimonial.name}</h5>
              <span className="role">{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
