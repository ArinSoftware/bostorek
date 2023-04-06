import Comment from '../models/Comment.js';

/**
 * @desc    Create a comment
 * @route   POST /api/v1/comments/
 * @access  Private
 **/
const createComment = async (req, res) => {
  try {
    console.log('req.body', req.body);
    console.log('req.user', req.user);
    console.log('req.params.id', req.params.id);

    //add user (commentator) id to req.body
    req.body.book = req.params.id;
    req.body.creator = req.user._id;

    const comment = await Comment.create({ ...req.body });

    res.status(201).json({
      success: true,
      message: 'Comment created successfully',
      comment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error at create comment', error });
  }
};

export { createComment };
