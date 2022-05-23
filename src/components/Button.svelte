<script lang="ts">
    import { Writable } from 'svelte/store';

    export let image: string;
    export let action: () => void;
    export let num: Writable<number>;
    export let pos: number;

    const dtest = (num: number, pos: number) => {
        if (pos === 0) {
            if (num - 1 < 0) return true;
            return false;
        }

        if (num + 1 > pos - 1) return true;
        return false;
    };

    $: cname = dtest($num, pos) ? 'stop' : 'fine';
</script>

<button on:click={action}>
    <div>
        <img class={cname} src={image} alt="navigate" />
    </div>
</button>

<style lang="scss">
    button {
        display: flex;

        width: 10%;
        height: 50%;

        margin: 0;
        padding: 0;

        justify-content: center;
        align-items: center;

        background: none;
        border: none;
        outline: none;

        user-select: none;

        div {
            display: flex;

            width: 50%;
            height: 80%;

            justify-content: center;
            align-items: center;

            background: rgba(255, 255, 255, 0.05);
            border-radius: 5px;

            transition-duration: 75ms;

            img.stop {
                filter: brightness(30%);
            }

            &:hover {
                background: rgba(255, 255, 255, 0.15);
                cursor: pointer;
            }

            &:active {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-1vh);
            }
        }
    }
</style>
