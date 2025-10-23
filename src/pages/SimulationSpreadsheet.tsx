import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import PipelineView from "@/components/PipelineView";
import SecurityOverlay from "@/components/SecurityOverlay";

const SimulationSpreadsheet = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showHood, setShowHood] = useState(searchParams.get("hood") === "true");
  const [showSecurity, setShowSecurity] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const messages = [
    { role: "user" as const, content: "Summarize this sales dataset and identify top-performing regions." },
    { 
      role: "assistant" as const, 
      content: "I've analyzed your sales dataset. Here's the summary:\n\n**Top Performing Regions:**\n1. West Coast: $2.4M (28% of total sales)\n2. Northeast: $1.9M (22% of total sales)\n3. Southeast: $1.6M (19% of total sales)\n\n**Key Insights:**\n• Q4 showed 35% growth compared to Q3\n• Product category 'Electronics' leads with 42% market share\n• Average deal size increased from $12K to $18K\n\n**Recommendations:**\n• Focus expansion efforts on West Coast region\n• Increase inventory for Electronics category\n• Replicate successful Q4 strategies in upcoming quarter" 
    }
  ];

  const pipelineSteps = [
    {
      id: "prompt-parsing",
      title: "Prompt Parsing",
      description: "Understanding the data analysis request",
      status: (currentStep >= 0 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Identified: Dataset analysis, summarization task, need for trend identification"
    },
    {
      id: "context-assembly",
      title: "Context Assembly",
      description: "Loading dataset and relevant context",
      status: (currentStep >= 1 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Loaded: Sales data (12 months), regional info, product categories"
    },
    {
      id: "api-tools",
      title: "API & Tool Calls",
      description: "Invoking data analysis tools",
      status: (currentStep >= 2 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Called: Data aggregation API, Statistical analysis tools, Visualization engine"
    },
    {
      id: "vector-lookup",
      title: "Vector Database Lookup",
      description: "Finding similar analysis patterns",
      status: (currentStep >= 3 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Retrieved: Previous sales reports, Industry benchmarks, Analysis templates"
    },
    {
      id: "llm-generation",
      title: "Response Generation (LLM)",
      description: "Creating insights and recommendations",
      status: (currentStep >= 4 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Model: GPT-4, Processing: Statistical summary + Natural language generation"
    },
    {
      id: "post-processing",
      title: "Post-processing",
      description: "Formatting results and validating accuracy",
      status: (currentStep >= 5 ? "complete" : "pending") as "complete" | "active" | "pending",
      details: "Applied: Number formatting, Chart generation, Fact-checking against source data"
    }
  ];

  const securityThreats = [
    {
      step: "prompt-parsing",
      threat: "Data Extraction Attack",
      description: "Malicious prompt trying to extract full dataset",
      example: "User asks 'Show me all customer names and credit cards in the dataset'",
      severity: "high" as const
    },
    {
      step: "context-assembly",
      threat: "Sensitive Data Exposure",
      description: "Dataset contains PII or confidential information",
      example: "Sales data includes employee SSNs or customer financial details",
      severity: "high" as const
    },
    {
      step: "api-tools",
      threat: "Tool Misuse",
      description: "Analysis tools with excessive database permissions",
      example: "Data tool has DELETE permissions instead of read-only access",
      severity: "high" as const
    },
    {
      step: "llm-generation",
      threat: "Hallucinated Statistics",
      description: "Model generates false or misleading numbers",
      example: "AI invents statistics not present in actual dataset",
      severity: "medium" as const
    },
    {
      step: "post-processing",
      threat: "Data Integrity Issues",
      description: "Formatting errors that misrepresent data",
      example: "Currency conversion errors or incorrect decimal places",
      severity: "medium" as const
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
              <h1 className="text-xl font-bold">Spreadsheet Helper</h1>
              <p className="text-sm text-muted-foreground">Summarize sales dataset</p>
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

export default SimulationSpreadsheet;
