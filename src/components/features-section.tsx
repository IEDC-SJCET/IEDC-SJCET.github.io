"use client"

import { useState } from "react"
import { Users, Lightbulb, Network, Sprout, Check } from "lucide-react"
import type React from "react"

interface Step {
  icon: React.ElementType
  title: string
  description: string
  bgColor: string
}

export default function FeaturesSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps: Step[] = [
    {
      icon: Users,
      title: "WHY IEDC",
      description: "Here students take their first step as innovators and entrepreneurs",
      bgColor: "bg-purple-600",
    },
    {
      icon: Users,
      title: "MENTORING",
      description:
        "Startup bootcamp also provides mentoring support to help the students in developing innovative ideas, setting goals and exploring careers which is best suited.",
      bgColor: "bg-mint-100",
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description:
        "Startup bootcamp provides students with assistance in projects through innovative ideas which can be utilised for future endeavours",
      bgColor: "bg-[#fff5f0]",
    },
    {
      icon: Network,
      title: "NETWORKING",
      description:
        "Startup bootcamp also helps students in connecting them with other personalities to identify their potential and increase their opportunities",
      bgColor: "bg-[#fff5f0]",
    },
    {
      icon: Sprout,
      title: "INCUBATION",
      description:
        "Startup bootcamp provides incubation support to students by giving opportunity to express their innovative ideas and make it work",
      bgColor: "bg-mint-100",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center">
      {/* Background Pattern */}
      <div
        className="absolute inset-0  opacity-70"
        style={{
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
          {/* Left Panel */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 relative w-full lg:w-[450px]">
            {/* Top Badge */}
            <div className="absolute -top-5 right-8 bg-purple-600 text-yellow-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full transform rotate-[-5deg]">
              <p className="font-bold text-base sm:text-lg">IEDC</p>
              <p className="text-xs sm:text-sm -mt-1">SJCET</p>
            </div>

            {/* Steps Timeline */}
            <div className="mt-16 relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-purple-200" />
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-purple-200" />

              {steps.map((step, index) => (
                <button
                type="button"
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative flex items-start mb-6 sm:mb-8 w-full"
                >
                  {/* Checkmark Circle */}
                  <div
                    className={`z-10 rounded-full ${
                      activeStep === index ? "bg-purple-600" : "bg-purple-200"
                    } p-1.5 transition-colors duration-200 ml-3`}
                  >
                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>

                  {/* Button */}
                  <div
                    className={`ml-4 px-4 sm:px-6 py-2 sm:py-3 rounded-xl ${step.bgColor} flex items-center gap-2 sm:gap-3 transition-colors duration-200 ${
                      activeStep === index ? "bg-opacity-100" : "bg-opacity-50"
                    }`}
                  >
                    <step.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    <span className="font-bold text-sm sm:text-base">{step.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="bg-purple-600 rounded-[32px] p-8 sm:p-12 text-white relative lg:w-4/6 w-full">
            {/* Yellow Triangle */}
            <div className="absolute -top-2 -left-2 w-4 sm:w-6 h-4 sm:h-6 bg-yellow-300 transform rotate-45" />

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {steps[activeStep]?.title}
              
              </h1>

              <div className="space-y-4 w-3/4">
                <p className="text-base sm:text-lg md:text-xl">{steps[activeStep]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

