import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (request, response) => {
  const newMessage = new Message(request.body);
  try {
    await newMessage.save();
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    return response.status(200).json("message sent successfully");
  } catch (err) {
    response.status(500).json({ msg: err.message });
  }
};

export const getMessages = async (request, response) => {
  try {
    const messages = await Message.find({ conversationId: request.params.id });
    return response.status(200).json(messages);
  } catch (err) {
    response.status(500).json({ msg: err.message });
  }
};
