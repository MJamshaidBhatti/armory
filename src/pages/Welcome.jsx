import React, {} from "react";
import logo from '../logo.svg';
import Terminal from "../components/Terminal";
import { TerminalContextProvider } from "react-terminal";
function Welcome() {
  return (
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="grid mt-5 ">
          <div className="col-12 md:col-12 lg:col-12">
            <div className="text-center">
              <TerminalContextProvider>
                          <Terminal />
                          
            </TerminalContextProvider></div>
          </div>
        </div>
    </>
  );
}

export default Welcome;
