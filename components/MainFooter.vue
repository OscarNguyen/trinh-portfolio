<template>
  <div class="main-footer">
    <div class="page-container">
      <div class="internal-links d-flex justify-content-center">
        <div v-for="link of internalLinks" :key="link.text" class="link-item">
          <nuxt-link class="" :to="link.to">
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
          to: '/',
          text: 'Project'
        },
        {
          to: '/',
          text: 'Illustration'
        },
        {
          to: '/',
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
  }

}
</script>

<style lang="scss" scoped>
.main-footer {
  background-color:#005180;

  // margin-top: 5rem;
  padding: 6.5rem 31rem;

  font-family: Helvetica, sans-serif ;

  position: relative;
  z-index: 1;

  .page-container {
    .internal-links{
      .link-item{
        padding-right: 3.125rem;

        a{
          font-size: .875rem;
          text-decoration: none;
          color:#fff;

    @include a-all-selectors{
      box-shadow: 0px 1px 0 0 #fff

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
