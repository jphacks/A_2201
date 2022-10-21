<template>
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
</template>

<script>
export default {
  name: "InputURL"
}
</script>

<style scoped>

</style>