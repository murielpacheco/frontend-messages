import { FaEdit, FaTrash } from "react-icons/fa"
import styles from "./styles.module.scss"

export function Message() {
   return (
      <section className={styles.messagesWrapper}>
         <textarea className={styles.textarea} name="message" id="message" placeholder="What's happening?" />
         <div className={styles.messagesFuncs}>
                  <div>
                     <FaEdit size={18}/>
                     <FaTrash size={18} />
                  </div>
                  <button className={styles.messagesButton}>Enviar</button>
               </div>
      </section>
   )
}