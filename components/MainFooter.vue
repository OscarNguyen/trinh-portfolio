<template>
  <div class="main-footer">
    <div v-if="isContactPage" class="abstract-bot-img">
      <img src="/images/Abstract_background_4_2.png" alt="">
    </div>
    <div class="page-container">
      <div class="internal-links d-flex justify-content-center">
        <div v-for="link of internalLinks" :key="link.text" class="link-item">
          <nuxt-link :to="link.to">
            {{ link.text }}
          </nuxt-link>
        </div>
      </div>
      <div class="external-links d-flex justify-content-center">
        <div v-for="link of externalLinks" :key="link.imgSrc" class="link-item">
          <a :href="link.to" target="_blank">
            <div class="img">
              <img :src="link.imgSrc" alt="">
            </div>
          </a>
        </div>
      </div>
      <div class="copyright">
        <span>&copy; Copyright {{ new Date().getFullYear() }} - Trinh Dinh </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      internalLinks: [
        {
          to: '/',
          text: 'Home'
        },
        {
          to: '/project',
          text: 'Project'
        },
        {
          to: '/illustration',
          text: 'Illustration'
        },
        {
          to: '/resume',
          text: 'Resume'
        },
        {
          to: '/contact',
          text: 'Contact'
        }
      ],

      externalLinks: [
        {
          to: '/',
          imgSrc: '/images/logos/facebook.png'
        },
        {
          to: '/',
          imgSrc: '/images/logos/linkedin.png'
        },
        {
          to: '/',
          imgSrc: '/images/logos/behance.png'
        }
      ]

    }
  },
  computed: {
    isContactPage () {
      return this.$route.path.includes('/contact')
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_extends.scss";

.main-footer {
  background-color:#005180;

  // margin-top: 5rem;
  padding: 6.5rem 31rem;

  font-family: Helvetica, sans-serif ;

  // position: relative;
  z-index: 1;

  .abstract-bot-img{
    position: absolute;
    bottom: 0rem;
    right: 31%;
    z-index: -1;

    transform: rotate(180deg) scale(0.8);

    width: 31rem;
  }

  .page-container {
    .internal-links{
      .link-item{
        padding-right: 3.125rem;

        a{
          font-size: .875rem;
          text-decoration: none;
          color:#fff;

          &.nuxt-link-exact-active{
            @extend .white-hover-link;
          }

          @include a-all-selectors{
            @extend .white-hover-link;
          }
        }
      }
    }

    .external-links{
      margin-top: 1.7rem;

      .link-item + .link-item{
          padding-left: 1.4rem;
      }
    }

    .copyright{
      span{
        color: #fff;
        opacity: .8;
        text-align: center;
        font-size: .75rem;

        display: block;

        margin-top: 1.67rem;
      };
    }
  }
}
</style>
