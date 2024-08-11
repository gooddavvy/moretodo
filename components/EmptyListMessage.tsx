import React from "react";
import styles from "@/app/page.module.css";

export default function EmptyListMessage(): React.ReactNode {
  return (
    <div
      className={styles.card + " " + styles.center}
      style={{
        marginTop: "3%",
        textAlign: "center",
        justifyContent: "center !important",
      }}
    >
      <h2>Whoops!</h2>
      <p>
        It looks like there's no todo items at the moment. But remember, there's
        always something more to do. Go ahead and create a MORETODO item!
      </p>
    </div>
  );
}
