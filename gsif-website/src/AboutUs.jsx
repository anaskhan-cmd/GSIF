import React from 'react';

const AboutUs = () => {
  return (
    <>


<main className="pt-20">
<section className="relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden hero-gradient border-b border-outline-variant/20">
<div className="max-w-[1440px] w-full px-6 md:px-12 lg:px-24 text-center py-20">
<div className="mb-12 inline-flex items-center gap-3 bg-primary/5 px-4 py-2 border border-primary/10">
<span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Official Mandate</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline text-primary mb-8 tracking-tighter leading-[1.05]">
                Global Sustainability <br className="hidden lg:block" /> Impact Foundation
            </h1>
<p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto font-light">
                Architecting credible systems for global sustainability. Integrating scientific rigor with market-ready frameworks to ensure long-term stability across global financial and ecological landscapes.
            </p>
</div>
<div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full"></div>
<div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full"></div>
</section>
<section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-end">
<div className="lg:col-span-7">
<h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-secondary mb-4">Core Philosophy</h2>
<h3 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">Institutionalizing truth through modular intelligence.</h3>
</div>
<div className="lg:col-span-5 lg:pl-12">
<p className="text-on-surface-variant leading-relaxed border-l-2 border-secondary pl-6">
                    We bridge the gap between complex ecological data and actionable sovereign-level intelligence, moving markets from compliance to value.
                </p>
</div>
</div>
<div className="relative">
<div className="relative mb-20">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 z-0"></div>
<div className="flex justify-between relative z-10 max-w-4xl mx-auto">
<button className="step-btn flex flex-col items-center gap-4 transition-all duration-500" data-state="active" id="narrative-btn-1">
<div className="step-circle w-12 h-12 rounded-full border border-outline-variant/50 bg-white flex items-center justify-center text-sm font-bold transition-all">01</div>
<span className="step-label text-[10px] uppercase tracking-widest font-bold text-outline opacity-60">Clarity Metrics</span>
</button>
<button className="step-btn flex flex-col items-center gap-4 transition-all duration-500" data-state="inactive" id="narrative-btn-2">
<div className="step-circle w-12 h-12 rounded-full border border-outline-variant/50 bg-white flex items-center justify-center text-sm font-bold transition-all">02</div>
<span className="step-label text-[10px] uppercase tracking-widest font-bold text-outline opacity-60">Trust Frameworks</span>
</button>
<button className="step-btn flex flex-col items-center gap-4 transition-all duration-500" data-state="inactive" id="narrative-btn-3">
<div className="step-circle w-12 h-12 rounded-full border border-outline-variant/50 bg-white flex items-center justify-center text-sm font-bold transition-all">03</div>
<span className="step-label text-[10px] uppercase tracking-widest font-bold text-outline opacity-60">Relevance Logic</span>
</button>
</div>
</div>
<div className="bg-white border border-outline-variant/20 p-8 md:p-20 shadow-2xl relative overflow-hidden">
<div className="step-content" data-state="active" id="narrative-content-1">
<div className="flex flex-col md:flex-row items-center md:items-start gap-12">
<div className="bg-primary/5 p-10 rounded-2xl shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-7xl text-primary">analytics</span>
</div>
<div className="text-center md:text-left flex-grow">
<h4 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-8">Clarity Metrics</h4>
<div className="flex flex-col md:flex-row items-end justify-between gap-6">
<p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
                                    Providing definitive, scientifically-validated metrics to reduce market noise and enhance reporting accuracy across jurisdictions. We specialize in standardizing complex ecological data into usable financial inputs.
                                </p>
<button className="text-secondary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group whitespace-nowrap mb-1 self-end">
                                    Next Module <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
<div className="step-content" data-state="inactive" id="narrative-content-2">
<div className="flex flex-col md:flex-row items-center md:items-start gap-12">
<div className="bg-primary/5 p-10 rounded-2xl shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-7xl text-primary">verified_user</span>
</div>
<div className="text-center md:text-left flex-grow">
<h4 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-8">Trust Frameworks</h4>
<div className="flex flex-col md:flex-row items-end justify-between gap-6">
<p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
                                    Serving as a neutral third-party to verify institutional claims and certify sustainable transition pathways for global capital. Our frameworks ensure that sustainability commitments are backed by structural integrity.
                                </p>
<button className="text-secondary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group whitespace-nowrap mb-1 self-end">
                                    Next Module <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
<div className="step-content" data-state="inactive" id="narrative-content-3">
<div className="flex flex-col md:flex-row items-center md:items-start gap-12">
<div className="bg-primary/5 p-10 rounded-2xl shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-7xl text-primary">history_edu</span>
</div>
<div className="text-center md:text-left flex-grow">
<h4 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-8">Relevance Logic</h4>
<div className="flex flex-col md:flex-row items-end justify-between gap-6">
<p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
                                    Ensuring adaptive frameworks that reflect evolving ecological realities while maintaining historical integrity and continuity. We build logic systems that stay relevant through decades of environmental change.
                                </p>
<button className="text-secondary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group whitespace-nowrap mb-1 self-end">
                                    Restart Journey <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform">refresh</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-24 overflow-hidden bg-primary min-h-[600px] flex items-center">
<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
<img alt="Scientific Analysis Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhDBFEr9kqzY4mVQOY5Kv1wyyw2MOtyRiYRY9EU1GdmFAxRDWeKfinuuzojkQlq7ReoQV0QEsZ6-NSq-QdIv5I9UjCEA4MSkIeYOWuKIoZtVQAKglf6BVuzO9iIO1mluRC0jU36hQbtB_CPxP11M3_oWS59roIN-PnETEHbe4bfRANWKWf1iLKB6quQ5u0kplG7ep-qp7wveuk0_YVRV2ALjj5lBSFVa8UQDHtNJ3hUZSgEb5bwuAq7n1JEk0-osWXSevKHER_scCo" />
</div>
<div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
<div className="text-center mb-16">
<span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary-fixed mb-4 block">The Process</span>
<h2 className="text-3xl md:text-4xl font-headline font-bold text-white leading-tight">A Structured Approach</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="w-16 h-16 rounded-full bg-secondary-fixed/10 flex items-center justify-center shrink-0 border border-secondary-fixed/20">
<span className="material-symbols-outlined text-4xl text-secondary-fixed">science</span>
</div>
<span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/40">01</span>
</div>
<h4 className="text-xl font-headline font-bold text-white mb-4">Scientifically Grounded</h4>
<p className="text-sm text-white/70 leading-relaxed font-light">
                        Standards developed in collaboration with premier global research institutions, ensuring every metric is rooted in peer-reviewed ecological data and robust scientific validation.
                    </p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="w-16 h-16 rounded-full bg-secondary-fixed/10 flex items-center justify-center shrink-0 border border-secondary-fixed/20">
<span className="material-symbols-outlined text-4xl text-secondary-fixed">trending_up</span>
</div>
<span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/40">02</span>
</div>
<h4 className="text-xl font-headline font-bold text-white mb-4">Market Calibrated</h4>
<p className="text-sm text-white/70 leading-relaxed font-light">
                        Stress-tested against real-world portfolio constraints for seamless adoption. We bridge the gap between abstract science and practical asset management requirements.
                    </p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="w-16 h-16 rounded-full bg-secondary-fixed/10 flex items-center justify-center shrink-0 border border-secondary-fixed/20">
<span className="material-symbols-outlined text-4xl text-secondary-fixed">paid</span>
</div>
<span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/40">03</span>
</div>
<h4 className="text-xl font-headline font-bold text-white mb-4">Value Oriented</h4>
<p className="text-sm text-white/70 leading-relaxed font-light">
                        Focusing on fundamental drivers of planetary and fiscal health, not passing trends. We prioritize the long-term economic upside of regenerative practices and structural stability.
                    </p>
</div>
</div>
</div>
</section>
<section className="bg-surface-container py-24 px-6 md:px-12 lg:px-24">
<div className="max-w-[1440px] mx-auto">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2">
<div className="max-w-md mx-auto overflow-hidden border border-outline-variant/30 transition-all duration-700">
<img alt="Sovereign Framework Visual" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvGJbjUGS-IwitVnczFy0PbfrIcuoRTF5DnmSoLbYXP4dv4LSvfLUaq2961goeU12pU7gH0FCYDRKtmSEONEz0dTfSpg0dKH6_Q-9b8ZqsDNc47DETqsnM-2SKDl6YZBoV1MkNNXCgiL6sbQKrXMvJacJz_366_WIOwDZkHf9kdUjp-UMWUV9uzy0IV_VfF5Yvc42yUJDqyY_-yam3U5-FYNq8K6rFSLYQeBssY16npQ40sZv8UZTxt0G-sIryUAwF0iqaezTxzMWh" />
</div>
</div>
<div className="w-full lg:w-1/2">
<span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-6 block">Structural Alignment</span>
<h2 className="text-4xl font-headline font-bold text-primary mb-8">The Sovereign Framework</h2>
<div className="space-y-8">
<div className="p-6 border border-outline-variant/30 bg-white hover:border-primary transition-colors">
<h5 className="font-headline font-bold text-primary mb-2 flex items-center gap-3">
<span className="w-4 h-[1px] bg-secondary"></span> 01 Accountability
                            </h5>
<p className="text-sm text-on-surface-variant leading-relaxed">Direct accountability protocols for stakeholders across current and future generations, anchored in data.</p>
</div>
<div className="p-6 border border-outline-variant/30 bg-white hover:border-primary transition-colors">
<h5 className="font-headline font-bold text-primary mb-2 flex items-center gap-3">
<span className="w-4 h-[1px] bg-secondary"></span> 02 Transparency
                            </h5>
<p className="text-sm text-on-surface-variant leading-relaxed">Translating complex systems into clear intelligence without losing necessary scientific nuance or depth.</p>
</div>
<div className="p-6 border border-outline-variant/30 bg-white hover:border-primary transition-colors">
<h5 className="font-headline font-bold text-primary mb-2 flex items-center gap-3">
<span className="w-4 h-[1px] bg-secondary"></span> 03 Continuity
                            </h5>
<p className="text-sm text-on-surface-variant leading-relaxed">Prioritizing frameworks designed to survive multi-decade market cycles and shifting political landscapes.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl font-headline font-bold text-primary mb-4">Action Pillars</h2>
<div className="w-12 h-1 bg-secondary mx-auto"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="pillar-card-wrapper">
<div className="pillar-card pillar-card-1">
<div className="pillar-depth"></div>
<div className="relative z-10">
<span className="text-[10px] font-bold uppercase tracking-widest mb-6 block opacity-60">Operations</span>
<h4 className="text-xl font-headline mb-4 font-bold text-primary">Standards</h4>
<p className="text-sm opacity-80 leading-relaxed text-on-surface-variant">Universal taxonomies for ecological performance metrics in global markets.</p>
</div>
<div className="flex justify-between items-end relative z-10">
<span className="material-symbols-outlined text-4xl text-primary/80">rule_folder</span>
<div className="w-6 h-6 border-r-2 border-b-2 border-secondary opacity-40"></div>
</div>
</div>
</div>
<div className="pillar-card-wrapper">
<div className="pillar-card pillar-card-2">
<div className="pillar-depth"></div>
<div className="relative z-10">
<span className="text-[10px] font-bold uppercase tracking-widest mb-6 block opacity-60">Oversight</span>
<h4 className="text-xl font-headline mb-4 font-bold text-primary">Verification</h4>
<p className="text-sm opacity-80 leading-relaxed text-on-surface-variant">Independent audits of institutional alignment with GSIF governance frameworks.</p>
</div>
<div className="flex justify-between items-end relative z-10">
<span className="material-symbols-outlined text-4xl text-primary/80">approval_delegation</span>
<div className="w-6 h-6 border-r-2 border-b-2 border-secondary opacity-40"></div>
</div>
</div>
</div>
<div className="pillar-card-wrapper">
<div className="pillar-card pillar-card-3">
<div className="pillar-depth"></div>
<div className="relative z-10">
<span className="text-[10px] font-bold uppercase tracking-widest mb-6 block opacity-60">Synthesis</span>
<h4 className="text-xl font-headline mb-4 font-bold text-primary">Intelligence</h4>
<p className="text-sm opacity-80 leading-relaxed text-on-surface-variant">Centralizing research on biodiversity and carbon accounting systems worldwide.</p>
</div>
<div className="flex justify-between items-end relative z-10">
<span className="material-symbols-outlined text-4xl text-primary/80">hub</span>
<div className="w-6 h-6 border-r-2 border-b-2 border-secondary opacity-40"></div>
</div>
</div>
</div>
<div className="pillar-card-wrapper">
<div className="pillar-card pillar-card-4">
<div className="pillar-depth"></div>
<div className="relative z-10">
<span className="text-[10px] font-bold uppercase tracking-widest mb-6 block opacity-60">Tracking</span>
<h4 className="text-xl font-headline mb-4 font-bold text-primary">Dynamics</h4>
<p className="text-sm opacity-80 leading-relaxed text-on-surface-variant">Monitoring global shifts in capital towards net-positive and regenerative assets.</p>
</div>
<div className="flex justify-between items-end relative z-10">
<span className="material-symbols-outlined text-4xl text-primary/80">monitoring</span>
<div className="w-6 h-6 border-r-2 border-b-2 border-secondary opacity-40"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-12 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container p-12 flex flex-col justify-between min-h-[280px]">
<div>
<h3 className="text-2xl font-headline font-bold text-primary mb-6">SAS Framework</h3>
<p className="text-sm text-on-surface-variant leading-relaxed max-w-sm mb-12">Access the Sovereign Accountability System documentation and implementation guides.</p>
</div>
<a className="inline-flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:gap-4 transition-all" href="#">
                    Explore Framework <span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
<div className="bg-surface-container p-12 flex flex-col justify-between min-h-[280px]">
<div>
<h3 className="text-2xl font-headline font-bold text-primary mb-6">Research Network</h3>
<p className="text-sm text-on-surface-variant leading-relaxed max-w-sm mb-12">Collaborate with our global network of research labs and policy experts.</p>
</div>
<a className="inline-flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:gap-4 transition-all" href="#">
                    View Network <span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</div>
</section>
<section className="mx-6 md:mx-12 lg:mx-24 mb-24">
<div className="bg-primary p-12 md:p-24 text-center relative overflow-hidden">
<div className="max-w-3xl mx-auto relative z-10">
<span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-fixed/60 mb-8 block">Global Initiative</span>
<h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-12 leading-tight">Stronger foundations create resilient futures.</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-secondary text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-secondary-container transition-all">Join the Foundation</button>
<button className="border border-white/20 text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Governance Charter</button>
</div>
</div>
<div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-white/5 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-white/5 pointer-events-none"></div>
</div>
</section>
</main>



    </>
  );
};

export default AboutUs;
