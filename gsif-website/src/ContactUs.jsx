import React from 'react';

const ContactUs = () => {
  return (
    <>






<main className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

<section className="space-y-16">
<div className="space-y-12">
<div className="bg-surface-container p-10 space-y-8 shadow-sm">
<div>
<h2 className="text-primary text-2xl font-bold mb-4 flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="corporate_fare">corporate_fare</span>
                            Headquarters
                        </h2>
<p className="text-on-surface font-semibold text-xl">Pune, India</p>
<p className="text-on-surface-variant mt-2">Serving as the central node for GSIF's global operations and standard development.</p>
</div>
<div>
<h2 className="text-primary text-2xl font-bold mb-4 flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="mail">mail</span>
                            Direct Correspondence
                        </h2>
<a className="text-on-surface font-semibold text-xl hover:text-secondary transition-colors underline underline-offset-4 decoration-outline-variant" href="mailto:gsi.foundation@gmail.com">gsi.foundation@gmail.com</a>
</div>
</div>
<div className="space-y-6">
<h3 className="text-primary text-lg font-bold tracking-wider uppercase">Institutional Support</h3>
<p className="text-on-surface-variant leading-relaxed">
                        GSIF provides specialized assistance for organizations navigating complex sustainability frameworks. We aim to respond to all institutional inquiries within two business days.
                    </p>
<div className="flex items-start gap-4 p-6 bg-surface-container-low border-l-4 border-secondary">
<span className="material-symbols-outlined text-secondary" data-icon="info">info</span>
<div>
<p className="text-sm font-semibold text-secondary mb-1">Standard Processing Time</p>
<p className="text-sm text-on-surface-variant">General inquiries: 48 Hours | Partnership Proposals: 5 Business Days</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-high p-10 lg:p-14 shadow-sm relative overflow-hidden">
<h2 className="text-primary text-3xl font-bold mb-10">Send an Inquiry</h2>
<form action="#" className="space-y-10" method="POST">
<div className="relative group">
<input className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder-transparent outline-none text-on-surface" id="name" name="name" placeholder=" " type="text" />
<label className="absolute left-0 -top-6 text-sm font-semibold text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-focus:font-semibold" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder-transparent outline-none text-on-surface" id="email" name="email" placeholder=" " type="email" />
<label className="absolute left-0 -top-6 text-sm font-semibold text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-focus:font-semibold" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder-transparent outline-none text-on-surface" id="subject" name="subject" placeholder=" " type="text" />
<label className="absolute left-0 -top-6 text-sm font-semibold text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-focus:font-semibold" htmlFor="subject">Subject</label>
</div>
<div className="relative group">
<textarea className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder-transparent outline-none text-on-surface resize-none" id="message" name="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-0 -top-6 text-sm font-semibold text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-focus:font-semibold" htmlFor="message">Message</label>
</div>
<button className="w-full bg-primary text-on-primary py-5 px-8 font-bold text-lg hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group flex items-center justify-center gap-3" type="submit">
                    Send Message
                    <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform" data-icon="send">send</span>
</button>
</form>
</section>
</main>
 Secondary Support Block
<section className="bg-surface-container py-24">
<div className="max-w-7xl mx-auto px-8">
<h2 className="text-primary text-3xl font-bold mb-16 text-center">How can we help?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-surface p-10 border-b-4 border-transparent hover:border-secondary transition-all duration-300 group">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="question_answer">question_answer</span>
<h3 className="text-primary text-xl font-bold mb-4">General Inquiries</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Fundamental questions regarding GSIF's mission, governance, and general global impact reporting.</p>
</div>
<div className="bg-surface p-10 border-b-4 border-transparent hover:border-secondary transition-all duration-300 group">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="verified">verified</span>
<h3 className="text-primary text-xl font-bold mb-4">Standards &amp; Certification</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Detailed technical guidance on GSIF compliance standards and the certification process for institutions.</p>
</div>
<div className="bg-surface p-10 border-b-4 border-transparent hover:border-secondary transition-all duration-300 group">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="handshake">handshake</span>
<h3 className="text-primary text-xl font-bold mb-4">Partnership &amp; Collaboration</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Strategic alliances with NGOs, governments, and private sector entities to scale sustainability efforts.</p>
</div>
</div>
</div>
</section>
 Institutional Quote Section
<section className="py-24 max-w-5xl mx-auto px-8 text-center italic">
<blockquote className="text-primary text-2xl font-light leading-relaxed mb-8">
            "Transparency is the cornerstone of sustainable progress. At GSIF, we believe that open communication between global stakeholders and our foundation is vital for measurable change."
        </blockquote>
<div className="w-16 h-[2px] bg-secondary mx-auto"></div>
</section>
 Footer


    </>
  );
};

export default ContactUs;
