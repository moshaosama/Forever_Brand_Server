import db from "../../ConnectDB/DB.js";

export const addToCart = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      subCategory,
      sizes,
      date,
      bestseller,
    } = req.body;
    const Query =
      "INSERT INTO cart  (name, description, price, image, category, subCategory, sizes, date, bestseller) VALUES (?,?,?,?,?,?,?,?,?)";
    const VALUES = [
      name,
      description,
      price,
      image,
      category,
      subCategory,
      sizes,
      date,
      bestseller,
    ];

    const [result] = await db.promise().query(Query, VALUES);

    return res.status(200).json({
      statusbar: "success",
      result,
    });
  } catch (err) {
    return res.status(500).json({
      statusbar: "ERROR",
      error: err.message,
    });
  }
};
