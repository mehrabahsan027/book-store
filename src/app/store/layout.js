import React from "react";
import Sidebar from "../Ui/Sidebar/Sidebar";
import StoreProvider from "../provider";

export default function BookStorelayout({ children }) {
  return (
    <StoreProvider>
       <div className="flex flex-col  md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      {children}
    </div>
    </StoreProvider>
   
  );
}
