import { EventHandler } from './types';

export default class CustomEventService<TEventDetail> {
  constructor(private eventType: string) {}

  dispatch = (detail: TEventDetail) => {
    const event = new CustomEvent<TEventDetail>(this.eventType, { detail });
    window.dispatchEvent(event);
  };

  subscribe = (handler: EventHandler<CustomEvent<TEventDetail>>) => {
    window.addEventListener(this.eventType, handler as EventListener);
    return () =>
      window.removeEventListener(this.eventType, handler as EventListener);
  };
}
