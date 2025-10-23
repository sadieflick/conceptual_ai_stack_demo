import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, BookOpen } from "lucide-react";

const takeaways = [
  {
    title: "Understand the AI Stack",
    description: "You've seen how prompts flow through multiple layers—from parsing to context assembly to model generation."
  },
  {
    title: "Recognize Key Security Layers",
    description: "Each stage of the pipeline presents unique security considerations and potential vulnerabilities."
  },
  {
    title: "Know Common Attack Vectors",
    description: "From prompt injection to data leakage, you now understand where threats can emerge."
  },
  {
    title: "See Where Human Oversight Matters",
    description: "AI systems need careful monitoring, especially at input parsing and output validation stages."
  }
];

const Takeaways = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-light/20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-6 shadow-lg">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Congratulations!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You just watched a simulation of how AI tools process your request.
          </p>
        </div>

        {/* Checklist */}
        <Card className="p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">What You've Learned</h2>
          <div className="space-y-6">
            {takeaways.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary-light/10 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI is Not Magic</h3>
                <p className="text-sm text-muted-foreground">
                  It's a complex pipeline of processing steps, each with specific roles and potential failure points.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Security Matters</h3>
                <p className="text-sm text-muted-foreground">
                  Every layer introduces security considerations—from input validation to output filtering.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/scenarios")}
          >
            Try Another Scenario
          </Button>
          <Button
            size="lg"
            onClick={() => window.open("/slides", "_blank")}
            className="bg-gradient-to-r from-primary to-primary-glow"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View Full Presentation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="mt-12 p-8 bg-muted">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Explore other scenarios to see how different AI tasks are processed</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Review the full presentation for deeper insights into AI architecture</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Consider security implications when implementing AI in your organization</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Takeaways;
