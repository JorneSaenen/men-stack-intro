import express from 'express';
const router = express.Router();
import {
  getAllMovies,
  getMovieById,
  postMovie,
  updateMovie,
  deleteMovie,
} from '../controllers/movieController.js';

router.get('/', getAllMovies);

router.get(`/:id`, getMovieById);

router.post('/', postMovie);

router.put(`/:id`, updateMovie);

router.delete(`/:id`, deleteMovie);

export default router;
