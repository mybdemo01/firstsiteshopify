import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

export default function TestimonialItem({name, role, company, content, image}) {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const testimonial = testimonialRef.current;
    
    gsap.from(testimonial, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: testimonial,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div
      ref={testimonialRef}
      className="testimonial-item bg-white rounded-xl p-8 shadow-lg hover-lift"
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-[#FF6347]">{role}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <div className="relative">
        <svg
          className="absolute -top-4 -left-4 w-8 h-8 text-[#FF6347] opacity-20"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
} 