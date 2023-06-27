import React from "react";
// shell for app and passing {children} that Home can be display
export const Layout = ({ children }) => {
  return <div className="bg-gray-900 h-screen py-10">{children}</div>;
};
