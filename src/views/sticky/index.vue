<template>
    <div class="container">
        <h3 v-sticky="{top: 0, index: 100}">Sticky</h3>
        <!-- <h3 class="sticky">Sticky</h3> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .container {
        height: 2400px;
    }

    .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
</style>