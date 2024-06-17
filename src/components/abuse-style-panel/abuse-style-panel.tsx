import classNames from 'classnames';
import styles from './abuse-style-panel.module.scss';

export interface AbuseStylePanelProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AbuseStylePanel = ({ className }: AbuseStylePanelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Heading 1</h1>
            <div className={styles.wraprap}>
                <p>This is a paragraph.</p>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imgmg}
                />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imgmg}
                />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imgmg}
                />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imgmg}
                />
                <div className={styles.imgwrrap}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.imgmg}
                    />
                </div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imgmg}
                />
                <span>text</span>
            </div>
            AbuseStylePanel
        </div>
    );
};
