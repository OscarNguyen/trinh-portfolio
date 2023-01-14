<template>
  <div class="project">
    <b-container class="page-container">
      <h1>Welcome to my projects</h1>
      <ProjectCards />
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_extends.scss";

.project {
  @extend .default-page-margin-top;

  .page-container{
    h1{
      font-weight: 500;
      font-size: 2.125rem;
      color: $theme-color-1;

      padding-top: 5.625rem;
      margin-bottom: 2.5rem;
    }
  }
}
</style>
