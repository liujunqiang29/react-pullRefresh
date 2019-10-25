# react-pullRefresh
react下拉刷新，上滑加载组件，解决了微信等浏览器卡顿等问题，希望经过市场的验证

<PullRefresh
      onPull={(f)=>{ //下拉刷新的回调,参数为一个回调函数，执行回调函数时说明下拉刷新已完成，会恢复正常状态，如果不需要下拉刷新，置为null
       setTimeout(f,1000)
      }}
      needLoadMore={false}  //为false时没有上滑加载跟多功能，这个可以根据请求的list决定是否为true
      onLoadMore={(r，f)=>{   //下拉刷新事件执行,俩个回调参数r,f ，执行r()时,才可以进入下一页的请求，执行f()时说明所有的请求已完毕，下方会展示无更多内容
           setTimeout(r,1000)
         }}
      windowScroll={false}  //是否直接在window的scroll中使用，为false时组件的高度为100%，需要父元素有一个高度，百分比也可，这样组件可在里面滚动，
            >
            <div>需要下拉包裹的元素</div>
<PullRefresh>
