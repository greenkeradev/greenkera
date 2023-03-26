

const Category = require('../models/category');

exports.createCategory = (req, res) => {
  const category = new Category({
    name: req.body.name,
    image: req.file.path // assuming you're using multer or similar middleware to handle file uploads
  });

  category.save()
    .then(() => {
      res.status(201).send('Category created successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
};

// Get all categories
exports.getAllCategories = (req, res) => {
    Category.find()
      .then(categories => {
        res.json(categories);
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  };
