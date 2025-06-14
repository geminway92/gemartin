<template>
    <div class="base-navbar">
        <div class="logo" v-on:click="goToHome">
            <span class="mark">G</span>Martin
        </div>

        <nav>
            <div class="links-external">
                <a href="https://www.linkedin.com/in/gmartinr/">Linkedin</a>
                <a href="https://github.com/geminway92">Github</a>
            </div>
            
            
            <div class="links-views">
                <RouterLink to="/works">Works</RouterLink>
            </div>
            
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
        width: 100%;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0 1rem;
    }

    .links-external {
        display: flex;
        gap: 2rem;
    }

    .links-external a {
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: var(--text-color);
    }

    
</style>