import BobaParagraph from "@/lib/components/BobaParagraph";
import BobaStrong from "@/lib/components/BobaStrong";
import Hero from "@/lib/components/Hero";
import ThemeProvider, { BobaProjectTheme } from "@/lib/components/ThemeProvider";

const FiretraceTheme: BobaProjectTheme = {
  accent1: "#ef6d2c",
  accent2: "#d8ef72",
  background1: "#010101",
  background2: "#efefef",
  text1: "#f0f0f0",
  text2: "#010101"
}

function Firetrace() {
  return (<>
    <ThemeProvider theme={FiretraceTheme}>
      <Hero>
        <div>
          <img src="https://raw.githubusercontent.com/jtpotato/firetrace/82539cb4739da2ad58bf742ad5b622c745b2aa17/assets/banner-transparent.svg" className="w-48" />
          <h1 className="text-[var(--accent1)] text-lg">Firetrace - Open and Accessible Bushfire Model</h1>
        </div>
      </Hero>
      <BobaParagraph direction={"left"}>
        <p>
          Introducing Firetrace, an AI model designed to predict the
          severity of Australian bushfires across the entire continent.
          Leveraging the ability of deep neural networks, Firetrace
          utilizes data from satellites and weather stations to project
          the scale of future fires.
        </p>
      </BobaParagraph>
      <BobaParagraph direction={"right"}>
        <h2>For Everyone</h2>
        <p>
          Historically, bushfire modelling has been a complex task,
          restricted to well-equipped scientific institutions, requiring
          vast amounts of domain-specific knowledge and computational power.
          The general population has never been able to experiment with
          models themselves and generate their own insights.
        </p>
        <p>
          Until now.
        </p>
        <p>Firetrace has been designed from the <BobaStrong>ground up</BobaStrong> specifically to
          ensure that the majority of people, without specialisation in fire
          management, are able to use this tool.</p>
      </BobaParagraph>
      <BobaParagraph direction={"left"}>
        <h2>Free. Forever.</h2>
        <p>
          We believe that any model pertaining to natural disasters and the
          safety of people, regardless of utility, should be free and open.
        </p>
        <p>
          Firetrace is currently free to use through the web interface - and
          the source code and models will forever be open source and
          avaliable to everyone to download.
        </p>
      </BobaParagraph>
      <BobaParagraph direction={"right"}>
        <h2>A Breakthrough in Simplicity ✨</h2>
        <p>
          As a result of our unwavering commitment to accessibility and ease
          of use, Firetrace only requires{" "}
          <BobaStrong>4 inputs</BobaStrong> to generate a
          prediction. These inputs (sometimes called "parameters" or
          "factors") are easy to understand and conceptualise for people
          without specific education. Never before have we seen a model
          capable of generating remotely accurate<sup>1</sup> predictions
          without milliions of data points ranging over several weeks.
        </p>
        <p className="text-xs">
          <sup>1</sup> As accurate as Firetrace may be, it is not a magical
          fortune-telling machine 🔮, and the insights the tool provides are
          quite limited. We{" "}
          <BobaStrong>strongly</BobaStrong> discourage using
          Firetrace as a mission-critical prediction tool.
        </p>
      </BobaParagraph>
      <BobaParagraph direction={"left"}>
        <h2>Trailblazing 🔥</h2>
        <p>
          Firetrace already pushes many boundaries in simplicity and
          accessibility, but we're not stopping there. Historically, many features of a weather model, such as a map, have only been possible when throwing more data at it. Due to our strong commitment to simplicity, we have been able to come up with an innovative solution utilising probability and historical precedence rather than slower, more data-intensive methods such as simulation, to provide a map view.
        </p>
      </BobaParagraph>
    </ThemeProvider>
  </>);
}

export default Firetrace;