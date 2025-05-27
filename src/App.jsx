import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background1 from "./assets/imgs/background-1.jpg";
import Background2 from "./assets/imgs/background-2.jpg";
import Background3 from "./assets/imgs/background-3.jpg";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

function App() {

  useGSAP(() => {
    gsap.to(".section-1", {
      scale: 0.8,
      rotate: -6,
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    gsap.to(".section-2", {
      scale: 0.8,
      rotate: -6,
      scrollTrigger: {
        trigger: ".section-3",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });
  }, {});

  return (
    <ReactLenis root>
      <main>
        <section className="section-1">
          <img src={Background1} />
        </section>

        <section className="section-2">
          <img src={Background2} />
        </section>

        <section className="section-3">
          <img src={Background3} />
        </section>
      </main>
    </ReactLenis>
  );
}

export default App;