import { PropsWithChildren } from "react";

function Hero(props: PropsWithChildren) {
  return (<>
    <div className="w-screen h-[70vh] flex items-center justify-center">
      {props.children}
    </div>
  </>);
}

export default Hero;