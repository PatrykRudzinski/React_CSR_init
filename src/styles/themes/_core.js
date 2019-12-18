const spacing = (...args) => args.slice(0, 4).map(e => `${e * 0.25}rem`).join(' ');
const bpValues = {
  xs: 0,
  s: 600,
  m: 960,
  l: 1280,
  xl: 1920,
};
const generateMQ = (rule, value) => {
  const predefined = Object.keys(bpValues).includes(value);
  const resultValue = predefined ? bpValues[value] : value;
  return `@media (${rule}-width: ${resultValue}px)`;
};

export { bpValues };
export default {
  spacing,
  colors: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  font: {
    base: '16px',
    family: 'Arial',
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    s: '.85rem',
    m: '1rem',
    l: '1.15rem',
  },
  container: {
    main: '1640px',
    form: '340px',
  },
  bp: {
    values: bpValues,
    max: v => generateMQ('max', v),
    min: v => generateMQ('min', v),
  },
  shadows: {
    medium: ' 0px 3px 5px 0px rgba(0,0,0,0.25)',
  },
  shape: {
    borderRadius: '4px',
  },
  time: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    long: 350,
    longer: 400,
    longest: 450,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  zIndex: {
    header: 100,
    modal: 200,
  },
  elements: {
    header: {
      height: '100px',
    },
    footer: {},
    logo: {
      width: '144px',
    },
  },
};
