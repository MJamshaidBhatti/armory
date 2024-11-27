import React, { useEffect, useRef } from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import content from "../layout/content.json";
import { motion, useAnimation } from "framer-motion";

const Features = () => {
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const contentControls = useAnimation();
  const buttonControls = useAnimation();
  const imageControls = useAnimation();
  const imageCyberControls = useAnimation();
  const contentIntelligenceControl = useAnimation();
  const videoControls = useAnimation();

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          });
          subtitleControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1 },
          });
          contentIntelligenceControl.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1.5 },
          });

          contentControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 2 },
          });
          buttonControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 2.5 },
          });
          imageControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 3 },
          });
          imageCyberControls.start({
            opacity: 1,
            x: 20,
            transition: { duration: 0.5, delay: 3.5 },
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

    return () => {
      observer.disconnect();
    };
  }, [
    titleControls,
    imageCyberControls,
    subtitleControls,
    contentControls,
    buttonControls,
    imageControls,
    contentIntelligenceControl,
    videoControls
  ]);

  return (
    <>
      <div id="features" className="bg-edit-image xxl relative overflow-hidden">
        <div className="grid m-0 xl:py-8 md:pl-5 py-6" ref={containerRef}>
          <div className="col-12 md:col-10 lg:col-10 pt-3 pl-4 pr-4 sm:pr-0 md:pl-5 lg:pl-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={titleControls}>
              <div className="text-left mb-5 sm:mb-0">
                <span className="animate-text intro-text text-shadow  text-gradient">
                  {content.features.title}
                </span>
              </div>
            </motion.div>
          </div>
          <div className="col-12 md:col-9 xl:col-7 pt-3 pl-4 md:pl-5 z-4 lg:pl-6">
            <div className="text-left pr-8 md:pr-0 lg:pr-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={subtitleControls}
              >
                <span className=" intro-text-medium text-shadow  app-primary-text">
                  {content.features.subtitle}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentIntelligenceControl}
              >
                <div className="text-left pr-2 md:pr-0 lg:pr-0">
                  <span className="app-text-blue-400 intro-text-small ">
                    {content.features.content_intelligence}
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="md:pl-4 xl:pl-8 pr-3 xl:pr-8  ">
              <div className="md:w-10 lg:w-10  w-full text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentControls}
                >
                  <p className="text-left p-0  font-normal line-height-3 content-text-extrasmall app-disable-text">
                    {content.features.content_heroes}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={buttonControls}
                >
                  <Button
                    type="button"
                    label={content.features.features_button}
                    className="w-full button-text md:w-auto lg:w-8 bg-primary border-round btn-downlad border-round-sm px-4 py-3  border-none cursor-pointer transition-all transition-duration-200  active:bg-primary-700 "
                    animate={buttonControls}
                  ></Button>
                </motion.div>
              </div>
            </div>
          </div>

          <div className=" col-8 col-offset-4 sm:col-6 sm:col-offset-6 pt-5 xxl:col-3 xxl:col-offset-9 md:col-5 md:col-offset-7 pr-0 z-3 left-0 absolute top-0">
            <div className="relative ">
              <div>
                <div className="mt-5 sm:mt-0 pt-5 sm:pt-0 md:pr-4 z-4 ">
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={imageControls}
                  >
                    <div className="relative">
                      <Image
                        src="/images/unknown-hacker.png"
                        alt="Image"
                        width="100%"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="absolute hidden md:block top-41 sm:w-8 md:w-9 right-0 z-01">
                  <img
                    src="/images/left-shadow.png"
                    className=" w-full "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className=" py-8 overflow-hidden z-0">
            <div className="image-container z-0 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={videoControls}
              >
                <Image
                  src="/images/cyberSecurity.png"
                  alt="Image"
                  className="cyber-video"
                  width="100%"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
