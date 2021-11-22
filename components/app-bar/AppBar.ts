import Vue from "vue";
import { mapGetters } from "vuex"

const CategoryList = () => import(
  "@/components/category-list/CategoryList"
);

export default Vue.extend({
  components: {
    CategoryList
  },
  computed: {
    ...mapGetters("Cart", ["cartItemsCount"])
  }
})
