import db from "../../ConnectDB/DB.js";

export const getCarts = async (req, res) => {
  try {
    const Query = "Select * from cart";

    const [result] = await db.promise().query(Query);

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
