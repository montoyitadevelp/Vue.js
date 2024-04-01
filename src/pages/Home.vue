<script setup>
import { onMounted, ref } from 'vue';
import { fetchWrapper } from '../helpers/fetchWrapper';
const baseUrl = `${import.meta.env.VITE_API_URL}`;

const posts = ref([]);
const postsLoading = ref(false);
const postsError = ref(null);

onMounted(async () => {
  try {
    postsLoading.value = true;
    postsError.value = null;
    const res = await fetchWrapper.get(`${baseUrl}/posts`);
    posts.value = res;
  } catch (error) {
    postsError.value = error;
  } finally {
    postsLoading.value = false;
  }
});
</script>

<template>
  <h2>This say our users from his experiencies!</h2>
  <div v-if="postsLoading">Loading...</div>
  <div v-else-if="postsError">{{ postsError }}</div>
  <div class="posts" v-else-if="posts">
    <section v-for="post in posts" :key="post.id" class="ownPosts">
      <h3>{{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}</h3>
      <p class="content">{{ post.content }}</p>
      <p class="author">By {{ post.owner.name }} {{ post.owner.lastname }}</p>
    </section>
  </div>
</template>

<style>
.posts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ownPosts {
  background-color: #fff;
  width: 50%;
  padding: 0.5rem;
  border-radius: 0.625rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.author {
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: #726e6e;
}
</style>
