const { defaultLanguage } = require('../../prismic-configuration')

// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

const linkResolver = (doc) => {
  const properties = doc._meta || doc
  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage ? '/' : `/${properties.lang}`
  }

  if (properties.type === 'contactpage') {
    return properties.lang === defaultLanguage
      ? '/contact'
      : `/${properties.lang}/contact`
  }

  if (properties.type === 'bloghome') {
    return properties.lang === defaultLanguage
      ? '/blog'
      : `/blog/${properties.lang}`
  }

  if (properties.type === 'post') {
    return properties.lang === defaultLanguage
      ? `/blog/${doc.uid}`
      : `/blog/${properties.lang}/${doc.uid}`
  }
  return '/'
}

module.exports = linkResolver
