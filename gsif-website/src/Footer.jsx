import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A17] text-[#F3EBDD] font-body">
<div className="max-w-screen-2xl mx-auto px-8 md:px-12 pt-24 pb-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
<div className="col-span-1">
<div className="text-4xl font-black mb-8 font-headline tracking-tighter text-[#F3EBDD]">GSIF</div>
<p className="text-[#F3EBDD]/80 text-sm leading-relaxed mb-10 max-w-xs font-normal">Global Sustainability Impact Foundation supports stronger sustainability systems through standards, certification, and knowledge-led progress.</p>
<div className="flex space-x-5">
<a className="w-10 h-10 flex items-center justify-center bg-white/5 transition-all duration-300 rounded-sm group footer-link-premium" href="#">
<span className="material-symbols-outlined text-xl text-[#F3EBDD] group-hover:text-white transition-colors duration-300" data-icon="share">share</span>
</a>
<a className="w-10 h-10 flex items-center justify-center bg-white/5 transition-all duration-300 rounded-sm group footer-link-premium" href="#">
<span className="material-symbols-outlined text-xl text-[#F3EBDD] group-hover:text-white transition-colors duration-300" data-icon="language">language</span>
</a>
</div>
</div>
<div>
<h4 className="font-headline font-bold text-[#F3EBDD] mb-8 uppercase text-xs tracking-[0.2em] relative inline-block">
                    Quick Links
                    <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F3EBDD]"></span>
</h4>
<ul className="space-y-4">
<li><a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="#">About Us</a></li>
<li><a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="#">Careers</a></li>
<li><a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="#">Get Involved</a></li>
<li><a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="#">Certification</a></li>
</ul>
</div>
<div>
<h4 className="font-headline font-bold text-[#F3EBDD] mb-8 uppercase text-xs tracking-[0.2em] relative inline-block">
                    Standards
                    <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F3EBDD]"></span>
</h4>
<ul className="space-y-4">
<li><a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="#">SAS</a></li>
<li><a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="#">Research Network</a></li>
<li><a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="#">Document Centre</a></li>
</ul>
</div>
<div>
<h4 className="font-headline font-bold text-[#F3EBDD] mb-8 uppercase text-xs tracking-[0.2em] relative inline-block">
                    Contact
                    <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F3EBDD]"></span>
</h4>
<div className="space-y-6">
<div className="flex items-start space-x-3 group">
<span className="material-symbols-outlined text-[#F3EBDD] text-lg group-hover:text-white transition-colors duration-300" data-icon="mail">mail</span>
<a className="transition-colors duration-200 text-sm inline-block text-[#F3EBDD]/70 footer-link-premium" href="mailto:gsi.foundation@gmail.com">gsi.foundation@gmail.com</a>
</div>
<div className="flex items-start space-x-3">
<span className="material-symbols-outlined text-[#F3EBDD] text-lg" data-icon="location_on">location_on</span>
<p className="text-sm text-[#F3EBDD]/70">Pune, India</p>
</div>
</div>
</div>
</div>
<div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
<p className="text-[12px] font-medium tracking-wide text-[#F3EBDD]/50">© 2024 Global Sustainability Impact Foundation. All rights reserved.</p>
<div className="flex space-x-10">
<a className="text-[11px] uppercase tracking-widest transition-colors font-bold text-[#F3EBDD]/50 footer-link-premium" href="#">Privacy Policy</a>
<a className="text-[11px] uppercase tracking-widest transition-colors font-bold text-[#F3EBDD]/50 footer-link-premium" href="#">Terms of Service</a>
<a className="text-[11px] uppercase tracking-widest transition-colors font-bold text-[#F3EBDD]/50 footer-link-premium" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>
  );
};
export default Footer;
