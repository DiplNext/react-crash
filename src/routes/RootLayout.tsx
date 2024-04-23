import { ReactElement } from "react";
import MainHeader from "@/components/MainHeader/MainHeader.tsx";
import { Outlet } from "react-router-dom";

function RootLayout(): ReactElement {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
