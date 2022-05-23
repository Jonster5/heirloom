<script lang="ts">
    import Home from '@pages/Home.svelte';
    import Timeline from '@pages/Timeline.svelte';
    import { loadItems } from '@utils/items';

    import { CurrentPage } from '@utils/ui';
    import { Writable, writable } from 'svelte/store';

    const currentPage: Writable<CurrentPage> = writable(CurrentPage.Home);
</script>

{#await loadItems('/items.json') then items}
    {#if $currentPage === CurrentPage.Home}
        <Home {currentPage} />
    {:else if $currentPage === CurrentPage.Timeline}
        <Timeline {currentPage} {items} />
    {/if}
{/await}
