"use client";

import styles from "./page.module.css";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
}
