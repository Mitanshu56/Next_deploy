import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name, message } = req.body ?? {};
  const isEmailValid = typeof email === "string" && email.includes("@");
  const isNameValid = typeof name === "string" && name.trim() !== "";
  const isMessageValid = typeof message === "string" && message.trim() !== "";

  if (!isEmailValid || !isNameValid || !isMessageValid) {
    return res.status(422).json({ message: "Invalid input" });
  }

  const newMessage = { email, name, message };
  console.log(newMessage);
  let client;
  try {
    client = await MongoClient.connect(
      "mongodb://localhost:27017/NextJSDB",
    );
  } catch (error){
    res.status(500).json({message:'cloud not connect to database '})
    return
  }
  const db=client.db()

  try {
    await db.collection('messages').insertOne(newMessage);
  } catch (error) {
    await client.close();
    return res.status(500).json({ message: 'Could not store your message. Please try again.' });
  }
 
client.close()
  return res
    .status(201)
    .json({ message: "Successfully stored message", data: newMessage });
}
export default handler;
