import express from 'express';
const router = express.Router();
import {
  getAllMovies,
  getMovieById,
  postMovie,
  updateMovie,
  deleteMovie,
} from '../controllers/movieController.js';

/**
 * @swagger
 *  /api/v1/movies:
 *   get:
 *    tags:
 *    - Movies
 *    summary: Get all movies
 *    responses:
 *     200:
 *      description: Array with all movies
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Movies'
 *     401:
 *      $ref: '#/components/responses/Unauthorized'
 *     500:
 *      $ref: '#/components/responses/Error'
 */
router.get('/', getAllMovies);

/**
 * @swagger
 *  /api/v1/movies/{id}:
 *   get:
 *    tags:
 *    - Movies
 *    summary: Get movie by id
 *    parameters:
 *     - in: path
 *       required: true
 *       description: Id of the movie
 *       name: id
 *       schema:
 *        type: string
 *    responses:
 *     200:
 *      description: object with movie
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Movie'
 *     401:
 *      $ref: '#/components/responses/Unauthorized'
 *     500:
 *      $ref: '#/components/responses/Error'
 */

router.get(`/:id`, getMovieById);

/**
 * @swagger
 *  /api/v1/movies:
 *   post:
 *    tags:
 *    - Movies
 *    summary: Add a movie
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        $ref: "#components/schemas/MovieInput"
 *    responses:
 *     201:
 *      description: Returns the added movie
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Movie'
 *     401:
 *      $ref: '#/components/responses/Unauthorized'
 *     500:
 *      $ref: '#/components/responses/Error'
 */
router.post('/', postMovie);

router.put(`/:id`, updateMovie);

router.delete(`/:id`, deleteMovie);

export default router;
