<template>
    <div v-if="isLoading">
        <div class="container">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </div>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: Boolean,
    }
}
</script>

<style lang="scss" scoped>
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container {
    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: auto;
    margin-right: auto;
    height: 15px;
    width: 105px;
    display: flex;
    position: relative;
    .circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: black;
        animation: move 500ms linear 0ms infinite;
        margin-right: 30px;
        &:first-child {
            position: absolute;
            top: 0;
            left: 0;
            animation: grow 500ms linear 0ms infinite;
        }
        &:last-child {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 0;
            animation: grow 500ms linear 0s infinite reverse;
        }
    }
}
@keyframes grow {
    from {
        transform: scale(0, 0);
        opacity: 0;
    }
    to {
        transform: scale(1, 1);
        opacity: 1;
    }
}
@keyframes move {
    from {
        transform: translateX(0px)
    }
    to {
        transform: translateX(45px)
    }
}
</style>