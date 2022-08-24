<template>
    <div class="container">
        <!-- 指令sticky有误差 -->
        <h3 v-sticky="{top: 0, index: 100}">Sticky</h3>
        <!-- 原生sticky效果更准确 -->
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

    .container::before {
        @include clear-overflow;
    }

    .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
</style>