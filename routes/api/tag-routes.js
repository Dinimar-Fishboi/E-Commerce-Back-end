const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        // { model: Product, through: ProductTag, as: 'product_id'},
       { model: Product},
    //    {model: ProductTag }
      ], //, through: ProductTag, as: 'product_codes'}]
    })

     res.status(200).json(tagData);
   } catch (err) {
     res.status(500).json(err);
   }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}] //, through: ProductTag, as: 'product_codes'}]
    })

     res.status(200).json(tagData);
   } catch (err) {
     res.status(500).json(err);
   }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update(
      {
        // all the requirements for the Tag file in this bracket.
        // BECAUSE ID IS AUTO_INCREMENT; WE ARE NOT ALLOWING THIS TO BE UPDATED.
        tag_name: req.params.tag_name,       
      },
      {
        where: {
          id: req.params.id,
        }
      }
    )
    .then((updatedTag) => {
      // Sends the updated tag as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
