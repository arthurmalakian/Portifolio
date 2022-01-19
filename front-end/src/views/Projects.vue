<template>
    <div class="projects">
        <div class="bg-dark py-4 rounded mb-5">
            <h1 class="text-light text-center">Projetos finalizados</h1>
            <div class="container mx-2 mt-5">
                <div class="row justify-content-start">
                    <ProjectCard 
                        v-for="project in projects" 
                        :key="project.id" 
                        :title="project.title"
                        :description="project.description"
                        :url="project.url"
                        :image="project.image" 
                    />
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data(){
    return {
        projects: [
            {
                id: 1,
                image: "https://picsum.photos/500/300?random=1",
                title: "Site Colégio Diocesano Seridoense",
                description: "Trabalhei no painel de administração do site e na integração dos recursos de cadastro do painel com o front-end.",
                url: "https://www.cdscaico.com.br/"
            },
            {
                id: 2,
                image: "https://picsum.photos/500/300?random=2",
                title: "Sistema Gerenciador do Condomínio Pontamares",
                description: "Criei um painel de administração com diversas funcionalidades voltado para o gerenciamento do condomínio Pontamares (Natal-RN)",
                url: "https://sigcondominio-pontamares.dreamhosters.com/"
            }
        ]
    }
  }
}
</script>

<style>

</style>