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
      "Designed and maintained Power BI dashboards, enabling actionable insights for sales analysis, Dynamics CRM tracking, and customer segmentation across LATAM, the U.S., and Canada.",
      "Enhanced ETL workflows using Fabric dataflows and M Scripting to efficiently process large datasets, ensuring accurate and timely data delivery.",
      "Led the development of a key sales dashboard integrating data from various sources, providing visibility into revenue and pipeline performance for leadership teams.",
      "Collaborated with sales and marketing teams to create data-driven strategies by identifying patterns in customer behavior and optimizing outreach efforts.",
      "Built a ticketing app in PowerApps & Power Automate to capture user feedback and new requirements, streamlining continuous improvements.",
      "Ingested and integrated data from diverse sources, including data warehouses, SSAS cubes, SQL Server databases, and the Dynamics CRM API, enabling seamless analytics and reporting."
    ]
  },
    {
      "title": "Business Intelligence Analyst",
      "company": "Johnson & Johnson (BEPC Consulting)",
      "dates": "04/2019 - 08/2020",
      "description": [
        "Developed Power BI dashboards to track financial metrics, providing clear visibility into cost savings, project timelines, and the progress of healthcare supply chain initiatives across multiple manufacturing plants.",
        "Implemented project management solutions using PowerApps and Flow to optimize resource allocation and prevent employee workload over-allocation.",
        "Analyzed production data to identify recurring defects and bottlenecks in the supply chain, enabling actionable improvements in efficiency and supporting project engineers in optimizing processes and enhancing product quality.",
        "Developed a comprehensive Power BI report for a business unit, integrating data from inventories, costs, production yield, scrap, and other key sources to provide an overview of operations."
      
      ]
    },
    {
      "title": "Web Developer (Intern)",
      "company": "Lexmark International",
      "dates": "02/2018 - 02/2019",
      "description": ["Created a production efficiency tracker to monitor performance across the entire manufacturing plant, calculating efficiency by analyzing man-hours, downtime, and production outputs. Provided granular insights by product, shift, and production line, enabling managers to identify bottlenecks, allocate resources effectively, and enhance overall operational productivity.",
      "Developed full-stack ASP.NET applications with responsive frontends, improving user experience with Bootstrap and JavaScript.",
      "Migrated crucial SSRS reports to Power BI, addressing frequent query timeout errors and significantly improving report performance and user experience by optimizing data models and query execution.",
      "Managed end-to-end data projects, including data modeling, SSIS workflows for file integration and stored procedures, and Power BI reports for data visualization."]
    },
    {
      "title": "IT Support",
      "company": "CIMASA S.A.",
      "dates": "05/2014 - 02/2015",
      "description": [
        "Developed a barcode attendance system in Visual Basic for 550+ employees, drastically reducing paper usage and enabling the payroll team to easily calculate total hours per employee.",
        "Automated administrative tasks with Excel macros, reducing repetitive data entry.",
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
