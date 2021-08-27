import React from "react";

// Sections
import HeroSection from "./HeroSection/HeroSection";
import IndustrySection from "./IndustrySection/IndustrySection";
import ApplicationsSection from "./ApplicationsSection/ApplicationsSection";
import NewsEventsSection from "./NewsEventsSection/NewsEventsSection";
import JoinCard from "./JoinCard/JoinCard";
import StatsSection from "./StatsSection/StatsSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <IndustrySection />
      <ApplicationsSection />
      <NewsEventsSection />
      <JoinCard />
      <StatsSection />
    </main>
  );
};

export default Home;
