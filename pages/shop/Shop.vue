<template>
  <section>
    <h1 class="home">{{ title }}</h1>
    <p class="home__sub-heading">A good shopping mall!</p>
  </section>
</template>

<router>
  {
    name: 'Shop',
    path: '/'
  }
</router>

<script src="./Shop.ts" lang="ts"/>
<style src="./Shop.scss" lang="scss" scoped/>
