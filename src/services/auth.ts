import axios  from 'axios'


const handleAuth = async (body:any) => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, body)
}


export default handleAuth