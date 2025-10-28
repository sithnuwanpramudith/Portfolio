import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  const handleScrollToProjects = () => {
    console.log('Scroll to projects triggered');
  };

  return <HeroSection onScrollToProjects={handleScrollToProjects} />;
}