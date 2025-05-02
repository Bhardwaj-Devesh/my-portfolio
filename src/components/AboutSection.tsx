
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Book, Dumbbell, Plane } from "lucide-react";
import { BookOpenCheck, ActivitySquare, Terminal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Get to know more about my background, education, and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio Card */}
          <Card className="col-span-1 lg:col-span-3 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">My Bio</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                I'm a passionate computer science graduate with a focus on creating meaningful digital experiences.
                I enjoy solving complex problems and turning ideas into reality through code.
                My journey in tech has equipped me with diverse skills in various technologies and methodologies.
              </p>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="col-span-1 lg:col-span-2 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-bold text-lg">Indian Institute of Information Technology, Pune</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science and Engineering</p>
                  <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                    <span>CGPA: 7.98</span>
                    <span>2020 - 2024</span>
                  </div>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-bold text-lg">Everest Public School</h3>
                  <p className="text-muted-foreground">12th Class</p>
                  <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                    <span>Percentage: 95%</span>
                    <span>2018 - 2019</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hobbies Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Coding Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/Devesh_Bhardwaj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <img
                    src="https://logo.svgcdn.com/s/leetcode-dark.png"
                    alt="LeetCode Logo"
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">LeetCode</h3>
                    <p className="text-sm text-muted-foreground">Problem solving & DSA practice</p>
                  </div>
                </a>

                {/* Codeforces */}
                <a
                  href="https://codeforces.com/profile/Devesh_Bhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <img
                    src="https://logo.svgcdn.com/s/codeforces-dark.png"
                    alt="Codeforces Logo"
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">Codeforces</h3>
                    <p className="text-sm text-muted-foreground">Competitive programming</p>
                  </div>
                </a>

                {/* CodeChef */}
                <a
                  href="https://www.codechef.com/users/shivohamm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <img
                    src="https://logo.svgcdn.com/s/codechef-dark.png"
                    alt="CodeChef Logo"
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">CodeChef</h3>
                    <p className="text-sm text-muted-foreground">Practice & monthly contests</p>
                  </div>
                </a>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
