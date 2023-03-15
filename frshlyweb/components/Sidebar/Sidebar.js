import SidebarMenu from "./SidebarMenu";
import styles from "./sidebar.module.css";
import Modal from "../Modal/Modal";

const Sidebar = ({ sidebar, links, setFilter, showModal, setShowModal, modal, submitResource }) => {
    const link = sidebar.map((item, index) => {
        const id = item.sys.id;

        const matchingLink = links.items.map((item, index) => {
            const matchingId = item.sys.id;


            if ((id === matchingId) && (item.fields.subLink)) {
                const linkTitle = item.fields.linkTitle;
                const subMenu = item.fields.subLink;
                const subLink = subMenu.map((item, index) => {
                    const linkTitle = item.fields.linkTitle;
                    let className = item.fields.className;

                    const filterLink = () => {
                        if (className && !(className.includes('modal'))) {
                            setFilter(className);
                        }
                    }

                    if (className && className.includes('modal')) {
                        return (
                            <Modal className={className} linkTitle={linkTitle} showModal={showModal} setShowModal={setShowModal} modal={modal} key={index} submitResource={submitResource} />
                        );
                    } else {
                        return (
                            <li className={styles.sidebar__listitem} key={index}>
                                <button className={`${styles.sidebar__link} ${className}`} onClick={filterLink}>{linkTitle}</button>
                            </li>
                        );
                    }
                });

                return (
                    <div key={index}>
                        <SidebarMenu linkTitle={linkTitle} subLink={subLink} />
                    </div>
                );

            } else if (id === matchingId) {
                const linkTitle = item.fields.linkTitle;
                let className = item.fields.className;

                const filterLink = () => {
                    if (className && !(className.includes('modal'))) {
                        setFilter(className);
                    }
                }

                if (className && className.includes('modal')) {
                    return (
                        <Modal className={className} linkTitle={linkTitle} showModal={showModal} setShowModal={setShowModal} modal={modal} key={index} submitResource={submitResource} />
                    );
                } else {
                    return (
                            <button className={`${styles.sidebar__link} ${className}`} onClick={filterLink} key={index}>{linkTitle}</button>
                    );
                }
            }
        })

        return (
            <li className={styles.sidebar__listitem} key={index}>
                {matchingLink}
            </li>
        );
    })

    return (

        <aside className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                {link}
            </ul>
        </aside>

    )

}

export default Sidebar;