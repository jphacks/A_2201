<template>

  <div class="add_bookmark">
    <h1>ブックマーク追加</h1>

  <div>
    <step-progress :steps="[
        'Information',
        'Search Word',
        'Summary',
        'Reason',
        'Evaluation',
        'Tag',
    ]" :current-step="currentStep" icon-class="fa-solid fa-check" active-color='blue' lineThickness=5>
    </step-progress>
  </div>
    <div v-if="currentStep==0">
    <InputURL/>
    </div>
    <div v-if="currentStep==1">
    <InputSearchWords/>
    </div>
    <div v-if="currentStep==2">
    <InputAbstract/>
    </div>
    <div v-if="currentStep==3">
    <InputReason/>
    </div>
    <div v-if="currentStep==4">
    <InputParam/>
    </div>
    <div v-if="currentStep==5">
    <InputTag/>
    </div>
    <button v-if="currentStep!=0" class="button is-info" type="button" @click="currentStep--" >Back</button>
    <button v-if="currentStep!=5" class="button is-info" type="button" @click="currentStep++" >Next</button>
  </div>
  <router-link v-if="currentStep==5" to="/join/bookmark">
    <input class="button is-info" type="button" value="上記の内容でブックマークを登録する" />
  </router-link>
</template>

<script>

import InputURL from "@/components/InputURL";
import InputSearchWords from "@/components/InputSearchWords";
import InputParam from "@/components/InputParam";
import InputAbstract from "@/components/InputAbstract";
import InputReason from "@/components/InputReason";
import InputTag from "@/components/InputTag";


export default {
  name: "AddBookmark",

  components: {InputTag, InputReason, InputAbstract, InputParam, InputSearchWords, InputURL},
  data() {
    return {
      currentStep: 0,
    }
  },
}
</script>

<style scoped>

</style>