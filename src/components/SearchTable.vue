<template>

</template>

<script>
    export default {
        name: "SearchTable",
        data() {
            return {
                search: ''
            }
        },
        props: {
            rowData: {
                type: Array,
                default: () => {
                    return {}
                }
            }
        },
        methods: {
            searchHandler(item) {
              let jopa =  this.this.rowData.filter(elem => {elem.firstName.includes(this.search)})
                this.$emit('searchHandler', item)
                console.log(jopa)

            }
        }
    }
</script>

<style scoped>

</style>