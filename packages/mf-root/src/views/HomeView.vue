<script setup lang="ts">
import { ref } from 'vue'
const iframe = ref<HTMLIFrameElement | null>(null)
const iframe2 = ref<HTMLIFrameElement | null>(null)
const dogBreed = ref('')

iframe.value?.addEventListener('message', (event) => {
  console.log('EVENTO:', event)
})

iframe2.value?.addEventListener('message', (event) => {
  console.log('EVENTO:', event)
})

window.addEventListener("message", checkEvent);

function checkEvent(event: MessageEvent) {
  if (event.data.dogBreed) {
    dogBreed.value = event.data.dogBreed
    console.log('RAZA: ', event.data.dogBreed)
  }
}
</script>

<template>
  <main>
    <iframe src="http://localhost:5001"
      v-resize="{ log: false }"
      width="100%"
      frameborder="0"
      ref="iframe"
    />
    <iframe :src="`http://localhost:5002?breed=${dogBreed}`"
      v-if="dogBreed"
      v-resize="{ log: true }"
      width="100%"
      frameborder="0"
      ref="iframe2"
    />
  </main>
</template>
