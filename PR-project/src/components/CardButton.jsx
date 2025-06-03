import styles from "../assets/button.module.css"

export const CardButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.text}>View details</span>
    </button>
  )
}