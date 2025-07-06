import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import SeniorDashboard from "./pages/SeniorDashboard";
import FamilyDashboard from "./pages/FamilyDashboard";
import BookCare from "./pages/BookCare";
import Packages from "./pages/Packages";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter basename="/aun-jai-care-connect">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />

            <Route
              path="/senior-dashboard"
              element={
                <ProtectedRoute requiredRole="senior">
                  <SeniorDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/family-dashboard"
              element={
                <ProtectedRoute requiredRole="family">
                  <FamilyDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/book-care"
              element={
                <ProtectedRoute>
                  <BookCare />
                </ProtectedRoute>
              }
            />

            <Route path="/packages" element={<Packages />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
