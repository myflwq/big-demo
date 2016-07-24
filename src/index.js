import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme()};//传值myTheme改变颜色
 }
  render () {

    return(
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


render(<App />, document.getElementById('root'));
