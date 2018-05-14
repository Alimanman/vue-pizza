<template>
    <div>
        <h1>Home</h1>
        <button class="btn btn-success" v-on:click="goRouter">Go</button>
    </div>
</template>
<script>
export default {
    methods: {
        goRouter: function () {
            this.$router.push('/menu');
        }
    }
};
</script>
