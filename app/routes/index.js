module.exports = function(applicattion){
  applicattion.get('/', function(req, res){
    res.render('index')
  })
}