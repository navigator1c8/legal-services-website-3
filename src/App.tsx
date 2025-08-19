
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CorporateLaw from "./pages/CorporateLaw";
import RealEstate from "./pages/RealEstate";
import LaborLaw from "./pages/LaborLaw";
import FamilyLaw from "./pages/FamilyLaw";
import CriminalLaw from "./pages/CriminalLaw";
import TaxLaw from "./pages/TaxLaw";
import IntellectualProperty from "./pages/IntellectualProperty";
import BankruptcyLaw from "./pages/BankruptcyLaw";
import MigrationLaw from "./pages/MigrationLaw";
import ArbitrationDisputes from "./pages/ArbitrationDisputes";
import ContractLaw from "./pages/ContractLaw";
import LandLaw from "./pages/LandLaw";
import InsuranceLaw from "./pages/InsuranceLaw";
import MedicalLaw from "./pages/MedicalLaw";
import ConsumerRights from "./pages/ConsumerRights";
import ConstructionLaw from "./pages/ConstructionLaw";
import DebtCollection from "./pages/DebtCollection";
import AdministrativeLaw from "./pages/AdministrativeLaw";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/corporate-law" element={<CorporateLaw />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/labor-law" element={<LaborLaw />} />
          <Route path="/family-law" element={<FamilyLaw />} />
          <Route path="/criminal-law" element={<CriminalLaw />} />
          <Route path="/tax-law" element={<TaxLaw />} />
          <Route path="/intellectual-property" element={<IntellectualProperty />} />
          <Route path="/bankruptcy-law" element={<BankruptcyLaw />} />
          <Route path="/migration-law" element={<MigrationLaw />} />
          <Route path="/arbitration-disputes" element={<ArbitrationDisputes />} />
          <Route path="/contract-law" element={<ContractLaw />} />
          <Route path="/land-law" element={<LandLaw />} />
          <Route path="/insurance-law" element={<InsuranceLaw />} />
          <Route path="/medical-law" element={<MedicalLaw />} />
          <Route path="/consumer-rights" element={<ConsumerRights />} />
          <Route path="/construction-law" element={<ConstructionLaw />} />
          <Route path="/debt-collection" element={<DebtCollection />} />
          <Route path="/administrative-law" element={<AdministrativeLaw />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
