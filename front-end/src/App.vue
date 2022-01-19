<template>
  <div class="app">
    <Navbar/>
    <router-view v-slot="{Component, route}">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component"/>
      </transition>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
}
</script>

<style>
  #app{
    margin: 0 auto;
  }
</style>
