<template>
  <div class="project-cards d-flex flex-wrap justify-content-between">
    <ProjectCard v-for="project of projectList" :key="project.title" :project="project" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectList: [
        {
          imgSrc: '/images/project/project-cards/Bridge_1.png',
          title: 'sol music',
          description: 'casdasd'
        },

        {
          imgSrc: '/images/project/project-cards/Bridge_2.png',
          title: 'vaccine',
          description: 'casdasd'
        },

        {
          imgSrc: '/images/project/project-cards/Bridge_3.png',
          title: 'brideg 3',
          description: 'casdasd'
        },

        {
          imgSrc: '/images/project/project-cards/Bridge_4.png',
          title: 'bridge 4',
          description: 'casdasd'
        },

        {
          imgSrc: '/images/project/project-cards/Bridge_5.png',
          title: 'bridge 5',
          description: 'casdasd'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project-cards{
  margin-bottom: 5.625rem;
}
</style>
