import db from "../../ConnectDB/DB.js";

export const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    const Query = "DELETE FROM cart WHERE id = ?";
    const Value = [id];

    const [result] = await db.promise().query(Query, Value);

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
