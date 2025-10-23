import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield } from "lucide-react";

interface SecurityThreat {
  step: string;
  threat: string;
  description: string;
  example: string;
  severity: "high" | "medium" | "low";
}

interface SecurityOverlayProps {
  threats: SecurityThreat[];
  currentStep: string;
}

const SecurityOverlay = ({ threats, currentStep }: SecurityOverlayProps) => {
  const relevantThreats = threats.filter(t => t.step === currentStep);

  if (relevantThreats.length === 0) return null;

  return (
    <Card className="mt-4 p-6 bg-destructive/5 border-2 border-destructive/30 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-destructive" />
        <h3 className="font-semibold text-lg text-destructive">Security Risks at This Layer</h3>
      </div>

      <div className="space-y-4">
        {relevantThreats.map((threat, index) => (
          <div
            key={index}
            className="bg-background rounded-lg p-4 border-l-4 border-destructive"
          >
            <div className="flex items-start gap-3 mb-2">
              <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                threat.severity === "high"
                  ? "text-destructive"
                  : threat.severity === "medium"
                  ? "text-orange-500"
                  : "text-yellow-500"
              }`} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{threat.threat}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    threat.severity === "high"
                      ? "bg-destructive/20 text-destructive"
                      : threat.severity === "medium"
                      ? "bg-orange-500/20 text-orange-600"
                      : "bg-yellow-500/20 text-yellow-600"
                  }`}>
                    {threat.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {threat.description}
                </p>
                <div className="bg-muted/50 rounded-md p-3 border border-border">
                  <p className="text-xs font-mono text-muted-foreground">
                    <span className="font-semibold text-foreground">Example: </span>
                    {threat.example}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-muted rounded-lg">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">💡 Tip:</span> Understanding these vulnerabilities is the first step in building secure AI systems. Always implement proper input validation, output filtering, and access controls.
        </p>
      </div>
    </Card>
  );
};

export default SecurityOverlay;
