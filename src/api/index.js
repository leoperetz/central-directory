'use strict'

const Glob = require('glob')

exports.plugin = {
  register: async (server, options) => {
    Glob.sync('**/routes.js', { cwd: __dirname }).forEach(function (x) {
      server.route(require('./' + x))
    })
  },
  name: 'api'
}
