<script lang="ts">
import WallpaperCard from './WallpaperCard.vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import type { Wallpaper } from '@/interfaces/Wallpaper';


export default defineComponent({
    components:{
         WallpaperCard
    },
    data(){
      return {
        wallpapers: [] as Wallpaper[],
      }
    },
    methods:{
        async getWallpapers(){
           const wpResponse = await axios.get('http://localhost:3000/wallpapers');
           this.wallpapers = wpResponse.data;
        }
    },
    async mounted() {
          await this.getWallpapers()
      }
})

</script>
<template>
<div>
    <div class="grid grid-cols-fill-16 mx-3 justify-items-center items-center">
      <router-link v-for="wp in wallpapers" :to="{ name: 'wallpaper', params: {id: wp.id} }" class="mb-3">
        <WallpaperCard :wpData=wp></WallpaperCard>
      </router-link>
    </div>
  </div>
</template>
