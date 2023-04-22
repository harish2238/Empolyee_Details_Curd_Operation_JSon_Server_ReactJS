import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './Crud/CreateUser'
import EditUser from './Crud/EditUser'
import HomeCrud from './Crud/HomeCrud'
import User from './Crud/User'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <HomeCrud/>
      <Routes>
      <Route path="/create" element={<CreateUser/>}   ></Route>
      <Route path="/users" element={<User/>}  ></Route>
      <Route  path="/edituser1/:index" element={<EditUser/>}  ></Route>
      </Routes>
     </BrowserRouter>  
    </div>
  )
}

export default App