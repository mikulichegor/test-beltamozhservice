<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
    <button @click="$router.push({ name: 'main' })">Go to Home</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}
.not-found h1 {
  font-size: 100px;
  margin: 0;
}
.not-found p {
  font-size: 24px;
}
</style>
