import { ProgressBarType } from "@/types";
import React from "react";

const ProgressBar = ({ progressValue }: ProgressBarType) => (
  <div className="w-96 bg-orange-200 h-fit rounded-xl my-auto">
    <div style={{width: progressValue+'%'}} className={`h-1 transition-all duration-500 delay-500 ease-in-out rounded-lg bg-orange-500`}></div>
  </div>
)

export default ProgressBar;
