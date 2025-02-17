import db from "../../ConnectDB/DB.js";

export const createDelivery = async (req, res) => {
  try {
    const Query2 = "SELECT * FROM cart";
    const [result2] = await db.promise().query(Query2);

    const {
      FirstName,
      LastName,
      EmailAddress,
      Street,
      City,
      State,
      ZipCode,
      Country,
      Phone,
      Date,
    } = req.body;

    if (
      !FirstName ||
      !LastName ||
      !EmailAddress ||
      !Street ||
      !City ||
      !State ||
      !ZipCode ||
      !Country ||
      !Phone
    ) {
      return res.status(404).send({
        statusbar: "error",
        message: "Invalid Information",
      });
    }

    const Query1 =
      "INSERT INTO delivery  (FirstName, LastName, EmailAddress, Street, City, State, ZipCode, Country, Phone,Date,  `Order`) VALUES (? ,? ,?, ? ,? ,? ,? ,?, ?,?, ?)";

    const VAlUES = [
      FirstName,
      LastName,
      EmailAddress,
      Street,
      City,
      State,
      ZipCode,
      Country,
      Phone,
      Date,
      JSON.stringify(result2),
    ];

    const [result1] = await db.promise().query(Query1, VAlUES);

    return res.status(200).json({
      statusbar: "success",
      message: "Creation Delivery Successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      statusbar: "error",
      message: err.message,
    });
  }
};
