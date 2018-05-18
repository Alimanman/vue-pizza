<template>
    <form>
        <h3>Add New Pizza</h3>
        <div class="form-group row">
            <label for="" class="col-sm-1">Cat</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">Des</label>
            <div class="col-sm-11">
                <textarea rows="10" class="form-control" v-model="newPizza.des"></textarea>
            </div>
        </div>
        <p>
            <strong>Type1</strong>
        </p>
        <div class="form-group row">
            <label for="" class="col-sm-1">Size</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">Price</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p>
            <strong>Type2</strong>
        </p>
        <div class="form-group row">
            <label for="" class="col-sm-1">Size</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">Price</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-block" v-on:click="addMenuItem">OK</button>
        </div>
    </form>
</template>
<script>
//import axios from 'axios';
export default {
    data() {
        return {
            newPizza: {}
        };
    },
    methods: {
        addMenuItem() {
            let data = {
                name: this.newPizza.name,
                des: this.newPizza.des,
                options: [
                    {
                        size: this.newPizza.size1,
                        price: this.newPizza.price1
                    },
                    {
                        size: this.newPizza.size2,
                        price: this.newPizza.price2
                    }
                ]
            };
            //axios.post('pizaa.json', formData)
            //    .then(res => {
            //        this.$router.push(data);
            //    });
            fetch('https://wd4108341731sftckd.wilddogio.com/menu.json', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(this.$router.push({ name: 'menuLink' }))
                .catch(err => console.log(err));
        }
    }
};
</script>
