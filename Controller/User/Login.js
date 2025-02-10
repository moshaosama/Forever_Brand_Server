import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import db from "../../ConnectDB/DB.js";

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(404).json({
        statusbar: "danger",
        message: "Please Enter Your Account",
      });
    }
    const Query = "SELECT * FROM user WHERE Email = ?";
    const Value = [Email];

    const [result] = await db.promise().query(Query, Value);
    const isMatch = await bcrypt.compare(Password, result[0].Password);
    if (!isMatch) {
      return res.status(404).json({
        statusbar: "error",
        message: "Invalid Password",
      });
    }

    const Token = await JWT.sign(result[0].Email, process.env.SECRET_MESSAGE);
    return res.status(200).json({
      statusbar: "success",
      Token,
      result,
    });
  } catch (err) {
    return res.status(500).json({
      statusbar: "error",
      message: err.message,
    });
  }
};
