<template>
  <div class="add_bookmark">
    <h1>ブックマーク追加</h1>
    <div class="container is-max-desktop">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">URL</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="https://...">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">ブックマーク名</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="ウェブページの名前を入力してください">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">検索ワード</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="ウェブページを見つけた時に入力した検索ワードを教えてください">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">要約</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="このブックマークについて簡単に説明してみてください(100文字以内)"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">理由</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="このウェブページを訪れた理由を教えてください(100文字以内)"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">専門性はどう感じましたか？</label>
        </div>
        <div class="field-body">
          <label class="radio">
            <input type="radio" name="expert" v-model="choice1" value="1">
            低い
          </label>
          <label class="radio">
            <input type="radio" name="expert" v-model="choice1" value="2">
            普通
          </label>
          <label class="radio">
            <input type="radio" name="expert" v-model="choice1" value="3">
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
            <input type="radio" name="text_length" v-model="choice2" value="1">
            少ない
          </label>
          <label class="radio">
            <input type="radio" name="text_length" v-model="choice2" value="2">
            普通
          </label>
          <label class="radio">
            <input type="radio" name="text_length" v-model="choice2" value="3">
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
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">タグ</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              仕事
            </label>
            <label class="checkbox">
              <input type="checkbox">
              趣味
            </label>
            <label class="checkbox">
              <input type="checkbox">
              学習
            </label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>このブックマークを動物で表すと...</p>
      <img alt="animal" :src="require('@/assets/'+ choice1 + '-' + choice3 + '-' + choice2 +'.png')">
      <p>
        {{ animal_text[choice1-1][choice3-1][choice2-1] }}
      </p>
    </div>
    <router-link to="/join/bookmark">
      <input class="button is-info" type="button" value="上記の内容でブックマークを登録する" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AddBookmark",
  setup() {
    const choice1 = ref(2);
    const choice2 = ref(2);
    const choice3 = ref(2);
    let animal_text = [
      [["ネズミ", "リス", "シカ"],["クリオネ", "オキアミ", "カニ"],["スズメ", "ハト", "カモ"]],
      [["ネコ", "イヌ", "キツネ"],["フグ", "イカ", "タコ"],["カモメ", "白鳥", "とんび"]],
      [["ヘビ", "オオカミ", "クマ"],["アザラシ", "シロクマ", "シャチ"],["フクロウ", "ワシ", "ハヤブサ"]]
    ]

    return{
      choice1, choice2, choice3, animal_text
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