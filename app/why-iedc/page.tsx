import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyIEDC = () => {
  const features = [
    {
      title: "Innovation Catalyst",
      description: "IEDC is the breeding ground for groundbreaking ideas and transformative innovations that shape the future of technology and entrepreneurship.",
      icon: "💡"
    },
    {
      title: "Skill Development",
      description: "We provide comprehensive training and workshops to equip students with cutting-edge skills in technology, business, and leadership.",
      icon: "🚀"
    },
    {
      title: "Startup Ecosystem",
      description: "Our incubation center supports budding entrepreneurs by providing mentorship, resources, and networking opportunities.",
      icon: "🌱"
    },
    {
      title: "Industry Connections",
      description: "Direct engagement with industry leaders, providing real-world insights and potential career opportunities.",
      icon: "🤝"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/images/college.jpg"
          alt="SJCET Campus"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">
            Why IEDC?
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            The Innovation and Entrepreneurship Development Cell (IEDC) at SJCET is more than just a club. 
            It&apos;s a launchpad for dreams, a crucible of innovation, and a gateway to transformative opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#bf953f] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            href="/join"
            className="inline-block bg-transparent text-white px-10 py-3 rounded-full text-lg font-semibold border-2 border-white hover:border-[#bf953f] hover:bg-gradient-to-r hover:from-[#bf953f] hover:via-[#fcf6ba] hover:to-[#b38728] hover:text-black transition-all duration-700"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyIEDC;
