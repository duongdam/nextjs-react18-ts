import React from 'react';
import styles from "../../../styles/Home.module.css";

type FootersProps = {}

function Footer(props: FootersProps) {
    return (
        <footer className={styles.footer}>
            Copyright (C) 2022 ClassFunc - duongdam All Rights Reserved.
        </footer>
    );
}

export default React.memo(Footer);