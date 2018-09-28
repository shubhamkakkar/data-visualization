<template>
   <div class="gradient">
      <div class="row">
          <div class="col-sm-6 text-center" style="text-transform: uppercase; letter-spacing: 2px">
          {{ filteredValue }}
          </div>
          <div class="col-sm-6 text-center">
              <input type="text" v-model="search">
          </div>
      </div>
        <div class="row mt-4 mb-0"  v-if="search">
            <div class="col-sm-4 m-auto"
                v-for="(post, index) in filteredList" :key="index">
                <div class="card p-2 mx-2 my-4 text-center customCard" @click="showcase(index)">
                    <a href="#fakeModal" style="color: black; text-decoration: none;">
                        <div class="card-text pt-3">
                            <p>
                                <span>
                                <b> INDIA {{ post.opposition }} </b>
                                </span> on
                                <span class="text-primary">{{ post.date }}</span>
                            </p>
                            <p style="text-transform: uppercase">
                                <b>India </b> 
                                <span class="text-danger font-weight-bold">{{ post.match_result }}</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import { data_ArrMixin } from "@/components/data.js";
import { showcase } from '@/components/showcase.js'
    export default { 
      mixins: [data_ArrMixin, showcase],
      computed:{
          filteredValue() {
              if(this.$store.state.selectedFilter){
                let filtered_value = this.$store.state.checkBoxOptions[this.$store.state.selectedFilter]; 
                this.value = filtered_value.value
                return filtered_value.key
              }
         },
         filteredList(){
             let value = this.value
             let filter = this.search.toLowerCase()  
             return this.data_Arr.filter(search => {   
                if(value === "match_result"){
                    return search.match_result.toLowerCase().includes(filter);   
                }
                else if(value === "ground"){
                    return search.ground.toLowerCase().includes(filter);   
                }
                else if(value === "date"){
                    return search.date.toLowerCase().includes(filter);   
                }
                else if(value === "opposition"){
                    return search.opposition.toLowerCase().includes(filter);   
                }
             })
         }
        },
      data(){
          return{
              search: '',
              value: ''
           }
        }  
    }
</script>

<style scoped>
.gradient{
    background-color: #3531D5;
    color: white;
    padding: 50px;
    margin: 50px;
    border-radius: 5px;
    box-shadow: 0 1px 10px #6713d2;
}

input{
    border-radius: 5px;
    border: 0;
     vertical-align:middle;
    text-align:center;
    width: 100%
}

.customCard{
    cursor: pointer;
}

</style>
