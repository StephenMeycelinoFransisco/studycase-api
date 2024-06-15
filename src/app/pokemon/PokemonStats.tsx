"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface PokemonStatsProps {
  stats: any[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-col"
    >
      {stats.map((statObject: any, index: number) => {
        const statName = statObject.stat.name;
        const statValue = statObject.base_stat;
        return (
          <motion.div
            key={statName}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-stretch w-[200px] md:w-[360px] lg:w-[500px]"
          >
            <h3 className="py-3 w-2/4 text-sm md:text-base">
              <b>{statName}</b>: {statValue}
            </h3>
            <Progress className="w-2/4 m-auto" value={statValue} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default PokemonStats;
