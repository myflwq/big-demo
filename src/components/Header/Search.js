import React from 'react';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';
class Search extends React.Component {
  getStyles() {
    return {
      root: {
        height:'100px',
        width:'30%',
        margin:'0 auto',
        color: '#fff',
        textAlign:'center',
        lineHeight:'50px',
        fontSize: '30px',
      }
    }
  }
  render () {
    const styles = this.getStyles();
    const under = {
      underlineStyle: {
        borderColor: white,
      }
    }
    const input = {
      inputStyle:{
        color:white
      }

    }
    return(
      <div style={styles.root}>
        <p>ALL</p>
        <TextField
           hintText="搜索"
           fullWidth={true}
           underlineFocusStyle={under.underlineStyle}
           inputStyle={input.inputStyle}
         />
      </div>
    )
  }
}

export default Search;
