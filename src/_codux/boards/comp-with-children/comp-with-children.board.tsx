import { createBoard } from '@wixc3/react-board';
import { CompWithChildren } from '../../../components/comp-with-children/comp-with-children';

export default createBoard({
    name: 'CompWithChildren',
    Board: () => <CompWithChildren propy={0}>I am a child!</CompWithChildren>,
    isSnippet: true,
});
