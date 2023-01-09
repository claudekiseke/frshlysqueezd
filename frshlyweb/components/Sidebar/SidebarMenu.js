import React, { useState } from "react";
import styles from "./sidebar.module.css";

const SidebarMenu = ({ linkTitle, subLink }) => {

    const [isActive, setActive] = useState(false);

    return (
        <>
            <button className={`${styles.sidebar__link} ${styles.sidebar__parentlink}${isActive ? " " + styles.active : ""}`} onClick={() => setActive(!isActive)} type="button" data-toggle="collapse" aria-expanded={isActive ? "true": "false"}>{linkTitle}</button>
            {isActive && <ul className={styles.sidebar__submenu}>{subLink}</ul>}
        </>
    );
}

export default SidebarMenu;