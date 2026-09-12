import { u as useMusicStore } from "./music-JQhEZ-U3.js";
function navigateToMusicList(router, options) {
  const musicStore = useMusicStore();
  const { id, type, name, songList, listInfo, canRemove = false } = options;
  if (type !== "dailyRecommend") {
    if (songList) {
      musicStore.setCurrentMusicList(songList, name, listInfo, canRemove);
    } else {
      musicStore.setBasicListInfo(name, listInfo, canRemove);
    }
  } else {
    musicStore.clearCurrentMusicList();
  }
  if (id) {
    router.push({
      name: "musicList",
      params: { id },
      query: { type }
    });
  } else {
    router.push({
      name: "musicList",
      query: { type: "dailyRecommend" }
    });
  }
}
export {
  navigateToMusicList as n
};
