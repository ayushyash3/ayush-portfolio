import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, GraduationCap, Award, 
  ChevronDown, ChevronUp, Calendar, Building, Code, Target,
  CheckCircle2, Globe, FileText, ChevronRight,
  TrendingUp, Zap, Users, ShieldCheck, Sparkles, Brain, 
  BarChart3, Rocket
} from 'lucide-react';

const resumeData = {
  personal: {
    name: "Ayush Maheshwari",
    title: "Project Manager | Scrum Master | Digital Transformation Leader",
    subtitles: ["Cards & Payments", "AI-Driven Delivery", "Agile Scaling"],
    location: "Kitchener, Ontario, Canada",
    phone: "+1 519-721-1423",
    email: "ayushyash3@gmail.com",
    skype: "ayush.maheshwari1",
    summary: "Project Manager & Scrum Master with 18+ years of global experience driving digital transformation and scaling complex platforms. Beyond traditional delivery, I focus on integrating AI-driven insights into project lifecycles—optimizing resource allocation and predicting risks before they impact the bottom line."
  },
  impact: [
    { title: "Accelerated Time-to-Market", desc: "Streamlined Agile & CI/CD workflows to deliver critical digital banking features faster.", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Platform Scalability", desc: "Upgraded core payment systems (e.g., TSYS Prime 4) for growing transaction volumes.", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Enhanced UX", desc: "Led the rollout of seamless mobile banking and CRM apps, expanding digital footprints.", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Compliance", desc: "Maintained near-zero defect leakage during high-stakes financial migrations.", icon: ShieldCheck, color: "text-indigo-500", bg: "bg-indigo-50" }
  ],
  futureValue: [
    { title: "AI-Powered QE", desc: "Implementing Gen-AI to automate test case generation, reducing manual effort by up to 40%.", icon: Brain },
    { title: "Fraud Mitigation", desc: "Guiding the integration of ML models into payment gateways for real-time anomaly detection.", icon: ShieldCheck },
    { title: "Data Governance", desc: "Leveraging predictive analytics to forecast sprint velocity and resource bottlenecks.", icon: BarChart3 },
    { title: "Next-Gen Banking", desc: "Leading the transition toward AI-chatbots and personalized financial insights.", icon: Rocket }
  ],
  competencies: ["Agile Delivery", "Project Management", "AI/ML Integration", "Cards & Payments (TSYS)", "Digital Banking", "QA/Test Management", "Stakeholder Management"],
  techSkills: { "Tools": "JIRA, HPQC, Zephyr, Postman", "Platforms": "IBM Sterling OMS", "Domains": "Cards & Payments, Retail" },
  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      title: "Project Manager (Associate Consultant)",
      duration: "Dec 2022 - Present",
      location: "Canada",
      projects: [{ name: "SalesLogix – USA Largest Bank", role: "Project Manager / Scrum Master", details: "Strategic digital transformation initiative to unify customer data.", points: ["Spearheaded Agile delivery", "Scaled practices across distributed teams", "Partnered with executive stakeholders"] }]
    },
    {
      company: "Accenture Technologies",
      title: "Associate Project Manager",
      duration: "June 2021 - Dec 2022",
      location: "Bangalore",
      projects: [{ name: "Credit Sync", role: "Application Manager", details: "Modernizing credit data flow.", points: ["Orchestrated cross-functional teams", "Enhanced digital CX", "Enforced strict QA governance"] }]
    }
  ],
  education: [{ degree: "Master of Computer Applications (MCA)", year: "2006", institution: "UPTU", grade: "71%" }],
  awards: [{ title: "ISTQB Certified", desc: "Foundation Level" }, { title: "Agile Scrum Master", desc: "EXIN Certified" }]
};

const SectionHeading = ({ title, icon: Icon, subtitle }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
      <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Icon size={24} /></div>
      <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="mt-2 text-slate-500 text-sm">{subtitle}</p>}
  </div>
);

const ExperienceCard = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative mb-8">
      <div className={`bg-white rounded-xl shadow-sm border border-slate-100 p-5 cursor-pointer hover:shadow-md transition-shadow ${isExpanded ? 'ring-2 ring-blue-100' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="text-xl font-bold text-slate-800">{exp.title} at {exp.company}</h3>
        <p className="text-slate-500 text-sm">{exp.duration} | {exp.location}</p>
        <div className="text-blue-600 font-medium text-sm mt-3">{isExpanded ? 'Hide details' : 'View details'}</div>
      </div>
      {isExpanded && (
        <div className="mt-2 p-5 bg-slate-50 rounded-xl border border-slate-100">
          {exp.projects.map((p, i) => (
            <div key={i}>
              <h4 className="font-bold text-slate-800">{p.name}</h4>
              <p className="text-sm italic text-slate-600 mb-2">{p.details}</p>
              <ul className="list-disc ml-5 space-y-1">
                {p.points.map((pt, j) => <li key={j} className="text-sm text-slate-700">{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-6">
      <header className="max-w-5xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-4xl font-extrabold text-slate-900">{resumeData.personal.name}</h1>
        <h2 className="text-xl text-blue-700 mb-4">{resumeData.personal.title}</h2>
        <p className="text-slate-600 leading-relaxed">{resumeData.personal.summary}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1"><Mail size={16}/> {resumeData.personal.email}</span>
          <span className="flex items-center gap-1"><Phone size={16}/> {resumeData.personal.phone}</span>
          <span className="flex items-center gap-1"><MapPin size={16}/> {resumeData.personal.location}</span>
        </div>
      </header>
      <main className="max-w-5xl mx-auto space-y-16">
        <section>
          <SectionHeading title="Future Readiness (AI & Strategy)" icon={Sparkles} />
          <div className="grid md:grid-cols-2 gap-4">
            {resumeData.futureValue.map((v, i) => (
              <div key={i} className="bg-indigo-600 text-white p-4 rounded-xl flex items-start gap-3">
                <v.icon size={24} className="shrink-0" />
                <div><h4 className="font-bold">{v.title}</h4><p className="text-xs text-indigo-100">{v.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <SectionHeading title="Experience" icon={Briefcase} />
          {resumeData.experience.map((e, i) => <ExperienceCard key={i} exp={e} />)}
        </section>
      </main>
    </div>
  );
}
