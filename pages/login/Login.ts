import Vue from "vue";
import { mapState } from "vuex";

import NavigateMixin from "@/mixins/NavigateMixin";
import { AuthService } from "@/services/AuthService";

const AppBar = () => import(
  "@/components/app-bar/AppBar"
)

export default Vue.extend({
  components: {
    AppBar
  },
  mixins: [NavigateMixin],
  data() {
    return {
      username: "",
      password: ""
    }
  },
  computed: {
    ...mapState("Session", ["user"])
  },
  beforeMount() {
    if (this.user.authenticated) {
      this.goToShop();
    }
  },
  methods: {
    login(email: string, password: string): void {
      AuthService.getUser(email).subscribe(
        (data) => {
          if (data.password === password && data.authenticated) {
            const detailsWithoutPassword = {
              id: data.id,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              authenticated: data.authenticated
            }
            this.$store.dispatch("Session/setUser", detailsWithoutPassword);
            this.goToShop();
          }
        }
      );
    }
  }
});
