import { BorderAll } from "@mui/icons-material";
import React, {useState, useEffect} from "react";

function UserList () {
    const [user, SetUser] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error,SetError] = useState(null);

    useEffect(()=> {

        const fetchdata = async () => {
            try{
                const response = await fetch ('https://jsonplaceholder.typicode.com/users')

                if(!response.ok){
                    throw new Error('데이터를 불러오는데 실패했습니다.');
                }

                const userData = await response.json()
                SetUser(userData);
            } catch(err){
                SetError(err.message);
            } finally {
                SetLoading(false);
            }
        }

        fetchdata();

    },[])

    if(loading){
        return (<p>로딩중....</p>)
    }

    if(error){
        return <p>에러발생 : {error}</p>
    }

    return(
        <div>
            <h1>유저 목록</h1>
            
            <ul>
                {user.map((user)=>(
                    (<li key={user.id}>name : {user.name} - email : {user.email}</li>)
                ))}
            </ul>
        </div>
    )

}
export default UserList