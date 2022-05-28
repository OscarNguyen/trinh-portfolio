
<template>
  <div id="layout">
    <div
      class="layout-top"
    >
      <main-navigation />
      <Nuxt />
    </div>

    <div class="layout-bottom">
      <main-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  head () {
    return {
      htmlAttrs: {
        // lang: this.$config.site && this.$config.site.localeId.substr(0, 2)
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
@import "../assets/scss/_typography";
@import "../assets/scss/_buttons";
@import "../assets/scss/_cookie-consent";

$home-icon-size: 4rem;

html,
body,
#__nuxt,
#__layout,
#layout {
  height: 100%;

  scroll-behavior: smooth;
}

#layout {
  display: flex;
  flex-direction: column;

  // Prevent user from selecting text
  // https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting
  .no-select {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  .oot-circle {
    @include circle-layout($circle-size);

    box-shadow: 0px 0px 1.25rem #10474c4d;

    margin: 0 auto;

    span {
      font-size: 4.5rem;
    }
  }

  .trinh-link{
    color:inherit;
    text-decoration: none;

    @include a-all-selectors{
      box-shadow: 0px 3px 0 0 #005180
    }
  }

  // .dark-green-placeholder {
  //   ::placeholder {
  //     color: $dark-green-1;
  //   }
  // }

  // .light-blue-placeholder {
  //   ::placeholder {
  //     color: #b8cbcb;
  //   }
  // }

  // .home-icon-wrapper {
  //   z-index: 10;
  //   position: absolute;

  //   width: 4.5%;

  //   margin: 2rem 0 0 2rem;
  //   a {
  //     .home-icon {
  //       @include zoom-effect($theme-color-6);
  //       @include circle-layout($home-icon-size);

  //       background: $theme-color-2;

  //       text-align: center;
  //       font-size: 2.1rem;
  //       line-height: $home-icon-size;
  //       color: $theme-color-3;
  //     }
  //   }
  // }

  .layout-top {
    flex-grow: 1;

    // background: $theme-color-5;

    z-index: 0;

    // overflow: hidden;

    // .oot-card {
    //   background: $text-color-1 0% 0% no-repeat padding-box;

    //   box-shadow: 0px 0px 20px #10474c4d;

    //   border-radius: 20px;

    //   padding: 4.4rem 1rem;
    // }

    // h1 {
    //   span {
    //     &.sub {
    //       font-family: $small-heading-font-family;
    //       font-weight: 400;
    //     }
    //   }
    // }

    .page-container {
      width: $content-width;
      max-width: 95vw;

      padding: 0 2rem;
      margin: 0 auto;
    }
  }

  .layout-bottom{
    // padding-top: 5rem;
  }

  // Nuxt page transition classes.
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.2s ease-in-out;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
}
</style>
