import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import Form from "./pages/Form";
import Calendar from "./pages/Calendar";
import FAQ from "./pages/FAQ";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Line from "./pages/Line";
import Geography from "./pages/Geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                <Sidebar/>
                <main className="content">
                    <Topbar/>
                    <Routes>
                        <Route path="/team" element={<Team/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/invoices" element={<Invoices/>}/>
                        <Route path="/form" element={<Form/>}/>
                        <Route path="/calendar" element={<Calendar/>}/>
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/bar" element={<Bar/>}/>
                        <Route path="/pie" element={<Pie/>}/>
                        <Route path="/line" element={<Line/>}/>
                        <Route path="/geography" element={<Geography/>}/>
                        <Route path="*" element={<Dashboard/>}/>
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
