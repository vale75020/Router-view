<template>
  <div>
    <h1>My Awesome Company</h1>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda blanditiis sequi eaque consectetur nam iusto sit doloremque cupiditate magni nesciunt aut, ullam dolorem aperiam ea laboriosam enim ex laborum!</div>
    <h1>HelloWorld</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    name: 'company',
    components: {
        HelloWorld
    }

}
</script>
