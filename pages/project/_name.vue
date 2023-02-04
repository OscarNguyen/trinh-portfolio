<template>
  <b-container class="project-view" fluid="md">
    <section class="hero">
      <div class="hero-img">
        <img :src="data.heroImg" alt="">
      </div>
      <div class="hero-text">
        <h1>{{ data.title }}</h1>
        <p>{{ data.description }}</p>
      </div>
      <div class="logo-img">
        <img :src="data.logo" alt="">
      </div>
    </section>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      data: {
        name: this.$route.params.name
      }
    }
  },

  async fetch () {
    const content = await this.$content('projects').only([this.data.name]).fetch()

    delete content.extension
    delete content.path

    this.data = { ...this.data, ...content[this.data.name] }

    console.log(this.data)
  }

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_extends.scss";

.project-view{
  @extend .default-page-margin-top;

  .hero{
    position: relative;

    .hero-img{
      width: 100%;

      img{
        max-width: 100%;
      }
    }

    .hero-text{
      position: absolute;
      bottom: 0;
      left: 5%;
      color: $white;

      h1{
        text-transform: uppercase;
        font-family: $heading-font-family;
        font-weight: 400;
        font-size: 6rem;
      }

      p{
        color: $white !important;
        font-size: 2.125rem;
      }
    }

    .logo-img{
      position: absolute;
      top: 5%;
      left: 50%;

      transform: translateX(-50%);

      img{
        max-width: 65%;
      }
    }
  }

}
</style>
