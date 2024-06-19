import { createBoard } from '@wixc3/react-board';
import { Simple } from '../../../components/simple/simple';

export default createBoard({
    name: 'Simple',
    Board: () => <Simple />,
    isSnippet: true,
});
