import React, { useEffect, useRef } from "react";
import { Image } from "primereact/image";
import content from "../layout/content.json";
import { motion, useAnimation } from "framer-motion";

const Features = () => {
  const videoRef = useRef(null);
  const titleControls = useAnimation();

  const subtitleControls = useAnimation();
  const leadershipControls = useAnimation();
  const flagshipControls = useAnimation();
  const shadowImageControls = useAnimation();
  const femaleImageControls = useAnimation();
  const videoControls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {});
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleControls.start({
            opacity: 1,
            y: 10,
            transition: { duration: 0.5, delay: 0.5 },
          });
          subtitleControls.start({
            opacity: 1,
            y: 10,
            transition: { duration: 0.5, delay: 1 },
          });
          leadershipControls.start({
            opacity: 1,
            y: 10,
            transition: { duration: 0.5, delay: 1.5 },
          });
          flagshipControls.start({
            opacity: 1,
            y: 10,
            transition: { duration: 0.5, delay: 2.3 },
          });
          shadowImageControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 2.6 },
          });
          femaleImageControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 1.7 },
          });
          videoControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1 },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [
    subtitleControls,
    titleControls,
    leadershipControls,
    flagshipControls,
    shadowImageControls,
    femaleImageControls,
    videoControls
  ]);

  return (
    <>
      <div id="about" className="relative">
        <div
          className="grid mx-0  mdmb-10 md:pl-6  pt-7 pb-8"
          ref={containerRef}
        >
          <div className="col-12  lg:col-7 z-5  pl-4 lg:pl-6 z-12">
            <div className="text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={titleControls}
                className="intro-text animate-text text-shadow  mt-0 app-primary-text pb-5 mb-7 md:mb-2"
              >
                {content.about.title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={subtitleControls}
                className="sm:w-full w-6"
              >
                <span className="intro-text-medium">
                  {content.about.subtitle}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={leadershipControls}
                className="sm:w-full w-6"
              >
                <span className="intro-text-small text-shadow  app-primary-text">
                  {content.about.content_leadership}
                </span>
              </motion.div>
            </div>
            <div className=" xl:pr-7 md:pl-6 ">
              <div className="w-full sm:w-11 text-left">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={flagshipControls}
                  className="text-left pr-3 font-base line-height-2 content-text-extrasmall app-disable-text"
                >
                  {content.about.content_heroes}
                </motion.p>
              </div>
            </div>
          </div>

          <div className="col-5 col-offset-7 lg:col-5 z-4 left-0 hackerBack pr-0 absolute sm:top-0">
            <div className="relative ">
              <div className=" z-5 pr-4 text-right z-4">
                <motion.img
                  initial={{ opacity: 0, x: 10 }}
                  animate={shadowImageControls}
                  src="/images/hacker-back.png"
                  className="w-10 sm:w-9 md:w-8  xl:w-6 "
                  alt="Image"
                />
              </div>
              <div className="circler right-0 z-0"></div>
            </div>
          </div>

          <div className="col-12 md:col-12 lg:col-10 xl:col-12 absolute left-0  right-position-50 z-0 female-image-top-197">
            <div className="pr-8 sm:pr-0 md:pl-8 flex justify-content-center">
              <div className=" w-femail pr-4 md:pl-8 sm:mt-8 mt-3 ">
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  animate={femaleImageControls}
                  src="/images/self-female.png"
                  alt="Image"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="z-0">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={videoControls}>
              <video
                ref={videoRef}
                src="/videos/cyberAbout.mp4"
                className=" cyberAboutvideo w-full"
                loop
                muted
              />
            </motion.div>
          </div>
          <div className="absolute layer-video top-0 w-full h-full z-5"></div>
        </div>
        <div className="absolute top-0 right-0 h-full w-6 z-5 pt-8">
          <img
            src="/images/left-shadow.png"
            className=" w-full h-full right-0"
            alt=""
          />
        </div>{" "}
        <div className="absolute top-200 h-12 w-3 lg:w-2 z-3 h-full">
          <img
            src="/images/cybercircle.png"
            className="w-full z-3 h-full "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Features;
