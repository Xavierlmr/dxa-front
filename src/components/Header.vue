<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './Navbar.vue';

export default defineComponent({})

</script>

<template>
    <nav
        class="relative w-full flex items-center justify-between py-3  bg-[#79218F] hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div class="flex items-center flex-shrink-0 text-white mr-4">
            <span class="font-semibold text-xl tracking-tight pl-4">DxA Wallpapers</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="lg:flex-grow">
                <a href="#responsive-header"
                    class="block lg:inline-block rounded-lg mx-1 px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900">
                    Wallpapers
                </a>
                <a href="#responsive-header"
                    class="block lg:inline-block rounded-lg mx-1 px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900">
                    Upload
                </a>
                <a href="#responsive-header"
                    class="block lg:inline-block rounded-lg mx-1 px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900">
                    Search
                </a>
            </div>
        </div>
    </nav>

</template>

<style>

</style>