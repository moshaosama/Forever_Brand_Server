import db from "../../ConnectDB/DB.js";
import bcrypt from "bcryptjs";
export const SignUp = async (req, res) => {
  try {
    const { userName, Email, Password, Status } = req.body;
    if ((!userName || !Email || !Password, !Status)) {
      return res.status(404).json({
        statusbar: "danger",
        message: "Please Enter Your Account",
      });
    }

    const Query =
      "INSERT INTO user(userName, Email, Password, Status) VALUES (?,?,?, ?)";
    const hashPassword = await bcrypt.hash(Password, 12);
    const Values = [userName, Email, hashPassword, Status];

    const [result] = await db.promise().query(Query, Values);
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
