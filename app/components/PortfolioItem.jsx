import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

export default function PortfolioItem({title, description, image, category}) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    
    gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div
      ref={itemRef}
      className="portfolio-item card-hover bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#FF6347] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
            <p className="text-sm font-semibold mb-2">{category}</p>
            <p className="text-lg font-bold mb-2">{title}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
} 