import { createStore } from 'vuex';

export default createStore({
    state: {
        bookmark: {
            url: "",
            title: "",
            search_word: "",
            summary: "",
            reason: "",
            choice: [2, 2, 2],
            tag: []
        },
        room_id: "",
        is_valid_url: false,
    },
    getters: {
        bookmark(state) {
            return state.bookmark;
        },
        room_id(state) {
            return state.room_id;
        },
        is_valid_url(state) {
            return state.is_valid_url;
        },
    },
    mutations: {
        initBookmark(state) {
            state.bookmark.url = "";
            state.bookmark.title = "";
            state.bookmark.search_word = "";
            state.bookmark.summary = "";
            state.bookmark.reason = "";
            state.bookmark.choice = [2, 2, 2];
            state.bookmark.tag = [];
        },
        inputUrl(state, url) {
            state.bookmark.url = url;
        },
        inputTitle(state, title) {
            state.bookmark.title = title;
        },
        inputSearchWord(state, search_word) {
            state.bookmark.search_word = search_word;
        },
        inputSummary(state, summary) {
            state.bookmark.summary = summary;
        },
        inputReason(state, reason) {
            state.bookmark.reason = reason;
        },
        inputChoice(state, choice) {
            state.bookmark.choice = choice;
        },
        inputTag(state, tag) {
            state.bookmark.tag = tag;
        },
        setRoomId(state, room_id) {
            state.room_id = room_id;
        },
        setValidUrl(state){
            state.is_valid_url = true;
        },
        setInvalidUrl(state){
            state.is_valid_url = false;
        },
    },
    actions: {
        initBookmark({ commit }) {
            commit("initBookmark");
        },
        inputUrl({ commit }, url) {
            commit("inputUrl", url);
        },
        inputTitle({ commit }, title) {
            commit("inputTitle", title);
        },
        inputSearchWord({ commit }, search_word) {
            commit("inputSearchWord", search_word);
        },
        inputSummary({ commit }, summary) {
            commit("inputSummary", summary);
        },
        inputReason({ commit }, reason) {
            commit("inputReason", reason);
        },
        inputChoice({ commit }, choice) {
            commit("inputChoice", choice);
        },
        inputTag({ commit }, tag) {
            commit("inputTag", tag);
        },
        setRoomId({ commit }, room_id) {
            commit("setRoomId", room_id);
        },
        changeValidUrlStatus({ commit }) {
            commit("changeValidUrlStatus");
        },
        setValidUrl({ commit }) {
            commit("setValidUrl");
        },
        setInvalidUrl({ commit }) {
            commit("setInvalidUrl");
        }
    },
    modules: {},
});