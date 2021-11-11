<template>
  <div class="wrap">
    <div class="my-video works_wraps" v-show="show" :style="VideoItemHeightStyle">
      <video
        class="video"
        :src="showVideo.Video.videoPath"
        :poster="showVideo.Video.videoCover"
        webkit-playsinline="true"
        controlslist="nodownload"
        playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        preload="metadata"
        loop="loop"
        @loadeddata="watchHandler"
        ref="video"
      >
        <source :src="showVideo.Video.videoPath" type="video/mp4" />
      </video>
    </div>

    <swiper :options="swiperOption" v-if="popularVideo.length > 0">
      <swiper-slide v-for="(item, index) in popularVideo" :key="index">
        <div>
          <div class="works_wrap" v-show="!item.show" @click="clickSwiper(index)">
            <div class="poster">
              <img class="pic" :src="item.Video.videoCover" />
            </div>
            <div class="playWorks"></div>
            <img class="play" src="./ic_player_start.png" alt />
          </div>
          <!-- side bar -->
          <div class="side-bar">
            <div class="avatar">
              <img
                src="https://images.pexels.com/photos/3563626/pexels-photo-3563626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt
                width="40"
                height="40"
                @click.stop="chooseUser"
                style="border-radius:50%"
              />
            </div>
            <div class="useravatar">
              <img
                src="https://images.pexels.com/photos/3393705/pexels-photo-3393705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt
                width="40"
                height="40"
                @click.stop="chooseUser"
                style="border-radius:50%"
              />
            </div>
            <div class="like">
              <img
                v-if="item.Video.like==false"
                src="./tiktokheart.png"
                alt
                @click="toggleLike(item)"
              />
              <img
                v-if="item.Video.like==true"
                src="./titkokfullheart.png"
                alt
                @click="toggleLike(item)"
              />

              <span class="likenum">2</span>
            </div>
            <div class="share" style="font-size: 30px;">
              <img src="./sharereply.png" alt />
              <span class="sharenum">5</span>
            </div>
          </div>

          <div class="good-box" @click.stop="toGood">
            <p style="color:white; ">helloworld</p>
            <p style="color:white;  ">testingone two three</p>
          </div>
          <div class="play-video" v-if="item.show" @click="clickSwiper(index)"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import video_detail_controller from "@/components/HelloWorld";

export default video_detail_controller;
</script>

<style>
.works_wraps {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  height: 100% !important;
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  overflow: hidden;
}
.video {
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}

.up-enter,
.up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.wrap {
  width: 100%;
  height: 100% !important;
}
.icon-search {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  font-size: 24px;
  z-index: 222;
}
.scroll-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
/* .mack {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  opacity: 0.8;
  z-index: 98;
  display: none;
} */

.works_wrap {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  height: 100% !important;
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  overflow: hidden;
  margin-bottom: 120px;
}
.play {
  position: absolute;
  z-index: 11;
  left: calc(55% - 3rem);
  top: calc(50% - 3rem);
  width: 3rem;
  height: 3rem;
}
.swiper-slide .works_wrap .poster {
  /*background: #000000;*/
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide .works_wrap .poster .pic {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.swiper-slide .works_wrap .playWorks {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-size: auto 50px;
  background: #fff;
}

.good-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10;
  left: 0;
  bottom: 4rem;
  /* width: 8%; */
  height: 7rem;
  /* background: #ffffff; */
  /* background-color:red; */
  padding: 0.8rem;
}
/* .text-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 2rem;
  width: 70%;
  font-weight: bold;
} */
/* .good-img {
  margin-right: 0.5rem;
  width: 4rem;
  height: 4rem;
  flex: 0 0 4rem;
} */
img {
  width: 100%;
  height: 100%;
}
/* .desc {
  font-size: 16px;
  color: #333333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
} */
/* .price {
  font-size: 16px;
  color: #f15353;
  margin-right: 0.5rem;
}
.old-price {
  text-decoration: line-through;
  color: #8c8c8c;
  font-size: 12px;
} */

/* .cart {
  flex: 0 0 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 5rem;
} */
img {
  width: 100%;
  height: 100%;
}

.side-bar {
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 5rem;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
}
.avatar {
  position: relative;
  border-radius: 50%;
  background: none;
  border: 1px solid rgb(232, 232, 233);
}
.useravatar {
  position: relative;
  border-radius: 50%;
  background: none;
  border: 1px solid rgb(232, 232, 233);
}
/* img {
  border-radius: 50%;
} */
/* .follow {
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  width: 16px;
  height: 16px;
  font-size: 16px;
  border-radius: 50%;
  background: rgb(252, 52, 93);
} */

.like {
  position: relative;
}

.likenum {
  font-size: 10px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  color: rgb(232, 232, 233);
}
img {
  width: 40px;
  height: 40px;
}

.share {
  position: relative;
}
img {
  width: 40px;
  height: 40px;
}
.sharenum {
  font-size: 10px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  color: rgb(232, 232, 233);
}
.side-bar > div {
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: rgb(232, 232, 233);
  transition: all 0.3s;
}

.play-video {
  position: absolute;
  z-index: 9;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
}
</style>