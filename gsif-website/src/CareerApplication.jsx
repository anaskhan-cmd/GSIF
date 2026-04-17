import React from 'react';

const CareerApplication = () => {
  return (
    <>


<main className="pt-40 pb-24 px-6 md:px-12">
<section className="max-w-3xl mx-auto text-center mb-16">
<span className="text-clay-gold font-headline font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Career Application</span>
<h1 className="text-4xl md:text-5xl font-headline text-evergreen mb-6 leading-tight">Apply to work with GSIF</h1>
<p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-body leading-relaxed font-medium">
                Share your details, area of interest, and supporting information to apply for opportunities with GSIF.
            </p>
</section>
<div className="max-w-3xl mx-auto bg-white p-8 md:p-14 shadow-2xl shadow-evergreen/5 rounded-2xl relative border border-evergreen/5">
<form className="space-y-12">
<div className="space-y-8">
<h2 className="text-lg font-headline font-bold text-evergreen uppercase tracking-widest border-l-4 border-clay-gold pl-4">Personal Information</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Full Name</label>
<input placeholder="Jane Doe" type="text" />
</div>
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Email Address</label>
<input placeholder="jane@example.com" type="email" />
</div>
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Phone Number</label>
<input placeholder="+1 (555) 000-0000" type="tel" />
</div>
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Current Location</label>
<input placeholder="London, UK" type="text" />
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-lg font-headline font-bold text-evergreen uppercase tracking-widest border-l-4 border-clay-gold pl-4">Application Focus</h2>
<div className="flex flex-col relative">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Area of Interest</label>
<select className="appearance-none cursor-pointer pr-10">
<option disabled="" selected="" value="">Select your department</option>
<option>Internship &amp; Early Opportunities</option>
<option>Research</option>
<option>Policy Making</option>
<option>Marketing</option>
<option>HR &amp; Legal</option>
<option>Other</option>
</select>
<div className="absolute right-4 bottom-3.5 pointer-events-none">
<span className="material-symbols-outlined text-evergreen">expand_more</span>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-lg font-headline font-bold text-evergreen uppercase tracking-widest border-l-4 border-clay-gold pl-4">Professional Background</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Current Qualification</label>
<input placeholder="Masters in Sustainability" type="text" />
</div>
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Current Role / Status</label>
<input placeholder="Senior Analyst / Student" type="text" />
</div>
</div>
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Portfolio / LinkedIn / Website</label>
<input placeholder="https://linkedin.com/in/username" type="url" />
</div>
</div>
<div className="space-y-8">
<h2 className="text-lg font-headline font-bold text-evergreen uppercase tracking-widest border-l-4 border-clay-gold pl-4">Documentation</h2>
<div className="group relative p-10 border-2 border-dashed border-evergreen/20 hover:border-clay-gold rounded-xl transition-all bg-soft-linen/50 text-center cursor-pointer">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" />
<span className="material-symbols-outlined text-4xl text-clay-gold mb-3 block" data-weight="fill">upload_file</span>
<p className="text-evergreen font-bold text-base">Resume Upload</p>
<p className="text-xs text-on-surface-variant/70 mt-2 font-medium">Accepted formats: PDF, DOC, DOCX</p>
</div>
<div className="flex flex-col">
<label className="text-xs font-bold text-clay-gold uppercase tracking-widest mb-2.5 ml-1">Cover Letter / Why GSIF?</label>
<textarea placeholder="Tell us about your motivation and how you align with our impact mission..." rows="6"></textarea>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-evergreen text-white font-headline font-bold text-lg py-5 px-8 rounded-xl hover:bg-clay-gold transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-evergreen/10" type="submit">
                        Submit Application
                        <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
</form>
<div className="mt-12 p-6 bg-soft-linen rounded-xl border-l-8 border-clay-gold">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-clay-gold mt-0.5">info</span>
<div>
<h3 className="text-evergreen font-headline font-bold text-sm mb-1">Before you apply</h3>
<p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                            Please ensure your details are accurate and your supporting documents are updated before submitting your application.
                        </p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
};

export default CareerApplication;
