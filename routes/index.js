var express = require('express');
var router = express.Router();
var fs=require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('public/ycy.txt','utf8',function(err,data){
  	var _data=data.split(":");
  	var sum=_data[1];
  	sum++;
  	console.log(data)
  	res.render('index', {abc:_data[0],abcd:sum});
  	fs.writeFile('public/ycy.txt','浏览次数:'+sum,function(err){
  		if(err){
  			console.log(err)
  		}
  	})
  })
});
router.get('/me', function(req, res, next) {
  fs.readFile('public/ycy2.txt','utf8',function(err,data){
  	var _data=data.split(":");
  	var sum=_data[1];
  	sum++;
  	console.log(data)
  	res.render('index', {abc:_data[0],abcd:sum});
  	fs.writeFile('public/ycy2.txt','浏览次数:'+sum,function(err){
  		if(err){
  			console.log(err)
  		}
  	})
  })
});
module.exports = router;
