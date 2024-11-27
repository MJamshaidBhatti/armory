import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import content from "../layout/content.json";

const Introduction = () => {
  const videoRef = useRef(null);
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const contentHackersControls = useAnimation();
  const contentWelcomeControls = useAnimation();
  const contentFlagshipControls = useAnimation();
  const videsWelcomeControls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {});
    }
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleControls.start({
            opacity: 1,
            y: 10,
            transition: { duration: 1, delay: 0.5 },
          });
          subtitleControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1 },
          });
          contentHackersControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1.5 },
          });
          contentWelcomeControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 2.5 },
          });
          videsWelcomeControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 2.5 },
          });
          contentFlagshipControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 3 },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [
    titleControls,
    subtitleControls,
    contentHackersControls,
    contentWelcomeControls,
    contentFlagshipControls,
    videsWelcomeControls,
  ]);

  return (
    <div
      ref={containerRef}
      id="introduction"
      className="grid introduction m-0 pt-8 pb-8 md:pl-5 relative intro-box-shadow overflow-hidden "
    >
      <div className="col-12 md:col-8  lg:col-8 pt-3 pl-4 md:pl-5 lg:pl-6 z-5 flex-order-1 md:flex-order-0">
        <div className="">
          <div>
            <div className="z-5">
              <div className="text-left md:pr-0 lg:pr-0 pr-3">
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={titleControls}
                >
                  <span className="intro-text text-shadow  app-primary-text font-medium ">
                    {content.introduction.title}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={subtitleControls}
                  className="pt-2 md:pt-0 lg:pt-0"
                >
                  <div>
                    <span className=" intro-text font-medium">
                      {content.introduction.subtitle}
                    </span>
                  </div>
                </motion.div>
              </div>
              {/* <div className=" md:px-4 pr-2 xl:px-8">
                <p className="text-left font-medium app-secondary-text text-2xl">
                  If hackers have Kali Linux, CISOs have Armory
                </p>
                <div className=" pr-0 sm:pr-8">
                  <p className="m-0 text-left font-bold text-lg line-height-3 p-0">
                    Welcome to Cisotronix, where we turn CISOs into
                    cybersecurity heroes.
                  </p>
                  <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <div className="splash" />
                    <motion.div className="card" >
                      <p className="m-0 text-left p-0 font-normal line-height-3 text-base app-disable-text">
                        Our flagship product, Armory, is the go-to workspace for
                        Chief Information Security Officers, offering a suite of
                        tools and functions specifically tailored for the unique
                        challenges and responsibilities of cybersecurity
                        leadership.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div> */}
              <div className=" md:px-4 xl:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentHackersControls}
                >
                  <div>
                    <p className="text-left font-medium app-secondary-text content-text">
                      {content.introduction.content_hackers}
                    </p>
                  </div>
                </motion.div>

                <div className=" pr-0 sm:pr-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentWelcomeControls}
                  >
                    <p className="m-0 text-left font-bold content-text-smaller line-height-3 p-0 fade-in-welcome-text">
                      {content.introduction.content_welcome}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentFlagshipControls}
                  >
                    <p className="m-0 text-left p-0 font-normal line-height-3 content-text-extrasmall app-disable-text fade-in-flagship-text">
                      {content.introduction.content_flagship}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle1 z-0">
        <img src="/images/right-shadow.png" className="w-full h-full " alt="" />
      </div>
      <div className="col-12 md:col-4 lg:col-4 z-5 px-3 md:pr-0 relative flex-order-0 md:flex-order-0 ">
        <div >
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={videsWelcomeControls}
          >
            <div className="overflow-hidden  md:px-0 left-shadow">
              <video
                ref={videoRef}
                src="/videos/intro.mp4"
                className="width-715-440 w-full bottom-shadow "
                loop
                muted
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="circler z-0">
        <img
          src="/images/left-cricle-shadow.png"
          className="w-full h-full  "
          alt=""
        />
      </div>
    </div>
  );
};

export default Introduction;
