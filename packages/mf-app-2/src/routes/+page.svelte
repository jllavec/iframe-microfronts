<script lang=ts>
  import { onMount } from 'svelte'
  import { DogsService } from '../service/DogsService'

  let breed = '';
  let breedImgUrl = ''
  async function fetchImg(breed: string) {
    const img = await DogsService.getDogImg(breed)
    breedImgUrl = img.data?.message
    console.log(breedImgUrl)
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    breed = urlParams.has('breed') ? urlParams.get('breed') : '';

    fetchImg(breed)
  });
</script>

{#if breed}
    <p>{breed}</p>
    <img src={breedImgUrl} alt="dog" />
{:else}
    <p>No breed provided</p>
{/if}