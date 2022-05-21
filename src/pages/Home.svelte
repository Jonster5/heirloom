<script lang="ts">
    import Counter from '@components/Counter.svelte';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<main>
    <h1>Home</h1>
    <h3>TCF Standard Svelte Template</h3>
    <Counter />
</main>

<style lang="scss">
    main {
        display: flex;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        flex-direction: column;
        align-items: center;

        background: url('images/background.svg') no-repeat center center fixed;
        background-size: cover;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        h1 {
            font-size: 4vw;

            color: white;
        }

        h3 {
            color: rgb(35, 35, 35);
        }
    }
</style>
