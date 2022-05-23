<script lang="ts">
    export let title: string = 'Unamed Timeline Item';
    export let timePeriod: string = '0000';
    export let bgImage: string = 'background.svg';
    export let text: string = 'lorem ipsum amongus';
    export let brightness: number = 30;
</script>

<article>
    <img
        src={`/images/${bgImage}`}
        alt=""
        style={`filter: saturate(80%) sepia(50%) brightness(${brightness}%);`}
    />

    <h1>{title}</h1>
    <h3>{timePeriod}</h3>

    <p>{text}</p>
</article>

<style lang="scss">
    article {
        display: flex;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        flex-direction: column;
        align-items: center;

        background: transparent;

        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        overflow-y: scroll;

        -ms-overflow-style: none;
        scrollbar-width: none;
        overflow: -moz-scrollbars-none;

        &::-webkit-scrollbar {
            display: none;
        }

        h1 {
            font-size: max(2.5vw, 3vw);
            color: gold;

            text-shadow: 0 0 2vw rgb(255, 228, 75);
        }

        h3 {
            font-size: max(1rem, 1.5vw);
            color: grey;
        }

        p {
            color: rgb(202, 218, 237);
            text-align: justify;
            font-weight: 200;
            font-family: 'Raleway' 'Trebuchet MS', 'Lucida Sans Unicode',
                'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size: 2vw;
            width: 60%;
        }

        img {
            position: fixed;

            left: 0;
            top: 0;

            width: 100vw;
            height: 100vh;

            z-index: -1;

            user-select: none;
        }
    }
</style>
