import React, { Component} from 'react'
import { auth } from '../../base'

class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: false
        }
    }
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user:user
            })
        })
    }
   render(){
       return(
           <div>
               {JSON.stringify(this.state)}
           </div>
       )
   }
}
export default Admin