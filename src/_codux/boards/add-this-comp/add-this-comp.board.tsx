import { createBoard } from '@wixc3/react-board';
import { AddThisComp } from '../../../components/add-this-comp/add-this-comp';

export default createBoard({
    name: 'AddThisComp',
    Board: () => {
        
        return (
            <>
                <span>this is a board code!</span>
                <AddThisComp />
            </>
        )
        
    },
    isSnippet: true,
});
