<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  msg = "";

  mounted(): void {
    axios.get(process.env.VUE_APP_BACKEND_BASE_URL).then((res) => {
      this.msg = res.data as string;
    });
  }
}
</script>
