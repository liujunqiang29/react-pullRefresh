import React, {Component} from 'react'
import './index.scss'
import './iconfont'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            marginTop: 0,
            loading: false,
            isLoadMore: false,
            noMore: false
        }
    }

    static defaultProps = {
        windowScroll: true,//是否需要在window下面滑动，false时组件高度为父元素的100%
        loadMoreIcon: <p className={'pullRefresh-hint'}>
            <svg className={'pullRefresh-hint-loadMore-text'} aria-hidden="true">
                <use xlinkHref="#icon-loading"></use>
            </svg>
            <span className={'pullRefresh-hint-loadMore-text'}> 玩命加载中...</span>
        </p>,
        noMoreHint: <p className={'pullRefresh-hint'}>没有更多了</p>,
        loaderDefaultIcon: (progress) => {
            let style = {
                transform: `rotate(-${progress !== 100 ? progress * 1.8 : 0}deg)`,
                color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
            };
            return (
                <div className="pullRefresh-loading-icon">
                    {progress < 100 && <svg style={style} className={'pullRefresh-xiala-icon'} aria-hidden="true">
                        <use xlinkHref="#icon-xiala"></use>
                    </svg>}
                    {progress === 100 && <svg style={style} className={'pullRefresh-xiala-icon'} aria-hidden="true">
                        <use xlinkHref="#icon-duihao"></use>
                    </svg>}
                </div>

            );
        },
        loaderLoadingIcon: <svg className="pullRefresh-loading-icon" aria-hidden="true">
            <use xlinkHref="#icon-loading"></use>
        </svg>,
        onPull(f) {
            setTimeout(() => {
                f()
            }, 1000)
        },
        onLoadMore(n, f) {
            setTimeout(() => {
                n()
            }, 2000)
        },
        needLoadMore: false, //是否需要loadMore功能
        loadMoreBottom: 200,//滑动过程中距离底部多少时触发onLoaMore
        upPullHint: <p className={'pullRefresh-hint'}>上拉加载更多...</p>,
        preventDefault: true //是否需要阻止默认行为，app的webView可以为false使滑动更流畅,一般像各大浏览器中需要改为true ,如果为true必须从top 0开始下拉才生效
    };

    componentDidMount() {
        const {onPull} = this.props;
        this.scrollElement.addEventListener('touchstart', (e) => {
            this.isUpPull = undefined;  //初始是否手指上滑
            this.isTouchY = undefined;  //初始是否是scrollY操作
            this.start_slider(e)

        })
        this.scrollElement.addEventListener('touchmove', (e) => {
            this.moveSlider(e)

        })
        if (onPull) {
            this.scrollElement.addEventListener('touchend', () => {
                const {marginTop} = this.state;
                const {onPull} = this.props;
                this.pullElement.style.transition = 'all 0.4s';
                if (marginTop === 100) {
                    this.setState({loading: true});
                    onPull(() => {
                        this.setState({
                            marginTop: 0,
                            loading: false
                        })
                    })
                } else {
                    this.setState({
                        marginTop: 0
                    })
                }

            })
        }

    }

    start_slider(e) {
        const {windowScroll} = this.props;
        let scrollWrap;
        if (windowScroll) {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let scrollHeight = document.documentElement.scrollHeight
            let clientHeight = document.documentElement.clientHeight
            scrollWrap = {scrollTop, scrollHeight, clientHeight}
        } else {
            scrollWrap = this.scrollElement
        }
        this.start = {
            X: e.touches[0].pageX,
            Y: e.touches[0].pageY,
            scrollTop: scrollWrap.scrollTop
        }
    }

    moveSlider = (e) => {
        const {windowScroll} = this.props;
        let scrollWrap;
        if (windowScroll) {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let scrollHeight = document.documentElement.scrollHeight
            let clientHeight = document.documentElement.clientHeight
            scrollWrap = {scrollTop, scrollHeight, clientHeight}
        } else {
            scrollWrap = this.scrollElement
        }
        this.slider(e, scrollWrap)
    }
    slider = (e, scrollEle) => {
        const {loadMoreBottom, needLoadMore, onPull, preventDefault} = this.props;
        let newTouchY = e.touches[0].pageY;
        let newTouchX = e.touches[0].pageX;
        if (this.isTouchY === undefined) {
            this.isTouchY = (Math.abs(newTouchY - this.start.Y)) - (Math.abs(newTouchX - this.start.X)) > 0
        }
        if (this.isUpPull === undefined) {
            this.isUpPull = newTouchY - this.start.Y < 0
        }
        if (this.isTouchY && onPull) {
            if (scrollEle.scrollTop < 1) {
                if ((newTouchY - this.start.Y) > 0) {
                    this.pullElement.style.transition = 'none';
                    if (preventDefault) {
                        if((this.start.scrollTop === 0) && (this.isUpPull === false)){
                            e.preventDefault();
                            let marginTop = newTouchY - this.start.Y - this.start.scrollTop;
                            if (marginTop > 100) {
                                marginTop = 100;
                            }
                            if (marginTop < 0) {
                                marginTop = 0;
                            }
                            this.setState({
                                marginTop: marginTop
                            })
                        }
                    } else {
                        let marginTop = newTouchY - this.start.Y - this.start.scrollTop;
                        if (marginTop > 100) {
                            marginTop = 100;
                        }
                        if (marginTop < 0) {
                            marginTop = 0;
                        }
                        this.setState({
                            marginTop: marginTop
                        })
                    }

                }
            }
        }
        if ((scrollEle.scrollHeight - scrollEle.clientHeight <= scrollEle.scrollTop + loadMoreBottom) && needLoadMore) {
            if (newTouchY < this.start.Y) {
                const {isLoadMore, noMore} = this.state;
                if (!isLoadMore && !noMore) {
                    this.setState({isLoadMore: true}, () => {
                        this.props.onLoadMore(() => {
                            this.setState({isLoadMore: false})
                        }, () => {
                            this.setState({isLoadMore: false, noMore: true})
                        })
                    })
                }
            }


        }

    }

    render() {
        const {marginTop, isLoadMore, noMore, loading} = this.state;
        const {onPull, needLoadMore, loaderLoadingIcon, loaderDefaultIcon, loadMoreIcon, noMoreHint, children, upPullHint, windowScroll} = this.props;
        return <div className={'pullRefresh ' + (!windowScroll ? 'pullRefresh-height-full-overflow-hidden' : '')}>
            {onPull &&
            <div style={{marginTop: -(100 - (marginTop))}}
                 ref={(ele) => {
                     this.pullElement = ele
                 }}
                 className={'pullRefresh-loading-wrap'}>
                {
                    loading ?
                        loaderLoadingIcon :
                        loaderDefaultIcon(marginTop)
                }
            </div>
            }

            <div
                ref={(ele) => {
                    this.scrollElement = ele
                }}
                className={'pullRefresh-content ' + (!windowScroll ? 'pullRefresh-height-full-overflow-scroll' : '')}>
                {children}
                {isLoadMore && loadMoreIcon}
                {noMore && noMoreHint}
                {needLoadMore && !isLoadMore && !noMore && upPullHint}
            </div>

        </div>
    }
}