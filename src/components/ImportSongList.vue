<template>
  <div class="c-import card">
    <div class="import-info">
      <div>粘贴代码导入歌单：</div>
      <button
        class="import-button"
        v-on:click="import_code"
        v-tooltip="import_popper"
      >
        导入！
      </button>
    </div>
    <textarea
      class="import-code"
      v-model="code"
      v-on:keydown.space.stop=""
    ></textarea>
  </div>
</template>

<script>
import utils from '../js/utils.js';
export default {
  name: 'ImportSongList',
  data() {
    return {
      code: '',
      import_popper: {
        content: '?',
        showTriggers: ['click'],
        hideTriggers: ['hover'],
      },
    };
  },
  methods: {
    import_code() {
      if (this.code.trim().length === 0) {
        this.import_popper.content = '?你没粘贴东西';
        return;
      }
      let song_list = utils.decode_share(this.code.trim());
      if (song_list) {
        this.$parent.$refs.player.playlist_replace(song_list);
        this.import_popper.content = '导入成功!';
      } else this.import_popper.content = '歌单代码错误，请重新复制一下试试~';
      this.code = '';
    },
  },
};
</script>

<style scoped>
.c-import {
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 1rem;
}
.import-info {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
.import-button {
  height: 2rem;
  background-color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0.3rem;
  border: 1px solid #007bff;
  color: #007bff;
}
@media (any-hover: hover) {
  .import-button:hover {
    background-color: #007bff;
    color: white;
  }
}
.import-button:active {
  background-color: #0068d6;
  color: white;
}
.import-code {
  margin-top: 1rem;
  width: 100%;
  overflow-y: scroll;
  height: 3.6rem;
  resize: none;
}
</style>
