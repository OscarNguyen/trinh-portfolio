<template>
  <b-container fluid="md" class="project-card">
    <nuxt-link :to="{path:`/project/${project.name}`}">
      <div class="profile-picture">
        <img :src="project.imgSrc" alt="">
        <div class="hover-background" />
      </div>

      <div class="overlay">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </nuxt-link>
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

/**
  KEYFRAMES
*/
@keyframes hoverImageZoom {
  from{
        transform: scale(1);
  }
  to{
    transform: scale(1.5);
  }
}

.project-card{
  width: 28rem;

  position: relative;

  padding: 0 !important;

  margin: 0 0 1rem 0 !important;

  flex-basis:auto;

  overflow: hidden;

  cursor: pointer;

  &:hover{
    .profile-picture{
      img{
        transform: scale(1.5);
      }

      .hover-background{
        background: rgba(0, 0, 0, 0.6);

        position: absolute;
        top: 0;
        width:100%;
        height:100%;
      }
    }

    .overlay{
      transform: translateY(-1rem);
    }
  }

  .profile-picture{
    width: 100%;

    position: relative;
    z-index: 1;

    overflow: hidden;

    img{
      max-width: 100%;
      width: 28rem;

      transition: all .2s;
    }
  }

  .overlay{
    z-index: 4;
    position: absolute;
    bottom:0;

    height: 33%;
    width: 100%;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%);

    padding: 1rem 1.5rem;

    text-transform: capitalize;

    transform: translateY(9.2rem);
    transition: transform .1s ease-in-out;

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
