import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

export default CreateIngredientPage () {
    const [form, setForm] = useState({
        name: "",
        calories: 0,
        proteins: 0, 
        fats: 0, 
        carbs: 0, 
        imageUrl: "", 
    }); 

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.id]: e.target.value
        });
    }

    const handleCreateSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/ingredient/create-ingredient`)
            navigate('/ingredients')
        }
    }
    return (
        
    )
} 