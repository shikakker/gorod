import { readFile, access } from 'node:fs/promises';

const required = ['gorod splash.aep','data.json','splash gorod.json','demo.html','index.html','assets/viewer.js','assets/styles.css'];
for (const file of required) await access(file);

for (const file of ['data.json','splash gorod.json']) {
  const raw = await readFile(file,'utf8');
  const json = JSON.parse(raw);
  const missing = ['v','fr','ip','op','w','h','layers'].filter((key) => json[key] === undefined);
  if (missing.length) throw new Error(`${file}: missing Lottie fields ${missing.join(', ')}`);
  if (!Array.isArray(json.layers) || json.layers.length === 0) throw new Error(`${file}: no animation layers`);
  if (!(Number(json.fr) > 0) || !(Number(json.op) > Number(json.ip))) throw new Error(`${file}: invalid frame metadata`);
  console.log(`${file}: ${json.w}x${json.h}, ${json.fr}fps, ${json.layers.length} layers`);
}

const html = await readFile('index.html','utf8');
for (const marker of ['id="animation"','id="toggle"','id="restart"','id="source"','prefers-reduced-motion']) {
  if (!html.includes(marker) && !(await readFile('assets/styles.css','utf8')).includes(marker)) throw new Error(`viewer missing ${marker}`);
}
console.log('Gorod validation: OK');
