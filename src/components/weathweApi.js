import axios from 'axios';

export const  getData = async (city) =>{
   
    try{ 
      const response = await axios.get(`http://localhost:5000/api/weather`, {
      params: { q : city }
    });
    return response.data
  }
  catch (err){
    console.error(`Error: ${err.message}\nStack Trace: ${err.stack}`);
    return null;
    
  }
}
