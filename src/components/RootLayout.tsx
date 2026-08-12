import { Outlet, ScrollRestoration } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default RootLayout;
