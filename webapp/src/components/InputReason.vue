<template>
  <p>このWebページを訪れた理由は何ですか？</p>
  <p>調べたかったことや、困っていたこと、探していたことなどを教えてください！</p>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">理由</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="このウェブページを訪れた理由を教えてください(100文字以内)"
            v-model="reason"
            @change="inputReason"
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
  name: "InputReason",
  setup() {
    const store = useStore();

    const reason = ref(store.state.bookmark.reason);

    const inputReason = () => {
      store.dispatch("inputReason", reason.value);
    };

    return {
      reason, inputReason
    };
  }
}
</script>

<style scoped>

</style>