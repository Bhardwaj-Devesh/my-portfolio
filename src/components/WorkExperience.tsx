import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code2, Megaphone } from "lucide-react";

const WorkExperience = () => {
  return (
    <section id="work" className="py-20 bg-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A glimpse into my professional experiences and impactful contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* HiWiPay Experience */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Java Backend Developer</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">
                  HiWiPay · Jan 2024 – Present
                </p>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside">
                <li>
                  Developing and maintaining robust backend systems using Spring Boot and PostgreSQL.
                </li>
                <li>
                  Collaborating using Bitbucket & Git for version control, Postman for testing, Jira for task tracking, and Slack for communication.
                </li>
                <li>
                  Built RESTful APIs to support frontend functionalities, ensuring seamless server-client interactions.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* E-Cell Experience */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Megaphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Joint Digital Marketing Head</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">
                  E-Cell, IIIT Pune · Dec 2021 – Jan 2023
                </p>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside">
                <li>
                  Drove 0.5M+ YouTube impressions and earned Google’s <a href="https://skillshop.exceedlms.com/student/award/XyzLinkHere" target="_blank" rel="noopener noreferrer" className="text-primary underline">Fundamentals of Digital Marketing</a> certificate.
                </li>
                <li>
                  Strategized and executed successful campaigns for Hackathon2k21, IdeaThon 2k22, and ESummit 2k22.
                </li>
                <li>
                  Managed partnerships and sponsorships for large-scale college events.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
