<template>
  <div class="add_bookmark">
    <h1>ブックマーク追加</h1>

    <p>Step{{stepNumber}}</p>
    <div v-if="stepNumber==1">
    <InputURL/>
    </div>
    <div v-if="stepNumber==2">
    <InputSearchWords/>
    </div>
    <div v-if="stepNumber==3">
    <InputAbstract/>
    </div>
    <div v-if="stepNumber==4">
    <InputReason/>
    </div>
    <div v-if="stepNumber==5">
    <InputParam/>
    </div>
    <div v-if="stepNumber==6">
    <InputTag/>
    </div>
    <button v-if="stepNumber!=1" class="button is-info" type="button" @click="backStep" >Back</button>
    <button v-if="stepNumber!=6" class="button is-info" type="button" @click="nextStep" >Next</button>
  </div>
  <router-link v-if="stepNumber==6" to="/join/bookmark">
    <input class="button is-info" type="button" value="上記の内容でブックマークを登録する" />
  </router-link>
</template>

<script>

import InputURL from "@/components/InputURL";
import InputSearchWords from "@/components/InputSearchWords";
import InputParam from "@/components/InputParam";
import InputAbstract from "@/components/InputAbstract";
import InputReason from "@/components/InputReason";
import {ref} from "vue";
import InputTag from "@/components/InputTag";


export default {
  name: "AddBookmark",

  components: {InputTag, InputReason, InputAbstract, InputParam, InputSearchWords, InputURL},

  setup(){
    const stepNumber = ref(1);
    const backStep =() =>{
      stepNumber.value--;
    }
    const nextStep =() =>{
      stepNumber.value++;
    }
    return{stepNumber,backStep,nextStep}
  },

}
</script>

<style scoped>

</style>