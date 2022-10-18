<template>
  <div class="add_bookmark">
    <h1>ブックマーク追加</h1>
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
        <label class="label">文章量はどうでしたか？</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="rsvp">
          多い
        </label>
        <label class="radio">
          <input type="radio" name="rsvp">
          普通
        </label>
        <label class="radio">
          <input type="radio" name="rsvp">
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
          <input type="radio" name="rsvp">
          はい
        </label>
        <label class="radio">
          <input type="radio" name="rsvp">
          いいえ
        </label>
        <label class="radio">
          <input type="radio" name="rsvp">
          どちらでもない
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
  <router-link to="/join/bookmark">
    <input class="button is-info" type="button" value="上記の内容でブックマークを登録する" />
  </router-link>
</template>

<script>
export default {
  name: "AddBookmark"
}
</script>

<style scoped>

</style>