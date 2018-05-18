<template>
    <div>
        <h1>Menu</h1>
        <div class="row">
            <div class="col-md-8">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>size</th>
                            <th>price</th>
                            <th>buy</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" v-bind:key="item.name">
                        <tr>
                            <td>
                                <strong>{{item.name}}</strong>
                            </td>
                        </tr>
                        <tr v-for="option in item.options" v-bind:key="option.size">
                            <td>{{option.size}} SIZE</td>
                            <td>{{option.price}} RMB</td>
                            <td>
                                <button v-on:click="addToBasket(item,option)" class="btn">+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
                <div v-if="baskets.length > 0">
                    <table class="table">
                        <thead class="thead-default">
                            <tr>
                                <th>pcs</th>
                                <th>type</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in baskets">
                            <tr>
                                <td>
                                    <button v-on:click="deQuantity(item)" class="btn">-</button>
                                    <span>{{item.quantity}}</span>
                                    <button v-on:click="inQuantity(item)" class="btn">+</button>
                                </td>
                                <td>{{item.name}} {{item.size}}</td>
                                <td>{{item.price * item.quantity}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Total:{{total}}</p>
                    <button class="btn btn-block">Buy</button>
                </div>
                <div v-else>
                    No shopping
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            baskets: [],
            getMenuItems: {
                // 1: {
                //     'name': 'Duran Pizza',
                //     'des': 'I like duran',
                //     'options': [{
                //         'size': 9,
                //         'price': 38
                //     }, {
                //         'size': 12,
                //         'price': 48
                //     }]
                // },
                // 2: {
                //     'name': 'Apple Pizza',
                //     'des': 'I like apple',
                //     'options': [{
                //         'size': 9,
                //         'price': 39
                //     }, {
                //         'size': 12,
                //         'price': 49
                //     }]
                // },
                // 3: {
                //     'name': 'ZZZ Pizza',
                //     'des': 'I like zzz',
                //     'options': [{
                //         'size': 9,
                //         'price': 40
                //     }, {
                //         'size': 12,
                //         'price': 10
                //     }]
                // }
            }

        };
    },
    created() {
        fetch('https://wd4108341731sftckd.wilddogio.com/menu.json')
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.getMenuItems = data;
            });
    },
    computed: {
        total() {
            let totalCost = 0;

            for (let index in this.baskets) {

                let indItem = this.baskets[index];
                totalCost += indItem.quantity * indItem.price;
            }

            return totalCost;
        }
    },
    methods: {
        addToBasket(item, option) {
            let basket = {
                name: item.name,
                size: option.size,
                price: option.price,
                quantity: 1
            };
            if (this.baskets.length > 0) {
                let res = this.baskets.filter((basket) => {
                    return (basket.name === item.name && basket.price === option.price);
                });
                if (res.length > 0) {
                    res[0].quantity++;
                } else {
                    this.baskets.push(basket);
                }

            } else {
                this.baskets.push(basket);
            }

        },
        deQuantity(item) {
            item.quantity--;
            if (item.quantity <= 0) {
                this.removeBasket(item);
            }
        },
        inQuantity(item) {
            item.quantity++;
        },
        removeBasket(item) {
            this.baskets.splice(this.baskets.indexOf(item), 1);
        }
    }
};
</script>