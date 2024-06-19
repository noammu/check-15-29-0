import { createBoard } from '@wixc3/react-board';
import { CompWithChildren } from '../../../components/comp-with-children/comp-with-children';

const dor = {
    name: 'Dor',
    color: 'navy',
    age: 28,
};

export default createBoard({
    name: 'CompWithChildren',
    Board: () => (
        <CompWithChildren propy={0} dor={dor}>
            I am a child!
        </CompWithChildren>
    ),
    isSnippet: true,
});
