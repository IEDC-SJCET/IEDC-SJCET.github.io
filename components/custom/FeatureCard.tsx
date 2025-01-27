import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <Card className="shadow-lg p-3 h-[100%]">
                <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{icon}</div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
};