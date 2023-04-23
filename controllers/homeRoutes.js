const router = require('express').Router();
const { Blogging, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get ("/", async (req, res)=>{
    let postData = Post.findAll()
})

