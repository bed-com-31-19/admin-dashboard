import React from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Contact from "./scenes/contacts/Contact";
// import Invoice from "./scenes/invoices/Invoice";
// import Bar from "./scenes/Bar";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import Calendar from "./scenes/Calendar";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact/>} />
              {/* <Route path="/invoices" element={<Invoice />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ/>} /> */}
              {/* <Route path="/calender" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Geography/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
