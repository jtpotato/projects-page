import { PropsWithChildren } from "react";

function BobaStrong(props: PropsWithChildren) {
  return (<>
    <span className="text-[var(--accent1)] font-bold">{props.children}</span>
  </>);
}

export default BobaStrong;