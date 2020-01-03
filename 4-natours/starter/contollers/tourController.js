const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
};

// Tours Controllers
exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   requsetedAt: req.requestTime,
  //   results: tours.length,
  //   data: {
  //     tours
  //   }
  // });
};

exports.getTour = (req, res) => {
  // Using * 1 ie req.params.id * 1 is a type converstion
  // const id = req.params.id * 1;
  // const tour = tours.find(el => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour
  //   }
  // });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success'
    //   data: {
    //     tour: newTour
    //   }
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'succsess',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'succsess',
    data: {
      tour: null
    }
  });
};
