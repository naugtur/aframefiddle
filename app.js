var express = require('express')
var app = express()
var mnGen = require('mngen')
var storage = require('./storage')
var template = require('./template')
var bodyMiddleware = require('body-parser').text({type: '*/*'})


app.use((req, res, next) => {
    res.set(
        'Content-Security-Policy',
        `script-src: 'self' aframe.io ajax.googleapis.com ucarecdn.com bootstrapcdn.com`
    );
    next()
});

app.get('/', (req, res) => {
  res.send(template.page(`
<a href="/new">START!</a><br>
<a href="/all">lista</a>
<a href="https://glitch.com/edit/#!/remix/takivr">kod</a>
    `))
})
app.get('/new', (req, res) => {
  res.redirect('/vr/' + mnGen.word(2))
})
app.get('/all', (req, res) => {
  const links = storage.keys().map(k => `<a href="/vr/${k}">${k}</a>`).join('')
  res.send(template.page(links))
})

app.get(['/vr/:id','/view/:id'], (req, res) => {
  const content = storage.get(req.params.id) || storage.save(req.params.id, template.content())
  console.log(`load ${req.params.id}`)
  res.send(template.vr(content))
})
app.post('/vr/:id', bodyMiddleware, (req, res) => {
  console.log(`save ${req.params.id}`)

  storage.save(req.params.id, req.body)
  res.send()
})

app.use('/public', express.static('public'))
app.listen(3000)
