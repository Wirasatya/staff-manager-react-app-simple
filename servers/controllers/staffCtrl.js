const Staff = require("../models/staffModel");

// Filter, sorting and paginating
class APIfeatures {
  constructor(query, queryString) {
    this.query = query; // model.find()
    this.queryString = queryString; //queryString = req.query somethings
  }
  filtering() {
    const queryObj = { ...this.queryString };

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr)); //model.find(req.query.something)

    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const staffCtrl = {
  createStaff: async (req, res) => {
    try {
      const { name, nip, birth_date, gender, department, phone_number } =
        req.body;
      if (!nama || !nip)
        return res.status(400).json({ msg: "name dan nip tidak boleh kosong" });

      const checkNip = await Staff.findOne({ nip });
      if (checkNip) return res.status(400).json({ msg: "nip sudah ada" });

      const staffBaru = new Staff({
        name,
        nip,
        birth_date,
        gender,
        department,
        phone_number,
      });
      await staffBaru.save();

      res.status(200).json({
        msg: "staff baru berhasil ditambahkan",
        staff: staffBaru._doc,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getStaff: async (req, res) => {
    try {
      const features = new APIfeatures(Staff.find(), req.query)
        .filtering()
        .sorting()
        .paginating();

      const staff = await features.query;
      res.status(200).json({ msg: "find staff success", staff });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateStaff: async (req, res) => {
    try {
      const { name, nip, birth_date, gender, department, phone_number } =
        req.body;

      if (!nama || !nip)
        return res.status(400).json({ msg: "name dan nip tidak boleh kosong" });

      await Staff.findOneAndUpdate(
        { _id: req.params.id },
        {
          name,
          nip,
          birth_date,
          gender,
          department,
          phone_number,
        }
      );

      res.status(200).json({ msg: "update staff berhasil" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteStaff: async (req, res) => {
    try {
      await Staff.findOneAndDelete({ _id: req.params.id });
      res.status(200).json({ msg: "staff berhasil di hapus" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = staffCtrl;
