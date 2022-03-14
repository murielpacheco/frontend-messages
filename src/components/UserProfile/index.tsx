import styles from "./styles.module.scss";

export function UserProfile() {
   return (
      <section className={styles.userContainer}>
         <div className={styles.userAvatar}></div>
         <span className={styles.userName}>Muriel Damazio</span>
         <span className={styles.userLocation}>Florianópolis, Brazil</span>

         <div className={styles.userInfos}>
            <button className={styles.userInfosItem}>Profile</button>
            <button className={styles.userInfosItem}>About</button>
            <button className={styles.userInfosItem}>Socials</button>
         </div>
      </section>
   )
}