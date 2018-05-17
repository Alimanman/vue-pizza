<template>
    <div>
        <h1>Login</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password">
            </div>
            <button class="btn" type="submit">Login</button>
        </form>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        onSubmit: function () {
            axios.get('user.json')
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        users.push(user);
                    }

                    let result = users.filter((user) => {
                        return user.email === this.email && user.password === this.password;
                    });

                    if (result != null && result.length > 0) {
                        this.$router.push({ name: 'homeLink' });

                    } else {
                        alert('NG');
                    }

                });
        }
    }
};
</script>