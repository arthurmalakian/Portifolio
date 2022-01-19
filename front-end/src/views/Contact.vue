<template>
    <div class="row mx-5 mt-4 align-items-center bg-dark rounded py-4">
        <ContactForm />
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
    name: 'Contact',
    components: {
        ContactForm
    },
}
</script>

<style>

</style>