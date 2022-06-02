```ts
type MyReturnType<T> = T extends (...args: infer R) => unknown ? (
  T extends (...args: R) => infer S ? S : never
) : never
```
