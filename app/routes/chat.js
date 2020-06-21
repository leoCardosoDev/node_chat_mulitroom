module.exports = function(applicattion){
  applicattion.post('/chat', function(req, res){
    res.render('chat')
  })
  applicattion.get('/chat', function(req, res){
    res.render('chat')
  })
}