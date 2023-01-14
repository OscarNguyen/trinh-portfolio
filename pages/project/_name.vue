<template>
  <b-container class="project-view" fluid="md">
    <section class="hero">
      <div class="hero-img">
        <img :src="data.imgSrc" alt="">
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

}
</style>
