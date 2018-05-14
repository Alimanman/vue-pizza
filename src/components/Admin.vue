<template>
    <h1>Admin</h1>
</template>
<script>
export default {
    data() {
        return {
            name: 'Jerry'
        };
    },
    beforeRouteEnter: (to, form, next) => {
        next(vm => {
            alert(vm.name);
        });
    },
    beforeRouteEnter: (to, form, next) => {
        next(vm => {
            alert(vm.name);
        });
    },
    beforeRouteLeave: (to, form, next) => {
        if (confirm('Are you sure leave?') == true) {
            next();
        } else {
            next(false);
        }
    }
};
</script>
