import pkg from '../package.json';
import IS from './lib.interface';

const is: IS = Object.defineProperties({}, {
  'NAME': {
    value: pkg.name,
    writable: false,
    configurable: false,
  },

  'VERSION': {
    value: pkg.version,
    writable: false,
    configurable: false,
  },

  'string': {
    value: (text: string): boolean => {
      return typeof text === 'string';
    },
    writable: false,
    configurable: false,
  }
});

export default is;
