<template>
  <div>
    <app-bar show-categories />
    <section>
      <md-content class="md-layout md-gutter shop__product-list">
        <ul
          v-for="product in computedProducts"
          :key="product.id"
          class="md-layout-item md-large-size-25"
        >
        <md-card md-with-hover>
          <md-card-media>
            <img :src="product.image" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">
              {{ product.name }}
            </div>
            <div class="md-subhead">
              {{ product.description}}
            </div>
          </md-card-header>
          <md-card-content>
            <md-button class="md-icon-button" @click="addItemToCart(product)">
              <md-icon class="small-icon">shopping_cart</md-icon>
              <md-tooltip md-direction="top">Add to cart</md-tooltip>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon class="small-icon">bookmark</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon class="small-icon">share</md-icon>
            </md-button>
            <span>${{ product.price }}</span>
          </md-card-content>
        </md-card>
        </ul>
      </md-content>
    </section>
    <md-snackbar md-position="center" :md-duration="1000" :md-active.sync="showSnackbar" md-persistent>
      <span>Item added to cart successfully</span>
    </md-snackbar>
  </div>
</template>

<router>
  {
    name: 'Shop',
    path: '/'
  }
</router>

<script src="./Shop.ts" lang="ts"/>
<style src="./Shop.scss" lang="scss" scoped/>
