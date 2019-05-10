<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="nav"><!--navigation statique-->
      <router-link to="/about/team">Company</router-link> | <!-- element qui permet de naviguer entre les pages| -->
      <router-link to="/about/company">Team</router-link>
    </div>
    <router-view/>
  </div>
</template>
