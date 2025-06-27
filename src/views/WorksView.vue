<template>
  <div class="project" >
    <BaseCard v-for="project in projects"
        :title="project.name"
        :subtitle="$t(project.descriptions)"
        :photo="getImage(project.image)"
        textInfo="b"
        goRoute="TEcT"
        :widthProp=1
    >
    </BaseCard>
  </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";
    export default {
        name: "WorksView", 
        components: {
            BaseCard: defineAsyncComponent(() => import("../components/BaseCard.vue"))
        },
      data(){
        return{
          projects: []
        }
      },

      methods:{
        getDateJson(){
          fetch("data/CVGema.json")
              .then(resp => resp.json())
              .then(data => {
                this.projects = data[0].projects;
                console.log('dataGema', this.projects);
              })
        },
        getImage(photo){
          return require(`@/assets/images/${photo}`);
        }
      },

      created(){
        this.getDateJson()
      }
    }
</script>

<style scoped>
  .project {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
</style>