<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props:['wpData'],
    methods:{
        createEffect(){
            const card: HTMLElement = this.$el.querySelector(".card");
            card.addEventListener("mouseenter", (e) => {
                card.style.setProperty("--o", "1");
            });

            card.addEventListener("mousemove", (e) => {
            card.style.transition = "box-shadow .4s ease,outline .2s ease, opacity .33s ease-out";
            const x = e.clientX;
            const y = e.clientY;
            const div = (e.target as HTMLElement).getBoundingClientRect();
            
            const mx = (x - div.left) / div.width * 100;
            const my = (y - div.top) / div.height * 100;

            card.style.setProperty("--mx", mx + "%");
            card.style.setProperty("--my", my + "%");

            const midX = div.width / 2;
            const midY = div.height / 2;

            const rx = (midX - (x - div.left)) / 8;
            const ry = ((y - div.top) - midY) / 8;

            card.style.setProperty("--rx", rx + "deg");
            card.style.setProperty("--ry", ry + "deg");
        });

        card.addEventListener("mouseout", async (e) => {
            card.style.setProperty("--o", "0");
            card.style.transition = "box-shadow .4s ease,outline .2s ease, opacity .33s ease-out, transform 0.5s";
            card.style.setProperty("--rx", "0deg");
            card.style.setProperty("--ry", "0deg");
        });
        }
    },
    mounted() {
        this.createEffect();
    }
})
</script>
<template>
    <div class="box">
        <div class="card group rounded-[15px] overflow-hidden">
            <div>
                <img class="h-64 w-52 object-cover" :src="'http://localhost:3000/upload/'+wpData.image">
                <div class="duration-300 opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 h-16 bg-black/60">
                    <p class="text-white font-medium ml-2">{{wpData.title}}</p>
                    <p class="text-[#F6E4FC] ml-2">{{wpData.description}}</p>
                </div>
            </div>
            <div class="glaire rounded-[15px]"></div>
        </div>
    </div>
</template>

<style scoped>
:root{
    --mx: 50%;
    --my: 50%;
    --o: 0;
    --rx: 0deg;
    --ry: 0deg;
}
.card{
    width: 208px;
    height: 256px;
    transform: rotateY(var(--rx)) rotateX(var(--ry));
    transform-style: preserve-3d;
    box-shadow: 0 10px 20px -5px #000;
    outline: none;
    transition: box-shadow .4s ease,outline .2s ease, opacity .33s ease-out;
}
.box{
    perspective: 1000px;
}
.glaire{
    position: absolute;
    width: 208px;
    height: 256px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    mix-blend-mode: overlay;
    filter: brightness(.9) contrast(1.75);
    background: radial-gradient(farthest-corner circle at var(--mx) var(--my),rgb(255,255,255, 0.5) 0%,rgba(133,137,141,.33) 60%,rgba(100,100,100,.65) 120%);
    opacity: calc(var(--o)*.66);
}
img{
    position: absolute;
}
</style>