import { ChevronLeft, ChevronRight, ExternalLink, Github, TrendingUp, X } from "lucide-react";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Destructure 'images' array instead of 'image'
  const {
    title,
    description,
    images,
    technologies,
    metrics,
    demoUrl,
    githubUrl,
    category,
    caseStudy,
  } = project;

  // Use the first image as the thumbnail for the card itself

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // --- UX ENHANCEMENTS: Prevent Background Scroll & ESC to Close ---
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e) => {
        if (e.key === "Escape") toggleModal();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Action Buttons */}
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            <button
              onClick={toggleModal}
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer"
              title="View Details"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </button>

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary transition-all duration-300 hover:scale-110"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
          </div>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {metrics && (
            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <p className="text-sm font-medium text-green-400">{metrics}</p>
            </div>
          )}
        </div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-[100000]"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#050505] border border-white/10 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              {/* Sticky Close Button */}
              <div className="absolute top-4 right-4 z-[120]">
                <button
                  onClick={toggleModal}
                  className="p-3 bg-black/60 hover:bg-primary hover:text-black backdrop-blur-md rounded-full text-white border border-white/10 transition-all duration-300 active:scale-90 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* MODAL BODY (Scrollable) */}
              <div className="overflow-y-auto custom-scrollbar">
                {/* SLIDER SECTION */}
                <div className="relative h-64 sm:h-[480px] w-full bg-black group/slider border-b border-white/5">
                  {images && images.length > 0 ? (
                    <Swiper
                      modules={[Navigation, Pagination, Keyboard, A11y]}
                      navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                      }}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      keyboard={{ enabled: true }}
                      loop={images.length > 1}
                      className="w-full h-full"
                    >
                      {images.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                          <div className="w-full h-full flex items-center justify-center p-2">
                            <img
                              src={imgUrl}
                              alt={`${title} view ${index + 1}`}
                              className="max-w-full max-h-full object-contain rounded-xl"
                            />
                          </div>
                        </SwiperSlide>
                      ))}

                      {/* Custom Nav Buttons - Only show if multiple images */}
                      {images.length > 1 && (
                        <>
                          <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-primary hover:text-black duration-300">
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-primary hover:text-black duration-300">
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </Swiper>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                      No images
                    </div>
                  )}
                  {/* Dark Gradient bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-10" />
                </div>

                {/* TEXT CONTENT */}
                <div className="p-6 sm:p-12 space-y-12">
                  <section>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-black tracking-tighter uppercase text-primary px-3 py-1 bg-primary/10 rounded-md border border-primary/20">
                        {category}
                      </span>
                      {metrics && (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-md border border-green-400/20">
                          <TrendingUp className="w-3.5 h-3.5" /> {metrics}
                        </span>
                      )}
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                      {title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                      {caseStudy?.overview || description}
                    </p>
                  </section>

                  {/* Problem/Solution Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 border-y border-white/5">
                    <div className="space-y-4">
                      <h3 className="text-white font-bold text-xl uppercase tracking-widest text-primary/80">
                        The Problem
                      </h3>
                      <p className="text-white/50 leading-relaxed italic border-l-2 border-red-500/50 pl-4">
                        "{caseStudy?.problem}"
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-white font-bold text-xl uppercase tracking-widest text-green-400/80">
                        The Solution
                      </h3>
                      <p className="text-white/50 leading-relaxed border-l-2 border-green-500/50 pl-4">
                        {caseStudy?.solution}
                      </p>
                    </div>
                  </div>

                  {/* Features & Challenges Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-primary"></span> Core
                        Features
                      </h3>
                      <ul className="grid grid-cols-1 gap-4">
                        {caseStudy?.features?.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group"
                          >
                            <span className="text-primary font-mono font-bold">
                              {i + 1}.
                            </span>
                            <span className="text-white/70 group-hover:text-white transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-white font-bold text-2xl mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-red-500"></span>{" "}
                        Technical Challenges
                      </h3>
                      <div className="space-y-4">
                        {caseStudy?.challenges?.map((challenge, i) => (
                          <div
                            key={i}
                            className="p-5 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border-l-4 border-primary"
                          >
                            <p className="text-white/60 text-sm font-medium leading-relaxed">
                              {challenge}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Success Result */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative p-10 bg-[#0a0a0a] rounded-3xl border border-white/10">
                      <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-4 text-primary">
                        Final Outcome
                      </h3>
                      <p className="text-white text-2xl font-light leading-snug">
                        {caseStudy?.results}
                      </p>
                    </div>
                  </div>

                  {/* Final CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-10">
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        className="group w-full sm:flex-1 relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Live Experience <ExternalLink className="w-5 h-5" />
                        </span>
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        className="w-full sm:w-auto p-5 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                      >
                        <Github className="w-7 h-7" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

// import { ExternalLink, Github, TrendingUp } from 'lucide-react';
// import React from 'react'

// const ProjectCard = ({ project }) => {
//   const {
//     title,
//     description,
//     image,
//     technologies,
//     metrics,
//     demoUrl,
//     githubUrl,
//   } = project;

//   return (
//     <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />

//         <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

//         <div className="absolute bottom-4 right-4 flex items-center gap-3">
//           {demoUrl && (
//             <a
//               href={demoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary transition-all duration-300 hover:scale-110"
//               title="View Demo"
//             >
//               <ExternalLink className="w-4 h-4 text-white" />
//             </a>
//           )}

//           {githubUrl && (
//             <a
//               href={githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary transition-all duration-300 hover:scale-110"
//               title="GitHub Repository"
//             >
//               <Github className="w-4 h-4 text-white />" />
//             </a>
//           )}
//         </div>

//         <div className="absolute top-4 left-4">
//           <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
//             {project.category}
//           </span>
//         </div>
//       </div>

//       {/* Card Body */}
//       <div className="p-6 space-y-4">
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300">
//             {title}
//           </h3>
//           <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
//             {description}
//           </p>
//         </div>

//         {/* Technology Tags */}
//         <div className="flex flex-wrap gap-2">
//           {technologies.map((tech, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-300 "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {metrics && (
//           <div className="flex items-center gap-2 pt-3 border-t border-white/10">
//             <TrendingUp className="w-4 h-4 text-green-400" />
//             <p className="text-sm font-medium text-green-400">{metrics}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard
