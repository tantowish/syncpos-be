
/**
 * @swagger
 *  components:
 *    schemas:
 *      Comment:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: The unique identifier for the comment.
 *          content:
 *            type: string
 *            description: The content of the comment.
 *          postId:
 *            type: integer
 *            description: The ID of the post the comment belongs to.
 *          userId:
 *            type: integer
 *            description: The ID of the user who made the comment.
 *        example:
 *           id: 1
 *           content: "This is a sample comment."
 *           postId: 123
 *           userId: 456
 */

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Retrieve all comments
 *     description: Retrieve a list of all comments.
 *     tags:
 *       - Comments 
 *     responses:
 *       '200':
 *         description: A successful response, returning a list of comments.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Comment'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the error.
 */

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Retrieve a comment by ID
 *     description: Retrieve a comment by its ID.
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the comment to retrieve
 *     responses:
 *       '200':
 *         description: A successful response, returning the requested comment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 data:
 *                   $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comment not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the comment was not found.
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the error.
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     description: Create a new comment with the provided data.
 *     tags:
 *       - Comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 maxLength: 5000
 *                 example: "This is a sample comment"
 *               postId:
 *                 type: integer
 *                 example: 1
 *               userId:
 *                 type: integer
 *                 example: 1
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '201':
 *         description: A successful response, indicating that the comment has been created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 data:
 *                   $ref: '#/components/schemas/Comment'
 *       '400':
 *         description: Validation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that validation failed.
 *                 data:
 *                   type: object
 *                   description: Validation errors
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the error.
 */

/**
 * @swagger
 * /comments/{id}:
 *   patch:
 *     summary: Update a comment
 *     description: Update an existing comment with the provided data.
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 maxLength: 5000
 *               postId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response, indicating that the comment has been updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 data:
 *                   $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comment not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the comment was not found.
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the error.
 */

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete a comment by ID
 *     description: Delete an existing comment by its ID.
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to delete
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response, indicating that the comment has been deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *       '404':
 *         description: Comment not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the comment was not found.
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the error.
 */