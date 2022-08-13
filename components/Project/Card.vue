<template>
  <b-container fluid="md" class="project-card">
    <div class="profile-picture">
      <img :src="project.imgSrc" alt="">
    </div>
    <div class="overlay">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
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

  position: relative;

  // margin: 0 !important;
  padding: 0 !important;

  margin: 0 0 1rem 0 !important;

  flex-basis:auto;

  &:hover{
    .overlay{
      display: block;
      // transition: transform 2s;
      // transform: translateY(-1rem);
    }
  }

  .profile-picture{
    width: 100%;

    z-index: 1;

    img{
      max-width: 100%;
      width: 28rem;
    }
  }

  .overlay{
    z-index: 4;
    position: absolute;
    bottom:0;

    display: none;

    height: 33%;
    width: 100%;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%);

    padding: 1rem 1.5rem;

    text-transform: capitalize;

    // transform: translateY(9rem);
    h2{
      color: $button-text-color;

      margin-bottom: 1rem;
    }

    p{
      color: $button-text-color;
      font-size: 1.625rem;
    }
  }
}
</style>
