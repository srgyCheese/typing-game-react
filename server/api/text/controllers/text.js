'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async random(ctx) {
        const _texts = await strapi.query('text').model.fetchAll()
        
        const texts = _texts.toArray()

        const {text} = texts[Math.floor(Math.random() * texts.length)].attributes

        return {text: text}
    }
}