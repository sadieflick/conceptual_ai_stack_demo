import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import PipelineView from "@/components/PipelineView";
import SecurityOverlay from "@/components/SecurityOverlay";

const SimulationEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showHood, setShowHood] = useState(searchParams.get("hood") === "true");
  const [showSecurity, setShowSecurity] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const messages = [
    { role: "user" as const, content: "Draft a polite follow-up email regarding the meeting." },
    { 
      role: "assistant" as const, 
      content: "Sure! Here's a follow-up email:\n\nSubject: Following Up on Our Recent Meeting\n\nDear [Name],\n\nI hope this message finds you well. I wanted to follow up on our meeting last week and touch base regarding the action items we discussed.\n\nI'd love to hear your thoughts on the proposal and discuss next steps at your earliest convenience.\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]" 
    }
  ];

  const pipelineSteps = [
    {
      id: "prompt-parsing",
      title: "Prompt Parsing",
      description: "Analyzing user intent and extracting key requirements",
      status: (currentStep >= 0 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Identified: Email drafting task, tone: polite/professional, context: follow-up meeting"
    },
    {
      id: "context-assembly",
      title: "Context Assembly",
      description: "Gathering relevant context and conversation history",
      status: (currentStep >= 1 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Retrieved: User writing style, previous emails, meeting notes"
    },
    {
      id: "api-tools",
      title: "API & Tool Calls",
      description: "Checking for required integrations or data sources",
      status: (currentStep >= 2 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "No external APIs required for this task"
    },
    {
      id: "vector-lookup",
      title: "Vector Database Lookup",
      description: "Searching for similar examples and templates",
      status: (currentStep >= 3 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Found: 3 similar email templates, professional tone examples"
    },
    {
      id: "llm-generation",
      title: "Response Generation (LLM)",
      description: "Model processing and content generation",
      status: (currentStep >= 4 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Model: GPT-4, Tokens: 450, Temperature: 0.7"
    },
    {
      id: "post-processing",
      title: "Post-processing",
      description: "Formatting and safety checks before delivery",
      status: (currentStep >= 5 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Applied: Grammar check, tone verification, PII filtering"
    }
  ];

  const securityThreats = [
    {
      step: "prompt-parsing",
      threat: "Prompt Injection",
      description: "Malicious instructions hidden in user input",
      example: "User includes 'Ignore previous instructions' in prompt",
      severity: "high" as const
    },
    {
      step: "context-assembly",
      threat: "Data Leakage",
      description: "Unintended exposure of sensitive information",
      example: "Context includes confidential meeting notes",
      severity: "high" as const
    },
    {
      step: "api-tools",
      threat: "API Misconfiguration",
      description: "Insecure API keys or excessive permissions",
      example: "API key with full account access instead of limited scope",
      severity: "medium" as const
    },
    {
      step: "llm-generation",
      threat: "Model Poisoning",
      description: "Compromised training data affecting outputs",
      example: "Model trained on biased or malicious examples",
      severity: "medium" as const
    },
    {
      step: "post-processing",
      threat: "Output Manipulation",
      description: "Tampering with generated content",
      example: "Injected tracking pixels or malicious links",
      severity: "high" as const
    }
  ];

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/scenarios")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-xl font-bold">Email Assistant</h1>
              <p className="text-sm text-muted-foreground">Draft a polite follow-up email</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={showHood ? "default" : "outline"}
              onClick={() => setShowHood(!showHood)}
              size="sm"
            >
              {showHood ? "Hide" : "Show"} Under the Hood
            </Button>
            <Button
              variant={showSecurity ? "destructive" : "outline"}
              onClick={() => setShowSecurity(!showSecurity)}
              size="sm"
              className={showSecurity ? "bg-destructive" : ""}
            >
              {showSecurity ? "Hide" : "Show"} Security Risks
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chat Interface */}
          <div className="lg:sticky lg:top-6 h-fit">
            <ChatInterface messages={messages} />
          </div>

          {/* Pipeline View */}
          {showHood && (
            <div className="lg:sticky lg:top-6 h-fit">
              <PipelineView
                steps={pipelineSteps}
                currentStep={currentStep}
                onStepClick={handleStepClick}
              />
              {showSecurity && (
                <SecurityOverlay
                  threats={securityThreats}
                  currentStep={pipelineSteps[currentStep]?.id}
                />
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            >
              Previous Step
            </Button>
          )}
          {currentStep < pipelineSteps.length - 1 ? (
            <Button
              onClick={() => setCurrentStep(Math.min(pipelineSteps.length - 1, currentStep + 1))}
            >
              Next Step
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/takeaways")}
              className="bg-gradient-to-r from-primary to-primary-glow"
            >
              Complete Simulation
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimulationEmail;
