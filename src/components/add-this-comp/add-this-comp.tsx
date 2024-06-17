import classNames from 'classnames';
import styles from './add-this-comp.module.scss';

export interface AddThisCompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddThisComp = ({ className }: AddThisCompProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
        </div>
    );
};
