import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (exist) {
      return response.status(200).json({ msg: "Conversation Already Exists" });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    return response.status(200).json("Conversation saved successfully");
  } catch (err) {
    response.status(500).json({ msg: err.message });
  }
};

export const getConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    return response.status(200).json(conversation);
  } catch (err) {
    response.status(500).json({ msg: err.message });
  }
};
