// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { body, method } = req;
  if (method === "GET") {
    return res.status(200).json({ name: "John Doe" });
  } else {
    return res.status(201).json({
      message: "El metodo POST funciona",
      data: body,
    });
  }
}
