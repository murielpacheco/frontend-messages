import styles from "./styles.module.scss";
import { Message } from "../Message";

export function Timeline() {
   return (
      <div className={styles.timelineContainer}> 
         <h1>Muriel Damazios mural</h1>
         <div className={styles.messagesContainer}>
            <Message/>
            <Message/>
            <Message/>
         </div>
      </div>
   )
}