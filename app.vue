<script setup lang="ts">
const route = useRoute();

useHead({
    title: 'Samples'
})

</script>
<template>
    <div>
        <NuxtLayout>
            <v-app>
                <NuxtPage />
            </v-app>
        </NuxtLayout>
    </div>
</template>
