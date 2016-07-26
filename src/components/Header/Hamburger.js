import React from 'react';
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
export default class Hamburger extends React.Component{
  render(){
    let styles={
      icon:{
        marginLeft:'8x',
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
        <IconButton  style={styles.icon} iconStyle={styles.svg}>
          <MenuButton  color='#fff'/>
        </IconButton>
      </div>
    )
  }
}
