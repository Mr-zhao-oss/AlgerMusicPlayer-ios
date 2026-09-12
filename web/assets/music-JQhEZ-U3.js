import { dJ as defineStore } from "./index-BMNXZoHW.js";
const useMusicStore = defineStore("music", {
  state: () => ({
    currentMusicList: null,
    currentMusicListName: "",
    currentListInfo: null,
    canRemoveSong: false
  }),
  actions: {
    // 设置当前音乐列表
    setCurrentMusicList(list, name, listInfo = null, canRemove = false) {
      this.currentMusicList = list;
      this.currentMusicListName = name;
      this.currentListInfo = listInfo;
      this.canRemoveSong = canRemove;
    },
    // 仅设置基础信息（用于先导航后获取数据）
    setBasicListInfo(name, listInfo = null, canRemove = false) {
      this.currentMusicList = null;
      this.currentMusicListName = name;
      this.currentListInfo = listInfo;
      this.canRemoveSong = canRemove;
    },
    // 清除当前音乐列表
    clearCurrentMusicList() {
      this.currentMusicList = null;
      this.currentMusicListName = "";
      this.currentListInfo = null;
      this.canRemoveSong = false;
    },
    // 从列表中移除一首歌曲
    removeSongFromList(id) {
      if (!this.currentMusicList) return;
      const index = this.currentMusicList.findIndex((song) => song.id === id);
      if (index !== -1) {
        this.currentMusicList.splice(index, 1);
      }
    }
  }
});
export {
  useMusicStore as u
};
