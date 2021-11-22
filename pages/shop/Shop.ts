import Vue from "vue";
import { mapState } from "vuex";

import { IProduct, ShopService } from "@/services/ShopService";

const AppBar = () => import(
  "@/components/app-bar/AppBar"
);

export default Vue.extend({
  components: {
    AppBar
  },
  asyncData({ $config, store, error }) {
    return ShopService.getProducts($config)
      .toPromise()
      .then((response) => {
        store.dispatch("Products/setProducts", response);
      })
      .catch(() => {
        error({ statusCode: 404 });
      });
  },
  data() {
    return {
      filterFlag: false,
      showSnackbar: false
    }
  },
  computed: {
    computedProducts(): IProduct[] {
      return this.filterFlag ? this.filteredProducts : this.products;
    },
    ...mapState("Products", ["products", "filteredProducts"])
  },
  created() {
    this.$root.$on("filter-products", () => { this.filterFlag = true })
    this.$root.$on("clear-product-filter", () => { this.filterFlag = false })
  },
  methods: {
    addItemToCart(product: IProduct): void {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price
      };
      this.$store.dispatch("Cart/addToCart", cartItem);
      this.showSnackbar = true;
    }
  }
})
