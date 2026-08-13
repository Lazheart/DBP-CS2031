import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Cargando...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
