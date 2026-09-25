import { useEffect, useState } from "react";

import StoryProgress from "../components/StoryProgress";

import HeroSlide from "../components/slides/HeroSLider";
import AboutSlide from "../components/slides/AboutSlide";
import HarapanSlide from "../components/slides/HarapanSlide";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-story-slide]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slide = Number(
              (entry.target as HTMLElement).dataset.storySlide,
            );

            setCurrentSlide(slide);
          }
        });
      },
      {
        threshold: 0.55,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <StoryProgress current={currentSlide} total={7} />

      <div data-story-slide="1">
        <HeroSlide />
      </div>

      <div data-story-slide="2">
        <AboutSlide />
      </div>
      <div data-story-slide="3">
        <HarapanSlide />
      </div>
    </div>
  );
}

export default Home;
