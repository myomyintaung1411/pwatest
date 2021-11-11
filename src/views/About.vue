<template>
  <div
    style="width:100%;height:100%;position:fixed;

  "
  >
    <div style="position:absolute;background-color:;width:100%;;height:50px;padding:10px;">
      <date-pick v-model="date" style="padding-right:10px;" :weekdays="weekdays" :months="months">
        <template v-slot:default="{toggle, inputValue}">
          <button @click="toggle">{{ inputValue || 'Toggle calendar' }}</button>
        </template>
      </date-pick>
      <date-pick v-model="enddate" :weekdays="weekdays" :months="months">
        <template v-slot:default="{toggle, inputValue}">
          <button @click="toggle">{{ inputValue || 'Toggle calendar' }}</button>
        </template>
      </date-pick>
    </div>
    <div
      style="width:50px;height:30px;background-color:#ccc;position:absolute;bottom:10%;left:50%"
      @click="Testtoast"
    >
      <p style="line-height:30px;text-align:center">Click</p>
    </div>
  </div>
</template>

<script>
import "vue-date-pick/dist/vueDatePick.css";
import DatePick from "vue-date-pick";
export default {
  components: { DatePick },
  data: () => ({
    date: "",
    enddate: "",
    weekdays: ["一", "二", "三", "四", "五", "六", "日"],
    months: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ]
  }),
  methods: {
    Testtoast() {
      console.log("hellllllotestiiingggggggg");
      this.$toast(this.weekdays);
    }
  }
};
</script>
<style scoped>
div >>> .vdpInnerWrap {
  width: 160px;
  height: 260px;
  min-width: 220px;

  position: absolute;
  top: 60%;
}
div >>> .vdpOuterWrap.vdpPositionFixed {
  position: absolute !important;
  /* left: 50%;
  top: 80%; */
  /* bottom: 0;
  right: 0; */
  /* padding: 2em; */
  /* display: -ms-flexbox;
  display: -webkit-box;
  display: flex; */
  /* -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center; */
  background-color: rgba(0, 0, 0, 0.3);
}
div >>> .vdpComponent {
  position: relative;
  display: inline-block;
  font-size: 10px;
  color: #303030;
  background: blue;
  /* left: 10%; */
  /* width: auto; */
}
/* div >>> .vdpComponent button {
  background-color: pink;

  border-radius: 15px;
  height: 35px;
  font-size: 3.5vw;
} */
button {
  border-radius: 1px;
  height: 25px;
  width: 150px;
  font-size: 4vw;
  background-color: #8E24AA;
  border: 1px solid #ccc;
}
</style>