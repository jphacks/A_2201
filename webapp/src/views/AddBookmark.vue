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
            <input type="radio" name="expert" v-model="choice1" value="0">
            高い
          </label>
          <label class="radio">
            <input type="radio" name="expert" v-model="choice1" value="1">
            普通
          </label>
          <label class="radio">
            <input type="radio" name="expert" v-model="choice1" value="2">
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
            <input type="radio" name="text_length" v-model="choice2" value="0">
            多い
          </label>
          <label class="radio">
            <input type="radio" name="text_length" v-model="choice2" value="1">
            普通
          </label>
          <label class="radio">
            <input type="radio" name="text_length" v-model="choice2" value="2">
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
            <input type="radio" name="contents" v-model="choice3" value="0">
            はい
          </label>
          <label class="radio">
            <input type="radio" name="contents" v-model="choice3" value="1">
            どちらでもない
          </label>
          <label class="radio">
            <input type="radio" name="contents" v-model="choice3" value="2">
            いいえ
          </label>
        </div>
      </div>
    </div>
    <div>
      result: {{ animals[choice1][choice2][choice3] }}
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
  </div>
  <router-link to="/join/bookmark">
    <input class="button is-info" type="button" value="上記の内容でブックマークを登録する" />
  </router-link>
</template>

<script>
export default {
  name: "AddBookmark",
  data() {
    return {
      choice1: 1,
      choice2: 1,
      choice3: 1,
      animals: []
    }
  },
  created() {
    // create 3-dimensional array
    // the size is 3x3x3
    let value = 0;
    for (let i = 0; i < 3; i++) {
      this.animals.push([])
      for (let j = 0; j < 3; j++) {
        this.animals[i].push([])
        for (let k = 0; k < 3; k++) {
          this.animals[i][j].push(value++)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>