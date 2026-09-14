import React from "react";

const PageLayout = ({ title, children }) => {
  return (
    <main className="min-h-screen bg-[#f9f9f7] dark:bg-gray-900 py-16 px-5 transition-colors">
      <section className="max-w-[1100px] mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        <div>{children}</div>
      </section>
    </main>
  );
};

export default PageLayout;
