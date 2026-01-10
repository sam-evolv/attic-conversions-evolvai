import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AtticJourney from "@/pages/AtticJourney";
import Services from "@/pages/Services";
import Process from "@/pages/Process";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/attic-journey" component={AtticJourney} />
      <Route path="/services" component={Services} />
      <Route path="/process" component={Process} />
      <Route path="/costs-timeline">{() => <Redirect to="/contact" />}</Route>
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
