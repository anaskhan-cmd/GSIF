import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F3EBDD]/90 backdrop-blur-xl border-b border-[#184D38]/10">
<div className="flex justify-between items-center w-full px-8 md:px-12 py-5 max-w-screen-2xl mx-auto">
<div className="text-2xl font-black tracking-tighter text-primary font-headline shrink-0">GSIF</div>
<div className="hidden lg:flex items-center space-x-10 font-body font-extrabold text-[13px] tight-caps uppercase ml-auto mr-10">
<Link className="text-[#C08A3E] border-b-2 border-[#C08A3E] pb-0.5" to="/">Home</Link>
<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/about-us">About Us</Link>
<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/sas-framework">SAS</Link>
<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/research-network">Research Network</Link>
<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/certification-pathway">Certification</Link>
</div>
<button className="bg-primary text-on-primary px-7 py-3 text-[13px] font-black font-body hover:opacity-90 transition-all duration-300 shadow-lg active:scale-95 uppercase tight-caps shrink-0">
            Get Certified
        </button>
</div>
</nav>
  );
};
export default Header;
