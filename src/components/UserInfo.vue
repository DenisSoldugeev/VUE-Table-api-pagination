<template>
    <div class="w-50">
        <div class="card mb-2">
            <h3>{{userInfo.firstName + ' ' + userInfo.lastName}}: {{userInfo.id}}</h3>
            <p>
                {{userInfo.description}}
            </p>
            <p>
                <span>Адрес проживания: <b>{{userInfo.address.streetAddress}}</b></span>
            </p>
            <p>
                <span>Город: <b>{{userInfo.address.city}}</b></span>
            </p>
            <p>
                <span>Провинция/штат: <b>{{userInfo.address.state}}</b></span>
            </p>
            <p>
                <span>Индекс: <b>{{userInfo.address.zip}}</b></span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        props: {
            userInfo: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
    }
</script>

<style scoped>

</style>