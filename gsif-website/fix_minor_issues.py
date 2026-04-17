import os
import re

src_dir = '/app/gsif-website/src'
for filename in os.listdir(src_dir):
    if filename.endswith('.jsx'):
        filepath = os.path.join(src_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove previously converted comments that look like {/* ... */}
        # Oh wait, JSX comments are {/* ... */} which IS correct for React!
        # The reviewer said: "The regex used to strip HTML comments <!-- ... --> in process_html.py left behind the inner text of the comments (e.g.,  TopNavBar ,  Hero Section ) in ContactUs.jsx and DocumentCenter.jsx. This text will be visibly rendered on the page"
        # If I replaced <!--(.*?)--> with {/* \1 */}, it should be valid JSX comment unless it was placed outside of a tag? No, inside JSX it should be an expression.
        # Let's just remove them entirely.
        content = re.sub(r'\{\/\*.*?\*\/\}', '', content, flags=re.DOTALL)

        # fix viewBox
        content = re.sub(r'\bviewbox\b', 'viewBox', content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
