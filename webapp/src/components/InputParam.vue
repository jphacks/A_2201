<template>
  <div class="container is-max-desktop">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">専門性はどう感じましたか？</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="expert" v-model="choice1" value="3">
          高い
        </label>
        <label class="radio">
          <input type="radio" name="expert" v-model="choice1" value="2">
          普通
        </label>
        <label class="radio">
          <input type="radio" name="expert" v-model="choice1" value="1">
          低い
        </label>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">文章量はどうでしたか？</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="text_length" v-model="choice2" value="3">
          多い
        </label>
        <label class="radio">
          <input type="radio" name="text_length" v-model="choice2" value="2">
          普通
        </label>
        <label class="radio">
          <input type="radio" name="text_length" v-model="choice2" value="1">
          少ない
        </label>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">内容は分かりやすかったですか？</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="contents" v-model="choice3" value="3">
          はい
        </label>
        <label class="radio">
          <input type="radio" name="contents" v-model="choice3" value="2">
          どちらでもない
        </label>
        <label class="radio">
          <input type="radio" name="contents" v-model="choice3" value="1">
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
import {ref} from "vue";

export default {
  name: "InputParam",
  setup() {
    const choice1 = ref(2);
    const choice2 = ref(2);
    const choice3 = ref(2);

    return{
      choice1, choice2, choice3
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