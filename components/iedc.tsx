"use client"

import { Users, Lightbulb, HandshakeIcon, Sprout, Ungroup, BadgeCheck, Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import FeatureCard from "@/components/custom/FeatureCard";
import FadeIn from "./custom/FadeIn";

const supporters = [
    {
        name: "Kerala Startup Mission",
        logo: "/company-logo/supporter-image-1.png",
    },
    {
        name: "Department of Industries and Commerce Kerala",
        logo: "/company-logo/supporter-image-2.webp",
    },
    {
        name: "Innovation and Entrepreneurship Development Centre",
        logo: "/company-logo/supporter-image-3.png",
    },
    {
        name: "Google Developer Student Clubs",
        logo: "/company-logo/supporter-image-4.png",
    },
    {
        name: "TinkerHub",
        logo: "/company-logo/supporter-image-5.png",
    },
    {
        name: "GTech μLearn",
        logo: "/company-logo/supporter-image-6.png",
    },
];

export function ContentPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <main className="min-h-screen bg-white">
            <motion.section
                className="container mx-auto px-4 py-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold mb-4">WHY IEDC</h1>
                    <Ungroup color="#14c756" />
                </div>
                <p className="text-muted-foreground mb-12">
                    Here students take their
                    <br />
                    first step as innovators and entrepreneurs
                </p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <FeatureCard
                        icon={<HandshakeIcon className="w-12 h-12" />}
                        title="MENTORING"
                        description="Startup bootcamp also provides mentoring support to help the students in developing innovative ideas, setting goals and exploring careers which is best suited."
                    />
                    <FeatureCard
                        icon={<Lightbulb className="w-12 h-12" />}
                        title="INNOVATION"
                        description="Startup bootcamp provides students with assistance in projects through innovative ideas which can be utilised for future endeavours"
                    />
                    <FeatureCard
                        icon={<Users className="w-12 h-12" />}
                        title="NETWORKING"
                        description="Startup bootcamp also helps students in connecting them with other personalities to identify their potential and increase their opportunities"
                    />
                    <FeatureCard
                        icon={<Sprout className="w-12 h-12" />}
                        title="INCUBATION"
                        description="Startup bootcamp provides incubation support to students by giving opportunity to express their innovative ideas and make it work"
                    />
                </motion.div>

                <section className="mb-20">
                    <FadeIn>
                        <div className="flex justify-center">
                            <h2 className="text-3xl font-bold mb-8">
                                SJCET BOOTCAMP - <span className="text-green-600">IEDC</span>
                            </h2>
                            <BadgeCheck color="#14c756" className="mt-1 ml-1" />
                        </div>
                        <Card className="shadow-lg p-3 h-[100%]">
                            <CardContent className="p-6">
                                <p className="text-muted-foreground">
                                    The SJCET Startup Bootcamp- IEDC (Innovation and Entrepreneurship Development Centre) was set up on
                                    9th March 2015 as a part of the Kerala Startup Mission (KSUM) initiative to develop a startup culture
                                    amongst students. The IEDCs are platforms set up in Engineering, Management, Arts & Science Colleges
                                    and Polytechnics with an aim to provide students an opportunity to experiment and innovate. KSUM has
                                    set up IEDCs in 226 institutes across the State which provide avenues for creative students to learn,
                                    collaborate and transform their innovative ideas into prototypes of viable products and services.
                                    IEDCs works as the first launch pad for a students entrepreneurial journey and provide them with
                                    access to cutting edge technology, world class infrastructure, high quality mentorship, early risk
                                    capital and global exposure.
                                </p>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </section>

                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    <FadeIn>
                        <Card className="shadow-lg p-3 h-[100%]">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-4">VISION</h3>
                                <p className="text-muted-foreground">
                                    To create an innovation culture among innovators by introducing them the State-of-the-art technologies
                                    and positioning the Institution as a Learning and Innovation Platform by delivering technically
                                    competent and skilled Entrepreneurs.
                                </p>
                            </CardContent>
                        </Card>
                    </FadeIn>
                    <FadeIn>
                        <Card className="shadow-lg p-3 h-[100%]">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-4">MISSION</h3>
                                <p className="text-muted-foreground">
                                    To create IEDC as an Innovation Platform and to create future founders by promoting Innovation,
                                    Technology and Business Learning among student community
                                </p>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>

                <section>
                    <FadeIn>
                        <div className="flex justify-center">
                            <h2 className="text-3xl font-bold mb-8">
                                OUR SUPPORTERS
                            </h2>
                            <Star color="#14c756" className="mt-1 ml-2" fill="#14c756" />
                        </div>
                    </FadeIn>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {supporters.map((supporter, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <Card className="shadow-lg p-3 h-[100%] overflow-hidden">
                                    <CardContent className="p-6 flex items-center justify-center h-48">
                                        <Image
                                            src={supporter.logo || "/placeholder.svg"}
                                            alt={supporter.name}
                                            width={200}
                                            height={100}
                                            className="object-contain"
                                        />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </motion.section>
        </main>
    )
}