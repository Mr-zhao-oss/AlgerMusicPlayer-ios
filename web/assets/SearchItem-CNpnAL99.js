import { d as defineComponent, bb as usePlayerStore, aU as useRouter, bu as usePlayHistoryStore, a7 as openBlock, a8 as createElementBlock, aa as normalizeClass, ab as createBaseVNode, ak as createVNode, ad as unref, aQ as getImgUrl, br as __unplugin_components_1, ah as createCommentVNode, ac as toDisplayString, aY as createBlock, A as ref, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { n as navigateToMusicList } from "./MusicListNavigator-jSUM_tQ9.js";
import { M as MvPlayer } from "./MvPlayer-DMP7W4CI.js";
const _hoisted_1 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30"
};
const _hoisted_2 = {
  key: 1,
  class: "absolute top-2 right-2 flex items-center gap-1 rounded-lg bg-black/40 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
};
const _hoisted_3 = { class: "mt-3 space-y-1 px-1" };
const _hoisted_4 = { class: "line-clamp-1 text-sm font-bold text-neutral-800 transition-colors duration-200 group-hover:text-primary dark:text-neutral-200 dark:group-hover:text-white md:text-base" };
const _hoisted_5 = { class: "line-clamp-1 text-xs font-medium text-neutral-500 dark:text-neutral-400" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const showPop = ref(false);
    const playerStore = usePlayerStore();
    const router = useRouter();
    const playHistoryStore = usePlayHistoryStore();
    const getCurrentMv = () => {
      return {
        id: props.item.id,
        name: props.item.name,
        cover: props.item.picUrl,
        artistName: props.item.desc
      };
    };
    const handleClick = async () => {
      if (props.item.type === "专辑") {
        navigateToMusicList(router, {
          id: props.item.id,
          type: "album",
          name: props.item.name,
          listInfo: {
            ...props.item,
            coverImgUrl: props.item.picUrl
          },
          canRemove: false
        });
      } else if (props.item.type === "playlist") {
        navigateToMusicList(router, {
          id: props.item.id,
          type: "playlist",
          name: props.item.name,
          listInfo: { picUrl: props.item.picUrl },
          canRemove: false
        });
      } else if (props.item.type === "mv") {
        handleShowMv();
      } else if (props.item.type === "djRadio") {
        playHistoryStore.addPodcastRadio({
          id: props.item.id,
          name: props.item.name,
          picUrl: props.item.picUrl,
          dj: props.item.dj,
          type: "djRadio"
        });
        router.push({
          name: "podcastRadio",
          params: { id: props.item.id }
        });
      }
    };
    const handleShowMv = async () => {
      playerStore.handlePause();
      showPop.value = true;
    };
    return (_ctx, _cache) => {
      const _component_n_image = __unplugin_components_1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["search-item group cursor-pointer transition-all duration-300", [__props.item.type === "mv" ? "flex flex-col" : "flex flex-col"]]),
        onClick: handleClick
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["relative overflow-hidden rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1", [__props.item.type === "mv" ? "aspect-video" : "aspect-square"]])
        }, [
          createVNode(_component_n_image, {
            class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            src: unref(getImgUrl)(__props.item.picUrl, __props.item.type === "mv" ? "400y225" : "400y400"),
            lazy: "",
            "preview-disabled": ""
          }, null, 8, ["src"]),
          __props.item.type === "mv" ? (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[1] || (_cache[1] = [
            createBaseVNode("div", { class: "play-icon flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 scale-75 transition-all duration-300 shadow-xl group-hover:opacity-100 group-hover:scale-100" }, [
              createBaseVNode("i", { class: "ri-play-fill text-2xl text-neutral-900 ml-1" })
            ], -1)
          ])])) : createCommentVNode("", true),
          __props.item.type === "专辑" && __props.item.size ? (openBlock(), createElementBlock("div", _hoisted_2, [
            _cache[2] || (_cache[2] = createBaseVNode("i", { class: "ri-music-2-line" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(__props.item.size), 1)
          ])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("h3", _hoisted_4, toDisplayString(__props.item.name), 1),
          createBaseVNode("p", _hoisted_5, toDisplayString(__props.item.desc), 1)
        ]),
        __props.item.type === "mv" ? (openBlock(), createBlock(MvPlayer, {
          key: 0,
          show: showPop.value,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showPop.value = $event),
          "current-mv": getCurrentMv(),
          "no-list": ""
        }, null, 8, ["show", "current-mv"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e72ad828"]]);
export {
  SearchItem as S
};
