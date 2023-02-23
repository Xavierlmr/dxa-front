<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import type { Wallpaper } from '@/interfaces/Wallpaper';
import CardList from '@/components/CardsList.vue';

export default defineComponent({
    components:{
      CardList
    },
    computed:{
        wallpaperId(): number{
            return parseInt((this.$route.params.id) as string);
        },
    },
    data(){
      return {
        wallpaper: {} as Wallpaper,
      }
    },
    methods:{
        async getWallpaper(){
           const wpResponse = await axios.get('http://localhost:3000/wallpapers/' + this.wallpaperId);
           this.wallpaper = wpResponse.data;
        }
    },
    watch:{
      '$route': async function(to,from){
        await this.getWallpaper();
      }
    },
    async mounted() {
          await this.getWallpaper()
      }
})

</script>

<template>
    <div class="flex justify-start items-start mx-3 space-x-8">
      <div class="shadow-lg rounded-[10px] w-2/5 overflow-hidden">
        <img class="max-w-full max-h-full" :src="'http://localhost:3000/upload/'+wallpaper.image">
      </div>
      <div class="w-full">
      <div class="block bg-[#584066] shadow-lg rounded-[10px] p-2">
        <h1 class="text-violet-50 text-2xl">{{ wallpaper.title }}</h1>
        <p class="text-violet-50">{{ wallpaper.description }}</p>
      </div>
      <hr/>
      <div class="bg-[#584066] rounded-[10px]">
      <h1 class="text-violet-50 text-lg font-semibold p-2">Other stuff you may like...</h1>
      <CardList></CardList>
      </div>
      </div>
      
    </div>
</template>

<style scoped>

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #8a6ead;
    margin: 1em 0;
    padding: 0;
}
</style>

