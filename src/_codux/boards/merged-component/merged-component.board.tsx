import { createBoard } from '@wixc3/react-board';
import { MergedComponent } from '../../../components/merged-component/merged-component';

export default createBoard({
    name: 'MergedComponent',
    Board: () => <MergedComponent />,
    isSnippet: true,
});
