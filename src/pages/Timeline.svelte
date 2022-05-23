<script lang="ts">
    import Button from '@components/Button.svelte';

    import TlItem from '@components/TLItem.svelte';
    import { Item } from '@utils/items';
    import { CurrentPage } from '@utils/ui';
    import { Writable, writable } from 'svelte/store';

    export let currentPage: Writable<CurrentPage>;
    export let items: Item[];

    const len = items.length;

    export const cin = writable(0); // Current Item Number
</script>

<main>
    <header>
        <img
            src="/images/close.svg"
            alt="close"
            on:click={() => currentPage.set(CurrentPage.Home)}
        />
    </header>

    <Button
        image="/images/prev.svg"
        action={() => cin.update((i) => (i - 1 < 0 ? 0 : i - 1))}
        num={cin}
        pos={0}
    />
    <div>
        {#each items as item, i}
            {#if i === $cin}
                <TlItem {...item} />
            {/if}
        {/each}
    </div>
    <Button
        image="/images/next.svg"
        action={() => cin.update((i) => (i + 1 > len - 1 ? len - 1 : i + 1))}
        num={cin}
        pos={len}
    />
</main>

<style lang="scss">
    main {
        display: flex;

        width: 100vw;
        height: 100vh;

        margin: 0;
        padding: 0;

        align-items: center;

        header {
            display: flex;
            position: absolute;

            top: 0;
            left: 0;

            width: 100vw;
            height: 8vh;

            justify-content: flex-end;
            align-items: center;

            margin: 0;
            padding: 1vh;
            box-sizing: border-box;

            img {
                height: 80%;
                aspect-ratio: 1;

                &:hover {
                    filter: brightness(150%);
                    cursor: pointer;
                }

                &:active {
                    filter: brightness(200%);
                }
            }
        }

        div {
            width: 80%;
            height: 100%;
        }
    }
</style>
