type MyParameters<T> = T extends (...args: infer R) => unknown ? R : never
