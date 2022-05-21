<template>
  <nav class="main-navigation" :class="{shrink: isShrunk}">
    <div class="page-container">
      <div class="logo left">
        <img src="/images/logos/Logo_Trinh_Dinh_1.png" alt="">
      </div>
      <div class="right">
        <div class="link-item">
          <nuxt-link class="trinh-link" to="/project">
            Project
          </nuxt-link>
        </div>
        <div class="link-item">
          <nuxt-link class="trinh-link" to="/illustration">
            Illustration
          </nuxt-link>
        </div>
        <div class="link-item">
          <nuxt-link class="trinh-link" to="/resume">
            Resume
          </nuxt-link>
        </div>
        <div class="link-item">
          <nuxt-link class="trinh-link" to="/contact">
            Contact
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isShrunk: false
    }
  },

  mounted () {
    document.addEventListener('scroll', () => {
      if (window.scrollY < 20) {
        this.isShrunk = false
      } else {
        this.isShrunk = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.main-navigation{
  padding: 3.4rem 0;

  box-shadow:  0 1px 5px -1px #333;

  transition: padding .3s;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  background:#fff;

  &.shrink{
    padding: 1rem 0
  }

  .page-container{
    display: flex;
    justify-content: space-between;

    .logo{
      img{
        max-width: 100%;
      }
    }

    .right{
      display: flex;
      justify-content: flex-end;

      flex: 1;

      .link-item{
        padding: 0 2rem;

        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        color:#000;
        text-transform: uppercase;

        align-self: center;

        &:first-child{
               padding-left: 0 ;
        }

        &:last-child{
               padding-right: 2rem;
        }
      }
    }
  }
}
</style>
