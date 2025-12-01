const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'contexts', 'LanguageContext.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the line numbers
const lines = content.split('\n');
let trStart = -1;
let trEnd = -1;
let deStart = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].match(/^  tr: \{/)) trStart = i;
  if (lines[i].match(/^  de: \{/) && trStart > 0) {
    trEnd = i - 1;
    deStart = i;
  }
}

console.log(`Turkish translations: lines ${trStart + 1} to ${trEnd + 1}`);
console.log(`German translations start: line ${deStart + 1}`);

// Remove Turkish section and update
if (trStart > 0 && trEnd > trStart) {
  lines.splice(trStart, trEnd - trStart + 1);
  console.log('Removed Turkish translations');
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log('File updated');
