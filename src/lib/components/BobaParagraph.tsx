"use client"

import { PropsWithChildren, useRef } from "react";
import { useInView } from "react-intersection-observer";

function BobaParagraph(props: PropsWithChildren & { direction: "left" | "right" }) {
  const { ref, inView, entry } = useInView({ threshold: 0.3, triggerOnce: true });

  return (<>
    <div className={`max-w-3xl m-auto p-4 my-8 paragraph-animate ${inView ? "" : "from-" + props.direction}`} ref={ref}>
      {props.children}
    </div>
  </>);
}

export default BobaParagraph;