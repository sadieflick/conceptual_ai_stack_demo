import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import PipelineView from "@/components/PipelineView";
import SecurityOverlay from "@/components/SecurityOverlay";

const SimulationResearch = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showHood, setShowHood] = useState(searchParams.get("hood") === "true");
  const [showSecurity, setShowSecurity] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const messages = [
    { role: "user" as const, content: "Find key points from three documents about AI security best practices." },
    { 
      role: "assistant" as const, 
      content: "I've analyzed the three documents on AI security. Here are the key findings:\n\n**Core Security Principles:**\n• Input validation and sanitization at every entry point\n• Implement least-privilege access controls\n• Regular security audits and penetration testing\n• Data encryption in transit and at rest\n\n**Common Vulnerabilities:**\n1. **Prompt Injection** - Highest risk, affects 78% of systems\n2. **Data Leakage** - Exposure of training data or PII\n3. **Model Manipulation** - Adversarial attacks on model behavior\n\n**Recommended Mitigations:**\n• Use dedicated security frameworks (OWASP AI Security)\n• Implement output filtering and content moderation\n• Maintain separate environments for training and production\n• Regular model monitoring and anomaly detection\n\n**Industry Standards:**\nAll three documents reference ISO/IEC 42001 and NIST AI Risk Management Framework as essential compliance guidelines." 
    }
  ];

  const pipelineSteps = [
    {
      id: "prompt-parsing",
      title: "Prompt Parsing",
      description: "Understanding the research request",
      status: (currentStep >= 0 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Identified: Multi-document analysis, synthesis task, topic: AI security"
    },
    {
      id: "context-assembly",
      title: "Context Assembly",
      description: "Loading and organizing source documents",
      status: (currentStep >= 1 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Loaded: 3 PDF documents, total 47 pages, extracted key sections"
    },
    {
      id: "api-tools",
      title: "API & Tool Calls",
      description: "Using document processing and search tools",
      status: (currentStep >= 2 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Called: PDF parser, Semantic search, Citation validator"
    },
    {
      id: "vector-lookup",
      title: "Vector Database Lookup",
      description: "Searching for related research and context",
      status: (currentStep >= 3 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Retrieved: 15 similar research papers, Industry reports, Expert opinions"
    },
    {
      id: "llm-generation",
      title: "Response Generation (LLM)",
      description: "Synthesizing insights from multiple sources",
      status: (currentStep >= 4 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Model: GPT-4, Context window: 8K tokens, Cross-referencing enabled"
    },
    {
      id: "post-processing",
      title: "Post-processing",
      description: "Validating citations and formatting output",
      status: (currentStep >= 5 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Verified: All citations accurate, Added source attribution, Formatted for readability"
    }
  ];

  const securityThreats = [
    {
      step: "prompt-parsing",
      threat: "Prompt Injection via Documents",
      description: "Malicious instructions embedded in source files",
      example: "PDF contains hidden text: 'Ignore previous security guidelines'",
      severity: "high" as const
    },
    {
      step: "context-assembly",
      threat: "Confidential Document Leakage",
      description: "Unintended exposure of proprietary research",
      example: "System processes internal-only documents and includes findings",
      severity: "high" as const
    },
    {
      step: "api-tools",
      threat: "Third-Party Tool Risk",
      description: "Document processors with data retention policies",
      example: "PDF parser uploads documents to external cloud for processing",
      severity: "medium" as const
    },
    {
      step: "llm-generation",
      threat: "Citation Fabrication",
      description: "Model generates fake sources or misquotes",
      example: "AI cites non-existent papers or misattributes quotes",
      severity: "medium" as const
    },
    {
      step: "post-processing",
      threat: "Source Attribution Failure",
      description: "Missing or incorrect citation information",
      example: "Output doesn't clearly indicate which document each fact came from",
      severity: "low" as const
    }
  ];

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/scenarios")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-xl font-bold">Research Agent</h1>
              <p className="text-sm text-muted-foreground">Find key points from documents</p>
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
            >
              {showSecurity ? "Hide" : "Show"} Security Risks
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:sticky lg:top-6 h-fit">
            <ChatInterface messages={messages} />
          </div>

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

        <div className="mt-8 flex justify-center gap-4">
          {currentStep > 0 && (
            <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>
              Previous Step
            </Button>
          )}
          {currentStep < pipelineSteps.length - 1 ? (
            <Button onClick={() => setCurrentStep(Math.min(pipelineSteps.length - 1, currentStep + 1))}>
              Next Step
            </Button>
          ) : (
            <Button onClick={() => navigate("/takeaways")} className="bg-gradient-to-r from-primary to-primary-glow">
              Complete Simulation
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimulationResearch;
