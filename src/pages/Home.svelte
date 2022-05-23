<script lang="ts">
    import { CurrentPage } from '@utils/ui';
    import { Writable } from 'svelte/store';

    export let currentPage: Writable<CurrentPage>;
</script>

<svelte:head>
    <title>Bolivian National Revolution</title>
</svelte:head>

<main>
    <!-- <div class="snow" /> -->

    <h1>Timeline of the Bolivian National Revolution</h1>

    <button on:click={() => ($currentPage = CurrentPage.Timeline)}>
        Begin
    </button>
</main>

<style lang="scss">
    @import '../styles/backgrounds.scss';

    main {
        display: flex;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        flex-direction: column;
        align-items: center;

        background: url('/images/background.png') no-repeat center center fixed;
        background-size: cover;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        h1 {
            font-size: 4vw;

            color: white;

            z-index: 5;
        }

        button {
            width: max(50px, 30vw);
            height: max(25px, 15vh);

            margin: 10vw;

            z-index: 5;

            font-family: 'Raleway' 'Gill Sans', 'Gill Sans MT', Calibri,
                'Trebuchet MS', sans-serif;
            font-weight: 800;
            font-size: max(1rem, 3vw);

            backdrop-filter: blur(5px);
            background: rgba(0, 0, 0, 0.05);
            border: none;
            outline: none;
            border-radius: 5px;

            transition-duration: 75ms;

            &:hover {
                background: rgba(0, 0, 0, 0.15);
                cursor: pointer;
            }

            &:active {
                background: rgba(0, 0, 0, 0.2);
                transform: translateY(-1vh);
            }
        }
    }
</style>
