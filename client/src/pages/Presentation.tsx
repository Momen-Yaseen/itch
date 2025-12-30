import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SlideLayout } from "@/components/SlideLayout";
import { BrandLogo } from "@/components/BrandLogo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
import { 
  Activity, 
  Brain, 
  Target, 
  Users, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  HeartPulse 
} from "lucide-react";

// --- Slides ---

const IntroSlide = () => (
  <div className="slide-container flex flex-row w-full justify-between items-center  relative overflow-hidden">
    {/* Background image on the left */}
    <img 
      src="/Picture1.png" 
      alt="Background" 
      className="  h-full w-auto  z-10 "
    />
    
    <div className="max-w-4xl mx-[5rem] text-center space-y-4 relative z-10 ">

       <motion.h1 
        className=" md:text-7xl font-bold text-[#004aad] leading-tight  my-0 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Neurobotix Tech
      </motion.h1>
      
      <motion.h3 
        className=" md:text-[30px] font-bold text-slate-900 leading-tight my-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Reinventing Neurovascular <br/>
        <span className="text-gradient">Interventions</span>
      </motion.h3>
      
      <motion.p 
        className="text-xl md:text-2xl text-slate-500 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        With Advanced Robotics & Artificial Intelligence
      </motion.p>
    </div>
  </div>
);

const ProblemSlide = () => (
  <div className="slide-container">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
      <div className="space-y-6">
        {/* <h2 className="text-4xl font-bold text-slate-900">The Problem: <br/><span className="text-red-500">A Silent Killer</span></h2> */}
        <h2 className="text-4xl font-bold text-slate-900">Brain Aneurysms</h2>
        
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-3xl font-bold text-red-600">+100M</h3>
            <p className="text-sm text-red-700 mt-1">People affected</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-3xl font-bold text-red-600">50%</h3>
            <p className="text-sm text-red-700 mt-1">Fatality Rate</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-3xl font-bold text-red-600">15%</h3>
            <p className="text-sm text-red-700 mt-1">Lack of Access</p>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
        {/* Abstract representation of brain/vessels */}
        <div className="absolute bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <Activity size={120} className="text-slate-400 opacity-20" />
        </div>
        <img 
          src="/Picture2.png" 
          alt="Medical Imaging" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay "
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
          <p className="font-medium">A Growing Global Health Crisis</p>
        </div>
      </div>
    </div>
  </div>
);
const Problem2Slide = () => (
  <div className="slide-container">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
      <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
        {/* Abstract representation of brain/vessels */}
        <div className="absolute bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <Activity size={120} className="text-slate-400 opacity-20" />
        </div>
        <img 
          src="/Picture4.png" 
          alt="Medical Imaging" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay "
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
          <p className="font-medium">A Growing Global Health Crisis</p>
        </div>
      </div>
     <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">Neurovascular Diseases</h2>
        
    
        <div className="grid grid-rows-3 gap-4 mt-8">
          <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex flex-row items-center justify-start gap-5">
            <img src="/Picture10.png" className="w-16 h-16" alt="" />
            <h3 className="text-xl font-bold text-red-600">Thrombosis</h3>
            
          </div>
             <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex flex-row items-center justify-start gap-5">
            <img src="/bra.png" className="w-16 h-16" alt="" />
            <h3 className="text-xl font-bold text-red-600">Brain Aneurysms</h3>
            
          </div>
             <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex flex-row items-center justify-start gap-5">
            <img src="/arti.jpeg" className="w-16 h-16" alt="" />
            <h3 className="text-xl font-bold text-red-600">Arteriovenous malformations</h3>
            
          </div>
        </div>
      </div>
     
    </div>
  </div>
);
const StatisticsSlide = () => (
  <div className="slide-container bg-slate-900 text-white">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-[20%] -right-[20%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute -bottom-[20%] -left-[20%] w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px]" />
    </div>
    
    <div className="relative z-10 max-w-5xl w-full text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">The Human Cost</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">
          <HeartPulse className="w-12 h-12 text-red-400 mb-4 mx-auto" />
          <h3 className="text-5xl font-bold mb-2 text-white">500k</h3>
          <p className="text-slate-400">Annual Deaths</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">
          <Activity className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
          <h3 className="text-5xl font-bold mb-2 text-white">18 <span className="text-xl">mins</span></h3>
          <p className="text-slate-400">Frequency of Rupture</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">
          <Brain className="w-12 h-12 text-primary mb-4 mx-auto" />
          <h3 className="text-5xl font-bold mb-2 text-white">High</h3>
          <p className="text-slate-400">Risk of Complications</p>
        </div>
      </div>
    </div>
  </div>
);
const TreatmentLimitationSlide = () => (
  <div className="slide-container">
    <div className="grid md:grid-cols-1 gap-12 items-center max-w-6xl w-full">
      
     <div className="space-y-20 text-center">
        <h2 className="text-4xl font-bold text-slate-900">Treatment Limitations</h2>
        
    
        <div className="grid grid-cols-3  gap-4 mt-8">
          <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex flex-row w-fit mx-auto px-10 items-center justify-center gap-5">
            <img src="/thinking.png" className="w-16 h-16" alt="" />
            <h3 className="text-xl font-bold text-red-600">Arteriovenous malformations</h3>
            
          </div>
             <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex flex-row w-fit mx-auto px-10 items-center justify-center gap-5">
            <img src="/catheter.png" className="w-16 h-16" alt="" />
            <h3 className="text-xl font-bold text-red-600">Arteriovenous malformations</h3>
            
          </div>
          <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex flex-row w-fit mx-auto px-10 items-center justify-center gap-5">
            <img src="/time.png" className="w-16 h-16" alt="" />
            <h3 className="text-xl font-bold text-red-600">Arteriovenous malformations</h3>
            
          </div>
        </div>
      </div>
     
    </div>
  </div>
);
const SolutionSoftwareSlide = () => (
  <div className="slide-container">
    <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm">
          <Cpu size={16} /> Software Solution
        </div>
        <h2 className="text-4xl font-bold text-slate-900">Digital Twin & <br/>Simulation</h2>
        <ul className="space-y-6">
          {[
            "Patient-specific vasculature modeling",
            "Pre-operative simulation & planning",
            "Drastically reduced risk & procedure time",
            "AI-driven outcome prediction"
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 text-lg text-slate-700 p-4 rounded-xl bg-white shadow-sm border border-slate-100"
            >
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative h-[500px]">
        {/* Placeholder for Software UI */}
        <div className="absolute inset-0 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200">
          <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"/>
            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
            <div className="w-3 h-3 rounded-full bg-green-500"/>
          </div>
          <div className="p-8 pt-12 h-full flex items-center justify-center">
            <div className="text-center">
              <Brain size={64} className="text-primary mx-auto mb-4 animate-pulse" />
              <p className="text-slate-400 font-mono text-sm">Generating 3D Vascular Map...</p>
              <div className="w-48 h-2 bg-slate-700 rounded-full mt-4 mx-auto overflow-hidden">
                <div className="h-full bg-primary w-2/3 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SolutionHardwareSlide = () => (
  <div className="slide-container bg-slate-50">
    <div className="max-w-6xl w-full">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-medium text-sm mb-4">
          <Target size={16} /> Hardware Solution
        </div>
        <h2 className="text-4xl font-bold text-slate-900">Robotics & Automation</h2>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {[
          { img: "/auto.jpeg", title: "Fully/Semi-Autonomous", desc: "Precise navigation through tortuous vessels", card: "/Picture5.png" },
          { img: "/path.png", title: "AI Path Planning", desc: "Optimal routing avoiding critical areas", card: "/Picture19.png" },
          { img: "/digital.jpg", title: "Digital Twin", desc: "Tactile sensation for the surgeon", card: "/Picture18.png" },
        ].map((card, i) => (
          <article key={i} className="flex flex-col bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 md:h-64 w-full overflow-hidden bg-slate-100">
              <img src={card.card} alt={`${card.title} visual`} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img src={card.img} alt={card.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{card.desc}</p>
                </div>
              </div>

              
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);
const UniqueValueSlide = () => (
  <div className="slide-container bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-6xl w-full text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-16">Why Neurobotix?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Precision", text: "Sub-millimeter accuracy in navigation", sub: "99.2% navigation accuracy" },
          { icon: ShieldCheck, title: "Safety", text: "Reduced radiation exposure for surgeons", sub: "30-60% less radiation"  },
          { icon: TrendingUp, title: "Scalability", text: "Standardized procedures across hospitals", sub: "50-83% faster procedures" }
        ].map((item, i) => (
        <div className="flex flex-col gap-4">
          
        <div key={i} className="p-8 bg-white rounded-3xl h-64  shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-500">{item.text}</p>
          
          </div>
            <div key={i} className="p-3 bg-green-200/20 rounded-3xl shadow-xl shadow-slate-200/50 border border-green-600">
           
            <h3 className="text-lg p-0 font-semibold text-green-600 ">{item.sub}</h3>
           
          </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const MarketSlide = () => (
  <div className="slide-container">
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-slate-900 mb-8">Market Opportunity</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-6xl font-bold text-gradient">$2.8B</h3>
            <p className="text-xl text-slate-600 mt-2 font-medium">Global Market Size</p>
            <p className="text-slate-400 mt-1">Projected CAGR of 8.5%</p>
          </div>
          <div className="h-px  bg-slate-200 w-full" />
         <div className="grid grid-cols-2 gap-4"> <div>
            <h3 className="text-5xl col-span-1 font-bold text-slate-800">1.8M</h3>
            <p className="text-xl text-slate-600 mt-2 font-medium">Patients in GCC</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold col-span-1 text-slate-800">15M</h3>
            <p className="text-xl text-slate-600 mt-2 font-medium">Patients in EU</p>
          </div>
                    <p className="col-span-2 text-slate-400 text-start">High prevalence of risk factors</p>

          </div>
        </div>
      </div>
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-row items-center justify-center ">
        <Globe className="w-32 h-32 text-primary mb-6" />
        <h3 className="text-5xl font-bold text-slate-900 mb-4 whitespace-nowrap">+100M Patients</h3>

      

      </div>
    </div>
  </div>
);

const ValuePropSlide = () => (
  <div className="slide-container bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-6xl w-full text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-16">Why Neurobotix?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Precision", text: "Sub-millimeter accuracy in navigation" },
          { icon: ShieldCheck, title: "Safety", text: "Reduced radiation exposure for surgeons" },
          { icon: TrendingUp, title: "Scalability", text: "Standardized procedures across hospitals" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TractionSlide = () => (
  <div className="slide-container">
    <div className="max-w-5xl w-full text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-16">Strategic Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {[{
          name:"HMC", logo:"./hhamad.jpeg"
        },{
          name:"Sidra Medicine", logo:"./SIDRA.jpeg"
        },{
          name:"Biomedical Research Center", logo:"./QU.jpeg"
        },].map((partner, i) => (
          <div key={i} className="aspect-square bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-8 gap-5  hover:grayscale-0 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-slate-200">
            {/* Placeholder for Logos */}
                          <img src={partner.logo} alt={partner.name} className="max-h-32 min-h-32 rounded-full mx-auto mb-4 object-contain" />

            <div className="text-center">
              <span className="font-bold text-slate-400">{partner.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BusinessModelSlide = () => (
  <div className="slide-container bg-slate-900 text-white">
    <div className="max-w-5xl w-full">
      <h2 className="text-4xl font-bold mb-16 text-center">Business Model</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-10 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 bg-primary text-white rounded-bl-2xl font-bold text-sm">
            Hardware
          </div>
          <h3 className="text-2xl font-bold mb-2">Robotic Platform</h3>
          <div className="text-5xl font-bold text-primary mb-2">$500k</div>
          <p className="text-slate-400">Per System / One-time</p>
        </div>

        <div className="p-10 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 bg-cyan-500 text-white rounded-bl-2xl font-bold text-sm">
            Recurring
          </div>
          <h3 className="text-2xl font-bold my-2">Magnetic Catheter</h3>
          <div className="text-5xl font-bold text-cyan-400 mb-2">$3k</div>
          <p className="text-slate-400">Annual Purchase</p>
        </div>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 bg-primary text-white rounded-bl-2xl font-bold text-sm">
            Reccuring
          </div>
          <h3 className="text-2xl font-bold mb-2">Service Contract</h3>
          <div className="text-5xl font-bold text-primary mb-2">$25k</div>
          <p className="text-slate-400">Annual Subscription</p>
        </div>
      </div>
    </div>
  </div>
);

const TeamSlide = () => (
  <div className="slide-container">
    <div className="max-w-6xl w-full text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-16">The Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { name: "Mo'men", role: "CEO", color: "bg-blue-100" },
          { name: "Karim", role: "CTO", color: "bg-green-100" },
          { name: "Dr. Ramesh", role: "Advisor", color: "bg-yellow-100" },
          { name: "Dr. Farah", role: "Clinical Lead", color: "bg-purple-100" }
        ].map((member, i) => (
          <div key={i} className="group cursor-pointer">
            <div className={`aspect-[3/4] ${member.color} rounded-2xl mb-4 overflow-hidden relative`}>
               {/* Placeholder Avatar */}
               <img 
                 src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400`}
                 alt={member.name}
                 className="w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-110 transition-transform duration-500"
               />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-slate-500 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FinancialsSlide = () => (
  <div className="slide-container bg-slate-50">
    <div className="max-w-5xl w-full">
      <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Financial Projections</h2>
      <div className="relative h-64 flex items-end justify-between gap-4 md:gap-8 px-4">
        {[
          { year: "Year 1", val: 4.1, h: "10%" },
          { year: "Year 2", val: 8.5, h: "20%" },
          { year: "Year 3", val: 15.2, h: "35%" },
          { year: "Year 4", val: 24.8, h: "60%" },
          { year: "Year 5", val: 39.3, h: "100%" }
        ].map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end group">
            <div className="text-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-primary">
              ${bar.val}M
            </div>
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: bar.h }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="bg-gradient-to-t from-primary to-cyan-400 rounded-t-2xl w-full relative group-hover:shadow-lg transition-shadow"
            >
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/90 font-bold text-sm md:text-base">
                {bar.year}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 flex justify-between items-center">
        <div>
          <p className="text-slate-500">Projected Revenue by Year 5</p>
          <p className="text-3xl font-bold text-slate-900">$39.3 Million</p>
        </div>
        <TrendingUp className="text-green-500 w-12 h-12" />
      </div>
    </div>
  </div>
);

const GoToMarketSlide = () => (
  <div className="slide-container">
    <div className="max-w-6xl w-full text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-2">Go-To-Market</h2>
       <div className="md:col-span-1 pt-8 overflow-visible">
          <p className="text-lg text-slate-700 overflow-visible leading-relaxed text-nowrap z-50 mb-4">
            Centralized early markets to de-risk adoption → enable faster scale into high-volume regions.
          </p>
        </div>
      <div className="gap-12 items-start">
        {/* Left content */}
       

        {/* Center SVG arrow visualization with absolute info boxes */}
        <div className="max-w-[85%] mx-auto flex flex-col items-center justify-center relative">
          <div className="flex gap-2 items-center justify-center" >
       
             <span  className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xl font-medium text-slate-600">
             Qatar
             </span>
        →
            <span  className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xl font-medium text-slate-600">
             GCC
             </span>
              →
              <span  className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xl font-medium text-slate-600">
             EU
             </span>
        </div>
          {/* Absolutely positioned info boxes */}
          <div className=" space-y-3  flex flex-row justify-center items-center w-fit gap-6">
            {/* Initial Customers */}
            <div className="p-4 bg-blue-100 rounded-xl border mt-4 border-blue-200 shadow-md">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Initial Customers</h3>
              <p className="text-sm text-slate-700">Angio Cath-Labs in hospitals.</p>
            </div>
            
            {/* Primary Users */}
            <div className="p-4 bg-blue-100 rounded-xl border border-blue-300 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Primary Users</h3>
              <p className="text-sm text-slate-700">Neurosurgeons.</p>
            </div>
            
            {/* Economic Buyer */}
            <div className="p-4 bg-blue-100 rounded-xl border border-primary shadow-md">
              <h3 className="text-lg font-bold text-primary mb-2">Economic Buyer</h3>
              <p className="text-sm text-slate-700">Hospitals. Private clinics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AskSlide = () => (
  <div className="slide-container bg-slate-900 text-white">
    <div className="max-w-4xl w-full text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-8">The Ask</h2>
      <div className="inline-block p-1 bg-gradient-to-r from-primary to-cyan-400 rounded-3xl mb-12">
        <div className="px-12 py-6 bg-slate-900 rounded-[22px]">
          <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            $1,000,000
          </span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">1</div>
          <div>
            <h3 className="font-bold text-xl mb-1">Prototype Development</h3>
            <p className="text-slate-400">Finalizing the MVP hardware and software stack.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">2</div>
          <div>
            <h3 className="font-bold text-xl mb-1">Clinical Trials</h3>
            <p className="text-slate-400">Phase 1 trials with partner hospitals.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactSlide = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    // For now, just show a success message
    console.log("Form data:", data);
    alert("Thank you for your interest! We will be in touch shortly.");
    form.reset();
  };

  return (
    <div className="slide-container">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <BrandLogo />
          <h2 className="text-4xl font-bold text-slate-900 mt-8 mb-6">Let's shape the future together.</h2>
          <div className="space-y-4 text-lg text-slate-600">
            <p>research@neurobotix.technologies</p>
            <p>+974 505 695 786</p>
            <p className="text-slate-400 text-sm mt-8">
              © 2025 Neurobotix Technologies. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Get in touch</h3>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input 
                placeholder="Your Name" 
                {...form.register("name")}
                className="bg-white/50 border-slate-200"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div>
              <Input 
                placeholder="Your Email" 
                {...form.register("email")}
                className="bg-white/50 border-slate-200"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div>
              <Textarea 
                placeholder="Message" 
                {...form.register("message")}
                className="bg-white/50 border-slate-200 min-h-[120px]"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-lg font-medium shadow-lg shadow-primary/20"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    IntroSlide,
    Problem2Slide,
    ProblemSlide,
    StatisticsSlide,
    TreatmentLimitationSlide,
    SolutionSoftwareSlide,
    SolutionHardwareSlide,
    UniqueValueSlide,
    MarketSlide,
    GoToMarketSlide,
    TractionSlide,
    BusinessModelSlide,
    TeamSlide,
    FinancialsSlide,
    AskSlide,
    ContactSlide
  ];

  const paginate = (newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen overflow-hidden bg-background relative font-sans">
      <div className="absolute top-8 left-8 z-50">
        <BrandLogo />
      </div>

      <SlideLayout direction={direction} slideKey={currentSlide}>
        <CurrentSlideComponent />
      </SlideLayout>

      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={slides.length}
        nextSlide={() => paginate(1)}
        prevSlide={() => paginate(-1)}
      />
    </div>
  );
}
