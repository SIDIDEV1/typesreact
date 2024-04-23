import {
  useRef,
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";

type Props = PropsWithChildren<{
  start?: number;
}>;

export const Counter: FunctionComponent<Props> = ({ start = 0, children }) => {
  const [n, setN] = useState<number>(start);
  const ref = useRef<HTMLButtonElement>(null);

  const incr = () => setN((n) => n + 1);
  return (
    <div>
      <h1>Counter</h1>
      <p>Number : {n}</p>
      <button ref={ref} onClick={incr}>
        Incremente
      </button>
    </div>
  );
};
