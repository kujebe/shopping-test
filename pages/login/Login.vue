<template>
  <div>
    <app-bar />
    <div class="login__form-wrapper">
      <md-field md-inline>
        <label>Email</label>
        <md-input v-model="username"></md-input>
      </md-field>
      <md-field md-inline>
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-button class="md-raised md-accent login__submit" @click="login(username, password)">Login</md-button>
    </div>
  </div>
</template>

<router>
  {
    name: 'Login',
    path: '/login'
  }
</router>

<script src="./Login.ts" lang="ts"/>
<style src="./Login.scss" lang="scss" scoped/>
