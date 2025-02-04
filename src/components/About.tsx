import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Database, LineChart, Workflow } from 'lucide-react';

const skills = [
  'Power BI',
  'SQL',
  'Python',
  'DAX',
  'ETL',
  'UI/UX',
  'Data Modeling',
  'Statistical Analysis',
  'API Development',
  'Data Visualization',
  'Azure/AWS',

];

const About = () => {
  return (
    <section className="relative z-10 min-h-screen bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Professional Journey</h3>
            <p className="mb-4 text-muted-foreground">
              With over 7 years of experience in Business Intelligence, I've helped organizations
              transform their data into strategic assets. My approach combines technical expertise
              with business acumen to deliver solutions that drive real value.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Technical Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;