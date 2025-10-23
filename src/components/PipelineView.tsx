import { Card } from "@/components/ui/card";
import { Check, Circle, Loader2 } from "lucide-react";

interface PipelineStep {
  id: string;
  title: string;
  description: string;
  status: "complete" | "active" | "pending";
  details: string;
}

interface PipelineViewProps {
  steps: PipelineStep[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

const PipelineView = ({ steps, currentStep, onStepClick }: PipelineViewProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b">
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        <h2 className="font-semibold text-lg">Under the Hood</h2>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isComplete = index < currentStep;
          const isPending = index > currentStep;

          return (
            <div
              key={step.id}
              onClick={() => onStepClick(index)}
              className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
                isActive
                  ? "border-primary bg-primary/5 shadow-md"
                  : isComplete
                  ? "border-primary/30 bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Status Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {isComplete ? (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : isActive ? (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-pulse">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-border flex items-center justify-center">
                      <Circle className="w-3 h-3 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold mb-1 ${isActive ? "text-primary" : ""}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {step.description}
                  </p>
                  
                  {(isActive || isComplete) && (
                    <div className="mt-3 p-3 bg-muted/50 rounded-lg border border-border animate-fade-in">
                      <p className="text-xs text-muted-foreground">{step.details}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`absolute left-[1.65rem] top-full w-0.5 h-3 ${
                  isComplete ? "bg-primary" : "bg-border"
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default PipelineView;
