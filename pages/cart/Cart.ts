import Vue from "vue";
import { mapGetters } from "vuex";

import NavigateMixin from "@/mixins/NavigateMixin";
import { ICartItem } from "@/store/Cart";

const AppBar = () => import(
  "@/components/app-bar/AppBar"
);

export default Vue.extend({
  components: {
    AppBar
  },
  mixins: [NavigateMixin],
  computed: {
    cartItems(): ICartItem[] {
      return this.$store.state.Cart.items;
    },
    taxes(): number{
      return this.cartTotal * (13 / 100);
    },
    TotalAmount(): string {
      return ((this.cartTotal + this.taxes) as number).toFixed(2);
    },
    ...mapGetters("Cart", ["cartTotal"])
  },
  methods: {
    setQuantity(id: number, event: string, quantity?: number): void {
      if (quantity as number <= 1) {
        this.deleteItem(id);
      } else {
        this.$store.dispatch("Cart/setQuantity", { id, event});
      }
    },
    deleteItem(id: number): void {
      this.$store.dispatch("Cart/deleteItem", id);
    }
  }
})
