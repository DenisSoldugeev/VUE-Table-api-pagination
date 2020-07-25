<template>
    <tr>
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
        props: {
            rowData: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        }

    }
</script>

<style scoped>

</style>