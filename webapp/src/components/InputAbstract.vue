<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">要約</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="このブックマークについて簡単に説明してみてください(100文字以内)"
            v-model="summary"
            @change="inputSummary"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "InputAbstract",
  setup() {
    const store = useStore();

    const summary = ref(store.state.bookmark.summary);

    const inputSummary = () => {
      store.dispatch("inputSummary", summary.value);
    };

    return {
      summary, inputSummary
    };
  }
}
</script>

<style scoped>

</style>