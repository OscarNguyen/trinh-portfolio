<template>
  <b-form class="contact-form" @submit.prevent="onSubmit">
    <ContactFormInputGroup placeholder="Name" input-id="fullName" label="Full Name" :multiline="false" @onGetValue="getInputValues" />
    <ContactFormInputGroup
      placeholder="Email"
      input-type="email"
      input-id="email"
      label="Email"
      :multiline="false"
      @onGetValue="getInputValues"
    />
    <ContactFormInputGroup placeholder="Text" input-id="messages" label="Messages" :multiline="true" @onGetValue="getInputValues" />
    <div class="submit-btn-container">
      <b-button type="submit" class="btn btn-primary">
        Submit
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      inputData: {}
    }
  },

  methods: {
    async onSubmit () {
      console.log(this.inputData)
      const res = await this.$axios.$post('https://formspree.io/f/xyyoonaj', this.inputData)

      this.$emit('onGetSubmissionStatus', res)
    },

    getInputValues (object) {
      this.inputData = { ...this.inputData, ...object }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form{
  .submit-btn-container{
    button{
      margin-top: 3.06rem;
      padding-top: 0.6875rem;
      padding-bottom: 0.6875rem;
    }
  }
}
</style>
