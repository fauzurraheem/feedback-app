// import React from 'react'
// import {useParams} from 'react-router-dom'


// function post() {
//     const params = useParams()

//   return (
//     <div>
//         <h1>Post{params.id}</h1>
//         <p>post {params.name}</p>
// 
//     </div>
//   )
// }

// export default post

import React from 'react'
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function post() {
    const status = 200

    const navigate = useNavigate
   

    const onClick = (e) => {
        console.log('HELLO')    
        navigate('/about')
    }
    if(status === 404){
        return <Navigate to='/notfound' />
    }

  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
            <Route path='/show' element={<h1>this is the show page</h1>}/>
        </Routes>
    </div>
  )
}

export default post