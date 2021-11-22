import Vue from "vue";
import { mapState } from "vuex";

import { ShopService } from "@/services/ShopService";

export default Vue.extend({
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
      title: "Notch shop"
    }
  },
  computed: {
    ...mapState("Products", ["products"])
  }
})
