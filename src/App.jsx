import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background1 from "./assets/imgs/background-1.jpg";
import Background2 from "./assets/imgs/background-2.jpg";
import Background3 from "./assets/imgs/background-3.jpg";
import ReactLenis from "lenis/react";

function App() {
  useGSAP(() => {
    gsap.to(".section-2", {});
  }, {});

  return (
    <ReactLenis root>
      <main>
        <section>
          <img src={Background1} />
        </section>

        <section className="section-2">
          <img src={Background2} />
        </section>

        <section className="section-2">
          <img src={Background3} />
        </section>
      </main>
    </ReactLenis>
  );
}

export default App;
