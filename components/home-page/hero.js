import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.jpg"
          alt="An image showing Mx"
          width={300}
          height={300}
        />
      </div>
      <h1>Hii , Mitanshu Sailor is here</h1>
      <p>
        I blog about web development-especially frontend Frameworks like Angular
        or React
      </p>
    </section>
  );
}
export default Hero;
