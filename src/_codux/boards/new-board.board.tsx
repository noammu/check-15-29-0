import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div>I&apos;m an empty board, woohoo!</div>,
    isSnippet: true,
});
