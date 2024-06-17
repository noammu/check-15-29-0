import { createBoard } from '@wixc3/react-board';
import { AbuseStylePanel } from '../../../components/abuse-style-panel/abuse-style-panel';

export default createBoard({
    name: 'AbuseStylePanel',
    Board: () => <AbuseStylePanel />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 682,
    },
});
