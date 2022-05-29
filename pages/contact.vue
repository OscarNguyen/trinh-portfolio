<template>
  <div class="contact">
    <div class="page-container d-flex">
      <div class="left">
        <template v-if="!isSubmissionOK">
          <h1>Get in touch</h1>
          <p>Fill out the form</p>
          <ContactForm @onGetSubmissionStatus="getSubmissionStatus" />
        </template>
        <template v-else>
          <h1 class="thanks">
            Thank you
          </h1>
        </template>
      </div>

      <div class="right">
        <div class="abstract-top-img">
          <img src="/images/Abstract_background_4_2.png" alt="">
        </div>
        <div class="mail-img">
          <img src="/images/mail.png" alt="">
        </div>
        <div class="mailbox-img">
          <img src="/images/mail-box.png" alt="">
        </div>
        <div class="plane-img">
          <img src="/images/plane.png" alt="">
        </div>
        <div class="stone-grass-img">
          <img src="/images/stone-and-grass.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSubmissionOK: false
    }
  },
  methods: {
    getSubmissionStatus (object) {
      this.isSubmissionOK = object.ok
    }
  }
}
</script>

<style lang="scss" scoped>
.contact{
  margin-top: $default-margin-top;

  height: 62vh;

  overflow: hidden;

  .page-container{
    .left{
      width: 50%;

      align-self: center;

      .thanks{
        text-align: center;
      }

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

    .right{
      position: relative;

      width:50%;
      height: 56.5vh;

      & > div{
        position: absolute;

        width: 31rem;

        img{
          max-width: 100%;
        }

        &.abstract-top-img{
          right: -15rem;
          top: -5rem;
        }

        &.mail-img{
          bottom: 25rem;
          right: 13rem;
          z-index: 1;
        }

        &.mailbox-img{
          bottom: 9rem;
          right: 13rem;
          z-index: 0;
        }

        &.plane-img{
          bottom: 14.5rem;
          right: 0;
        }

        &.stone-grass-img{
          bottom: 4rem;
          right: 13rem;
        }

      }
    }
  }
}
</style>
