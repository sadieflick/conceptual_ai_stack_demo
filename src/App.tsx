import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Scenarios from "./pages/Scenarios";
import SimulationEmail from "./pages/SimulationEmail";
import SimulationSpreadsheet from "./pages/SimulationSpreadsheet";
import SimulationResearch from "./pages/SimulationResearch";
import Takeaways from "./pages/Takeaways";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/simulation/email" element={<SimulationEmail />} />
          <Route path="/simulation/spreadsheet" element={<SimulationSpreadsheet />} />
          <Route path="/simulation/research" element={<SimulationResearch />} />
          <Route path="/takeaways" element={<Takeaways />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
