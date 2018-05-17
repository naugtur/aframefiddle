var express = require('express')
var app = express()
var mnGen = require('mngen')
var storage = require('./storage')
var template = require('./template')
var bodyMiddleware = require('body-parser').text({type: '*/*'})

app.get('/', (req, res) => {
  res.redirect('/' + mnGen.word(2))
})

app.get('/:id', (req, res) => {
  const content = storage.get(req.params.id) || template.content()
  console.log(`load ${req.params.id}`)
  res.send(template.page(content))
})
app.post('/:id', bodyMiddleware, (req, res) => {
  console.log(`save ${req.params.id}`)

  storage.save(req.params.id, req.body)
  res.send()
})

app.use('/public', express.static('public'))
app.listen(3000)
