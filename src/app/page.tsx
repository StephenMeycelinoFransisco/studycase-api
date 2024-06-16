"use client"
import Image from "next/image";
import PokeDexs from "@/images/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-[80vh]">
            <motion.div
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image alt="Logo PokeDexs" src={PokeDexs} className="w-40 lg:w-56" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl md:text-3xl lg:text-5xl font-bold dark:text-white text-slate-700"
            >
              Welcome to PokeDexs
            </motion.h1>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
