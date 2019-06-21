var leftImg = [];//左容器图片
var rightImg = [];//右容器图片
Page({
    data: {
        imgList: [
            '../../images/2.jpeg',
            '../../images/4.jpeg',
            '../../images/1.jpeg',
            '../../images/5.jpeg',
            '../../images/7.jpeg',
            '../../images/6.jpeg',
            '../../images/8.jpeg',
            '../../images/3.jpeg',
            '../../images/9.jpeg',
            '../../images/10.jpeg',
            '../../images/11.jpeg',
        ],
        imgLeft: [],
        imgRight: [],
        lHeight: 0,
        rHeight: 0,
        imgWidth: 0,
        imgHeight: 0
    },
    imgLoad: function(e) {
      console.log(e)
        //图片原始宽度
        let beforeWidth = e.detail.width; 
        //图片原始高度
        let beforeHeight = e.detail.height; 
        //图片设置的宽度
        let nowWidth = this.data.imgWidth; 
        //比例=图片原始宽度/图片设置的宽度
        let wProportion = beforeWidth / nowWidth;
        //图片设置的高度=图片原始高度/比例
        let imgHeight = beforeHeight / wProportion;

        //当左区域高=右区域高   或   当左区域高<右区域高
        if (this.data.lHeight == this.data.rHeight || this.data.lHeight < this.data.rHeight) {
            leftImg.push(e.target.dataset.url)
            this.setData({
                lHeight: this.data.lHeight + imgHeight
            })
            //当左区域高>右区域高
        } else if (this.data.lHeight > this.data.rHeight) {
            rightImg.push(e.target.dataset.url)
            this.setData({
                rHeight: this.data.rHeight + imgHeight
            })
        }
        //当完成最后一次分组        
        if (e.target.dataset.index == this.data.imgList.length - 1) {
            this.setData({
                imgLeft: leftImg,
                imgRight: rightImg,
                imgList: []
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    imgWidth: res.windowWidth * 0.48,
                })
            },
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {

    }
})