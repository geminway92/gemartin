<template>
    <div class="base-navbar">
        <div class="logo" v-on:click="goToHome">
            <span class="mark">G</span>Martin
        </div>

        <nav>
            <RouterLink to="/works">
                Works
            </RouterLink>

            <a target="_blank" href="https://www.linkedin.com/in/gmartinr/">
                <i class="fa-brands fa-linkedin-in"></i>
                Linkedin
            </a>
            <a target="_blank" href="https://github.com/geminway92">
                <i class="fa-brands fa-github"></i>
                Github
            </a>
        </nav>
    </div>

</template>

<script>
    export default {
        methods: {
            goToHome() {
                this.$router.push('/');
            },
        },
    }
</script>

<style scoped>
    .base-navbar {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }

    .logo {
        cursor: pointer;
         font-weight: bold;
        font-size: 1.5rem;
    }

    .mark {
        color: var(--paleta-3)
    }

    nav {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 1.5rem;
    }


    nav a {
        padding: 0.5rem;
        text-decoration: none;
        color: var(--text-color);
    }

    .router-link-active {
        color: var(--paleta-3) !important;
        border-bottom: 1px dashed var(--paleta-3);
    }

    
</style>