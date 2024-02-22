// check lottie-web documentation for more information on lottie animations ("@dotlottie/react-player": "^1.2.1")
"use client";

import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src="/animation_llqd7ey4.lottie"
      loop
      autoplay
    ></DotLottiePlayer>
  );
};

export default LottieAnimation;
