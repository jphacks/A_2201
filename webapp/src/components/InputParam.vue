<template>
  <div class="container is-max-desktop">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">専門性はどう感じましたか？</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="expert" v-model="choice1" value="1" @change="inputChoice">
          低い
        </label>
        <label class="radio">
          <input type="radio" name="expert" v-model="choice1" value="2" @change="inputChoice">
          普通
        </label>
        <label class="radio">
          <input type="radio" name="expert" v-model="choice1" value="3" @change="inputChoice">
          高い
        </label>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">文章量はどうでしたか？</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="text_length" v-model="choice2" value="1" @change="inputChoice">
          少ない
        </label>
        <label class="radio">
          <input type="radio" name="text_length" v-model="choice2" value="2" @change="inputChoice">
          普通
        </label>
        <label class="radio">
          <input type="radio" name="text_length" v-model="choice2" value="3" @change="inputChoice">
          多い
        </label>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">内容は分かりやすかったですか？</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="contents" v-model="choice3" value="3" @change="inputChoice">
          はい
        </label>
        <label class="radio">
          <input type="radio" name="contents" v-model="choice3" value="2" @change="inputChoice">
          どちらでもない
        </label>
        <label class="radio">
          <input type="radio" name="contents" v-model="choice3" value="1" @change="inputChoice">
          いいえ
        </label>
      </div>
    </div>
  </div>
  <div>
    <img alt="animal" :src="require('@/assets/'+ choice1 + '-' + choice3 + '-' + choice2 +'.png')">
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "InputParam",
  setup() {
    const store = useStore();

    const bookmark = store.state.bookmark;

    const choice1 = ref(parseInt(bookmark.choice[0]));
    const choice2 = ref(parseInt(bookmark.choice[1]));
    const choice3 = ref(parseInt(bookmark.choice[2]));

    const inputChoice = () => {
      const choice = [parseInt(choice1.value), parseInt(choice2.value), parseInt(choice3.value)];
      store.dispatch("inputChoice", choice);
    };

    return{
      choice1, choice2, choice3, inputChoice
    }
  }
}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>