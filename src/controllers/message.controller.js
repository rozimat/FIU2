const Io = require('../utils/Io');
const Messages = new Io('./db/messages.json');
const MessageModels = require("../models/Message");


const message = async(req, res)=>{
  const messages = await Messages.read();
  const {email, name, message, number} = req.body;
  const newMessage = new MessageModels(email, name, message, number);
  const data = messages.length ? [...messages, newMessage] : [newMessage]
  Messages.write(data);
  res.status(201).json({ message : "success", messages});

}
const messageGet = async(req, res)=>{
  const data = await Messages.read();
  res.status(201).json(data);
}



module.exports = {
  message,
  messageGet,

};