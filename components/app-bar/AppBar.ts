import Vue from "vue";
import { mapState,  mapGetters } from "vuex"

import NavigateMixin from "@/mixins/NavigateMixin";

const CategoryList = () => import(
  "@/components/category-list/CategoryList"
);

export default Vue.extend({
  components: {
    CategoryList
  },
  mixins: [NavigateMixin],
  props: {
    showCategories: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState("Session", ["user"]),
    ...mapGetters("Cart", ["cartItemsCount"])
  },
  methods: {
    logout(): void {
      this.$store.dispatch("Session/logoutUser")
    }
  }
})
