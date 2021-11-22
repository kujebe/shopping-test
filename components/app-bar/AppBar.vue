<template>
  <div class="app-bar">
    <transition>
       <span>
        <md-toolbar>
          <div class="md-toolbar-container">
            <div class="app-bar__menu">
              <a href="">Products</a>
              <a href="">Cart</a>
            </div>
            <div class="md-accent app-bar__logo">SHOP</div>
            <div class="app-bar__right">
              <div class="app-bar__right--cart">
                <md-badge :md-content="cartItemsCount">
                  <md-button class="md-icon-button">
                    <md-icon>shopping_cart</md-icon>
                  </md-button>
                </md-badge>
              </div>
              <div class="app-bar__right--profile">seun@kujebe.com</div>
            </div>
          </div>
        </md-toolbar>
        <category-list />
      </span>
    </transition>
  </div>
</template>

<script src="./AppBar.ts" lang="ts"/>
<style src="./AppBar.scss" lang="scss" scoped />
