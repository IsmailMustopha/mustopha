import React, { useState, useRef, useEffect } from "react";

const FadeIn = ({
  children,
  delay = 0,
  duration = 500,
  threshold = 0.1,
  animation = "fadeUp", // Added default animation type
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible, threshold]);

  // Map of initial states (before reveal)
  const animationClasses = {
    fadeUp: "opacity-0 translate-y-8",
    fadeIn: "opacity-0",
    slideLeft: "opacity-0 -translate-x-12",
    slideRight: "opacity-0 translate-x-12",
    scaleIn: "opacity-0 scale-90",
  };

  // The final state once visible
  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${isVisible ? visibleClasses : animationClasses[animation]}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

// import React, { useState, useRef, useEffect } from "react";

// const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     if (isVisible) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: threshold,
//         rootMargin: "0px 0px -50px 0px",
//       },
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [isVisible, threshold]);

//   const styles = {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? "translateY(0)" : "translateY(20px)",
//     transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
//     willChange: "opacity, transform",
//   };

//  return (
//    <div
//      ref={elementRef}
//      className={isVisible ? "animate-fadeIn" : "opacity-0"}
//      style={{
//        animationDelay: isVisible ? `${delay}ms` : "0ms",
//        animationDuration: `${duration}ms`,
//        animationFillMode: "both",
//      }}
//    >
//      {children}
//    </div>
//  );
// };

// export default FadeIn;
