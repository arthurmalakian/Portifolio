<template>
    <div class="contact-form">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <form>
                <div class="form-group px-4">
                    <label class="text-white mb-3" for="name">Nome</label>
                    <input type="name" class="form-control" id="name" placeholder="Seu nome :)">
                </div>
                <div class="form-group px-4 mt-4">
                    <label class="text-white mb-3" for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email-help" placeholder="Seu email">
                    <small id="email-help" class="form-text text-muted">Não compartilharei seu email.</small>
                </div>
                <div class="form-group px-4 mt-4">
                    <label class="text-white mb-3" for="message">Mensagem</label>
                    <textarea type="message" class="form-control" id="message" placeholder="Me conte sua ideia :D"></textarea>
                </div>
                <div class="form-group px-4 mt-4 text-end
                ">
                    <button type="submit" class="btn btn-dark border border-light">Enviar</button>
                </div>
                </form>
            </div>
            <div class="col-lg-6">
                <img src="https://picsum.photos/640/400?random=3" class="img-fluid" alt="contact">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>