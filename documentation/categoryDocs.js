/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the category.
 *         name:
 *           type: string
 *           description: The name of the category.
 *       example:
 *         id: 1
 *         name: "Technology"
 */


/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Retrieve all categories
 *     description: Retrieve a list of all categories.
 *     tags:
 *       - Categories
 *     responses:
 *       '200':
 *         description: A successful response, returning a list of categories.
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
 *                   description: An array of category objects.
 *                   items:
 *                     $ref: '#/components/schemas/Category'
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
 * /categories:
 *   post:
 *     summary: Create a new category.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 maxLength: 100
 *     responses:
 *       '201':
 *         description: Category created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */


/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get a category by ID.
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID of the category to get.
 *     responses:
 *       '200':
 *         description: Category found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       '404':
 *         description: Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the category was not found.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */

/**
 * @swagger
 * /categories/{id}:
 *   patch:
 *     summary: Update a category by ID.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID of the category to update.
 *       - in: body
 *         name: category
 *         required: true
 *         description: The category data to update.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               maxLength: 100
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 maxLength: 100
 *     responses:
 *       '200':
 *         description: Category updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       '404':
 *         description: Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the category was not found.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a category by ID.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID of the category to delete.
 *     responses:
 *       '200':
 *         description: Category deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the request.
 *       '404':
 *         description: Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the category was not found.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */