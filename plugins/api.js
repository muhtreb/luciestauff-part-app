import createBlogRepository from '~/api/blog'
import createInstagramRepository from '~/api/instagram'
import createContactRepository from '~/api/contact'
import createShopRepository from '~/api/shop'
import createDataRepository from '~/api/data'

export default (context, inject) => {
  inject('blogRepository', createBlogRepository(context.$axios)())
  inject('instagramRepository', createInstagramRepository(context.$axios)())
  inject('contactRepository', createContactRepository(context.$axios)())
  inject('shopRepository', createShopRepository(context.$axios)())
  inject('dataRepository', createDataRepository(context.$axios)())
}
