import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DummyActions from './../actions/dummy-actions.js';

import FirstComponent from './../components/firstComponent.js';
import SecondComponent from './../components/secondComponent.js';
import NameComponent from './../components/NameComponent.js';
import AdditionalComponent from './../components/AdditionalComponent.js';

class HomePage extends Component {
    render() {
        return (
            <div>
               <h1>Welcome</h1>
               <FirstComponent/>
                <br/>
               <SecondComponent/>
               <NameComponent firstName={'Andra'} lastName={'Lally'} age={18}/>
               <hr/>
               <NameComponent firstName={'Victor'} lastName={'Asante'}/>
                <AdditionalComponent/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dummyActions: bindActionCreators(DummyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
