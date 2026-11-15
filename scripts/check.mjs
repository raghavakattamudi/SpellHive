// Extracts the inline script from index.html and checks that it parses.
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const html = readFileSync('index.html', 'utf8');
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) { console.error('No inline script found in index.html'); process.exit(1); }
writeFileSync('/tmp/spellhive-check.js', m[1]);
execFileSync('node', ['--check', '/tmp/spellhive-check.js'], { stdio: 'inherit' });
console.log('index.html script parses.');
