<!-- Home.vue -->

<template>
  <div class="home">
    <div class="list">
      <!-- ここから削除
      <li>
        <div class="user">
          <div class="avatar" :style="'background-image: url('+url+')'"></div>
          <p class="user-name">{{whisper.uid}}</p>
        </div>
        <div class="content" v-html="whisper.content"></div>
      </li>
    ここまで削除 -->

      <!-- ここから追加 -->
      <Item
        v-for="whisper in orderBy(whispers, 'date', -1)"
        :key="whisper.id"
        :id="whisper.id"
        :uid="whisper.uid"
      />
      <!-- ここまで追加-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// ここを追加
import Item from "@/components/Item.vue";

import { db } from "../main";
import Vue2Filters from "vue2-filters";

export default {
  name: "home",
  data() {
    return {
      whispers: [],
    };
  },
  firestore() {
    return {
      whispers: db.collection("whispers"),
    };
  },

  // ここから追加
  components: {
    Item,
  },
  // ここまで追加

  mixins: [Vue2Filters.mixin],
};
</script>

<!--スタイルを全て削除 -->
