<template>
  <b-container fluid="md" class="project-card">
    <div class="profile-picture">
      <img :src="project.imgSrc" alt="">
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card{
  width: 28rem;

  // margin: 0 !important;
  padding: 0 !important;

  margin: 0 0 1rem 0 !important;

  flex-basis:auto;

  .profile-picture{
    width: 100%;

    img{
      max-width: 100%;
      width: 28rem;
    }
  }
}
</style>
