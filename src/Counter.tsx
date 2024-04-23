import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  start?: number;
}>;

function Counter({ start = 0, children }: Props) {
  return (
    <div>
      <h1>Counter</h1>
      <p>Number : {start}</p>
      <button>Incremente</button>
    </div>
  );
}

export default Counter;
