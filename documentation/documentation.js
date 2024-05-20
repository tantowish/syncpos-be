/**
 * @swagger
 * tags:
 *   - name: Posts
 *     description: Operations related to posts
 *   - name: Users
 *     description: Operations related to users
 *   - name: Comments
 *     description: Operations related to comments
 *   - name: Categories
 *     description: Operations related to categories
 */

/**
 * @swagger
 * /images/uploads:
 *   post:
 *     summary: Upload an image file
 *     tags:
 *       - Image
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Successful file upload
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the upload
 *                 data:
 *                   type: string
 *                   description: The filename of the uploaded file
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the internal server error
 */

/**
 * @swagger
 * /uploads/image-1710860675717.jpg:
 *   get:
 *     summary: Get uploaded files
 *     tags:
 *       - Image
 *     responses:
 *       200:
 *         description: Successful retrieval of uploaded files
 *       404:
 *         description: No files found
 */
