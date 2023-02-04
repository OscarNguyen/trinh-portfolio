<template>
  <div class="project-cards d-flex flex-wrap justify-content-between">
    <ProjectCard v-for="project of propjectCardsList" :key="project.title" :project="project" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      propjectCardsList: []
    }
  },

  async fetch () {
    const content = await this.$content('projects').fetch()

    for (const key in content) {
      if (key !== 'createdAt' && key !== 'dir' && key !== 'extension' && key !== 'path' && key !== 'slug' && key !== 'updatedAt') { this.propjectCardsList.push(content[key]) }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_extends.scss";

.project-cards{
  @extend .width-80;

  margin: 0 auto 5.625rem;
}
</style>
