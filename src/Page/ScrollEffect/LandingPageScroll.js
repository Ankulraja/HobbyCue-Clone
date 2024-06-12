import React, { useEffect, useRef, useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';

function LandingScrollPage() {
  const [visibleSection, setVisibleSection] = useState(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: Array.from({ length: 101 }, (_, i) => i * 0.01),
    };

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let currentVisibleSection = null;
      
      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          currentVisibleSection = entry.target.id;
        }
      });

      if (currentVisibleSection) {
        setVisibleSection(currentVisibleSection);
      }
    }, options);

    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (visibleSection) {
      console.log(`Currently in section: ${visibleSection}`);
    }
  }, [visibleSection]);

  return (
    <div className="h-screen bg-[rgb(40,40,40)]  w-screen overflow-y-scroll snap-y snap-mandatory">
      <section
        id="first"
        ref={addToRefs}
        className="h-screen snap-start bg-[rgb(40,40,40)]"
      >
        <FirstPage isVisible={visibleSection === 'first'} />
      </section>
      <section
        id="second"
        ref={addToRefs}
        className="bg-[rgb(40,40,40)] h-screen flex justify-center items-center snap-start"
      >
        <SecondPage isVisible={visibleSection === 'second'} />
      </section>
      <section
        id="third"
        ref={addToRefs}
        className="bg-[rgb(40,40,40)] h-screen flex justify-center items-center snap-start"
      >
        <ThirdPage isVisible={visibleSection === 'third'} />
      </section>
      <section
        id="fourth"
        ref={addToRefs}
        className="bg-[rgb(40,40,40)] h-screen flex justify-center items-center snap-start"
      >
        <FourthPage isVisible={visibleSection === 'fourth'} />
      </section>
      <section
        id="fifth"
        ref={addToRefs}
        className="bg-[rgb(40,40,40)] h-screen flex justify-center items-center snap-start"
      >
        <FifthPage isVisible={visibleSection === 'fifth'} />
      </section>
      <section
        id="sixth"
        ref={addToRefs}
        className="bg-[rgb(40,40,40)] h-screen flex justify-center items-center snap-start"
      >
        <SixthPage isVisible={visibleSection === 'sixth'} />
      </section>
      <section
        id="seventh"
        ref={addToRefs}
        className="bg-[rgb(40,40,40)] h-screen flex justify-center items-center snap-start"
      >
        <SeventhPage isVisible={visibleSection === 'seventh'} />
      </section>
    </div>
  );
}

export default LandingScrollPage;
