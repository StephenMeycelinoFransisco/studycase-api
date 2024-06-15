import React from "react";
import PokeBall from "@/images/pokeball.jpeg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface PokemonCardProps {
  name: string;
}

const bgColors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
  "bg-teal-400",
];

export default function PokemonCard({ name }: PokemonCardProps) {
  // Melakukan pemilihan secara random untuk background component card
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  return (
    <Link href={`/pokemon/${name}`} key={name + "Card"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Card className={`${bgColor} text-white`}>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Image
                    src={PokeBall}
                    alt="PokeBall"
                    height={72}
                    width={72}
                    className="rounded-full"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </motion.p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
}
