import styles from "./styles.module.scss";

export function UsersBar() {
   return (
      <aside className={styles.usersBar}>
         <ul className={styles.usersList}>
            <li className={styles.usersPictures}></li>
            <li className={styles.usersPictures}></li>
            <li className={styles.usersPictures}></li>
            <li className={styles.usersPictures}></li>
         </ul>
      </aside>
   )
}