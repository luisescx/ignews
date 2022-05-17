import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span className={styles.welcome}>👏 Hey, welcome</span>

          <h1 className={styles.title}>
            News about the <span>React</span> world.
          </h1>

          <p className={styles.description}>
            Get access to all the publication
            <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <Image
          src="/images/avatar.svg"
          alt="ig.news"
          width={334}
          height={520}
        />
      </main>
    </>
  );
}
