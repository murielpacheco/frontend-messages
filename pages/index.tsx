import { UserProfile } from "../src/components/UserProfile";
import { Timeline } from "../src/components/Timeline";

import styles from "../styles/Home.module.scss";
import { UsersBar } from "../src/components/UsersBar";

export default function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <UserProfile />
        <Timeline />
        <UsersBar />
      </div>
    </>
  );
}