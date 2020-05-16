<template>
  <div>
    <h1>Image List</h1>
  </div>  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ImageList',
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  }
}
</script>