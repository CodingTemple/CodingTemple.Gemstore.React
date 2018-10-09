import Main from './components/Main';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    gems: state.default
  }
}

const App = connect(mapStateToProps)(Main)

export default App