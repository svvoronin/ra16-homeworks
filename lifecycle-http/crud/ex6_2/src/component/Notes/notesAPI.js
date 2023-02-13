import axios from "axios";

const API = "http://localhost:7777/api/";

class notesAPI {
  getAllNotes = async () => {
    try {
      //const response = await axios.get(API + "notes");
      const response = await axios.get(process.env.REACT_APP_API_URL + "notes");

      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  postNotes = async (post) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + `notes/${post.id}`,
        post
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  deletNote = (id) => {
    axios.delete(process.env.REACT_APP_API_URL + `delete/${id}`, {
      data: {
        id: id,
      },
    });
  };
}

export default notesAPI;
