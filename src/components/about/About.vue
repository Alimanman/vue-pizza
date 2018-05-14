<template>
    <div>
        <h1>About</h1>

        <div class="row mb-5">
            <div class="col-4">
                <ul class="navbar-nav">
                    <li>
                        <router-link v-bind:to="{name:'historyLink'}" class="nav-link">History</router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{name:'contactLink'}" class="nav-link">Contact</router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{name:'orderLink'}" class="nav-link">Order</router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{name:'deliveryLink'}" class="nav-link">Delivery</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
