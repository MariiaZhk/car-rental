import { Outlet } from "react-router-dom";
// import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <header />
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
      <footer />
    </>
  );
};
