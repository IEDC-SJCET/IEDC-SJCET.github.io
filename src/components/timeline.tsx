
import React from 'react';
import { Circle, Award, Briefcase, Lightbulb, Rocket } from 'lucide-react';

const timelineData = [
  { id: 1, date: '2022', title: 'IEDC SUMMIT 2022', description: 'The 6th edition of the IEDC Summit was a 2-day long event conducted on 5th March 2022, hosted by St. Joseph\'s College of Engineering and Technology.', icon: Circle, color: 'bg-blue-500' },
  { id: 2, date: '2021', title: 'CASH GRANT OF INR 1 LAC', description: 'A cash grant was awarded from Idea Fest organized by KSUM. The product prototype was E-LENDING MACHINE, which enables lending and booking of development boards, sensors, etc.', icon: Award, color: 'bg-green-500' },
  { id: 3, date: '2018', title: 'GRAND FINALE OF STARTUP INDIA', description: 'IEDC Startup Bootcamp SICET bagged three prizes at the Grand Finale of Startup India Kerala Startup Yatra in the year 2018. Organized by Startup India and Kerala Startup Mission at Technopark, Trivandrum. IDEA FEST 2021.', icon: Briefcase, color: 'bg-yellow-500' },
  { id: 4, date: '2018', title: 'ALL INDIA PERSISTENT INSPIRATION AWARD', description: 'Reon Saji, Praveen K S, Sandeep Salmon, Smitha John, Hanna George, and Neethu Naduvathettu bagged the award at the 2nd Smart India Hackathon, the world\'s biggest hackathon.', icon: Lightbulb, color: 'bg-purple-500' },
  { id: 5, date: '2020', title: 'INDIA 500 STARTUP AWARD 2020', description: 'Hyperthink Technologies, SICET graduates Mr. Anto Patrex and Mr. Tahseen Amin were nominated.', icon: Rocket, color: 'bg-red-500' },
  { id: 6, date: '2019', title: 'LAMAARA TECHNOLOGIES', description: 'Lamaara Technologies was selected for an Idea Grant of 2 Lakhs in 2017. Achieved investment at TIECON KERALA 2019 from Chennai Angels. Co-founders were named among the 50 most influential people in Kerala in 2019 by The Kerala Insider. Founded by Mr. Anto Patrex and Mr. Thomas Cyriac.', icon: Briefcase, color: 'bg-indigo-500' },
  { id: 7, date: '2018', title: 'ENTREPRENEURSHIP ENABLER AWARD 2018', description: 'The Entrepreneurship Enabler Award 2018 of Kerala Startup Mission was handed over by Sri M. Sivasankar IAS (Secretary to CM and IT Secretary).', icon: Award, color: 'bg-teal-500' }
];

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-purple-500 md:text-3xl lg:text-4xl mb-4 text-center">Bootcamp Rewind</h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        {timelineData.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full min-w-fit p-2">
              <h1 className="mx-auto font-semibold text-lg text-white">{milestone.date}</h1>
            </div>
            <div
              className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl ${milestone.color} text-white`}
            >
              <h3 className="mb-3 font-bold text-xl">{milestone.title}</h3>
              <milestone.icon className="text-4xl mb-3 inline-block" />
              <p className="text-sm leading-snug tracking-wide">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;