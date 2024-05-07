"use client";

import { AppProgressBar } from "next-nprogress-bar";

const ProgressBar = () => {
  return (
    <AppProgressBar
      color="#3b82f6"
      height="3px"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default ProgressBar;
