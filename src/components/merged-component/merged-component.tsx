import classNames from 'classnames';
import styles from './merged-component.module.scss';

export interface MergedComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MergedComponent = ({ className }: MergedComponentProps) => {
    return <div className={classNames(styles.root, className)}>OMG, I&apos;ve been merged!!!</div>;
};
