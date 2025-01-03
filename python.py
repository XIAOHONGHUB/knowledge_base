import os
import re
import requests
from bs4 import BeautifulSoup
import html2text

# 输入HTML文件路径和输出路径
html_file = "input.html"
output_markdown_file = "output.md"
images_folder = "images"

# 创建存储图片的文件夹
os.makedirs(images_folder, exist_ok=True)

# 读取HTML文件
with open(html_file, "r", encoding="utf-8") as file:
    html_content = file.read()

# 解析HTML内容
soup = BeautifulSoup(html_content, "html.parser")

# 下载图片并替换路径
def download_image(img_tag):
    img_url = img_tag.get("src")
    if not img_url:
        return
    # 获取图片文件名
    img_name = os.path.basename(img_url)
    img_path = os.path.join(images_folder, img_name)
    try:
        # 下载图片
        response = requests.get(img_url, stream=True)
        response.raise_for_status()
        with open(img_path, "wb") as img_file:
            for chunk in response.iter_content(1024):
                img_file.write(chunk)
        # 替换HTML中的图片路径
        img_tag["src"] = f"./{images_folder}/{img_name}"
    except Exception as e:
        print(f"Failed to download image {img_url}: {e}")

# 查找并处理所有图片标签
for img in soup.find_all("img"):
    download_image(img)

# 转换HTML到Markdown
markdown_converter = html2text.HTML2Text()
markdown_converter.ignore_links = False  # 保留超链接
markdown_content = markdown_converter.handle(str(soup))

# 保存Markdown内容到文件
with open(output_markdown_file, "w", encoding="utf-8") as file:
    file.write(markdown_content)

print(f"Markdown 文件已保存到 {output_markdown_file}")
print(f"图片已下载到文件夹 {images_folder}")
