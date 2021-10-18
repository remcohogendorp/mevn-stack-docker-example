<template>
  <div class="home">
    <HelloWorld :msg="message" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import { getMessage } from "../services/api";
import { onMounted, ref } from "vue";

export default {
  components: { HelloWorld },

  setup(): unknown {
    const message = ref("");

    onMounted(async () => {
      message.value = await getMessage();
    });

    return { message };
  },
};
</script>
