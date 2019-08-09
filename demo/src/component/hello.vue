<template>
    <div :class="prfClass">
        <p>hello, webpack</p>
    </div>
</template>

<script>
export default {
    name: "hello",
    data () {
        return {
            prfClass: 'demo'
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./hello.less";
</style>