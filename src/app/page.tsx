import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import Image from "next/image";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import Outcome from "@/components/widgets/Outcome";

export default function Home() {
  return (
    <>
    <main>

      {/* Hero Section */}
     <Hero />

      {/* Core Section */}
     <CoreTracks />
     
     {/* Specialized Track */}
     <SpecializedTracks />

     {/* Outcome section */}
     <Outcome />

    </main>
    </>
      
  );
}
