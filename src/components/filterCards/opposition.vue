<template>
    <div id="wraper">
       <div class="background-primary">
           <div class="row p-5">
               <div class="col-sm-12 col-md-4 my-3"  v-for="(ref, index) in data_Arr" :key=index>
                   <div class="card p-4 text-center"  @click="showcase(index)" style="box-shadow : 0px 0px 4px; cursor: pointer;">
                    <a href="#fakeModal"  style="color: black; text-decoration: none">
                    <div class="card-text">
                       <span> <b> INDIA {{ ref.opposition }} </b> </span> on <span class="text-danger" style="font-weight: bold">{{ ref.date }}</span>        
                    </div>
                    </a>                                    
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import { data_ArrMixin } from "@/components/data.js";
import FullDescription from '@/components/filterCards/FullDescription.vue';
import { showcase } from '@/components/showcase.js'
export default {
  mixins: [data_ArrMixin, showcase],
  data(){
    return{
      display: false
    }
  }
};
</script>

<style scoped>
.background-primary{
    background-color: #3531D5;
    border-radius: 10px;
    margin: 50px;
    box-shadow: 0px 4px 20px #3531D5;
}
</style>

