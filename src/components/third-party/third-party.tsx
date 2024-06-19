import classNames from 'classnames';
import styles from './third-party.module.scss';
import { Button, Grid, Segment } from 'semantic-ui-react';

export interface ThirdPartyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ThirdParty = ({ className }: ThirdPartyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Button color="linkedin">linkedin</Button>
            ThirdParty
            <div style={{ width: '450px' }}>
                <Grid columns={3} divided className={styles.sdf}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment>1 bliblablu</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                            <Segment>2</Segment>
                            <Segment>2</Segment>
                            <Segment>2</Segment>
                            <Segment>2</Segment>
                            <Segment>2</Segment>
                            <Segment>2</Segment>
                            <Segment>2</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                            <Segment>3</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
};
