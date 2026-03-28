const fs = require('fs');
let code = fs.readFileSync('js/publications.js', 'utf8');

// The file contains: const publicationsData = { ... };
let startMatch = 'const publicationsData = {';
let startIdx = code.indexOf(startMatch);
let endIdx = code.indexOf('function generatePublications()');
if (startIdx !== -1 && endIdx !== -1) {
    let objCode = code.substring(startIdx + startMatch.length - 1, endIdx);
    // remove any lines with document. or console.
    objCode = objCode.split('\n').filter(l => !l.includes('document.')).join('\n');
    try {
        let pubData = eval('(' + objCode + ')');
        
        let researchCount = 0;
        let reviewCount = 0;
        let booksCount = 0;
        let chaptersCount = 0;
        let patentCount = 0;

        for (let year in pubData) {
            let y = pubData[year];
            if (y.papers) {
                if (y.papers.research) researchCount += y.papers.research.length;
                if (y.papers.review) reviewCount += y.papers.review.length;
            }
            if (y.patents) {
                patentCount += y.patents.length;
            }
            if (y.books) {
                if (y.books.books) booksCount += y.books.books.length;
                if (y.books.chapters) chaptersCount += y.books.chapters.length;
            }
        }
        
        console.log("Research:", researchCount);
        console.log("Review:", reviewCount);
        console.log("Books:", booksCount);
        console.log("Chapters:", chaptersCount);
        console.log("Patents:", patentCount);
        console.log("Total Publications:", researchCount + reviewCount + booksCount + chaptersCount + patentCount);

    } catch(e) {
        console.error("Eval error:", e);
    }
} else {
    console.error("Could not find publicationsData");
}
