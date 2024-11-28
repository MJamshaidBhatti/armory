import React, { useEffect, useRef } from "react";
import { Image } from "primereact/image";
import { motion, useAnimation } from "framer-motion";
import content from "../layout/content.json";
const LeaderShip = () => {
  const videoRef = useRef(null);
  const titleControls = useAnimation();

  const firstProfileControls = useAnimation();
  const secondProfileControls = useAnimation();
  const thirdProfileControls = useAnimation();
  const leaderRef = useRef(null);

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
            transition: { duration: 0.5, delay: 0.3 },
          });
          firstProfileControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1 },
          });
          secondProfileControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1.8 },
          });
          thirdProfileControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 2.5 },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(leaderRef.current);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [
    titleControls,
    firstProfileControls,
    secondProfileControls,
    thirdProfileControls,
  ]);

  return (
    <>
      <div id="leadership" className="">
        <div className="px-3 py-6 sm:p-6">
          <div className="grid m-0 lg:p-6" ref={leaderRef}>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={titleControls}
              className="col-12 md:col-12 lg:col-12 text-left"
            >
              <span className="text-shadow  animate-text intro-text my-0 app-primary-text  pb-5">
                LEADERSHIP
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={firstProfileControls}
              className="col-12 md:col-4 lg:col-4 "
            >
              <Image src={`${process.env.PUBLIC_URL}/images/jhon1.png`} alt="Image" width="100%" />
              <span className="app-primary-text font-bold line-height-4 content-text-smaller">
                {content.leadership[0].name}
              </span>
              <br />
              <span className="app-secondary-text font-medium content-text-smaller line-height-2">
                {content.leadership[0].designation}
              </span>
              <br />
              <span className="app-primary-text font-light content-text-smaller line-height-1">
                {content.leadership[0].social}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={secondProfileControls}
              className="col-12 md:col-4 lg:col-4 "
            >
              <Image src={`${process.env.PUBLIC_URL}/images/jhon2.png`}
               alt="Image" width="100%" />
              <span className="app-primary-text font-bold line-height-4 content-text-smaller">
                {content.leadership[0].name}
              </span>
              <br />
              <span className="app-secondary-text font-medium content-text-smaller line-height-2">
                {content.leadership[0].designation}
              </span>
              <br />
              <span className="app-primary-text font-light content-text-smaller line-height-1">
                {content.leadership[0].social}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={thirdProfileControls}
              className="col-12 md:col-4 lg:col-4 "
            >
              <Image src={`${process.env.PUBLIC_URL}/images/jhon3.png`} alt="Image" width="100%" />
              <span className="app-primary-text font-bold line-height-4 content-text-smaller">
                {content.leadership[0].name}
              </span>
              <br />
              <span className="app-secondary-text font-medium content-text-smaller line-height-2">
                {content.leadership[0].designation}
              </span>
              <br />
              <span className="app-primary-text font-light content-text-smaller line-height-1">
                {content.leadership[0].social}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="grid p-0 m-0 relative"></div>
      </div>
    </>
  );
};

export default LeaderShip;
