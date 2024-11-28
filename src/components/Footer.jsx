import React from "react";

import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import { Image } from "primereact/image";

const Footer = () => {

  return (
    <div className="flex px-3 md:px-4 lg:px-6 xl:px-7 border-x-none border-top-1 border-bottom-none footer-container  border-primary">
      <div className="landing-wrapper landing-header-conatiner w-full overflow-hidden">
        <div className="grid  py-0 pl-3 px-4  relative lg:static">
          <div className="col-12 md:col align-self-center md:text-left pt-3">
            <Image src={`${process.env.PUBLIC_URL}/images/Logo.svg" alt="logo`} />
          </div>

          <div className="col-12 md:col pt-3 align-self-center text-base align-items-center  flex-order-1 md:flex-order-0">
            <span className="app-disable-text font-normal text-sm">
              All rights reserved © 2023
            </span>
          </div>

          <div
            className={classNames(
              "col-12 md:col-5 align-items-center pt-3 align-self-center align-items-center surface-0 justify-content-center  md:justify-content-end flex-order-0  flex  lg:static  left-0   lg:px-0 z-2"
            )}
          >
            <ul className="list-none p-0 m-0 flex lg:align-items-center pb-2 md:pb-0 select-none flex-row cursor-pointer">
              <li>
                <a
                  href="#privacy"
                  // onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 lg:ml-5 px-0 md:py-3 text-900 text-base line-height-3 "
                >
                  <span className="app-disable-text font-normal text-sm">
                    Privacy Police
                  </span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  // onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 ml-4 md:ml-5 px-0 md:py-3 text-900 text-base line-height-3"
                >
                  <span className="app-disable-text font-normal text-sm">
                    Term of use
                  </span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  // onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 ml-4 md:ml-5 px-0 md:py-3 text-900 text-base line-height-3"
                >
                  <span className="app-disable-text font-normal text-sm">
                    Cookies
                  </span>
                  <Ripple />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
