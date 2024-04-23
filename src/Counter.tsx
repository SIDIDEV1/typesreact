import type { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  start?: number;
}>;

export const Counter: FunctionComponent<Props> = ({ start = 0, children }) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>Number : {start}</p>
      <button>Incremente</button>
    </div>
  );
};
