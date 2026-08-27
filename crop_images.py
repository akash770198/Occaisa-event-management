import os
import base64
import re
from PIL import Image
import io

dir_path = r'd:\CSS_Founder\Demo-ai-builder\event-management-03\public\Testimonials'
files = [f for f in os.listdir(dir_path) if f.endswith('.svg')]

def get_bbox(im):
    pixels = im.load()
    width, height = im.size
    
    left = 0
    for x in range(width):
        col_is_white = True
        for y in range(height):
            r, g, b = pixels[x, y][:3]
            if not (r > 230 and g > 230 and b > 230):
                col_is_white = False
                break
        if not col_is_white:
            left = x
            break
            
    right = width
    for x in range(width - 1, -1, -1):
        col_is_white = True
        for y in range(height):
            r, g, b = pixels[x, y][:3]
            if not (r > 230 and g > 230 and b > 230):
                col_is_white = False
                break
        if not col_is_white:
            right = x + 1
            break

    top = 0
    for y in range(height):
        row_is_white = True
        for x in range(width):
            r, g, b = pixels[x, y][:3]
            if not (r > 230 and g > 230 and b > 230):
                row_is_white = False
                break
        if not row_is_white:
            top = y
            break
            
    bottom = height
    for y in range(height - 1, -1, -1):
        row_is_white = True
        for x in range(width):
            r, g, b = pixels[x, y][:3]
            if not (r > 230 and g > 230 and b > 230):
                row_is_white = False
                break
        if not row_is_white:
            bottom = y + 1
            break
            
    return (left, top, right, bottom)

for file in files:
    path = os.path.join(dir_path, file)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'href=[\'\"]data:image/png;base64,([^\'\"]+)[\'\"]', content)
    if match:
        b64_data = match.group(1)
        img_data = base64.b64decode(b64_data)
        im = Image.open(io.BytesIO(img_data)).convert('RGB')
        
        bbox = get_bbox(im)
        if bbox != (0, 0, im.width, im.height) and bbox[2] > bbox[0] and bbox[3] > bbox[1]:
            cropped_im = im.crop(bbox)
            print(f'Cropped {file}: original size {im.size}, new size {cropped_im.size}, bbox {bbox}')
            
            buffered = io.BytesIO()
            cropped_im.save(buffered, format='PNG')
            new_b64 = base64.b64encode(buffered.getvalue()).decode('utf-8')
            
            new_content = content.replace(b64_data, new_b64)
            new_content = re.sub(r'width=\"\d+\"', f'width=\"{cropped_im.width}\"', new_content)
            new_content = re.sub(r'height=\"\d+\"', f'height=\"{cropped_im.height}\"', new_content)
            new_content = re.sub(r'viewBox=\"0 0 \d+ \d+\"', f'viewBox=\"0 0 {cropped_im.width} {cropped_im.height}\"', new_content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
        else:
            print(f'No white border found for {file}, or empty bbox {bbox}')
