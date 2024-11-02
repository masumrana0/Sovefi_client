import React from "react";
import { Loader } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="flex items-center justify-center mt-24 min-h-[80vh] w-full">
      <Loader className="animate-spin text-primary h-8 w-8" />
      <span className="ml-3 text-primary">Loading...</span>
    </div>
  );
};

export default GlobalLoading;
