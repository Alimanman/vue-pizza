<template>
    <div>
        <h1>Admin</h1>
        <div class="row">
            <div class="col-md-8">
                <app-newpizza></app-newpizza>
            </div>
            <div class="col-md-4">
                <h3>Menu</h3>
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Cat</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" v-bind:key="item.name">
                        <tr>
                            <td>{{item.name}}</td>
                            <td>
                                <button class="btn" v-on:click="deleteData(item)">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import NewPizza from './NewPizza.vue';
export default {
    data() {
        return {
            getMenuItems: []
        };
    },
    components: {
        'app-newpizza': NewPizza
    },
    created() {
        fetch('https://wd4108341731sftckd.wilddogio.com/menu.json')
            .then(res => {
                return res.json();
            })
            .then(data => {
                let menuArray = [];
                for (let key in data) {
                    data[key].id = key;
                    menuArray.push(data[key]);
                }
                this.getMenuItems = data;
                console.log(this.getMenuItems);

            });
    },
    methods: {
        deleteData(item) {
            fetch('https://wd4108341731sftckd.wilddogio.com/menu/' + item.id + '/.json', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    this.$router.push({ name: 'menuLink' });
                });
        }
    }
    // data() {
    //     return {
    //         name: 'Jerry'
    //     };
    // },
    // beforeRouteEnter: (to, form, next) => {
    //     next(vm => {
    //         alert(vm.name);
    //     });
    // },
    // beforeRouteEnter: (to, form, next) => {
    //     next(vm => {
    //         alert(vm.name);
    //     });
    // },
    // beforeRouteLeave: (to, form, next) => {
    //     if (confirm('Are you sure leave?') == true) {
    //         next();
    //     } else {
    //         next(false);
    //     }
    // }
};
</script>
