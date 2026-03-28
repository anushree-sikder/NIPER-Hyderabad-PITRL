const fs = require('fs');
const content = fs.readFileSync('js/publications.js', 'utf8');

const t = (content.match(/title:/g) || []).length;
const researchP = (content.split('research: [').join('SPLIT').split('SPLIT').length) - 1;
// better: 
// let's just match "title:" inside research
let res = 0;
let rev = 0;
let pat = 0;
let books = 0;

let startIndex = content.indexOf('const publicationsData');
let jsonStr = content.substring(startIndex + 'const publicationsData = '.length, content.indexOf('};', startIndex) + 1);

// We'll just write the basic counts of the text "title:"
fs.writeFileSync('output.json', JSON.stringify({
    total_titles: t
}));
