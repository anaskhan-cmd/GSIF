import os
from bs4 import BeautifulSoup
import re

DOWNLOADS_DIR = "/home/jules/downloads"
SRC_DIR = "/app/gsif-website/src"

pages = {
    "8f05676aa1684f499790b5ac96589b48": {"name": "WorkWithUs", "path": "/work-with-us"},
    "f0ef00a1f51a4e709900cb58c619ed69": {"name": "ContactUs", "path": "/contact-us"},
    "6d2f32104f1c42bfbaacd82c14724419": {"name": "CareerApplication", "path": "/career-application"},
    "91e3404c81604d11b4eef14c6a3c45e3": {"name": "CertificationPathway", "path": "/certification-pathway"},
    "a57f4006fa2f403e911171a7b1ab4bdc": {"name": "SasFramework", "path": "/sas-framework"},
    "0e109cea7a394883acba8bc257cb0159": {"name": "AboutUs", "path": "/about-us"},
    "70404772c092449e9cefb3a8a5a97c87": {"name": "DocumentCenter", "path": "/document-center"},
    "89081d8a8e784bb78500ab66adac9f9a": {"name": "InstitutionalFooter", "path": "/"},
    "c13c6ba6a3af402aa06a90a4262ce576": {"name": "ResearchNetwork", "path": "/research-network"}
}

def html_to_jsx(html_string):
    # Very basic conversion for standard html elements.
    # class -> className, for -> htmlFor
    html_string = re.sub(r'\sclass=', ' className=', html_string)
    html_string = re.sub(r'\sfor=', ' htmlFor=', html_string)
    # self-closing tags
    html_string = re.sub(r'<(img|input|br|hr|source|meta|link)([^>]*)>', r'<\1\2 />', html_string)
    # style="" might be problematic if not converted to object, but let's try to leave it if it works or remove it
    html_string = re.sub(r'style="[^"]*"', '', html_string)
    # remove inline scripts/onLoad etc.
    html_string = re.sub(r'\son[A-Z][a-z]+="[^"]*"', '', html_string, flags=re.IGNORECASE)
    # SVG path fill-rule etc to camelCase
    html_string = re.sub(r'fill-rule', 'fillRule', html_string)
    html_string = re.sub(r'clip-rule', 'clipRule', html_string)
    html_string = re.sub(r'stroke-width', 'strokeWidth', html_string)
    html_string = re.sub(r'stroke-linecap', 'strokeLinecap', html_string)
    html_string = re.sub(r'stroke-linejoin', 'strokeLinejoin', html_string)
    html_string = re.sub(r'stroke-miterlimit', 'strokeMiterlimit', html_string)
    # Replace comments
    html_string = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html_string, flags=re.DOTALL)

    return html_string


import sys

def extract_body(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            html = f.read()
            soup = BeautifulSoup(html, 'html.parser')
            body = soup.find('body')
            if body:
                return "".join([str(c) for c in body.contents])
            return ""
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return ""

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == 'extract_footer_header':
        file_path = os.path.join(DOWNLOADS_DIR, "89081d8a8e784bb78500ab66adac9f9a.html")
        with open(file_path, 'r', encoding='utf-8') as f:
            html = f.read()
            soup = BeautifulSoup(html, 'html.parser')
            body = soup.find('body')
            # Typically header is the first element, footer is the last element
            header = body.find('nav')
            if not header:
                header = body.find('header')
            footer = body.find('footer')

            with open(os.path.join(SRC_DIR, 'Header.html'), 'w', encoding='utf-8') as hf:
                hf.write(str(header) if header else "<!-- No header found -->")
            with open(os.path.join(SRC_DIR, 'Footer.html'), 'w', encoding='utf-8') as ff:
                ff.write(str(footer) if footer else "<!-- No footer found -->")
            print("Extracted header and footer")


def extract_main_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            html = f.read()
            soup = BeautifulSoup(html, 'html.parser')
            body = soup.find('body')
            if not body:
                return ""

            # Remove nav and footer if they exist (we have global ones)
            # Actually, the user asked to use 89081d8a8e784bb78500ab66adac9f9a header/footer on ALL screens.
            # So we should remove header/nav and footer from the body of other screens.
            navs = body.find_all('nav')
            for nav in navs:
                nav.decompose()
            headers = body.find_all('header')
            for header in headers:
                header.decompose()
            footers = body.find_all('footer')
            for footer in footers:
                footer.decompose()

            return "".join([str(c) for c in body.contents])
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return ""

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == 'generate_components':
        for file_id, info in pages.items():
            file_path = os.path.join(DOWNLOADS_DIR, f"{file_id}.html")

            content = ""
            # For the InstitutionalFooter (89081d8a8e784bb78500ab66adac9f9a), it's the home page?
            # The prompt says: "keep the same footer and header or navigationbar of screen ID: 89081d8a8e784bb78500ab66adac9f9a. and apply this footer and navbar to all screen and analyze and connects them all accordingly"
            # It seems 89081d8a8e784bb78500ab66adac9f9a is "GSIF – Refined Institutional Footer". We've extracted header/footer from it.
            # What about the body of 89081d8a8e784bb78500ab66adac9f9a? Let's just extract its content too, maybe it's the home page.

            content = extract_main_content(file_path)
            jsx_content = html_to_jsx(content)

            component_name = info["name"]

            component_code = f"""import React from 'react';

const {component_name} = () => {{
  return (
    <>
      {jsx_content}
    </>
  );
}};

export default {component_name};
"""
            with open(os.path.join(SRC_DIR, f"{component_name}.jsx"), 'w', encoding='utf-8') as f:
                f.write(component_code)

        # Also convert Header and Footer to JSX
        with open(os.path.join(SRC_DIR, 'Header.html'), 'r', encoding='utf-8') as f:
            header_html = f.read()
            header_jsx = html_to_jsx(header_html)
            with open(os.path.join(SRC_DIR, 'Header.jsx'), 'w', encoding='utf-8') as hf:
                hf.write(f"import React from 'react';\nimport {{ Link }} from 'react-router-dom';\n\nconst Header = () => {{\n  return (\n    {header_jsx}\n  );\n}};\nexport default Header;\n")

        with open(os.path.join(SRC_DIR, 'Footer.html'), 'r', encoding='utf-8') as f:
            footer_html = f.read()
            footer_jsx = html_to_jsx(footer_html)
            with open(os.path.join(SRC_DIR, 'Footer.jsx'), 'w', encoding='utf-8') as hf:
                hf.write(f"import React from 'react';\nimport {{ Link }} from 'react-router-dom';\n\nconst Footer = () => {{\n  return (\n    {footer_jsx}\n  );\n}};\nexport default Footer;\n")

        print("Generated all components")
