import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    goToShop: () => Promise<any>;
  }
}

export default Vue.extend({
  methods: {
    goToShop(): void {
      this.$router.push({
        name: "Shop",
        params: this.$route.params
      });
    },
    goToCart(): void {
      this.$router.push({
        name: "Cart",
        params: this.$route.params
      });
    },
    goToLogin(): void {
      this.$router.push({
        name: "Login",
        params: this.$route.params
      });
    }
  }
});