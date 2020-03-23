var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req,res){
	//res.send('Hello from items')
	db.Item.find()
	.then(function(items){
		res.json(items);
	})
	.catch(function(err){
		res.send(err);
	})
});

router.post('/', function(req,res){
	db.Item.create(req.body)
    .then(function(newItem){
       res.status(201).json(newItem);
	})
	.catch(function(err){
		res.send(err);
	})
});

router.get('/:itemId', function(req,res){
	db.Item.findById(req.params.itemId)
	.then(function(foundItem){
		res.json(foundItem);
	})
	.catch(function(err){
		res.send(err);
	})
});

router.put('/:itemId',function(req,res){
	db.Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true})
	.then(function(item){
		res.json(item);
	})
	.catch(function(err){
		res.send(err);
	})
});

router.delete('/:itemId', function(req, res){
	 db.Item.remove({_id: req.params.itemId})
	 .then(function(){
	 	res.json({message: 'We Deleted It!!!'});
	 })
	 .catch(function(err){
	 	res.send(err);
	 })
});


module.exports = router;