<template>
    <div @click="goRoute(title)" class="card mx-2 shadow-lg" :style="{width: widthProp}">
      <img class="h-50" :src="photo" alt="">
    
      <div class="container">
          <h1 class="title">{{title}}</h1>
          <p>{{textInfo}}</p>
          <hr>
          <p class="text-center">{{subtitle}}€</p>
      </div>
    
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            subtitle: String,
            photo: String,
            textInfo: String,
            goRoute: String,
            widthProp: Number
        },
    }

</script>

<style scoped>
.card{
  width: 15rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: .5s;
  height: 400px;
  background: white;
  color: #333333;
}

img {
    object-fit: cover;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
}    

.card:hover{
  transform: scale(1.05);
}

.card .title {
  padding: 0.2rem;
  font-size: 1rem;
  margin: 0;
}

</style>