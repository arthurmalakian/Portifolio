<template>
    <div class="footer mt-3">
        <footer class="bg-light text-center text-lg-start">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Mussum Ipsum</h5>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Sapien in monti palavris qui num significa nadis i pareci latim.Quem manda na minha terra sou euzis!Mé faiz elementum girarzis, nisi eros vermeio.</p>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Mussum Ipsum</h5>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Sapien in monti palavris qui num significa nadis i pareci latim.Quem manda na minha terra sou euzis!Mé faiz elementum girarzis, nisi eros vermeio.</p>
                    </div>
                </div>
            </div>
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © {{year}}
                <a class="text-dark" target="_blank" href="https://www.mixinternet.com.br">Arthur Sérvulo Rodrigues dos Santos</a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            year: new Date().getFullYear(),
        }
    }
}
</script>

<style>

</style>