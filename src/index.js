import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header.js';
import List from './components/List/List.js';
import Footer from './components/Footer/Footer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme()};//传值myTheme改变颜色
  }
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){
    this.setState({
      search:x
    })
  }
  render () {
    return(
      <div>
        
        <Header change={this.cardSearch.bind(this)}/>
        <List search={this.state.search}/>
        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


render(<App />, document.getElementById('root'));
