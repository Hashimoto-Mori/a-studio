import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import utils from '@vite/vitejs-utils';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    polyfillModulePreload: true,
  },
  define: {
    song_list: [],
    song_collection: [],
    recording_list: [],
    playlist: [utils.empty_song],
    love_list,
    cutter_list: data.cutter_list(),
    filter_options: {
      star: ['--', '星标', '非星标'],
      have_audio: ['--', '有音频', '无音频'],
      order: ['时间倒序', '时间正序'],
      search_type: ['搜索歌名', '搜索全部信息'],
      status: [],
      language: [],
      artist: [],
      month: [],
      collection: [],
    },
    backdoor: false,
    debug_list: [],
  },
});
