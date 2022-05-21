<script lang="ts">
    import { increment, decrement } from '@lib/counter';
    import { writable } from 'svelte/store';

    const counter = writable(~~(Math.random() * 100));
</script>

<div>
    <button on:click={() => decrement(counter)}>-</button>
    <span>{$counter}</span>
    <button on:click={() => increment(counter)}>+</button>
</div>

<style lang="scss">
    div {
        display: flex;
        width: 20vw;

        justify-content: center;
        align-items: center;
        gap: 1vw;

        button {
            border: none;
            background: none;

            font-size: 2vw;
            color: white;

            user-select: none;

            &:hover {
                cursor: pointer;
                color: darkgrey;
            }

            &:active {
                color: grey;
            }
        }

        span {
            font-size: 3vw;
            color: white;
        }
    }
</style>
