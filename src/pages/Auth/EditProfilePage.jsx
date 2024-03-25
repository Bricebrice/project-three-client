import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

export default function EditProfilePage () {
    const { user } = useContext(AuthContext); 
    const [form, setForm ] = useState({
        firstName: "",
        lastName: "",
        profilePic: "", 
    })
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.id]: e.target.value,
        })
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = authService.edit(form)
        } catch (error) {
            
        }
    }

}