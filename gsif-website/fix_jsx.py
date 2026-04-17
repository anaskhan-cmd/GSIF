import os
import re

src_dir = '/app/gsif-website/src'
for filename in os.listdir(src_dir):
    if filename.endswith('.jsx'):
        filepath = os.path.join(src_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # fix <br/>/ /> to <br />
        content = re.sub(r'<br\s*class="[^"]*"/ />', lambda m: m.group(0).replace('/ />', ' />'), content)
        content = re.sub(r'<([a-zA-Z0-9]+)([^>]*?)/ />', r'<\1\2 />', content)

        # <img ...> => <img ... />
        content = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', content)

        # <input ...> => <input ... />
        content = re.sub(r'(<input[^>]*?)(?<!/)>', r'\1 />', content)

        # <hr ...> => <hr ... />
        content = re.sub(r'(<hr[^>]*?)(?<!/)>', r'\1 />', content)

        # replace invalid attribute names
        content = re.sub(r'xmlns:xlink', 'xmlnsXlink', content)
        content = re.sub(r'xml:space', 'xmlSpace', content)
        content = re.sub(r'xlink:href', 'xlinkHref', content)

        # SVG path attributes to camel case
        content = re.sub(r'clip-path', 'clipPath', content)
        content = re.sub(r'fill-opacity', 'fillOpacity', content)

        # In ResearchNetwork.jsx there might be script tags left, let's remove them
        content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
