<template>
  <div class="contact">
    <div class="page-container d-flex">
      <div class="left">
        <h1>Get in touch</h1>
        <p>Fill out the form</p>
        <ContactForm />
      </div>
      <div class="right" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact{
  margin-top: $default-margin-top;

  .page-container{
    .left{
      width: 40%;

      h1{
        font-family: $heading-font-family;
        color: $theme-color-1;
        font-weight: 400;
        text-transform: uppercase;

        margin-top: 3.125rem;
        margin-bottom: 0;
      }

      p{
        margin-top: 1.875rem;
        margin-bottom: 0;

        font-size: 1.25rem;
      }

    }
  }
}
</style>
