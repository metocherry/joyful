declare class Editor {
  onReady: Promise<void>;

  onChange: Promise<void>;

  save: Promise<Object>;
}
