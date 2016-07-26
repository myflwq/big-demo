import React, { Component } from 'react';
import map from 'lodash/fp/map';
import BlogCard from './BlogCard.js';

let blogs = [
  {index:'1', title:'这是第一天',data:'2016.7.19'},
  {index:'2', title:'这是第二天',data:'2016.7.21'},
  {index:'3', title:'这是第三天',data:'2016.7.22'},
  {index:'4', title:'这是第四天',data:'2016.7.22'},
  {index:'5', title:'这是第五天',data:'2016.7.22'},
  {index:'6', title:'这是第六天',data:'2016.7.22'},
  {index:'7', title:'这是第七天',data:'2016.7.22'}
]

class List extends Component {
  render(){
  // console.log(Cards.length);
  var blogCards = [];
  map((b) =>  {
                blogCards.push(
                  <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>
                );
              },
      blogs
  );
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
