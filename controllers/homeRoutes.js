const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get ("/", async (req, res)=>{
    try {
        let postData = await Post.findAll()
        const posts = postData.map((post)=>post.get({plain: true}))
    
        res.render ('homepage', {
            posts
        })
    } catch (err){
        console.log(err)
    }
})

router.get ("/post/:id", async (req, res)=>{
    try {
        let postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = postData.map((post)=>post.get({plain: true}))
    
        res.render ('post', {
            posts
        })
    } catch (err){
        console.log(err)
    }
})

router.get ("/dashboard", async (req, res)=>{
    try {
        let user_id = req.session.user_id

        let userData = await User.findByPk(user_id, {
            include: [{
                model: Post
            }]
        })

        const user = userData.map((user)=>user.get({plain: true}))

        res.render ('dashboard', {
            ...user,
            logged_in: true
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router

