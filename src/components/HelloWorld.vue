<template>
  <div></div>
</template>

<script>
let videoFirst = 0; //第一次初始化
export default {
  data() {
    let that = this;
    return {
      swiperOption: {
        direction: "vertical",
        observer: true,
        width: window.innerWidth,
        height: window.innerHeight,

        watchOverflow: true,
        autoHeight: true,
        autoplay: false,
        pagination: false,
        on: {
          reachEnd() {
            if (videoFirst === 1) {
              that.popularVideo.push({
                Video: {
                  userId: "4617f00b-295d-48b4-8d06-70a92b5e32e5",
                  userAvatar: "/assets/avatar/default.png",
                  userNickname: "95d-4",
                  videoId: "d0a5e902-2912-45f6-848e-2f3d874519f4",
                  videoCover:
                    "https://images.pexels.com/photos/3722196/pexels-photo-3722196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  videoDesc:
                    "11月19日，盖茨发表长文向大家推荐美剧《硅谷》，称其是为数不多的好作品，自己惊讶于很少有现代流行文化作品能很好地向外界呈现硅谷。盖茨还放话，只要它续更，我愿意一直追下去！",
                  videoPath:
                    "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
                  like: false
                },
                WSLCNum: {
                  shareNum: "3",
                  watchNum: "27",
                  commentNum: "17",
                  likeNum: "12"
                }
              });
            }
            console.log(that.popularVideo, "popularVideo");
            // 手指触碰拖动最后一张时执行
          },
          slideChangeTransitionEnd() {
            // console.log(this.realIndex,"this");
            that.$refs.video.pause();
            that.showVideo = that.popularVideo[this.realIndex];
            if (this.realIndex === 0) {
              that.popularVideo[this.realIndex].show = false;
              that.popularVideo[this.realIndex + 1].show = false;
            } else {
              that.popularVideo[this.realIndex - 1].show = false;
              that.popularVideo[this.realIndex].show = false;
              that.popularVideo[this.realIndex + 1].show = false;
            }
            that.show = false;
            // that.clickSwiper(this.realIndex);
            //切换结束时，告诉我现在是第几个slide
          }
        }
      },
      popularVideo: [],
      showVideo: {
        Video: {
          userId: "4617f00b-295d-48b4-8d06-70a92b5e32e5",
          userAvatar: "/assets/avatar/default.png",
          userNickname: "95d-4",
          videoId: "d0a5e902-2912-45f6-848e-2f3d874519f4",
          videoCover:
            "https://images.pexels.com/photos/3563626/pexels-photo-3563626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          videoDesc:
            "11月19日，盖茨发表长文向大家推荐美剧《硅谷》，称其是为数不多的好作品，自己惊讶于很少有现代流行文化作品能很好地向外界呈现硅谷。盖茨还放话，只要它续更，我愿意一直追下去！",
          videoPath:
            "https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4",
          like: false
        },
        WSLCNum: {
          shareNum: "3",
          watchNum: "27",
          commentNum: "17",
          likeNum: "12"
        }
      },
      show: false,
      like: false,
      likeNum: 0,
      isPlay: false,
      amount_id: ""
    };
  },
  activated() {
    window.scroll(0, 0);
  },
  mounted() {
    setTimeout(() => {
      this.popularVideo = [
        {
          Video: {
            userId: "4617f00b-295d-48b4-8d06-70a92b5e32e5",
            userAvatar: "/assets/avatar/default.png",
            userNickname: "95d-4",
            videoId: "d0a5e902-2912-45f6-848e-2f3d874519f4",
            videoCover:
              "https://images.pexels.com/photos/4996652/pexels-photo-4996652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            videoDesc:
              "11月19日，盖茨发表长文向大家推荐美剧《硅谷》，称其是为数不多的好作品，自己惊讶于很少有现代流行文化作品能很好地向外界呈现硅谷。盖茨还放话，只要它续更，我愿意一直追下去！",
            videoPath:
              "https://dev4.yunzmall.com/attachment/videos/8/2019/07/B745SC4Rj073340O85rs54v04g5vt4.mp4",
            like: false
          },
          WSLCNum: {
            shareNum: "3",
            watchNum: "27",
            commentNum: "17",
            likeNum: "12"
          }
        },
        {
          Video: {
            userId: "4617f00b-295d-48b4-8d06-70a92b5e32e5",
            userAvatar: "/assets/avatar/default.png",
            userNickname: "95d-4",
            videoId: "d0a5e902-2912-45f6-848e-2f3d874519f4",
            videoCover:
              "https://images.pexels.com/photos/5335225/pexels-photo-5335225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            videoDesc:
              "11月19日，盖茨发表长文向大家推荐美剧《硅谷》，称其是为数不多的好作品，自己惊讶于很少有现代流行文化作品能很好地向外界呈现硅谷。盖茨还放话，只要它续更，我愿意一直追下去！",
            videoPath:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
            like: false
          }
        },
        {
          Video: {
            userId: "4617f00b-295d-48b4-8d06-70a92b5e32e5",
            userAvatar: "/assets/avatar/default.png",
            userNickname: "95d-4",
            videoId: "d0a5e902-2912-45f6-848e-2f3d874519f4",
            videoCover:
              "https://images.pexels.com/photos/5047559/pexels-photo-5047559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            videoDesc:
              "11月19日，盖茨发表长文向大家推荐美剧《硅谷》，称其是为数不多的好作品，自己惊讶于很少有现代流行文化作品能很好地向外界呈现硅谷。盖茨还放话，只要它续更，我愿意一直追下去！",
            videoPath:
              "https://dev5.yunzmall.com/attachment/videos/2/2019/05/LszWwVEewJeWWWcZ46nbcwNCqEWJqQ.mp4",
            like: false
          },
          WSLCNum: {
            shareNum: "3",
            watchNum: "27",
            commentNum: "17",
            likeNum: "12"
          }
        }
      ];
    }, 300);
    videoFirst = 1;
  },
  computed: {
    VideoItemHeightStyle() {
      let clientWidth = window.innerWidth;
      let clientHeight = window.innerHeight;
      return {
        height: clientHeight  + "px",
        width: clientWidth + "px"
      };
    }
  },
  methods: {
    toGood() {
      console.log("togoodddddddddddddddddddddddddd");
    },
    toggleLike(i) {
      console.log("222222", i);
      console.log(i.Video.like);
      i.Video.like = !i.Video.like;
      console.log(i.Video.like);
    },
    clickSwiper(index) {
      if (
        this.popularVideo[index].show &&
        this.amount_id === this.popularVideo[index].Video.videoId
      ) {
        this.show = false;
        this.popularVideo[index].show = false;
        this.$refs.video.pause();
        return;
      }
      this.show = true;
      this.amount_id = this.popularVideo[index].Video.videoId;
      this.$set(this.popularVideo[index], "show", true);

      this.$refs.video.play();
      // console.log(this.$refs.video);
    },
    watchHandler() {
      // this.$axios
    }
  }
};
</script>

<style>
</style>