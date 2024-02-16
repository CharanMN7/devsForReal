import "./lander.css";
import { AuthStuff } from "./lander_components/auth";

export const Lander = () => {
  return (
    <main>
      <section id="landing-text">
        <h1 className="manrope-800">devsForFun(🚀)</h1>
        <p className="roboto-regular">A cool place to hangout with devs from around the world!</p>
      </section>
      <AuthStuff />
    </main>
  );
};
