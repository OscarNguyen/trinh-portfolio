<template>
  <b-form class="contact-form">
    <ContactFormInputGroup placeholder="Name" input-id="fullName" label="Full Name" :multiline="false" />
    <ContactFormInputGroup placeholder="Email" input-type="email" input-id="email" label="Email" :multiline="false" />
    <ContactFormInputGroup placeholder="Text" input-id="messages" label="Messages" :multiline="true" />
    <div class="submit-btn-container">
      <b-button class="btn btn-primary">
        Submit
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {

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
