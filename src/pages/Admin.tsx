import { Header } from "../components/Header";
import { Table } from "../components/Table";

import styles from './admin.module.scss';

export function Admin() {
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <Table />
      </main>
    </div>
  );
}