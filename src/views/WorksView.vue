<template>
    <BaseCard 
        title="Hola"
        subtitle="Test"
        photo="a"
        textInfo="b"
        goRoute="TEcT"
        :widthProp=1
    >
    </BaseCard>
</template>

<script>
    import { defineAsyncComponent } from "vue";
    export default {
        name: "WorksView", 
        components: {
            BaseCard: defineAsyncComponent(() => import("../components/BaseCard.vue"))
        }
    }
</script>