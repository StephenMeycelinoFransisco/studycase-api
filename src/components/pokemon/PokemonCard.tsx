import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import PokeBall from "@/images/pokeball.jpeg";

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
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  return (
    <>
      <Link href={`/pokemon/${name}`} key={name + "Card"}>
        <Card className={`${bgColor} text-white `}>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <Image
                  src={PokeBall}
                  alt="PokeBall"
                  height={72}
                  width={72}
                  className="rounded-full"
                />
                <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </Link>
    </>
  );
}
