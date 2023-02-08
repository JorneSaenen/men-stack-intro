import dotenv from 'dotenv';
dotenv.config();
import swaggerJSdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {
  Movies,
  Unauthorized,
  Error,
  Movie,
  MovieInput,
} from './schemas/moviesSchema.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Our cool movie API',
      version: '1.0.0',
      description: "Movie api for our cool movie app. It's so cool!",
      contact: {
        name: 'Movie API Support',
        email: 'test@test.be',
      },
    },
    components: {
      schemas: {
        Movies,
        Movie,
        MovieInput,
      },
      responses: {
        Unauthorized,
        Error,
      },
    },
  },
  apis: ['./routes/*.js', './models/*.js'],
};

const specs = swaggerJSdoc(options);

// Swagger middleware and serve swagger-ui
const swagger = (app) => {
  // Swagger page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  // Swagger json
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });
  console.log(
    `Swagger docs: ${process.env.BASE_URL}/api-docs 🔗 crtl or cmd + click to open in browser 🌐`
  );
};

export default swagger;
