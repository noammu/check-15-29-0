import classNames from 'classnames';
import styles from './elem-tree.module.scss';
import { useState } from 'react';

export interface ElemTreeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ElemTree = ({ className }: ElemTreeProps) => {
    const [num, setNum] = useState(0);

    const handleOnMouseUp = () => setNum((prev) => prev + 1);

    return (
        <div className={classNames(styles.root, className)}>
            <div>I&apos;m an empty board, woohoo!</div>
            <div>I&apos;m an empty board, woohoo!</div>
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <div>
                    <input type="text" />
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <div>
                        <input type="checkbox" />
                    </div>
                </div>
                <div>
                    <input type="checkbox" />
                </div>
            </form>
            <article></article>
            <div>
                <span>&lt;Noam Musba&gt; is Here &#123;woohoo&#125;</span>
            </div>
            <div>
                <button onPointerDown={handleOnMouseUp} onPointerUp={handleOnMouseUp}>
                    click me
                </button>
                <div>{num}</div>
                <button>Button2</button>
                <pre />
                <pre />
                <p>paragraph</p>
            </div>
            <footer>
                <div>
                    <ul>
                        <li>Coffee</li>
                        <br />
                        <li>Tea</li>
                        <br />
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};
