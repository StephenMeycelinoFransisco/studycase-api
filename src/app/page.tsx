import Image from "next/image";
import PokeDexs from "@/app/favicon.ico";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="mt-24">
      <Card>
        <CardContent className="flex flex-col items-center justify-center h-[80vh]">
          <Image alt="Logo PokeDexs" src={PokeDexs} className="w-40 lg:w-56" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold dark:text-white text-slate-700">
            Welcome to PokeDexs
          </h1>
        </CardContent>
      </Card>
    </section>
  );
}
