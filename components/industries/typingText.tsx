"use client";

import React, { FC } from "react";
import Typewriter from "typewriter-effect";

interface typingTextProps {}

export const TypingText: FC<typingTextProps> = ({}) => {
  return (
    <Typewriter
      options={{
        strings: ["Medical", "Diagnostic", "Biotech"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
