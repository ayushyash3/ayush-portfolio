import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, GraduationCap, Award, 
  ChevronDown, ChevronUp, Calendar, Building, Code, Target,
  CheckCircle2, Globe, FileText, ChevronRight,
  TrendingUp, Zap, Users, ShieldCheck, Sparkles, Brain, 
  BarChart3, Rocket, Linkedin, Globe2, Printer, Download
} from 'lucide-react';

// --- DATA STRUCTURE ---
const resumeData = {
  personal: {
    name: "Ayush Maheshwari",
    title: "Payments Product & Delivery Leader | Cards Domain Expert",
    subtitles: ["TSYS Prime 4 Specialist", "FinTech Transformation", "Agile Scaling"],
    location: "Kitchener, Ontario, Canada",
    phone: "+1 519-721-1423",
    email: "ayushyash3@gmail.com",
    skype: "ayush.maheshwari1",
    linkedin: "linkedin.com/in/ayush-maheshwari-20632615/",
    portfolio: "https://ayushyash3.github.io/ayush-portfolio/",
    summary: "FinTech Product & Delivery Leader and Payments Domain Expert with nearly two decades of experience delivering scalable, high-impact platforms across Cards & Payments and Digital Banking. Passionate about driving quality, digital innovation, and next-generation (AI-enabled) financial solutions across global markets. Proven track record leading Agile delivery, multi-vendor coordination, and complex system migrations for top-tier banks in Canada, USA, India, and UAE."
  },
  impact: [
    { title: "Accelerated Time-to-Market", desc: "Streamlined Agile & CI/CD workflows to deliver critical digital banking features faster and more reliably.", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Platform Scalability", desc: "Upgraded core payment systems (e.g., TSYS Prime 4) to securely process exponentially growing transaction volumes.", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Enhanced Customer Experience", desc: "Led the rollout of seamless mobile banking and CRM apps, significantly expanding digital footprints and user retention.", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Risk Mitigation & Compliance", desc: "Maintained near-zero defect leakage during high-stakes financial migrations through rigorous SIT/UAT governance.", icon: ShieldCheck, color: "text-indigo-500", bg: "bg-indigo-50" }
  ],
  futureValue: [
    {
      title: "AI-Powered Quality Engineering",
      desc: "Implementing Gen-AI to automate test case generation and predictive defect analysis, reducing manual effort by up to 40%.",
      icon: Brain
    },
    {
      title: "Intelligent Fraud & Risk Mitigation",
      desc: "Guiding the integration of ML models into payment gateways to detect real-time anomalies and enhance transaction security.",
      icon: ShieldCheck
    },
    {
      title: "Data-Driven Project Governance",
      desc: "Leveraging predictive analytics to forecast sprint velocity and resource bottlenecks, ensuring 99% on-time delivery accuracy.",
      icon: BarChart3
    },
    {
      title: "Next-Gen Digital Banking",
      desc: "Leading the transition toward AI-chatbots and personalized financial insights to drive superior customer engagement.",
      icon: Rocket
    }
  ],
  competencies: [
    "Strategic Portfolio & Delivery Management",
    "Payments & Cards Domain (TSYS Prime)",
    "Digital Banking Platforms",
    "Quality Engineering & Test Governance",
    "API & Middleware Integration",
    "Agile Delivery (Scrum, SAFe, PI Planning)",
    "Compliance & Risk Management",
    "Stakeholder & Client Leadership",
    "Requirements & Acceptance Criteria",
    "Process Optimization & Transformation"
  ],
  techSkills: {
    "Payments & Cards": "TSYS Prime 4, Card Issuing, Authorizations, Clearing & Settlement, Disputes & Chargebacks",
    "Tools": "JIRA, HPQC, Zephyr, SOAP UI, Postman, Selenium WebDriver",
    "Platforms": "Windows OS, IBM Sterling OMS, Sterling Integrator",
    "Domains": "Cards & Payments, Digital Banking, Retail, Gaming, Navigation"
  },
  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      title: "Project Manager (Associate Consultant)",
      duration: "Dec 2022 - Present",
      location: "Canada / India",
      projects: [
        {
          name: "SalesLogix – Bank of America (USA)",
          role: "Project Manager / Scrum Master",
          details: "A strategic digital transformation initiative designed to unify customer and Loan data, enabling the bank to scale its CRM capabilities and improve client acquisition rates.",
          points: [
            "Spearheaded end-to-end Agile delivery of a customer-focused initiative, improving Lead information management across the organization.",
            "Facilitated team meetings, planning sessions, and regular check-ins to ensure smooth collaboration and progress.",
            "Improved team efficiency and delivery timelines by driving continuous improvements and better ways of working.",
            "Coordinated testing and ensured all deliverables were reviewed and ready before release.",
            "Proactively identified risks and resolved issues to keep the project on track."
          ]
        }
      ]
    },
    {
      company: "Accenture Technologies",
      title: "Associate Project Manager",
      duration: "June 2021 - Dec 2022",
      location: "India",
      projects: [
        {
          name: "Credit Sync – Bank of America (USA)",
          role: "Application Development Manager – Associate",
          details: "Large-scale initiative aimed at improving the accuracy and flow of credit data across multiple banking channels.",
          points: [
            "Delivered Agile ceremonies and ensured smooth Scrum operations for real-time credit data updates.",
            "Managed multi-stakeholder alignment, client requirement gathering, and resource onboarding for web/mobile/backend systems.",
            "Conducted QA reviews and validated test coverage for SIT/UAT cycles, ensuring high-quality releases.",
            "Prepared epics and stories based on complex business requirements to streamline project implementation.",
            "Estimated efforts and assessed team ramp-up/down based on evolving project requirements."
          ]
        }
      ]
    },
    {
      company: "Attra Infotech PVT Ltd",
      title: "Project Manager / Test Lead",
      duration: "June 2018 - May 2021",
      location: "Bangalore, India",
      projects: [
        {
          name: "Credit Card Mobile App - Dunia Finance, UAE",
          role: "Project Coordinator / Manager",
          details: "Managed the lifecycle of a mobile application for credit card services, enabling real-time management for UAE customers.",
          points: [
            "Delivered end-to-end delivery for a mobile credit card platform, ensuring seamless customer experience and timely release.",
            "Directed cross-functional teams, coordinated QA/testing, and ensured integration with backend banking systems.",
            "Implemented continuous improvement initiatives, increasing delivery efficiency by ~20%.",
            "Introduced automation and workflow optimization, reducing manual testing effort and accelerating release cycles.",
            "Liaised with stakeholders and vendors, ensuring requirements were met and risks mitigated."
          ]
        },
        {
          name: "Digital Banking Platform – SBI Bank, India",
          role: "Project Coordinator / Manager",
          details: "Managed the lifecycle of a mobile application for credit card services, enabling real-time management for India customers.",
          points: [
            "Defined testing strategy, resource planning, and delivery timelines for web and mobile credit card applications.",
            "Acted as primary point of contact for stakeholders, ensuring alignment and zero-defect go-live.",
            "Streamlined release and change management processes, improving operational efficiency.",
            "Coordinated requirements gathering and acceptance criteria definition, translating complex business rules into actionable tasks."
          ]
        },
        {
          name: "Cards Issuing System Migration (Mashreq Bank)",
          role: "Project Coordinator / Test Lead",
          details: "Transitioned credit card platform to the TSYS processing system, focusing on secure data migration and service reliability.",
          points: [
            "Program Management for a major Cards System Transformation, including Business Case preparation and solution shortlisting.",
            "Managed functional modules: Loyalty products, Collections, Payment Gateway, and Customer Onboarding.",
            "Documented testing strategy for UAT and conducted walkthrough sessions for sign-offs."
          ]
        }
      ]
    },
    {
      company: "ValueLabs LLC",
      title: "Technical Lead",
      duration: "Oct 2016 - June 2018",
      location: "Hyderabad / UAE",
      projects: [
        {
          name: "Cards System Upgrade (Prime 3 to Prime 4 – ADIB)",
          role: "QA - Technical Lead",
          details: "Migrated the credit card platform to Prime 4 to enhance performance and scalability.",
          points: [
            "Implemented STLC standard quality practices/processes in projects.",
            "Assisted team in conducting end-to-end testing ensuring business, technical, and functional requirements were met.",
            "Managed and guided offshore teams based on project stakeholder discussions."
          ]
        }
      ]
    },
    {
      company: "North Shore Technology",
      title: "Test Lead",
      duration: "Jul 2015 - Sep 2016",
      location: "Noida",
      projects: [
        {
          name: "Online Game & Mobile App Testing (PCH - Publishers Clearing House)",
          role: "Test Lead",
          details: "Quality assurance for Publishers Clearing House applications.",
          points: [
            "Responsible for client interaction and guiding teams for on-time delivery of Functional/Regression testing.",
            "Participated in Sprint planning and requirement gathering to discuss business development needs.",
            "Managed traceability matrices to keep project in scope and monitored progress weekly."
          ]
        }
      ]
    },
    {
      company: "TSYS",
      title: "Senior Test Analyst",
      duration: "Nov 2013 - Jul 2015",
      location: "Noida",
      projects: [
        {
          name: "PRIME 4.0 Core Product Testing",
          role: "Sr. Test Analyst",
          details: "Verified processor-in-box solutions for card issuing, acquiring, and fraud management.",
          points: [
            "Handled card and merchant creation via web app, XML, and APIs as per payment system specs (VISA, MC, AMEX).",
            "Exclusive knowledge of Credit shield and rewards functionality on Prime 4.",
            "Defect reporting and analysis for team members, ensuring product customization met requirements."
          ]
        }
      ]
    },
    {
      company: "HCL Technologies",
      title: "Software Test Engineer",
      duration: "June 2010 - Nov 2013",
      location: "Noida",
      projects: [
        {
          name: "eBay Webstore Platform (GSI Commerce)",
          role: "Test Engineer",
          details: "GSI Webstore Testing for global product launches and demand forecasting.",
          points: [
            "Delivered functional and regression testing for large-scale e-commerce web platforms.",
            "Developed test cases covering end-to-end customer journeys and product management.",
            "Coordinated with global development teams to improve delivery quality."
          ]
        }
      ]
    },
    {
      company: "Infotech Enterprises Ltd.",
      title: "Digital Cartographer / Test Engineer",
      duration: "Oct 2007 - May 2010",
      location: "Noida",
      projects: [
        {
          name: "TomTom Navigation Project",
          role: "Digital Cartographer",
          details: "GIS database management for worldwide in-car navigation solutions.",
          points: [
            "Conducted QA for large-scale GIS databases, ensuring accurate navigation data.",
            "Managed defect reporting and implementation review for system reliability.",
            "Coordinated with onsite/offshore teams facilitating daily updates."
          ]
        }
      ]
    }
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", year: "2003 - 2006", institution: "NIEC, Lucknow (UPTU)", grade: "71%" },
    { degree: "Bachelor of Computer Applications (BCA)", year: "2000 - 2003", institution: "NIEC, Meerut (CCSU)", grade: "62%" }
  ],
  awards: [
    { title: "ISTQB Foundation Level Certified", desc: "Certificate Number: 00357269" },
    { title: "EXIN Agile Scrum Master Certified", desc: "Registration Number: 6021374" },
    { title: "Spot Award (x2)", desc: "Attra Infotech PVT Ltd, Bangalore" },
    { title: "Best Performer Award", desc: "Awarded in first 6 months at TSYS Noida" },
    { title: "Live Wire Award", desc: "HCL Technologies" },
    { title: "Best Employee Award (x2)", desc: "InfoTech Enterprises Ltd." }
  ]
};

// --- COMPONENTS ---

const SectionHeading = ({ title, icon: Icon, subtitle }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
      <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="mt-2 text-slate-500 text-sm">{subtitle}</p>}
  </div>
);

const ExperienceCard = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8 md:pl-0">
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2"></div>
      <div className="md:hidden absolute left-3 top-2 bottom-0 w-px bg-blue-200"></div>

      <div className={`md:flex items-center justify-between w-full ${isExpanded ? 'mb-4' : 'mb-8'}`}>
        <div className="hidden md:block w-5/12 text-right pr-8">
          <div className="text-lg font-bold text-blue-700">{exp.company}</div>
          <div className="text-slate-500 flex items-center justify-end gap-1 mt-1 text-sm">
            <Calendar size={14} /> {exp.duration}
          </div>
          <div className="text-slate-500 flex items-center justify-end gap-1 mt-1 text-sm">
            <MapPin size={14} /> {exp.location}
          </div>
        </div>

        <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow transform md:-translate-x-1/2 mt-1 md:mt-0 z-10"></div>

        <div className="md:w-5/12 md:pl-8 w-full">
          <div 
            className={`bg-white rounded-xl shadow-sm border border-slate-100 p-5 cursor-pointer hover:shadow-md transition-shadow ${isExpanded ? 'ring-2 ring-blue-100' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="md:hidden mb-2">
              <div className="text-lg font-bold text-blue-700">{exp.company}</div>
              <div className="text-slate-500 text-sm">{exp.duration} | {exp.location}</div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
            <div className="text-slate-600 mt-1 text-sm">
              {exp.projects.length} {exp.projects.length > 1 ? 'Projects/Roles' : 'Project/Role'} included
            </div>
            
            <div className="flex items-center gap-1 text-blue-600 font-medium text-sm mt-3">
              {isExpanded ? <><ChevronUp size={16}/> Hide details</> : <><ChevronDown size={16}/> View details</>}
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="md:w-5/12 md:ml-auto md:pl-8 w-full mb-10 pl-0 mt-2">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-6">
            {exp.projects.map((proj, idx) => (
              <div key={idx} className="relative">
                {idx !== 0 && <hr className="my-5 border-slate-200" />}
                <h4 className="text-lg font-bold text-slate-800 flex items-start gap-2">
                  <Target className="text-blue-500 shrink-0 mt-1" size={18} />
                  {proj.name}
                </h4>
                <div className="text-sm font-semibold text-slate-600 mt-1 mb-2 ml-7">Role: {proj.role}</div>
                <p className="text-sm text-slate-600 mb-3 ml-7 italic">{proj.details}</p>
                <ul className="space-y-2 ml-7">
                  {proj.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-sm text-slate-700 flex items-start gap-2">
                      <ChevronRight className="text-blue-400 shrink-0 mt-0.5" size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// --- MAIN APP ---
export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      
      {/* Floating Action Buttons - Print/Download */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 print:hidden">
        <div className="max-w-5xl mx-auto flex justify-end gap-3">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-semibold border border-slate-200"
          >
            <Printer size={18} />
            <span>Print</span>
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg shadow-blue-200"
          >
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* HEADER / HERO SECTION */}
      <header className="bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* PHOTO SECTION */}
            <div className="relative shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-8 ring-blue-50">
                    <img 
                        src="IMG_3356.jpg" 
                        alt="Ayush Maheshwari" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://via.placeholder.com/400x400?text=Ayush+Maheshwari";
                        }}
                    />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-3 rounded-2xl shadow-lg border-2 border-white">
                    <Briefcase size={20} />
                </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                {resumeData.personal.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-4 flex items-center justify-center md:justify-start gap-2">
                {resumeData.personal.title} <Sparkles size={20} className="text-amber-500" />
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {resumeData.personal.subtitles.map((sub, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full border border-slate-200">
                    {sub}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 max-w-2xl leading-relaxed text-lg">
                {resumeData.personal.summary}
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail size={16} /> {resumeData.personal.email}
                </a>
                <a href={`tel:${resumeData.personal.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Phone size={16} /> {resumeData.personal.phone}
                </a>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} /> {resumeData.personal.location}
                </div>
                <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        {/* FUTURE VALUE SECTION */}
        <section>
          <SectionHeading 
            title="Strategic Vision & Future Readiness" 
            icon={Sparkles} 
            subtitle="How I leverage emerging technologies to drive long-term business growth."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.futureValue.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-lg hover:scale-[1.02] transition-transform">
                  <div className="p-3 bg-white/20 rounded-xl h-fit">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* BUSINESS IMPACT SECTION */}
        <section>
          <SectionHeading title="Business Impact & Value Delivered" icon={TrendingUp} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.impact.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <SectionHeading title="Core Competencies & Skills" icon={Code} />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Target size={20} className="text-blue-500"/> Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.competencies.map((skill, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileText size={20} className="text-blue-500"/> Technical Stack
              </h3>
              <div className="space-y-4">
                {Object.entries(resumeData.techSkills).map(([category, skills], idx) => (
                  <div key={idx}>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{category}</div>
                    <div className="text-slate-700 font-medium text-sm">{skills}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="print:block">
          <SectionHeading title="Professional Experience" icon={Briefcase} />
          <div className="relative pt-4">
            {resumeData.experience.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 print:block print:space-y-12">
          <section>
            <SectionHeading title="Certifications & Awards" icon={Award} />
            <div className="space-y-4">
              {resumeData.awards.map((award, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`p-2 rounded-full shrink-0 ${idx < 2 ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{award.title}</h4>
                    <p className="text-sm text-slate-500 mt-0.5">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading title="Academic Credentials" icon={GraduationCap} />
            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transition-all group-hover:w-2"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800 pr-4">{edu.degree}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-md shrink-0">
                      {edu.grade}
                    </span>
                  </div>
                  <div className="text-slate-600 font-medium flex items-center gap-2 text-sm mb-1">
                    <Building size={14} /> {edu.institution}
                  </div>
                  <div className="text-slate-500 flex items-center gap-2 text-sm">
                    <Calendar size={14} /> {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-12 print:hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-white text-2xl font-bold mb-4">Let's build the future of banking</h2>
          <p className="mb-8 max-w-lg mx-auto">Ready to help your organization scale with intelligent delivery and robust digital transformation strategies.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${resumeData.personal.email}`} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-900/20">
              <Mail size={18}/> Contact Me
            </a>
            <a href={resumeData.personal.portfolio} className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center gap-2">
              <Globe2 size={18}/> Digital Portfolio
            </a>
          </div>
          <div className="mt-12 text-sm border-t border-slate-800 pt-6">
            © {new Date().getFullYear()} {resumeData.personal.name}. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* CSS for print optimization */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .print\\:hidden { display: none !important; }
          body { background-color: white !important; -webkit-print-color-adjust: exact; }
          main { padding-top: 0 !important; }
          .max-w-5xl { max-width: 100% !important; width: 100% !important; margin: 0 !important; padding: 0 !important; }
          section { page-break-inside: avoid; margin-bottom: 2rem !important; }
          header { border-bottom: none !important; padding-top: 0 !important; }
          .bg-slate-50 { background-color: white !important; }
          .shadow-sm, .shadow-md, .shadow-lg, .shadow-2xl { shadow: none !important; box-shadow: none !important; }
          @page { size: auto; margin: 15mm 15mm 15mm 15mm; }
        }
      `}} />
    </div>
  );
}