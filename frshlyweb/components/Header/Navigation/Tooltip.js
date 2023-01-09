import styles from './tooltip.module.css';

const Tooltip = () => {

    return (
        <div className={styles.tooltip}>Hover over me
            <span className={styles.tooltiptext}>Tooltip text</span>
        </div>
    )
}