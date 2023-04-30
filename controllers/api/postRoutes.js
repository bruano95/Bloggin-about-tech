const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.put ('/:id', async (req, res) =>{
    try {
        let id = req.params.id
        let updatedPost = await Post.update ({
            ...req.body
        }, {
            where: {
                id: id
            }
        })
    } catch (err){
        console.log(err)
        res.status(500).json(updatedPost)
    }
    res.status(200).json(updatedPost)
})

router.post ('/', async (req, res) =>{
    try{
        let user_id = req.session.user_id
        Post.create(req.body, {
            where: {
                user_id: user_id
            }
        })

        res.status(200).json("Post created successfully")
    } catch(err) {
        console.log(err)
    }
})

router.delete ('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.destroy (req.params.id)
    } catch (err){
        console.log(err)
    }
})

module.exports = router