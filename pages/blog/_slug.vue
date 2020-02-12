<template>
  <div class="blog-article">
    <nuxt-link to="/blog">Back</nuxt-link>
    <h1 class="blog-article-title">
      <span>Comment faire son masque au miel pour le visage ?</span>
    </h1>
    <div class="blog-article-image">
      <img src="~/assets/img/blog/pot-miel.webp" />
    </div>
    <div class="blog-article-content">
      <h3>Pourquoi utiliser du miel pour un soin du visage ?</h3>
      <p>
        Depuis l'Antiquité, les femmes aiment utiliser le miel pour ses vertus
        et ses propriétés hydratantes et curatives. Si ce produit est parfait
        pour sucrer un thé ou une pâtisserie, il est aussi très riche en
        énergie.
      </p>

      <p>
        Véritable allié contre les coups de pompe, ce sucre produit par les
        abeilles est très bénéfique pour la peau. Composé de minéraux, de
        vitamines et d'<a
          href="https://www.cosmopolitan.fr/,8-aliments-antioxydants,1965582.asp"
          title="8 aliments antioxydants"
          class="internal"
          >antioxydants</a
        >, il permet de lutter contre les bactéries et les infections.
      </p>

      <p>
        Idéal pour se démaquiller et nettoyer l'épiderme, le miel risque bien de
        devenir votre nouvel allié beauté !
      </p>

      <h3>Faire un soin maison du visage au miel pour les peaux sensibles</h3>
      <p>
        Si vous avez la <strong>peau qui rougit</strong> vite lorsqu'il fait
        froid, ou qui tiraille après la douche, le miel est fait pour vous !
        Dans un bol, versez deux cuillères à café de miel de fleurs et une
        cuillère à café de gel d'aloe vera.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-blog-detail', 'page-blog']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: "Le Blog<br/>L'atelier Hair & Make Up"
    })
  },
  asyncData({ app, params, error, payload, store }) {
    return {
      slug: params.slug
    }
  },
  data() {
    return {
      slug: ''
    }
  }
}
</script>
