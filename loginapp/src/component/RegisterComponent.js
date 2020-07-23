import React, {Component} from 'react';

class RegisterComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword= (event) => {
        this.setState({password:event.target.value})
    }
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register Page
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default RegisterComponent