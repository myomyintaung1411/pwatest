<template>
  <transition name="fade">
    <div v-show="visible">{{message}}</div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: ""
    };
  }
};
</script>

<style scoped>
div {
  /* padding: 15px 30px; */
  padding: 5px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 30px;
  line-height: 30px;
  width: 100%; */
  /* background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)); */
  border-top: 2px solid #daa520;
  border-bottom: 2px solid #daa520;
}
/* vue动画过渡效果设置 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>