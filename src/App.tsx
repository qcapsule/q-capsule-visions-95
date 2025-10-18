import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import { Q56XCapsulePage } from "./pages/Q56XCapsulePage";
import { Q75XCapsulePage } from "./pages/Q75XCapsulePage";
import { Q95XCapsulePage } from "./pages/Q95XCapsulePage";
import { Q115XCapsulePage } from "./pages/Q115XCapsulePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/capsules/q56x" element={<Q56XCapsulePage />} />
            <Route path="/capsules/q75x" element={<Q75XCapsulePage />} />
            <Route path="/capsules/q95x" element={<Q95XCapsulePage />} />
            <Route path="/capsules/q115x" element={<Q115XCapsulePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
