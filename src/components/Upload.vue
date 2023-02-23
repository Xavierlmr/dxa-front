<script lang="ts">
import { defineComponent } from 'vue';
import axios from  'axios';
export default defineComponent({
    props: {
    show: Boolean
  },
  data(){
    return{
      file:'',
    }
  },
  methods: {
    handleFileUpload( event : any){
      this.file = event.target.files[0];
    },
    uploadImage(){
      const form : any = document.querySelector('form');
      let formData = new FormData(form);
      formData.set('file', this.file);
      console.log(formData);
      axios.post( 'http://localhost:3000/wallpapers/upload',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    }
  }

})

</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="$emit('close')">
      <div class="modal-container rounded-[15px]" @click.stop="">
        <h1 class="text-center upp text-violet-50 text-xl">Add a wallpaper</h1>
        <div class="modal-body">
          <form class="">
          <label class="" for="">
            <span class="block text-violet-50 mt-3">Title</span>
            <input name="title" class="border-2 border-sky-500 rounded-[10px] w-full mt-1"/>
          </label>
          <label class="" for="">
            <span class="block text-violet-50 mt-3">Description</span>
            <textarea class="border-2 border-sky-500 rounded-[12px] w-full mt-1" name="description"></textarea>
          </label>
          <label class="">
            <span class="block text-violet-50 mt-3">Choose profile photo</span>
            <input type="file" name="file" @change="handleFileUpload( $event )" class="block text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-[10px] file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100 mt-1"/>
          </label>
          </form>
          <button
              class="modal-default-button p-2 ml-4 mt-4 w-20 rounded-[10px] text-violet-50 bg-[#7B5A8F] hover:text-[#7B5A8F] hover:bg-violet-50 transition-colors"
              @click="uploadImage();$emit('close')"
            >OK</button>
          <button
            class="modal-default-button p-2 mt-4 w-28 rounded-[10px] text-violet-50 bg-[#7B5A8F] hover:text-[#7B5A8F] hover:bg-violet-50 transition-colors"
            @click="$emit('close')"
          >Cancel</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 500px;
  margin: auto;
  padding: 20px 30px;
  background-color: #4B3757;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>