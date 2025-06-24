import React from "react";
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
import Heroes from "@/components/Heroes";
import InteractiveMap from "@/components/InteractiveMap";

const Index = () => {
  return (
    <div className="min-h-screen war-memorial-bg">
      <Header />
      <Timeline />
      <Heroes />
      <InteractiveMap />

      <footer className="bg-amber-900 text-amber-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-serif">
            В память о героях Великой Отечественной войны
          </p>
          <p className="text-sm mt-2 opacity-75">
            1941-1945 • Никто не забыт, ничто не забыто
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
