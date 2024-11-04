import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sovefi | Contact",
  description: "Generated by create SOVEFI",
};
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default layout;
