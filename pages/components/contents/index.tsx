import React from 'react';
import styles from "../../../styles/Home.module.css";

type ContentsProps = {}

function MyContents(props: ContentsProps) {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                <a href="#">This is my contents!</a>
            </h1>
        </main>
    );
}

export default React.memo(MyContents);