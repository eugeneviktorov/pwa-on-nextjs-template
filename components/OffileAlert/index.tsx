import styles from "./OffileAlert.module.css";

export default function OfflineAlert() {
  return (
    <div className={styles.container}>
      <div className={styles.alert}>No internet</div>
    </div>
  );
}
