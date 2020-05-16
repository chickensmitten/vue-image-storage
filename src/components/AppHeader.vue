<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>

    <div 
      class='right menu'>
      <a href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions([
      'login'
    ]),
    // ... is so that we can add more methods inside methods other than having them only in actions
  }
}
</script>