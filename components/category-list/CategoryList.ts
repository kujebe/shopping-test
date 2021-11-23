import Vue from "vue";
import { mapGetters } from "vuex";

import { ShopService } from "@/services/ShopService";

export default Vue.extend({
  data() {
    return {
      activeCategory: "",
      searchModel: ""
    }
  },
  computed: {
    ...mapGetters("Products", ["categories"]),
  },
  methods: {
    filterProductsByCategory(category: string): void {
      ShopService.getFilteredProducts(category).subscribe(
        (data) => {
          this.$store.dispatch("Products/setFilteredProducts", data);
          this.activeCategory = category;
          this.$root.$emit("filter-products");
        }
      );
    },
    clearFilter(): void {
      this.$root.$emit("clear-product-filter");
      this.activeCategory = "";
    },
    searchProducts(): void {
      const query = ((this.$refs.productSearchField as any).$el.value);
      if (query.length >= 3) {
        ShopService.searchProducts(query).subscribe(
          (data) => {
            this.$store.dispatch("Products/setFilteredProducts", data);
            this.$root.$emit("filter-products");
          }
        );
      } else {
        ShopService.getProducts().subscribe(
          (data) => {
            this.$store.dispatch("Products/setProducts", data);
            this.$root.$emit("clear-product-filter");
          }
        );
      }
    }
  }
})
