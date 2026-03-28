import json
import re

with open('js/publications.js', 'r', encoding='utf-8') as f:
    content = f.read()

# count occurrences of "title:" inside research
research = len(re.findall(r'research:\s*\[.*?\]', content, re.DOTALL))
# This is tricky without parsing. Let me just count instances of "title:" in the whole file
titles = content.count('title:')
print(f"Total titles: {titles}")

# Let's count 'title:' inside research specifically.
research_count = 0
for match in re.finditer(r'research:\s*\[(.*?)\]', content, re.DOTALL):
    research_count += match.group(1).count('title:')
    
review_count = 0
for match in re.finditer(r'review:\s*\[(.*?)\]', content, re.DOTALL):
    review_count += match.group(1).count('title:')
    
books_count = 0
for match in re.finditer(r'books:\s*\[(.*?)\]', content, re.DOTALL):
    books_count += match.group(1).count('title:')

chapters_count = 0
for match in re.finditer(r'chapters:\s*\[(.*?)\]', content, re.DOTALL):
    chapters_count += match.group(1).count('title:')

patents_count = 0
for match in re.finditer(r'patents:\s*\[(.*?)\]', content, re.DOTALL):
    patents_count += match.group(1).count('title:')

with open('output.txt', 'w') as f:
    f.write(f"Research: {research_count}\n")
    f.write(f"Review: {review_count}\n")
    f.write(f"Books: {books_count}\n")
    f.write(f"Chapters: {chapters_count}\n")
    f.write(f"Patents: {patents_count}\n")
    f.write(f"Total: {research_count + review_count + books_count + chapters_count + patents_count}\n")
