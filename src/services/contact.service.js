import axios from "axios";

class ContactService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_DEPLOYMENT_URL,
    });
  }

  sendEmail = (requestBody) => {
    return this.api.post("contact/send-email", requestBody);
  }
}

const contactService = new ContactService();

export default contactService;
