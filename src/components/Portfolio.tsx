import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from "embla-carousel-autoplay";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { LineChart, BarChart3, PieChart, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
    technologies: string[];
    images?: string[]
  };
}

const projects: Project[] = [
  {
    "id": 6,
    "title": "Survey Data & Sentiment Analysis for Public Infrastructure Evaluation",
    "description": "Conducted data analysis for the Mexican government to support ISO 9001 certification, leveraging user feedback to identify key infrastructure improvements",
    "image": "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos1.jpg",
    "icon": "Government",
    "tags": ["ISO 9001", "Data analysis", "Sentiment Analysis", "Decision Support"],
    "details": {
      "challenge": "The Mexican government needed to meet ISO 9001 by analyzing the effectiveness of management systems across four transnational bridges between Ciudad Juarez and El Paso.",
      "solution": "Analyzed survey data to assess user satisfaction and safety, developed a Power BI dashboard for decision-makers, and used AI-driven sentiment analysis to classify user feedback into complaints, suggestions, and concerns.",
      "impact": [
        "Helped government executives identify and prioritize key infrastructure improvements based on data-driven recommendations.",
        "Supported the successful ISO 9001 certification by providing the required data analysis and insights.",
      ],
      "technologies": ["ISO 9001", "Data analysis", "Sentiment Analysis", "Decision Support"],
      images: [
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos1.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos2.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos5.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos3.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos4.jpg",
      ]
    }
  },
  {
    "id": 2,
    "title": "Tourism Data Platform for Public Access & Insights (SICHITUR)",
    "description": "Collaborated in a web platform for the Mexican government to provide public access to tourism KPIs, integrating data from various sources to enhance decision-making and transparency.",
    "image": "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur1.jpg",
    "icon": "Government",
    "tags": ["Web Scraping", "Public Access", "Power BI", "Tourism data", "Sentiment Analysis", "Python"],
    "details": {
      "challenge": "The Tourism Department of Chihuahua needed a public platform to provide transparent access to tourism data, including visitor trends, economic impact, and social media insights.",
      "solution": "Developed sichitur.com, a web platform with integrated Power BI dashboards, automated tourism data collection from flights, hotels, and social media, and performed sentiment analysis to provide public access to tourism KPI's.",
      "impact": [
        "Empowered government executives, businesses, and the public with data-driven insights for better planning.",
        "Provided data integration, enhancing tourism strategy based on visitor trends and economic impact.",
      ],
      "technologies": ["Power BI", "Web Scraping", "Sentiment Analysis", "Data Analysis"],
      images: [
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur1.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur2.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur3.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur4.jpg",
      ]
    }
  },
  {
    "id": 3,
    "title": "Agente Libre – AI-Powered Job Matching Platform",
    "description": "Developed a web application to automate job searching by aggregating listings from multiple sources and using AI-powered resume matching to recommend the best opportunities.",
    "image": "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre.jpg",
    "icon": "Personal project",
    "tags": ["AI Matching", "Airflow", "Web Scraping", "Resume Optimization", "Supabase", "Python"],
    "details": {
      "challenge": "With numerous job boards online, job seekers struggle to track openings across multiple platforms and identify opportunities that align with their skills and experience.",
      "solution": "Developed Agente Libre, a web application that scrapes and enriches job listings daily, applies AI-powered resume matching to suggest relevant jobs, enables users to manage digital resumes, and provides automated alerts for top opportunities.",
      "impact": [
        "Simplifies job searching by centralizing listings from multiple sources and enhancing discovery through AI.",
        "Empowers job seekers with personalized recommendations, resume insights, and an easy-to-use platform tailored for remote work in Mexico."
      ],
      "technologies": ["AI", "Python", "Job Scraping", "Airflow", "Supabase", "PostgreSQL", "Embeddings", "Computer Vision", "Numpy", "Cloud Flare"],
      images: [
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre1.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre2.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre3.jpg"
      ]
    }
  },
  {
    "id": 4,
    "title": " Mobile Tire Repair Business (MePonché)",
    "description": "Co-founded a mobile tire repair service leveraging data analytics to optimize operations, improve service response time, and set competitive pricing for profitability.",
    "image": "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche4.jpg",
    "icon": "Entrepreneurship",
    "tags": ["Geospatial Analysis", "Market Research", "Business Strategy", "Power BI", "Entrepreneurship"],
    "details": {
      "challenge": "Efficiently delivering mobile tire repair services required identifying an optimal base of operations, ensuring fast response times, and setting competitive pricing to attract customers while remaining profitable.",
      "solution": "Used geospatial and market analysis to identify the best service location, optimized pricing for affordability and profitability, and developed a Power BI dashboard to track operations, revenue trends, and customer distribution.",
      "impact": [
        "Introduced an innovative on-location tire repair service with a competitive and sustainable pricing model, making it accessible to a wider audience while maintaining profitability.",
        "Secured funding for business expansion by presenting data-driven insights to investors.",
      ],
      "technologies": ["Power BI", "SQL", "API (INEGI)"],
      images: [
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche4.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche1.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche2.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche3.jpg",
        "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche5.jpg",
      ]
    }},{
      "id": 7,
      "title": "Data Analyst Volunteer - Chupacabras A.C.",
      "description": "Led data analysis efforts for a major mountain bike event, providing insights on cyclist satisfaction, performance, and economic impact—key factors in securing government support and sponsorships.",
      "image": "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/chupacabras1.jpg",
      "icon": "Community",
      "tags": ["Power BI", "Process Automation" , "Data Analysis", "Sponsorships", "Economic Impact"],
      "details": {
        "challenge": "Organizers needed data-driven insights to demonstrate the event’s economic impact and participant experience, crucial for securing government permissions and sponsorships.",
        "solution": "Conducted cyclist satisfaction and economic impact studies, and developed Power BI reports showcasing the event's value to stakeholders.",
        "impact": [
          "Demonstrated the event’s economic impact in our community, proving its value to the local government, which helped in securing permissions and funding.",
          "Provided sponsorship-attracting insights, highlighting visitor spending and participant engagement to bring in new partners.",
          "Saved 500+ man-hours annually by digitizing and streamlining survey processes, ensuring long-term sustainability for future volunteers."
        ],
        "technologies": ["Power BI", "Excel", "SurverMonkey", "SharePoint"]
      }
    },  {
      "id": 5,
      "title": "Power BI Instructor",
      "description": "Trained over 200 professionals in Power BI as part of a government initiative, preparing them for certification and strengthening data analytics expertise in Chihuahua’s workforce.",
      "image": "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi1.jpg",
      "icon": "Community",
      "tags": ["Power BI", "DAX", "Data Modeling", "M", "PowerQuery", "PowerApps"],
      "details": {
        "challenge": "The Chihuahua government needed to upskill professionals in data analytics, particularly in Power BI, to support the growing demand for data-driven decision-making in industries like manufacturing, retail, and finance.",
        "solution": "Designed and delivered Power BI courses for a government-backed program, training in data modeling, DAX, Power Query, and visualization best practices to prepare them for Microsoft’s Power BI certification.",
        "impact": [
          "Trained over 200 professionals for the Microsoft Power BI Data Analyst Associate certification.",
          "Strengthened Chihuahua’s workforce by increasing Power BI expertise in industries vital to the region’s economy."
        ],
        "technologies": ["Power BI", "DAX", "Data Modeling", "M", "PowerQuery", "PowerApps"],
        images: [
          "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi1.jpg",
          "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi2.jpg",
          "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi3.jpg",
          "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi4.jpg",
        ]
      }
    }
    
    
];

const Portfolio = () => {
  return (
    <section className="relative z-10 min-h-screen bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
          Side projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Dialog key={project.id}>
              {/* Card Trigger */}
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-background/50 transition-all hover:scale-105 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    {/* Static card image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition-opacity group-hover:opacity-75" />
                    <div className="absolute left-4 top-4 rounded-full bg-background/90 p-2 text-primary">
                      {project.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Modal Content */}
              <DialogContent className="sm:max-w-[700px]">

                {/* If multiple images exist -> show carousel. Else single image. */}
                {project.details.images && project.details.images.length > 1 ? (
                  <Carousel
                    className="relative w-full h-[300px]"
                    // Pass Embla options if needed:
                    opts={{ loop: true }}
                    // Add the Autoplay plugin:
                    plugins={[
                      Autoplay({
                        delay: 3000,         // 3s delay
                        stopOnInteraction: false,
                      }),
                    ]}
                  >
                    <CarouselContent className="h-[250px]">
                      {project.details.images.map((imgSrc, idx) => (
                        <CarouselItem
                          key={idx}
                          className="relative h-full w-full shrink-0"
                        >
                          <img
                            src={imgSrc}
                            alt={`${project.title}-slide-${idx}`}
                            className="h-full w-full object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Optional next/prev arrows */}
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                ) : (
                  /* Fallback: Single Image */
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 h-[300px] w-full rounded-lg object-cover"
                  />
                )}

                {/* Remaining Project Details */}
                <div className="space-y-3">
                  <div>
                    <h6 className="font-semibold">Challenge</h6>
                    <p className="text-sm text-muted-foreground">
                      {project.details.challenge}
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold">Solution</h6>
                    <p className="text-sm text-muted-foreground">
                      {project.details.solution}
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold">Impact</h6>
                    <ul className="list-inside list-disc text-sm text-muted-foreground">
                      {project.details.impact.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;