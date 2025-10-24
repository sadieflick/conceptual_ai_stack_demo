import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface StepDetail {
  title: string;
  points: string[];
  technical: string;
  image: { src: string, alt: string }; 
}

interface StepDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: StepDetail | null;
}

const StepDetailModal = ({ isOpen, onClose, step }: StepDetailModalProps) => {
  if (!step) return null;
  console.log("Step:", step);

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
              {step.image ? (
                <img src={step.image.src} alt={step.image.alt} />
              ) : (
                <p>No image available</p> // Fallback content if image is not available
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StepDetailModal;
