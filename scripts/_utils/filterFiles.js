const path = require('path');

const filterFiles = (files, { shouldContain, values }) => {
  const valuesArr = typeof values === 'string' ? [values] : values;
  return files.filter(file => {
    const { base } = path.parse(file);
    return valuesArr.every(v => base.includes(v) === shouldContain);
  });
};

module.exports = filterFiles;
