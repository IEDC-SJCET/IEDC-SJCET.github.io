import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            className="w-48 mx-auto" // Reduced width from w-64 to w-48
        >
            <Card className="shadow-lg p-2 h-full transform transition-transform hover:scale-105">
                <CardContent className="p-4 text-center">
                    <div className="mb-3 flex justify-center">{icon}</div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
};