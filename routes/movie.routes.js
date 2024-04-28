module.exports = app => {
  const movies = require("../controllers/movie.controller.js");
  let router = require("express").Router();

  // Create a new Movie
  router.post("/", movies.create);

  // Retrieve all Movie
  router.get("/", movies.findAll);

  //Delete a Movie with id
  router.delete("/:id", movies.delete);

  //Delete all Movie 
  router.delete("/", movies.deleteAll);

  // Retrieve all registered movies
  router.get("/registered", movies.findAllRegistered);


  // Retrieve a single Movie with id
  router.get("/:id", movies.findOne);


  // Update a Movie with id
  router.put("/:id", movies.update);

  app.use("/api/movies", router);


};
