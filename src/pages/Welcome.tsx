import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-primary-light/20 flex flex-col items-center justify-center p-6">
      {/* Top-left logo (from public/lomo.png) */}
      <img
        src="/lomo.png"
        alt="Lomo logo"
        className="absolute top-10 left-10 w-20 h-20 md:w-28 md:h-28 rounded-md"
      />
      <div className="max-w-5xl w-full animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Interactive Learning Demo</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            What Happens When You Talk to an AI?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the AI tech stack through interactive simulations and discover what's really happening under the hood.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg">
                <div className="text-white">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">User Prompt</h3>
              <p className="text-sm text-muted-foreground max-w-[150px]">Your question or request</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="hidden md:block w-8 h-8 text-primary" />
            <div className="md:hidden w-0.5 h-8 bg-primary" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg">
                <div className="text-white">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Context & Tools</h3>
              <p className="text-sm text-muted-foreground max-w-[150px]">Processing & analysis</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="hidden md:block w-8 h-8 text-primary" />
            <div className="md:hidden w-0.5 h-8 bg-primary" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg">
                <div className="text-white">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Response Output</h3>
              <p className="text-sm text-muted-foreground max-w-[150px]">Generated result</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/scenarios")}
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:scale-105 transition-all"
          >
            Begin Simulation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
