import usersAPI from './usersAPI'

async function uploadUserAPI({
setFormIsLoading,
setIsEditing,
setServerError,
info,
setAllUsers,
token,
id
}){
try {
setFormIsLoading(true)



    const headers = new Headers();
        headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `Bearer ${token}`);


       

        const setting = {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(info),
        }



        let res = await fetch(`/api/users/${id}`, setting);
       let json = await res.json()
    
     setFormIsLoading(false)
      if(res.status === 200) {

             usersAPI({setAllUsers,token})
         setServerError("");
setIsEditing(false);
    }

       if(res.status === 500) {
      
    setServerError('Error interno, intente nuevamente')
    return
    }
   const {message} = json
        console.log(message)
         setServerError(message)
       
}catch(err){

  console.log(err)
}
}

export default uploadUserAPI