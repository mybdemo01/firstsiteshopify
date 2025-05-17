import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import PortfolioItem from '../components/PortfolioItem';
import TestimonialItem from '../components/TestimonialItem';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const portfolioItems = [
  {
    title: 'E-commerce Redesign',
    description: 'Complete website redesign for a fashion brand, resulting in 150% increase in conversions.',
    image: '/images/portfolio/ecommerce.jpg',
    category: 'Web Design',
  },
  {
    title: 'Social Media Campaign',
    description: 'Viral social media campaign that generated 1M+ impressions and 50K+ engagements.',
    image: '/images/portfolio/social.jpg',
    category: 'Social Media',
  },
  {
    title: 'PPC Optimization',
    description: 'Google Ads campaign optimization that reduced CPA by 40% while increasing conversions.',
    image: '/images/portfolio/ppc.jpg',
    category: 'PPC',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Fashion Forward',
    content: 'Make Your Brand transformed our online presence. Their strategic approach and creative solutions helped us achieve remarkable growth in our digital marketing efforts.',
    image: '/images/testimonials/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'TechStart',
    content: 'The team at Make Your Brand delivered exceptional results. Their expertise in digital marketing helped us scale our business effectively.',
    image: '/images/testimonials/michael.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'EcoLife',
    content: 'Working with Make Your Brand has been a game-changer for our business. Their innovative strategies and dedicated support have been invaluable.',
    image: '/images/testimonials/emily.jpg',
  },
];

export default function Index() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scroll
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });

    // Hero section animation
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    // Parallax effect for sections
    gsap.utils.toArray('.parallax-section').forEach(section => {
      gsap.to(section, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {/* Hero Section */}
        <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
          <div className="hero-content text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#FF6347]">
              Make Your Brand
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 mb-8">
              Let's grow together
            </p>
            <button className="bg-[#FF6347] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff4f30] transition-colors hover-lift">
              Get Started
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a team of passionate digital marketers dedicated to helping businesses
                thrive in the digital landscape. Our expertise spans across various digital
                marketing channels, ensuring comprehensive solutions for your brand's growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Website Design',
                  description: 'Custom, responsive websites that convert visitors into customers.',
                },
                {
                  title: 'Facebook Ads',
                  description: 'Targeted advertising campaigns to reach your ideal audience.',
                },
                {
                  title: 'Google Ads',
                  description: 'Strategic PPC campaigns to boost your online visibility.',
                },
                {
                  title: 'Digital Marketing',
                  description: 'Comprehensive digital marketing solutions for your business.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow card-hover"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#FF6347]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-gray-50 parallax-section">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <PortfolioItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FF6347] input-focus"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FF6347] input-focus"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FF6347] input-focus"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF6347] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#ff4f30] transition-colors hover-lift"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 