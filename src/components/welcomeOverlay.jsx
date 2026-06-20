import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import "./comps.css";

const NAME = "CHELO";

const DOTS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  top: `${5 + Math.random() * 90}%`,
  delay: `${Math.random() * 3}s`,
  duration: `${4 + Math.random() * 4}s`,
  size: Math.random() > 0.5 ? "3px" : "2px",
}));

const WelcomeOverlay = () => {
  const [show, setShow] = useState(false);
  const overlayRef = useRef(null);
  const panelLeftRef = useRef(null);
  const panelRightRef = useRef(null);
  const countRef = useRef(null);
  const lettersRef = useRef([]);
  const lineRef = useRef(null);
  const greetRef = useRef(null);
  const tagRef = useRef(null);

  const letters = useMemo(() => NAME.split(""), []);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");
    if (!visited) {
      setShow(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    document.body.style.overflow = "hidden";
    lettersRef.current = lettersRef.current.slice(0, letters.length);

    const counter = { val: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.body.style.overflow = "";
        setTimeout(() => setShow(false), 50);
      },
    });

    tl.set(overlayRef.current, { display: "block" })

      // loading counter 0 -> 100
      .to(counter, {
        val: 100,
        duration: 1.3,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = String(
              Math.floor(counter.val)
            ).padStart(3, "0");
          }
        },
      })
      .to(countRef.current, { opacity: 0, duration: 0.35 }, "+=0.1")

      // tag line "FRONTEND DEVELOPER"
      .from(
        tagRef.current,
        { opacity: 0, y: 10, duration: 0.5 },
        "<"
      )

      // letters reveal
      .from(
        lettersRef.current,
        {
          y: 60,
          opacity: 0,
          rotateX: 60,
          stagger: 0.07,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )

      // line
      .from(
        lineRef.current,
        { scaleX: 0, duration: 0.5, ease: "power2.inOut" },
        "-=0.25"
      )

      // greeting
      .from(
        greetRef.current,
        { y: 16, opacity: 0, duration: 0.6 },
        "-=0.2"
      )

      // hold
      .to({}, { duration: 0.8 })

      // curtain split exit
      .to(
        panelLeftRef.current,
        { xPercent: -100, duration: 1, ease: "power4.inOut" },
        "exit"
      )
      .to(
        panelRightRef.current,
        { xPercent: 100, duration: 1, ease: "power4.inOut" },
        "exit"
      )
      .to(
        [tagRef.current, lineRef.current, greetRef.current, ...lettersRef.current],
        { opacity: 0, duration: 0.4 },
        "exit"
      )
      .set(overlayRef.current, { display: "none" });
  }, [show, letters.length]);

  if (!show) return null;

  return (
    <div className="welcome-overlay" ref={overlayRef}>
      <div className="welcome-panel welcome-panel-left" ref={panelLeftRef}>
        <div className="welcome-dots">
          {DOTS.map((d) => (
            <span
              key={d.id}
              className="welcome-dot"
              style={{
                left: d.left,
                top: d.top,
                animationDelay: d.delay,
                animationDuration: d.duration,
                width: d.size,
                height: d.size,
              }}
            />
          ))}
        </div>

        <div className="welcome-inner">
          <span className="welcome-count" ref={countRef}>
            000
          </span>

          <p className="welcome-tag" ref={tagRef}>
            FRONTEND DEVELOPER
          </p>

          <h1 className="welcome-name">
            {letters.map((l, i) => (
              <span
                key={i}
                className="welcome-letter"
                ref={(el) => (lettersRef.current[i] = el)}
              >
                {l}
              </span>
            ))}
          </h1>

          <div className="welcome-line" ref={lineRef}></div>

          <p className="welcome-greet" ref={greetRef}>
            Welcome to my little corner of the internet
          </p>
        </div>
      </div>

      <div className="welcome-panel welcome-panel-right" ref={panelRightRef}></div>
    </div>
  );
};

export default WelcomeOverlay;