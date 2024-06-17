import { ElemTree } from './components/elem-tree/elem-tree';
import { AddThisComp } from './components/add-this-comp/add-this-comp';
import { Griddy } from './components/griddy/griddy';
import { AbuseStylePanel } from './components/abuse-style-panel/abuse-style-panel';
import App_module from './App.module.scss';
import Classnames from 'classnames';

function App() {
    return (
        <div>
            <AbuseStylePanel
                className={Classnames(
                    App_module.cvnb,
                    App_module.sdf,
                    App_module.xbgnhjhju,
                    App_module.gh,
                    App_module.cvbnxcsd,
                    App_module.aaswq,
                    App_module.erujk,
                    App_module.klpo,
                    App_module.hjbnmfdg,
                    App_module.xcvb,
                    App_module.fghkui,
                    App_module.ljkl,
                    App_module.nmnm,
                    App_module.qweqa,
                    App_module.qweqassssss,
                )}
            />
            <Griddy />
            <div>
                <ElemTree />
            </div>
            <div>
                <AddThisComp />
            </div>
        </div>
    );
}

export default App;
