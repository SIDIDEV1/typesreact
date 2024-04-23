import { forwardRef, useRef, useState, type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  start?: number;
}>;

export const Counter = forwardRef<HTMLButtonElement, Props>(
  ({ start = 0, children }, ref) => {
    const [n, setN] = useState<number>(start);

    const incr = () => setN((n) => n + 1);
    return (
      <div>
        <h1>Counter</h1>
        <p>Number : {n}</p>
        {children}
        <button ref={ref} onClick={incr}>
          Incremente
        </button>
      </div>
    );
  }
);
