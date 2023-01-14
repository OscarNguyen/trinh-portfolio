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
          imgSrc: '/images/project/project-cards/sol-music.png',
          title: 'sol music',
          description: 'casdasd',
          name: 'sol-music'
        },

        {
          imgSrc: '/images/project/project-cards/vaccine.png',
          title: 'vaccine',
          description: 'casdasd',
          name: 'vaccine'
        },

        {
          imgSrc: '/images/project/project-cards/bridge-3.png',
          title: 'bridge 3',
          description: 'casdasd',
          name: 'bridge-3'
        },

        {
          imgSrc: '/images/project/project-cards/bridge-4.png',
          title: 'bridge 4',
          description: 'casdasd',
          name: 'bridge-4'
        },

        {
          imgSrc: '/images/project/project-cards/bridge-5.png',
          title: 'bridge 5',
          description: 'casdasd',
          name: 'bridge-5'
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
