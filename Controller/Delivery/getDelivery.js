import db from "../../ConnectDB/DB.js";

export const getDelivery = async (req, res) => {
  try {
    const Query = "SELECT * FROM  delivery";
    const [result] = await db.promise().query(Query);

    return res.status(200).json({
      statusbar: "success",
      result,
    });
  } catch (err) {
    return res.status(500).json({
      statusbar: "error",
      message: err.message,
    });
  }
};
