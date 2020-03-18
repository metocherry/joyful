export class Subscription {
  #unsubscribe: (() => void)|null;

  constructor(unsubscribe?: () => void) {
    this.#unsubscribe = unsubscribe ?? null;
  }

  unsubscribe() {
    if (typeof this.#unsubscribe === 'function') {
      this.unsubscribe.call(this);
    }
  }
}
