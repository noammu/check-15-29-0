import { createBoard } from '@wixc3/react-board';
import { ElemTree } from '../../../components/elem-tree/elem-tree';

export default createBoard({
    name: 'ElemTree',
    Board: () => <ElemTree />,
    isSnippet: true,
});
