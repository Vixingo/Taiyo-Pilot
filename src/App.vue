<template>
  <NavigationComp />
  <router-view/>
</template>

<script>
import NavigationComp from './components/NavigationComp.vue';
export default {
  name: 'App',
  components: {
			NavigationComp
		}
}
</script>
