import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import prompt_processing from '../assets/images/prompt_processing.png';

interface StepDetail {
  title: string;
  points: string[];
  technical: string;
}

interface StepDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: StepDetail | null;
}

const StepDetailModal = ({ isOpen, onClose, step }: StepDetailModalProps) => {
  if (!step) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            {step.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Key Points */}
          <div>
            <h3 className="font-semibold text-lg mb-3">What's Happening:</h3>
            <ul className="space-y-2">
              {step.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Details */}
          <div className="p-4 bg-muted rounded-lg border border-border">
            <h4 className="font-semibold mb-2 text-sm">Technical Details:</h4>
            <p className="text-sm text-muted-foreground font-mono">{step.technical}</p>
          </div>

          {/* Visual Placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              {/* <svg className="w-16 h-16 mx-auto mb-2 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg> */}
              {<img src={prompt_processing} alt="" />}
              {/* <p className="text-sm">Process Visualization</p> */}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StepDetailModal;
