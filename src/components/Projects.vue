<template>
  <div class="projects-container">
    <div class="projects__title-projects">
      <h2 class="card_title">Projects ({{ this.projects.length }})</h2>
    </div>
    <div v-for="project in projects" :key="project.name" class="projects">
      <img
        :src="getImage(project.image)"
        :alt="project.name"
        class="project_image"
      />
      <div class="project_info">
        <div class="project_tags">
          <span  v-for="tag in project.tags" :key="tag" class="project_tag">{{tag}}</span>

        </div>
        <div class="project-description-container">
          <h2 class="project__title">{{project.name}}</h2>
          <p class="project__text">
            {{ $(project.descriptions) }}t
          </p>
        </div>
        <div class="buttons">
          <a
            :href="project.links[0].demo"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            :href="project.links[0].code"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
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
          this.projects = data[0].projects
        })
    },
    getImage(photo){
      return require(`@/assets/images/${photo}`).default;
    }
  },

  created(){
    this.getDateJson()
  }
};
</script>

<style scoped>
.projects__title-projects {
  border-radius: var(--border-radius);
  background-color: var(--bg-card-color);
  transition: var(--transition);
  padding: 1em;
  margin-bottom: 1em;
  font-size: 0.8em;
}

.card_title {
  margin: 0 35%;
}

.projects {
  display: flex;
  background-color: var(--bg-card-color);
  padding: 1em;
  border-radius: var(--border-radius);
  transition: var(--transition);
  flex-direction: column;
  margin-bottom: 1em;
}

.project_tags {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-start;
}

.project_tag {
  margin-right: 3px;
}

.project-description-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
}

.project__title {
  font-size: 1.2em;
  color: var(--primary-color);
}

.project__text {
  margin: 0.5em;
}

.project_image {
  max-width: 100%;
  border-radius: var(--border-radius);
}

.button:hover {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.buttons {
  display: flex;
  position: relative;
  gap: 2em;
  width: 250px;
  margin-left: 22%;
}

.button {
  display: inline-flex;
  width: 80px;
  line-height: 2.5;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: var(--primary-color);
  color: #fff;
}

.button--primary {
  background-color: var(--primary-color);
  color: #fff;
}

@media screen and (width: 320px) {
  .card_title {
    width: 100px;
  }
  .project_tags {
    font-size: 0.9em;
  }
  .project_tag {
    margin-right: 3px;
  }
}

@media screen and (min-width: 700px) {
  .buttons {
    margin-left: 30%;
  }
}

@media screen and (min-width: 1166px) {
  .projects__title-projects {
    margin-bottom: 0em;
  }

  .card_title {
    margin: 0;
  }

  .projects-container {
    display: grid;
    min-width: 300px;
    align-items: flex-start;
    gap: 1em;
    margin: 2em 0;
  }

  .project__title {
    font-size: 1em;
    margin-left: 0.5em;
  }

  .projects {
    margin-bottom: 0em;
  }

  .project-description-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .project__text {
    font-size: 0.9em;
  }

  .buttons {
    margin-left: 35%;
  }
}

</style>
