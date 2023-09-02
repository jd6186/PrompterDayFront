import { useEffect } from "react";
// import Bottom from "./Bottom";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div id="layoutWrap">
        <Outlet />
        {/* <Bottom /> */}
      </div>
    </ThemeProvider>
  );
}
