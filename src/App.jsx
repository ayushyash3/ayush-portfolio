import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, GraduationCap, Award, 
  ChevronDown, ChevronUp, Calendar, Building, Code, Target,
  CheckCircle2, Globe, FileText, ChevronRight,
  TrendingUp, Zap, Users, ShieldCheck, Sparkles, Brain, 
  BarChart3, Rocket
} from 'lucide-react';

// --- DATA STRUCTURE ---
const resumeData = {
  personal: {
    name: "Ayush Maheshwari",
    title: "Project Manager | Scrum Master | Digital Transformation Leader",
    subtitles: ["Cards & Payments", "AI-Driven Delivery", "Agile Scaling"],
    location: "Kitchener, Ontario, Canada",
    phone: "+1 519-721-1423",
    email: "ayushyash3@gmail.com",
    skype: "ayush.maheshwari1",
    summary: "Project Manager & Scrum Master with 18+ years of global experience driving digital transformation and scaling complex platforms across Cards & Payments, Digital Banking, and Retail. Beyond traditional delivery, I focus on integrating AI-driven insights into project lifecycles—optimizing resource allocation and predicting risks before they impact the bottom line. Proven track record of maximizing business value by orchestrating Agile delivery and enterprise-grade system migrations (TSYS Prime) for top-tier banks in North America and globally."
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
    "Agile Delivery (Scrum, SAFe), PI/Sprint Planning",
    "Project & Program Management",
    "AI/ML Integration in Banking Workflows",
    "Cards & Payments (TSYS Prime, Card Issuing, Migration)",
    "Digital Banking (Mobile/Web, Chatbot, Online Banking)",
    "QA/Test Management (SIT, UAT, Regression, API Testing)",
    "Stakeholder & Vendor Management",
    "Requirements Analysis & Acceptance Criteria",
    "Middleware/API Testing (SOAP UI, Postman)",
    "Risk Management & Project Reporting"
  ],
  techSkills: {
    "Tools": "JIRA, HPQC, Zephyr, SOAP UI, Postman, Selenium WebDriver",
    "Testing/Debugging": "Putty, WinSCP",
    "Platforms": "Windows OS, IBM Sterling OMS, Sterling Integrator",
    "Domains": "Cards & Payments, Digital Banking, Retail, Gaming, Navigation"
  },
  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      title: "Project Manager (Associate Consultant)",
      duration: "Dec 2022 - Present",
      location: "Bangalore / Canada",
      projects: [
        {
          name: "SalesLogix – USA Largest Bank",
          role: "Project Manager / Scrum Master",
          details: "A strategic digital transformation initiative designed to unify customer and sales data, enabling the bank to scale its CRM capabilities and improve client acquisition rates.",
          points: [
            "Spearheaded the end-to-end Agile delivery of a scalable CRM platform, directly contributing to enhanced customer engagement and operational efficiency.",
            "Scaled Agile practices across distributed teams, optimizing delivery workflows and significantly reducing time-to-market for critical sales features.",
            "Partnered with executive stakeholders to translate business scalability goals into clear, actionable technical roadmaps.",
            "Drove multi-team coordination to ensure high-quality, zero-defect releases that improved system reliability and user adoption.",
            "Proactively managed risks and removed blockers, ensuring continuous value delivery aligned with market demands."
          ]
        }
      ]
    },
    {
      company: "Accenture Technologies",
      title: "Associate Project Manager",
      duration: "June 2021 - Dec 2022",
      location: "Bangalore",
      projects: [
        {
          name: "Credit Sync – USA Largest Bank",
          role: "Application Development Manager – Associate",
          details: "Large-scale enterprise initiative aimed at modernizing the flow of credit data, enabling real-time synchronization across banking channels to support millions of active users.",
          points: [
            "Orchestrated cross-functional Scrum teams to deliver a highly scalable data synchronization solution, eliminating legacy data bottlenecks.",
            "Enhanced the digital banking customer experience (CX) by ensuring real-time, accurate credit data availability across web and mobile platforms.",
            "Managed complex multi-vendor alignment and resource scaling, adapting team size dynamically based on strategic project demands.",
            "Enforced strict QA/SIT governance, mitigating financial risks and ensuring seamless backend integrations.",
            "Fostered a culture of continuous delivery, improving overall team velocity and release predictability."
          ]
        }
      ]
    },
    {
      company: "Attra Infotech PVT Ltd",
      title: "Project Manager / Test Lead",
      duration: "June 2018 - May 2021",
      location: "Bangalore",
      projects: [
        {
          name: "Dunia Finance",
          role: "Project Coordinator/Manager",
          details: "Launch of a modern credit card mobile application designed to scale digital self-service capabilities and reduce call center dependency.",
          points: [
            "Led the successful launch of the mobile banking app, driving a significant increase in digital customer onboarding and engagement.",
            "Bridged the gap between mobile front-end, backend APIs, and business units to deliver a seamless omnichannel experience.",
            "Implemented proactive risk management strategies that prevented delays and ensured rapid feature rollout."
          ]
        },
        {
          name: "Digital Banking Initiative",
          role: "Test Manager/Test Lead",
          details: "Strategic rollout of a secure digital banking platform enabling scaled customer acquisition and transaction management.",
          points: [
            "Engineered the SIT testing strategy, ensuring the platform could scale securely to handle high volumes of digital credit card applications.",
            "Partnered closely with IT and business leaders to align quality assurance metrics directly with business value and UX goals.",
            "Streamlined vendor testing processes, resulting in faster approval cycles and a robust go-live."
          ]
        },
        {
          name: "Cards Issuing System Migration (Mashreq Bank)",
          role: "Project Coordinator/Test Lead",
          details: "High-stakes core system modernization, migrating the bank’s legacy credit card portfolio to the robust TSYS processing platform.",
          points: [
            "Orchestrated the seamless migration of critical financial data, unlocking new scalability for loyalty, pricing, and payment gateway modules.",
            "Delivered comprehensive change management and risk mitigation, ensuring zero business disruption during the transition.",
            "Provided deep impact analysis to development teams, expanding test coverage and safeguarding financial integrity."
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
          name: "Cards System Upgrade (Prime 4 – ADIB Bank)",
          role: "QA - Technical Lead",
          details: "Enterprise upgrade of the credit card platform from Prime 3 to Prime 4 to future-proof the system for exponential transaction growth.",
          points: [
            "Spearheaded platform modernization testing, proving the new system's capability to handle increased loads with enhanced reliability.",
            "Instituted standardized STLC quality practices that reduced testing overhead and accelerated the upgrade timeline.",
            "Guaranteed the technical execution aligned perfectly with the bank’s strategic goal of scaling their card issuing business."
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
          name: "Online Game & Mobile App Testing",
          role: "Test Lead",
          details: "Publishers Clearing House company applications.",
          points: [
            "Drove on-time delivery of mobile and web applications, supporting high-traffic user events and marketing campaigns.",
            "Implemented rigorous traceability processes to align rapidly changing product features with business scope.",
            "Optimized release analysis and test execution to support rapid application scaling."
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
          name: "PRIME 4.0 Testing",
          role: "Sr. Test Analyst",
          details: "Comprehensive solution testing ranging from card issuing, merchant acquiring, to ATM management and fraud/risk management.",
          points: [
            "Validated critical infrastructure updates for Card/Merchant creation via API and XML, enabling faster merchant onboarding.",
            "Secured revenue streams by exhaustively testing complex Credit Shield and rewards functionality on Prime 4.",
            "Streamlined inter-bank communications by validating generation of Incoming and Outgoing Issuer/Acquiring files."
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
          name: "Online Web Store and Feeds Testing (Ebay)",
          role: "Test Engineer",
          details: "Comprehensive platform for GSI customers to launch and sell products.",
          points: [
            "Responsible for Functional and Regression testing based on requirements.",
            "Created Test Cases according to Business Requirements covering all possible scenarios."
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
          name: "TomTom Navigation System",
          role: "Digital Cartographer",
          details: "Managed large-scale databases supporting GIS, Location-Based Services, and in-car navigation solutions worldwide.",
          points: [
            "Maintained mission-critical geographic databases, scaling data accuracy to support global navigation solutions.",
            "Ensured comprehensive test coverage, preventing mapping defects in consumer-facing GPS products."
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
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      
      {/* HEADER / HERO SECTION */}
      <header className="bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                {resumeData.personal.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-4 flex items-center gap-2">
                {resumeData.personal.title} <Sparkles size={20} className="text-amber-500" />
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {resumeData.personal.subtitles.map((sub, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full border border-slate-200">
                    {sub}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 max-w-2xl leading-relaxed text-lg">
                {resumeData.personal.summary}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100 w-full md:w-auto shrink-0 space-y-4 relative z-20">
              <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                <div className="p-2 bg-slate-50 group-hover:bg-blue-50 rounded-lg transition-colors"><Mail size={18} /></div>
                <span className="font-medium text-sm">{resumeData.personal.email}</span>
              </a>
              <a href={`tel:${resumeData.personal.phone}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                <div className="p-2 bg-slate-50 group-hover:bg-blue-50 rounded-lg transition-colors"><Phone size={18} /></div>
                <span className="font-medium text-sm">{resumeData.personal.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600 group">
                <div className="p-2 bg-slate-50 rounded-lg"><MapPin size={18} /></div>
                <span className="font-medium text-sm">{resumeData.personal.location}</span>
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
        <section>
          <SectionHeading title="Professional Experience" icon={Briefcase} />
          <div className="relative pt-4">
            {resumeData.experience.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
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

      <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-white text-2xl font-bold mb-4">Let's build the future of banking</h2>
          <p className="mb-8 max-w-lg mx-auto">Ready to help your organization scale with intelligent delivery and robust digital transformation strategies.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${resumeData.personal.email}`} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-900/20">
              <Mail size={18}/> Contact Me
            </a>
          </div>
          <div className="mt-12 text-sm border-t border-slate-800 pt-6">
            © {new Date().getFullYear()} {resumeData.personal.name}. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}