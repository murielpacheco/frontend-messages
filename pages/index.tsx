import { UserProfile } from "../src/components/UserProfile";
import { Timeline } from "../src/components/Timeline";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.homeContainer}>
        <UserProfile />
        <Timeline />
      </main>
    </>
  );
}