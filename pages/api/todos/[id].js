import UserModel from "@/models/User";
import TodoModel from "@/models/Todo";
import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";

const handler = async (req, res) => {
  connectToDB();

  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "You are not login !!" });
  }

  const tokenPayload = verifyToken(token);

  if (!tokenPayload) {
    return res.status(401).json({ message: "You are not login !!" });
  }

  const user = await UserModel.findOne({ email: tokenPayload.email });

  if (!user) {
    return res.json({ message: "user not found" });
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const removeTOdo = await TodoModel.findOneAndDelete({ _id: id });
      return res.json({ message: "Todo removed successfully!!" });
    } catch (err) {
      return res.status(500).json({ message: "Unknown internal server Error" });
    }
  }
};

export default handler;
