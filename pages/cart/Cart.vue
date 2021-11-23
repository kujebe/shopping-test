<template>
  <div>
    <app-bar />
      <div>
        <md-table v-model="cartItems" md-card>
          <md-table-toolbar>
            <h1 class="md-title">Cart items</h1>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell class="checkout__avatar" md-label="Image"><img :src="item.image"></md-table-cell>
            <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="price">${{ item.price }}</md-table-cell>
            <md-table-cell md-label="Quantity">
              <span class="md-icon-button">{{ item.quantity }}</span>
              <md-button
                class="md-icon-button"
                @click.prevent="setQuantity(item.id, 'increment')"
              >
                <md-icon>add</md-icon>
              </md-button>
              <md-button
                class="md-icon-button"
                @click.prevent="setQuantity(item.id, 'decrement',  item.quantity)"
              >
                <md-icon>remove</md-icon>
              </md-button>
            </md-table-cell>
            <md-table-cell md-label="Total" class="checkout__price">${{ item.quantity * item.price }}</md-table-cell>
            <md-table-cell md-label="Remove">
              <md-button
                class="md-icon-button"
                @click.prevent="deleteItem(item.id)"
              >
                <md-icon>delete</md-icon>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table>
        <div class="checkout__summary">
          <div class="checkout__summary--price">
            <div class="">Total: ${{ TotalAmount }} (including 13% tax)</div>
          </div>
          <md-button class="md-raised md-accent checkout__button">Checkout</md-button>
        </div>
      </div>
  </div>
</template>

<router>
  {
    name: 'Cart',
    path: '/cart'
  }
</router>

<script src="./Cart.ts" lang="ts"/>
<style src="./Cart.scss" lang="scss" scoped/>
