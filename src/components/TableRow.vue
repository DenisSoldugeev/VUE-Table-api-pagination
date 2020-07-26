<template>
    <tr @click="onClick(rowData)">
        <th scope="row">{{rowData.id}}</th>
        <td>{{rowData.firstName}}</td>
        <td>{{rowData.lastName}}</td>
        <td>{{rowData.email}}</td>
        <td>{{rowData.phone}}</td>
    </tr>
</template>

<script>
    export default {
        name: "TableRow",
        data() {
            return {
                userInfo: {}
            }
        },
        props: {
            rowData: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        methods: {
            onClick(item) {
                this.$emit('userInfo', item )

            },
        }

    }
</script>

<style scoped>

</style>