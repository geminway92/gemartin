<template>
    <div class="home-view">
        <div class="title-container">
            <span>Frontend Developer</span>
            <div class="tecnology">
                if (Svelte && Vue)
            </div>
        </div>

        <div class="photo">
            <img src="../assets/images/gema.png" alt="">
        </div>
    </div>
    

</template>

<script>
    export default {
        name: "HomeView",
        components: {
            
        }
    }
</script>

<style>

    .home-view {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        height: calc(100vh - 67px);
    }

    .title-container {
        font-size: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 2rem;
    }

    .tecnology {
        display: flex;
        color: var(--paleta-3);
    }

    .photo img {
        width: 15rem;
        border-radius: 100%;
    }
</style>
