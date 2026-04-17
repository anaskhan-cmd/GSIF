import os
import re

src_dir = '/app/gsif-website/src'
for filename in os.listdir(src_dir):
    if filename.endswith('.jsx'):
        filepath = os.path.join(src_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # In Header.jsx, use Link
        if filename == 'Header.jsx':
            content = content.replace('<a className="text-[#C08A3E] border-b-2 border-[#C08A3E] pb-0.5" href="#">Home</a>', '<Link className="text-[#C08A3E] border-b-2 border-[#C08A3E] pb-0.5" to="/">Home</Link>')
            content = content.replace('<a className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" href="#">About Us</a>', '<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/about-us">About Us</Link>')
            content = content.replace('<a className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" href="#">SAS</a>', '<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/sas-framework">SAS</Link>')
            content = content.replace('<a className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" href="#">Research Network</a>', '<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/research-network">Research Network</Link>')
            content = content.replace('<a className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" href="#">Certification</a>', '<Link className="text-primary/80 hover:text-[#C08A3E] transition-colors duration-300" to="/certification-pathway">Certification</Link>')

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
