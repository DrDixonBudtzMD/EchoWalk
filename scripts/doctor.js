#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const pkg = require(path.join(root, 'package.json'));
const lock = require(path.join(root, 'package-lock.json'));
const required = [
  'App.tsx', 'app.json', 'modules/echowalk-sonar/src/EchoWalkSonarModule.ts',
  'modules/echowalk-sonar/android/src/main/java/expo/modules/echowalksonar/EchoWalkSonarModule.kt'
];
const failures = required.filter(file => !fs.existsSync(path.join(root, file))).map(file => `missing ${file}`);
const lockRoot = lock.packages?.[''] || {};
if (lockRoot.name !== pkg.name || lockRoot.version !== pkg.version) failures.push('package-lock identity differs from package.json');
for (const [name, range] of Object.entries(pkg.dependencies || {})) {
  if (lockRoot.dependencies?.[name] !== range) failures.push(`package-lock range differs for ${name}`);
}
if (failures.length) {
  console.error(`EchoWalk doctor failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`EchoWalk doctor passed (${required.length} native/app files; locked dependency ranges agree)`);
