import React from 'react';
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
import NavBar from './NavBar';
export default class Hamburger extends React.Component{
  handelOpen(){
    this.refs.navbar.handleToggle();
  }
  render(){
    let styles={
      icon:{
        width: '52px',
        height: '52px',
        position:'absolute',
        top:'8px',
        left:'8px'
      },
      svg: {
        width: '32px',
        height: '32px',

      }
    }

    return (
      <div>
      <IconButton tooltip="menu" style={styles.icon} iconStyle={styles.svg} onClick={this.handelOpen.bind(this)}>
      <MenuButton  color='#fff'/>
    </IconButton>
        <NavBar ref='navbar'/>
      </div>
    )
  }
}
