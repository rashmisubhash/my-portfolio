import React from "react";
import logo from "../../public/images/chellscriptlogo.webp";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-full flex-col items-center justify-center bg-pale bg-work-pattern *:max-w-hero">
        <h1 className="bg-not-black bg-cover font-homevideo text-white">
          ChellScript_
        </h1>
        <Image
          width={150}
          height={150}
          src={logo}
          alt="chellscript.dev clamshell logo"
          className="my-4 self-center bg-transparent"
        />{" "}
        <p aria-label="Loading..." className="loader bg-white text-black" />
      </div>
    </div>
  );
};

export default Loading;
