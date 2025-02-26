const Form = require("../models/syllabusForm");

exports.getForms = async (req, res, next) => {
  try {
//    const page = parseInt(req.query.page) || 1;
  //  const limit = parseInt(req.query.limit) || 10;
  //  const skip = (page - 1) * limit;

   // const totalForms = await Form.countDocuments();
  //  const forms = await Form.find().skip(skip).limit(limit);

    res.status(200).json({
      data: {},
      pagination: {
       // totalItems: totalForms,
   //     totalPages: Math.ceil(totalForms / limit),
    //    currentPage: page,
      //  itemsPerPage: limit,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
