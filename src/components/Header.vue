<script lang="ts">
import { defineComponent } from 'vue';
import Upload from './Upload.vue';

export default defineComponent({
    components: {
    Upload
  },
  data() {
    return {
      showModal: false
    }
  }
})

</script>

<template>
    <nav
        class="relative flex items-center justify-between py-3 m-3 bg-[#553C70] hover:text-gray-700 focus:text-gray-700 shadow-lg rounded-lg">
        <div class="flex items-center flex-shrink-0 text-white mr-4">
            <span class="font-semibold text-xl tracking-tight pl-4">DxA Wallpapers</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="lg:flex-grow">
                <router-link to="/"
                    class="block sm:inline-block rounded-lg mx-1 px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900">
                    Wallpapers
                </router-link>
                <button id="show-modal" @click="showModal = true"
                    class="block sm:inline-block rounded-lg mx-1 px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900">
                    Upload
                </button>
                <Teleport to="body">
                    <Upload :show="showModal" @close="showModal = false">
                    </Upload>
                </Teleport>
                <router-link to="#responsive-header"
                    class="block sm:inline-block rounded-lg mx-1 px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900">
                    Search
                </router-link>
            </div>
        </div>
    </nav>

</template>

<style>

</style>