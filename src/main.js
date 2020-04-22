import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// ここから追加
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faSignOutAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faSignOutAlt, faEllipsisV);

import { firestorePlugin } from "vuefire";
import firebase from "firebase";
import "firebase/firestore";

Vue.use(firestorePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyCjGdurRkqIPvLB-dXuIVQVzm6GvUCwMSg",
  authDomain: "whisperer-4ba36.firebaseapp.com",
  databaseURL: "https://whisperer-4ba36.firebaseio.com",
  projectId: "whisperer-4ba36",
  storageBucket: "whisperer-4ba36.appspot.com",
  messagingSenderId: "123182232947",
  appId: "1:123182232947:web:b2e0a4a2c095798ba18106",
});

export const db = firebase.firestore();
export const auth = firebase.auth();

Vue.component("fa", FontAwesomeIcon);
// ここまで追加

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
