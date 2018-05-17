<template>
    <div>
        <h1>Register</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password">
            </div>
            <div class="form-group">
                <label for="password2">Password2</label>
                <input type="password" v-model="password2">
            </div>
            <button class="btn" type="submit">Register</button>
        </form>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            password2: ''
        };
    },
    methods: {
        onSubmit: function () {
            if (this.password == this.password2) {
                const formData = {
                    email: this.email,
                    password: this.password,
                    password2: this.password2
                };
                axios.post('user.json', formData)
                    .then(res => {
                        this.$router.push({ name: 'loginLink' });
                    });
            } else {
                alert('Password is wrong!');
            }
        }
    }
};
</script>