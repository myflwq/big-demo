# `BUG`学习示例

> 补充http://www.jianshu.com/p/9780a302e509

***

> Waring:setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the News component.


>>```componentWillMount() {}```或```componentDidMount() {}```中使用计时器```setInterval```，组件停用前需卸载，在```componentWillUnmount() {}```中使用```clearInterval```停用计时器

***

> setState(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.

>>```render()```函数中无法在现有的状态更新转换，render的应该是纯粹的，```state```和```props```的改变可以放在```componentWillMount```中，但state的值已经改变

***

> 前面用cfetch取值取不到，传给组件的值为空，无法显示


>>在调用组件的地方判断传过来的值是否为空，不为空再显示  ```{this.props.data ? this.state.description : null}```
