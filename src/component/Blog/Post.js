import React, { PropTypes } from 'react'
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {hashHistory} from 'react-router';

class Post extends React.Component {
  constructor(){
    super();
    this.state={
      posts: '',
      wait:true
    }
  }
  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/myflwq/big-demo/master/posts/${this.props.params.title}.md?v=${Math.random()}`)
    .then((res) => {
      // console.log(res);
       this.setState({
         posts: res.data,
         wait:false
       });
    });
  }
  handleBack(){
    // console.log(hashHistory);
    hashHistory.goBack();
  }
  render () {
    let styles={
      smallIcon: {
        width: 32,
        height: 32,
      },
      small: {
        width: 52,
        height: 52,
        padding: 10,
        position:'absolute',
        top:'10px',
        right:'10px',
      },
    }
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
      let x = <div style={{margin:'0 auto',width:'130px',height:'200px'}}><p>正在加载......</p><CircularProgress size={1.5} /></div>;
      let y = <div
              dangerouslySetInnerHTML={{
            __html: marked(this.state.posts)
          }}
        />
    return(
      <div className = "post">

        <IconButton iconStyle={styles.smallIcon} style={styles.small} onClick={this.handleBack.bind(this)}>
          <ArrowBack color='#fff' />
        </IconButton>
        {this.state.wait ? x : y}
      </div>
    )
  }
}

export default Post;
