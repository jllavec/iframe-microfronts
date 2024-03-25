<script setup lang="ts">
import { ref } from 'vue'
const iframe = ref<HTMLIFrameElement | null>(null)

iframe.value?.addEventListener('message', (event) => {
  console.log('EVENTO:', event)
})

window.addEventListener("message", e => console.log(e.data));
</script>

<template>
  <main>
    <iframe src="http://localhost:5001"
      v-resize="{ log: false }"
      width="100%"
      frameborder="0"
      ref="iframe"
    />
  </main>
</template>
