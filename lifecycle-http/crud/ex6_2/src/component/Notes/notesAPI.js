import axios from "axios";

const API = "http://localhost:7777/api/";

class notesAPI {
  getAllNotes = async () => {
    try {
      const response = await axios.get(API + "notes");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  postNotes = async (post) => {
    try {
      const response = await axios.post(API + `notes/${post.id}`, post);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  deletNote = (id) => {
    axios.delete(API + `delete/${id}`, {
      data: {
        id: id,
      },
    });
  };
}

export default notesAPI;
