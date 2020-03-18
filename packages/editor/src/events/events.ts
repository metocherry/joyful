import { Observer } from './observer';
import { Subscription } from './subscription';

export type Subscribers = Map<string, Observer[]>;

export class Events {
  #subscribers: Subscribers = new Map();

  /**
   * Subscribe any event on observer
   *
   * @param eventName - event name
   * @param next - The `next` callback of an Observer
   * @param error - The `error` callback of an Observer
   * @param complete - The `complete` callback of an Observer
   */
  public on(eventName: string, next: (data: any) => any, error: (data: any) => any, complete: (data: any) => any) {
    if (!this.#subscribers.has(eventName)) {
      this.#subscribers.set(eventName, []);
    }

    this.#subscribers.get(eventName)!.push({ next, error: error, complete: complete });
  }

  /**
   * Unsubsribe callback from event
   *
   * @param eventName
   * @param callback
   */
  public off(eventName: string, subscription: Subscription): void {

  }

  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data  - subscribers get this data when they were fired
   */
  public emit(eventName: string, data?: any): void {
    if (!this.#subscribers.has(eventName)) {
      return;
    }

    this.#subscribers.get(eventName)!.reduce((prev, observer: Observer) => {
      const composite = observer.next(data);
      return composite ?? prev;
    }, data);
  }

  /**
   * clears subsribers list
   */
  public destroy(): void {
    this.#subscribers.clear();
  }
}
