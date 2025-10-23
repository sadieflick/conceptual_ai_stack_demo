import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Table, FileSearch, ArrowLeft } from "lucide-react";

const scenarios = [
  {
    id: "email",
    title: "Email Assistant",
    description: "Draft a polite follow-up email.",
    icon: Mail,
    color: "from-blue-500 to-cyan-500",
    path: "/simulation/email"
  },
  {
    id: "spreadsheet",
    title: "Spreadsheet Helper",
    description: "Summarize this sales dataset.",
    icon: Table,
    color: "from-green-500 to-emerald-500",
    path: "/simulation/spreadsheet"
  },
  {
    id: "research",
    title: "Research Agent",
    description: "Find key points from three documents.",
    icon: FileSearch,
    color: "from-purple-500 to-pink-500",
    path: "/simulation/research"
  }
];

const Scenarios = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-light/20 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose a Scenario
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a use-case to explore how AI processes your request
          </p>
        </div>

        {/* Scenario Cards */}
        <div className="grid gap-6 md:gap-8 animate-fade-in">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <Card
                key={scenario.id}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${scenario.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{scenario.title}</h2>
                    <p className="text-muted-foreground mb-4">{scenario.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={() => navigate(scenario.path)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Play Simulation
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => navigate(`${scenario.path}?hood=true`)}
                      >
                        View What's Happening Under the Hood
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Security Mode Info */}
        <div className="mt-12 p-6 bg-muted rounded-xl border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Security Mode</h3>
              <p className="text-sm text-muted-foreground">
                During any simulation, you can toggle <span className="font-semibold text-destructive">Security Mode</span> to see potential vulnerabilities and attack vectors at each layer of the AI pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scenarios;
