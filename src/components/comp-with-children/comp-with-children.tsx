import classNames from 'classnames';
import styles from './comp-with-children.module.scss';

export interface CompWithChildrenProps {
    className?: string;
    children?: string;
    propy: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CompWithChildren = ({ className, children, propy }: CompWithChildrenProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {children}
            <span>propy is: {propy}</span>
        </div>
    );
};
