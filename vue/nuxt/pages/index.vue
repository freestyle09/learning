<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest news!</h1>

      <section class="featured-posts">
        <nuxt-link :to="'/posts/' + 1">
          <article class="post-preview">
            <div class="post-thumbnail"></div>
            <div class="post-content">
              <h1>Post title</h1>
              <p>Preview text</p>
            </div>
          </article>
        </nuxt-link>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
