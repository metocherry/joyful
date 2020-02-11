interface IS {
  NAME: string;

  VERSION: string;

  string: (text: any) => boolean;

  register: (name: string, definition: (...args: any) => boolean) => void;

  custom: (name: string, ...args: any) => void;

  clear: () => void;
}

export default IS;
