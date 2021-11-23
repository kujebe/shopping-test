<template>
  <div class="app-bar">
    <transition>
       <span>
        <md-toolbar>
          <div class="md-toolbar-container">
            <div class="app-bar__menu">
              <a @click.prevent="goToShop">Products</a>
              <a @click.prevent="goToCart">Cart</a>
            </div>
            <div class="md-accent app-bar__logo">SHOP</div>
            <div class="app-bar__right">
              <div class="app-bar__right--cart">
                <md-badge :md-content="cartItemsCount">
                  <md-button
                    class="md-icon-button"
                    @click.prevent="goToCart"
                  >
                    <md-icon>shopping_cart</md-icon>
                    <md-tooltip md-direction="bottom">View cart</md-tooltip>
                  </md-button>
                </md-badge>
              </div>
              <div
                :key="user.length"
                class="app-bar__right--profile"
              >
                <div
                  v-if="user.authenticated"
                >
                  <span> {{ user.email }} </span>
                  <a @click.prevent="logout" class="app-bar__login-link">Logout</a>
                </div>
                <div
                  v-else
                  class="app-bar__login-link"
                >
                  <a @click.prevent="goToLogin">Login</a>
                </div>
              </div>
            </div>
          </div>
        </md-toolbar>
        <category-list v-if="showCategories"/>
      </span>
    </transition>
  </div>
</template>

<script src="./AppBar.ts" lang="ts"/>
<style src="./AppBar.scss" lang="scss" scoped />
