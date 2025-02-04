import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

const jobs: Job[] = [
  {
    "title": "Business Intelligence Specialist",
    "company": "Microsoft (Inviso Corp)",
    "dates": "08/2020 - 07/2024",
    "description": [
      "Designed advanced ETL processes using Microsoft Fabric, feeding Power BI reports for 100+ users across the US, Canada, and LATAM.",
      "Enhanced data workflows with Python and M scripting, ensuring timely refreshes of large datasets.",
      "Developed a multi-source sales dashboard integrating ARIMA forecasting, helping sales teams optimize outreach strategies.",
      "Built a ticketing app in PowerApps to capture user feedback, streamlining continuous improvements.",
      "Centralized data logic in SQL views, reducing overhead on Power BI and improving performance.",
      "Applied best practices in DAX and modeling to maintain quick-loading, high-volume dashboards."
    ]
  },
    {
      "title": "Business Intelligence Analyst",
      "company": "Johnson & Johnson (BEPC Consulting)",
      "dates": "04/2019 - 08/2020",
      "description": [
        "Implemented a project management solution using PowerApps, MS Project, and SharePoint to track workload and prevent over-allocation.",
        "Created Power BI dashboards for financial metrics, offering clear visibility into cost savings and project timelines.",
        "Collaborated with production teams to analyze recurring defects, driving targeted supply chain enhancements.",
        "Consolidated data from five healthcare suppliers, enabling unified reporting on project status and resource utilization.",
        "Built defect-tracking visuals to quickly identify bottlenecks and accelerate corrective actions.",
        "Demonstrated strong cross-functional communication to align stakeholders on performance metrics and outcomes."
      ]
    },
    {
      "title": "Web Developer (Intern)",
      "company": "Lexmark International",
      "dates": "02/2018 - 02/2019",
      "description": ["Developed full-stack ASP.NET solutions with Bootstrap and JS, modernizing HR and marketing tools.",
      "Built a labor-efficiency system at the production-line level, optimizing workforce productivity.",
      "Created Power BI marketing reports handling large datasets, significantly reducing load times compared to SSRS.",
      "Managed end-to-end data processes, integrating SQL workflows with responsive front-end designs.",
      "Provided Power BI support and training to teams in Europe and China, fostering global analytics adoption."]
    },
    {
      "title": "IT Support",
      "company": "CIMASA S.A.",
      "dates": "05/2014 - 02/2015",
      "description": ["Automated administrative tasks with Excel macros, reducing repetitive data entry.",
      "Developed a barcode attendance system for 550+ employees, cutting paper usage dramatically.",
      "Created a C# application to automate contract renewals, saving significant manual processing time.",
      "Handled hardware and software support, maintaining stable day-to-day operations across the company."]
    }
];

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function ExperienceSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
          {jobs.map((job, index) => (
            <div key={index} className="mb-8 ml-6">
              <TimelineDot />
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {job.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {job.company}
                      </p>
                    </div>
                    <Badge variant="secondary">{job.dates}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        {job.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                  </ul>
                </CardContent>
              </Card>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
