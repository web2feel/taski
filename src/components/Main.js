import React from "react";

function Main({ children }) {
  return (
    <main className="flex-1 w-full max-w-screen-xl mx-auto px-6 py-6 md:py-12">
      {children}
    </main>
  );
}

export default Main;
