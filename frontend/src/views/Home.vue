<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="message" />
    {{ message }}
  </div>
</template>

<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  components: { HelloWorld },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(): any {
    let message = ref("");

    const getMessage = async () => {
      await axios.get(process.env.VUE_APP_BACKEND_BASE_URL).then((res) => {
        message.value = res.data as string;
      });
    };

    onMounted(getMessage);

    return { message };
  },
};
</script>
