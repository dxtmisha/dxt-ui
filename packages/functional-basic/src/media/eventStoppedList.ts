/**
 * WeakSet of events stopped via `eventStopPropagation` regardless of `cancelable`.
 *
 * WeakSet событий, остановленных через `eventStopPropagation`, независимо от `cancelable`.
 */
export const eventStoppedList = /* #__PURE__ */ new WeakSet<Event>()
