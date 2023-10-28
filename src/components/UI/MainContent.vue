<template>
<div class="main">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'main-content'
}
</script>

<style scoped>
    .main {
        display: flex;
        flex: 1;
        padding: 21vh 0 0 0;
        flex-flow: wrap;
        justify-content: space-between;
    }

</style>