<template>
    <BaseNavbar/>
    <main>
        <RouterView />
    </main>
</template>

<script>
    import { defineAsyncComponent } from "vue"
    export default {
        name: "App",
        components: {
            BaseNavbar: defineAsyncComponent(() =>
                import("./components/BaseNavbar.vue")
            ),
        }
    }
</script>

<style>
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>