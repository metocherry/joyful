import pkg from '../package.json';
import IS from './lib.interface';

const _custom = new Map();

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
  },

  'register': {
    value: (name: string, register: Function): void => {
      if (_custom.has(name)) throw Error(`The ${name} method is already exist`);
      _custom.set(name, register);
    },
    writable: false,
    configurable: false,
  },

  'custom': {
    value: (name: string, ...args: any): boolean => {
      const call = _custom.get(name);

      if (typeof call !== 'function') throw Error(`The ${name} method is not exist`);
      return call(...args);
    },
    writable: false,
    configurable: false,
  },

  'clear': {
    value: (): void => {
      _custom.clear();
    },
    writable: false,
    configurable: false,
  }
});

export default is;
