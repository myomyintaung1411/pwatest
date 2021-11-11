<template>
  <div id="app">
    <router-view />
    <!-- <div v-if="deferredPrompt"  style=" text-align:center;color:red">
      Get our free app. It won't take up space on your phone and also works offline!
      <div class="center-btn">
        <button text @click="dismiss">Dismiss</button>
        <button text @click="install">Install</button>
      </div>
    </div>
    <div  style="padding:20px; text-align:center">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <h1>Customize Your Vue.js PWA Installation</h1>
    </div>-->
    <div v-if="deferredPrompt" class="banner">
      <div class="add_home_screen">Add to Home Screen</div>
      <div class="image_sec">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <div>
          <h1>Customize Your Vue.js PWA Installation</h1>
        </div>
      </div>
      <div class="btn">
        <button @click="dismiss">Dismiss</button>
        <button @click="install">Install</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: null,
    };
  },
  methods: {
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    },
  },
  created() {
    // pwa service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((reg) => {
            console.log("Registration succeeded. Scope is " + reg.scope);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.banner {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #fff;
  border-radius: 20px;
  position: absolute;
  top: 5%;
  z-index: 100;
  width: auto;
}
.add_home_screen {
  color: #000;
}
.image_sec {
  display: flex;
  align-items: center;
  margin: 5px 0px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  margin: 0 10px;
  outline: none;
  border: none;
  padding: 5px;
  background: rgba(0, 0, 0, 0.644);
  color: #fff;
  border-radius: 5px;
}
</style>
