import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Clock } from "lucide-react";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Track reinforcement performance, mod workload, and community trends
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Last 7 days</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="response">Response Times</TabsTrigger>
          <TabsTrigger value="workload">Mod Workload</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          {/* Chart Placeholder Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Reinforcement Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Line chart: queued → in progress → completed over 7 days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  Request Priority Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Pie chart: low, medium, high, urgent priority breakdown
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Activity Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <div className="h-4 bg-secondary/50 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-secondary/30 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="response" className="mt-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Average Response Time Trend</CardTitle>
              <p className="text-sm text-muted-foreground">How quickly mods respond to requests</p>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-secondary/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Line chart: avg response time (minutes) over 30 days
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workload" className="mt-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Mod Assignment Load</CardTitle>
              <p className="text-sm text-muted-foreground">Active assignments per moderator</p>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-secondary/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Bar chart: number of active assignments per mod
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment" className="mt-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Community Sentiment Trends</CardTitle>
              <p className="text-sm text-muted-foreground">Positive, neutral, and negative sentiment over time</p>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-secondary/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Stacked area chart: sentiment distribution over 30 days
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
