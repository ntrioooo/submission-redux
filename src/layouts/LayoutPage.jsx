import React from "react";

function LayoutPage({ children }) {
  return (
    <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto">
      {children}
    </div>
  );
}

export default LayoutPage;
