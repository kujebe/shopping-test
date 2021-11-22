<template>
  <div class="category-list">
    <div class="category-list__filter-container">
      <div class="category-list__filter-label">Filter: </div>
      <md-chip
        v-for="category in categories"
        :key="category.name"
        :class="['md-primary', { 'md-accent': activeCategory === category.name }]"
        md-clickable
        @click.native="filterProductsByCategory(category.name)"
      >
        {{ category.name }} ({{ category.count }})
        <md-tooltip md-direction="bottom">Filter by {{ category.name }}</md-tooltip>
      </md-chip>
       <md-button
          v-if="!!activeCategory"
          class="md-icon-button"
          @click="clearFilter"
        >
          <md-icon class="small-icon">close</md-icon>
          <md-tooltip md-direction="bottom">Clear Filter</md-tooltip>
        </md-button>
    </div>
    <div class="category-list__search">
      <md-field>
        <label>Search products</label>
        <md-input
          ref="productSearchField"
          v-model="searchModel"
          @keyup.native="searchProducts"
           @blur.native="clearSearch"
          ></md-input>
      </md-field>
    </div>
  </div>
</template>

<script src="./CategoryList.ts" lang="ts"/>
<style src="./CategoryList.scss" lang="scss" scoped />
