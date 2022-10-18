import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

export default function handler(req, res) {
  const { body, method } = req;
  try {
    if (method === "POST") {
      if (body.username === "admin" && body.password === "adminadmin") {
        const accessToken = sign(
          {
            username: body.username,
          },
          process.env.JWT_SECRET,
          { expiresIn: "5h" }
        );
        const serializedCookie = serialize("miToken", accessToken, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 1000 * 60 * 60 * 24 * 5,
          path: "/",
        });

        res.setHeader("Set-Cookie", serializedCookie);
        return res.status(200).json({
          accessToken: accessToken,
        });
      }
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
