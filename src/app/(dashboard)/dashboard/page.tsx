"use client";

import React from "react";
import dynamic from "next/dynamic";
import GlobalLoading from "@/app/loading";

const AdminBoardHome = dynamic(() => import("../_components/home/Page"), {
  ssr: false, // Disables server-side rendering
  loading: () => <GlobalLoading />,
});

const DashboardLandingPage = () => {
  return (
    <div className="pb-20">
      <h3 className="mb-4 font-bold text-xl">Overview</h3>
      <AdminBoardHome />
    </div>
  );
};

export default DashboardLandingPage;
