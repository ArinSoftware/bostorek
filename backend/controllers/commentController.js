import Comment from '../models/Comment.js';

/**
 * @desc    Create a comment
 * @route   POST /api/v1/books/:bookId/comments
 * @access  Private
 **/
const createComment = async (req, res) => {
  try {
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

/**
 * @desc    Create a comment
 * @route   GET /api/v1/books/:bookId/comments
 * @access  Public
 **/
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('creator', 'username');
    res.status(200).json({
      success: true,
      message: 'Comments fetched successfully',
      comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error at get all comments',
      error,
    });
  }
};

/**
 * @desc    Get a comment
 * @route   GET /api/v1/comments/:id
 * @access  Public
 **/
const getAComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, message: 'comment not found' });
    }
    return res.json({
      success: true,
      message: 'comment info received successfully',
      comment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'error at get a comment',
      error,
    });
  }
};

/**
 * @desc    Update a comment
 * @route   PUT /api/v1/commentss/:id
 * @access  Private
 **/

const updateComment = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = req.comment;

    comment.content = content || comment.content;
    await comment.save();
    res.json({
      success: true,
      message: 'Comment updated successfully',
      comment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error updating comment', error });
  }
};

/**
 * @desc    Delete a comment
 * @route   DELETE /api/v1/commentss/:id
 * @access  Private
 **/
const deleteComment = async (req, res) => {
  console.log('deleteCommentdeleteComment');
  try {
    const comment = req.comment;
    await Comment.findByIdAndRemove(comment._id);
    return res.json({ success: true, message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'error at comment delete', error });
  }
};

export {
  createComment,
  getAllComments,
  getAComment,
  updateComment,
  deleteComment,
};
