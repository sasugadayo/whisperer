<!-- Home.vue -->

<template>
  <div class="home">
    <div class="list">
      <li
        v-for="whisper in orderBy(whispers, 'date', -1)"
        :key="whisper.id"
        class="item"
      >
        <!-- ここから削除
        {{whisper.content}}
        {{whisper.uid}}
        ここまで削除  -->

        <!-- ここを追加 -->
        <div class="user-box">
          <div
            class="avatar"
            :style="'background-image: url(' + url + ')'"
          ></div>
          <p class="user-name">{{ whisper.uid }}</p>
        </div>
        <div class="content" v-html="whisper.content"></div>
        <!-- ここまで追加 -->
      </li>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../main";

// ここを追加
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
  components: {},

  // ここを追加
  mixins: [Vue2Filters.mixin],
};
</script>

<style lang="stylus" scoped>

/* ここから追加 */
.item
  list-style none
  border-top 1px solid #eee
  padding 5px 15px
  display flex
  flex-wrap no-wrap
  justify-content flex-start
  position relative
  &:first-child
    border none
  &:hover
    background rgba(0,0,0,.02)
  .user-box
    margin 10px 10px 10px 0
    .avatar
      height 50px
      width 50px
      border-radius 50%
      border 1px solid #eee
      background-size cover
    .user-name
      margin 5px 0 0 0
      text-align center
      font-size .7rem
      line-height .7rem
      width 50px
  .content
    padding 10px
/* ここまで追加 */
</style>
