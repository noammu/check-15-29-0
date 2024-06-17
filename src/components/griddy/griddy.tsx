import classNames from 'classnames';
import styles from './griddy.module.scss';
import TypescriptSvg from '../../assets/typescript.svg?react';
import ProfilePicJpg from '../../assets/profile       pic.jpg';
import EspeonPng from '../../assets/espeon.png';

export interface GriddyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Griddy = ({ className }: GriddyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.grid}>
                <h2>Replace sksks</h2>
                <a href="https://google.com" target="_blank">
                    lets go to &quot;google&quot;
                </a>
                <a href="/">something to copy from?</a>
                <TypescriptSvg />
                <img src={EspeonPng} height="50" className={styles.esp} />
                <img src={ProfilePicJpg} height="75" className={styles.nom} />
                <audio
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
                />
                <a />
            </div>
        </div>
    );
};
