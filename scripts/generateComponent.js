/* eslint-disable no-console */
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const recursiveFileList = require('./_utils/recursiveFileList');
const filterFiles = require('./_utils/filterFiles');

let pathToComponent = process.env.COMPONENT_PATH;
const updateIndex = process.argv.includes('-u');

const componentsDir = 'src';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getInfoFromUser = msg => (
  new Promise(resolve => {
    rl.question(msg, ans => {
      resolve(ans.trim());
    });
  })
);

const getComponentContent = name => {
  const imports = `import React from 'react';
import PropTypes from 'prop-types';\n`;
  const body = `const ${name} = () => {
  return (
    <>
      ${name}
    </>
)};\n`;
  const propTypes = `${name}.propTypes = {};\n`;
  const exports = `export default ${name};\n`;
  return [imports, body, propTypes, exports].join('\n');
};

const getIndexContent = name => `export { default } from './${name}';\n`;

const updateGeneralIndex = () => {
  const files = filterFiles(recursiveFileList(pathToComponent), {
    shouldContain: false,
    values: ['index.js', '__snapshots__', 'test', '_utils', '_components'],
  }).map(f => path.parse(f));
  const filePath = path.join(pathToComponent, 'index.js');
  fs.unlink(filePath, () => {
    fs.writeFile(filePath, '', () => {
      files.forEach(({ name, dir }) => {
        const importPath = path.relative(pathToComponent, dir);
        fs.appendFileSync(filePath, `import ${name} from './${importPath}';\n`);
      });
      fs.appendFileSync(filePath, '\nexport {\n');
      files.forEach(({ name }) => {
        fs.appendFileSync(filePath, `  ${name},\n`);
      });
      fs.appendFileSync(filePath, '};\n');
      rl.close();
      console.log('index.js updated!');
    });
  });
};

const createComponent = async () => {
  const name = await getInfoFromUser('Provide component name: ');
  if (!pathToComponent) {
    const askedPath = await getInfoFromUser(`Provide component path: ${componentsDir}/`);
    pathToComponent = path.join(__dirname, `../${componentsDir}`, askedPath);
  }
  if (name && pathToComponent) {
    rl.close();
    fs.mkdirSync(path.join(pathToComponent, name));
    fs.writeFileSync(
      path.join(pathToComponent, name, `${name}.jsx`),
      getComponentContent(name),
    );
    fs.writeFileSync(
      path.join(pathToComponent, name, 'index.js'),
      getIndexContent(name),
    );
    return name;
  }
  return null;
};

createComponent().then(name => {
  if (!updateIndex) {
    if (name) console.log(`${name} was created in ${pathToComponent}!`);
    console.log('To update index run it with -u flag');
  } else {
    if (name) console.log(`${name} was created in ${pathToComponent}!`);
    updateGeneralIndex();
  }
});
