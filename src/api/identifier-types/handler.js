'use strict'

const Registry = require('../../domain/directory/registry')

exports.identifierTypes = (request, h) => {
  Registry.identifierTypes()
    .then(result => result.map(t => ({
      identifierType: t.identifierType,
      description: t.description
    })))
    .then(result => { return result })
    .catch(e => { return e })
}
