<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <step-progress :steps="[
        'Add invites',
        'Set Up',
        'Select Template',
        'Send Invitations',
        '???',
        'Done',
    ]" :current-step="currentStep" icon-class="fa-solid fa-check" active-color='blue' lineThickness=5>
    </step-progress>
    <button @click='currentStep++' >Nayn</button>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      currentStep: 0,
    }
  }
}
</script>

<style scoped>

</style>