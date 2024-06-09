type Func<T extends any[], R> = (...args: T) => R;

export function debounce<T extends any[], R>(
  func: Func<T, R>,
  delay: number,
): Func<T, void> {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: ReturnType<typeof debounce>, ...args: T) {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
