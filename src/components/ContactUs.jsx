import React, { useEffect, useRef } from "react";
import content from "../layout/content.json";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const videoRef = useRef(null);
  const videoRefmobile = useRef(null);
  const videoRefCircuts = useRef(null);
  const videoRefStats = useRef(null);
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const content_cyber = useAnimation();
  const textVideoControls = useAnimation();
  const globeVideoControls = useAnimation();
  const componayInfoContols = useAnimation();
  const componaysecondInfoContols = useAnimation();
  const videoControls = useAnimation();

  const statvideoRef = useAnimation();

  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoMobile = videoRefmobile.current;
    const videoCircuts = videoRefCircuts.current;
    const videoStats = videoRefStats.current;

    if (video) {
      video.play().catch((error) => {});
    }
    if (videoMobile) {
      videoMobile.play().catch((error) => {});
    }
    if (videoCircuts) {
      videoCircuts.play().catch((error) => {});
    }
    if (videoStats) {
      videoStats.play().catch((error) => {});
    }
  }, []);
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
          content_cyber.start({
            opacity: 1,
            y: 20,
            transition: { duration: 0.5, delay: 1.5 },
          });
          textVideoControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 2.5 },
          });
          globeVideoControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 2 },
          });
          componayInfoContols.start({
            opacity: 1,
            x: 15,
            transition: { duration: 0.5, delay: 3 },
          });
          componaysecondInfoContols.start({
            opacity: 1,
            x: 15,
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
    subtitleControls,
    content_cyber,
    textVideoControls,
    globeVideoControls,
    componayInfoContols,
    componaysecondInfoContols,
    videoControls,
  ]);

  return (
    <div className="bg-edit-image relative">
      <div className="grid m-0 p-0">
        <div className="col-12 p-0" ref={containerRef}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={videoControls}>
            <div className="relative">
              <video
                ref={videoRef}
                src="/videos/cyberStats.mp4"
                style={{ width: "100%" }}
                className="cyberAboutvideo "
                loop
                autoPlay
                muted
              />
              <div className="absolute layer-video top-0 w-full h-full z-2"></div>
            </div>
            <div className="absolute left-0 top-0 z-3 w-12 sm:w-4 lg:h-full ">
              <img
                src="/images/cybercircle.png"
                className="w-full h-full "
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="grid m-0 p-0" id="contact" >
        <div className="col-12 md:col-7 lg:col-8 pt-8 pb-8 pl-4 sm:pl-6 lg:pl-8 z-4">
          <div className="text-left pt-6 pb-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={titleControls}>
              <span className="animate-text text-shadow intro-text my-0 app-primary-text">
                {content.contact.title}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={subtitleControls}
            >
              <span className="intro-text-medium sm:ml-2">
                {content.contact.subtitle}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={content_cyber}
              className="pb-5"
            >
              <span className=" intro-text-small text-shadow  app-primary-text">
                {content.contact.content_cyber}
              </span>
            </motion.div>

            <div className="relative pt-4 lg:hidden md:hidden ">
              <video
                ref={videoRefStats}
                src="/videos/eyeRotate.mp4"
                width="100%"
                height="100%"
                loop
                autoPlay
                muted
              />
              <div className="absolute glob-rotate-img top-0 w-full h-full z-5"></div>
            </div>
          </div>
          <div
            className="my-4  lg:pl-6 pr-3 md:pr-5 text-left "
            style={{ width: "fit-content" }}
          >
            <div className="lg:pl-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={textVideoControls}
              >
                <div className="video-container video-container-padding">
                  <video
                    loop
                    muted
                    ref={videoRefCircuts}
                    src="/videos/circuts.mp4"
                    type="video/mp4"
                    playsInline
                    className="background-video background-video-about-height "
                    width="150"
                    height="300"
                  ></video>
                  <div className="text-overlay w-10 sm:w-11">
                    <div className="">
                      <div className=" ">
                        <span className="font-bold button-text line-height-1">
                          {content.contact.content_elevate}
                        </span>
                        <br />
                        <span className="app-primary-text font-bold button-text line-height-1">
                          {content.contact.content_touch}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-wrap company-about">
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={componayInfoContols}
                  className="pt-3 pr-3  "
                >
                  <div>
                    <span className="font-semibold button-text app-secondary-text">
                      {content.contact.company_name}
                    </span>
                    <br />
                    <span className="font-semibold button-text app-secondary-text">
                      {content.contact.address}
                    </span>
                    <br />
                    <span className="font-semibold button-text app-secondary-text">
                      Email:{content.contact.emai}
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={componaysecondInfoContols}
                  className="pt-3 pr-3  "
                >
                  <div>
                    <span className="font-semibold button-text app-secondary-text">
                      {content.contact.company_name}
                    </span>
                    <br />
                    <span className="font-semibold button-text app-secondary-text">
                      {content.contact.address}
                    </span>
                    <br />
                    <span className="font-semibold button-text app-secondary-text">
                      Email:{content.contact.emai}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden  lg:block md:block col-12 md:col-5 pt-8 pb-8 pr-4 sm:pr-6 lg:pr-8 lg:col-4 relative">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={globeVideoControls}
            className="flex justify-content-center"
          >
            <div className="relative pt-6 pb-4 w-contact-v">
              <video
                ref={videoRefmobile}
                src="/videos/eyeRotate.mp4"
                width="100%"
                height="100%"
                loop
                muted
              />
              <div className="absolute glob-rotate-img top-0 w-full h-full z-5"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
