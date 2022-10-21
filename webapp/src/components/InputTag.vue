<template>
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
</template>

<script>
export default {
  name: "InputTag"
}
</script>

<style scoped>

</style>