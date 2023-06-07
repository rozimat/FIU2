const  Io = require('../utils/Io');
const Subscribes = new Io('./db/subscribes.json');


const subscribe = async (req, res) =>{
  const subscribes = await Subscribes.read();
  const { email } = req.body;

  const findEmail = subscribes.find((el)=> el === email);
  if (findEmail){
    res.status(403).json({ message: "User already subscribed!" });
  }
  else{
    const data = subscribes ? [...subscribes, email] : [email];
    Subscribes.write(data);
    res.status(201).json({ message: "User subscribed!" });
  }
}



module.exports = {
  subscribe,

};
