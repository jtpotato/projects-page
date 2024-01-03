import { CSSProperties, PropsWithChildren } from "react";
import "@/lib/components/Theme.css"

export type BobaProjectTheme = {
  accent1?: string,
  accent2?: string,
  background1?: string,
  background2?: string,
  text1?: string,
  text2?: string,
}

function ThemeProvider(props: { theme: BobaProjectTheme } & PropsWithChildren) {
  return (<>
    <div>
      {props.children}
      <style>{`
      :root {
        --accent1: ${props.theme.accent1};
        --accent2: ${props.theme.accent2};
        --background1: ${props.theme.background1};
        --background2: ${props.theme.background2};
        --text1: ${props.theme.text1};
        --text2: ${props.theme.text2};
      }
      `}</style>
    </div>
  </>);
}

export default ThemeProvider;