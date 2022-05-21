<script lang="ts">
    import Home from '@pages/Home.svelte';

    import { CurrentPage } from '@utils/ui';
    import { Writable, writable } from 'svelte/store';

    const currentPage: Writable<CurrentPage> = writable(CurrentPage.Home);
</script>

{#if $currentPage === CurrentPage.Home}
    <Home />
{/if}
