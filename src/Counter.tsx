import {
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";

type Props = PropsWithChildren<{
  start?: number;
}>;

export const Counter: FunctionComponent<Props> = ({ start = 0, children }) => {
  const [n, setN] = useState<number>(start);

  const incr = () => setN((n) => n + 1);
  return (
    <div>
      <h1>Counter</h1>
      <p>Number : {n}</p>
      <button onClick={incr}>Incremente</button>
    </div>
  );
};
