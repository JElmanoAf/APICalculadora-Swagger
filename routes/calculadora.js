const express = require("express")
const router = express.Router()
router.get("/soma/:a/:b", (req, res) => {
const c = parseInt(req.params.a) + parseInt(req.params.b);
res.send(c.toString());
})
router.get("/subtracao/:a/:b", (req, res) => {
const c = parseInt(req.params.a) - parseInt(req.params.b);
res.send(c.toString());
})
router.get("/divisao/:a/:b", (req, res) => {
const c = parseInt(req.params.a) / parseInt(req.params.b);
res.send(c.toString());
})
router.get("/multiplicacao/:a/:b", (req, res) => {
const c = parseInt(req.params.a) * parseInt(req.params.b);
res.send(c.toString());
})
/**
* @swagger
* components:
*   schemas:
*     Calculator:
*       type: object
*       required:
*         - a
*         - b
*       properties:
*         a:
*           type: number
*           description: 1st number
*         b:
*           type: number
*           description: 2nd number
*         example:
*           a: 1
*           b: 2
*/
/**
* @swagger
* /calculator/soma/{a}/{b}:
*   get:
*     parameters:
*       - in: path
*         name: a
*         schema:
*           type: number
*         required: true
*       - in: path
*         name: b
*         schema:
*           type: number
*         required: true
*     responses:
*       200:
*         description: test
*         content:
*           application/json:
*             schema:
*             type: object
*             items:
*               $ref: '#/components/schemas/Calculator'
*       404:
*         description: nope
*
*/
/**
* @swagger
* /calculator/subtracao/{a}/{b}:
*   get:
*     parameters:
*       - in: path
*         name: a
*         schema:
*           type: number
*         required: true
*       - in: path
*         name: b
*         schema:
*           type: number
*         required: true
*     responses:
*       200:
*         description: test
*         content:
*           application/json:
*             schema:
*             type: object
*             items:
*               $ref: '#/components/schemas/Calculator'
*       404:
*         description: nope
*
*/
/**
* @swagger
* /calculator/divisao/{a}/{b}:
*   get:
*     parameters:
*       - in: path
*         name: a
*         schema:
*           type: number
*         required: true
*       - in: path
*         name: b
*         schema:
*           type: number
*         required: true
*     responses:
*       200:
*         description: test
*         content:
*           application/json:
*             schema:
*             type: object
*             items:
*               $ref: '#/components/schemas/Calculator'
*       404:
*         description: nope
*
*/
/**
* @swagger
* /calculator/multiplicacao/{a}/{b}:
*   get:
*     parameters:
*       - in: path
*         name: a
*         schema:
*           type: number
*         required: true
*       - in: path
*         name: b
*         schema:
*           type: number
*         required: true
*     responses:
*       200:
*         description: test
*         content:
*           application/json:
*             schema:
*             type: object
*             items:
*               $ref: '#/components/schemas/Calculator'
*       404:
*         description: nope
*
*/
module.exports = router;