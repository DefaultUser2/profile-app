import React from 'react';
 
class Profile extends React.Component {
   constructor(props) {
     super(props);
     let userProfile = JSON.parse(localStorage.getItem("userProfile")); // Get profile if it exists.
     this.state = {   // Set state 
      firstName: userProfile?.firstName || 'Your name', 
      lastName: userProfile?.lastName || 'Your surname',
      mobile: userProfile?.mobile || 'Your mobile',
      email: userProfile?.email || 'Your email',
      company: userProfile?.company || 'Your company',
      address: {
        street: userProfile?.address.street || 'Your street',
        town: userProfile?.address.town || 'Your town',
        county: userProfile?.address.county || 'Your county',
        postcode: userProfile?.address.postcode || 'Your postcode'
      },
      preferences:userProfile?.preferences || [],
      editMode:false
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.navHome = this.navHome.bind(this);
     this.editProfile = this.editProfile.bind(this);
     this.handleCheckChange = this.handleCheckChange.bind(this);
   }
 
   handleChange (event) {   // Update state when text field values changes
    event.preventDefault();
    let fieldname = event.target.name;
    if(fieldname.includes("."))  // If its a nested json object, eg address
    {
     fieldname = event.target.name.substring(8);
     this.setState({
       address:
        {
          ...this.state.address,
          [fieldname]: event.target.value
        }   
      })
    }
    else    // Dynamically set state
    {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleCheckChange(event)    // Handle checkbox change
  {
    let newArray = [...this.state.preferences];
    if(event.target.checked)    // If checked, add it to the state
    {
      newArray.push(event.target.value);
      console.log('newArr: '+newArray);
    }
    else    // If not, remove it from the state
    {
        newArray = newArray.filter(type => type !== event.target.value);
    }
    this.setState({
      preferences: newArray
    });
  }
  
   handleSubmit() {   //Update editMode within state and set local storage.
    localStorage.setItem("userProfile",JSON.stringify(this.state));
      this.setState({...this.state, editMode:false});
  }

  navHome() {
    this.props.history.push({
      pathname: '/home'
    })
  }

  editProfile()   // Set editMode within state to true
  {
    this.setState({...this.state, editMode:true});
  }
 
 
   render() {
      return (
        <form >
        <div style={{padding:20,width:'100%'}} >
        <h3>Profile Info</h3>
          <div >
            <label style={{width:'4%'}}>
              Name:
            </label>
            <input type="text" value={this.state.firstName} onChange={this.handleChange} disabled={!this.state.editMode} name='firstName'   />
          </div>
          <div>
            <label style={{width:'4%'}}>
              Surname:
            </label>
            <input type="text"  value={this.state.lastName} onChange={this.handleChange}  disabled={!this.state.editMode} name='lastName' />
          </div>
        <div>
          <label style={{width:'4%'}}>
            Mobile:
          </label>
          <input type="text" value={this.state.mobile} onChange={this.handleChange} disabled={!this.state.editMode} name='mobile' />
        </div>
        <div>
          <label style={{width:'4%'}}>
            Email:
          </label>
            <input type="text" value={this.state.email} onChange={this.handleChange} disabled={!this.state.editMode} name='email' />
        </div>
        <p></p>
        <div>
          Address Info:
        </div>
        <div>
          <label style={{width:'4%'}}>
            Street:
          </label>
          <input type="text" value={this.state.address.street} disabled={!this.state.editMode} onChange={this.handleChange}  name='address.street' />
        </div>
        <div>
          <label style={{width:'4%'}}>
            Town:
          </label>
          <input type="text" value={this.state.address.town} disabled={!this.state.editMode} onChange={this.handleChange}  name='address.town' />
        </div>
        <div>
          <label style={{width:'4%'}}>
            County: 
          </label>
          <input type="text" value={this.state.address.county} disabled={!this.state.editMode} onChange={this.handleChange}  name='address.county' />
        </div>
        <div>
          <label style={{width:'4%'}}>
            Postcode:
          </label>
            <input type="text" value={this.state.address.postcode} disabled={!this.state.editMode} onChange={this.handleChange}  name='address.postcode' />
        </div>
        <p></p>
            <label>
              Contact Preferences:
            </label>
                    <div>
                      <input type="checkbox" disabled={!this.state.editMode} checked={this.state.preferences.indexOf('sms') >= 0} onChange={this.handleCheckChange} value='sms'/>
                      <a>SMS</a>
                    </div>
                    <div>
                      <input type="checkbox" disabled={!this.state.editMode} checked={this.state.preferences.indexOf('email') >= 0} onChange={this.handleCheckChange} value='email'/>
                      <a>Email</a>
                    </div>
        <div>
        </div>
      </div>
      <p>
        <button className="btn btn-lg btn-primary btn-block" onClick={this.state.editMode?this.handleSubmit:this.editProfile} type="button">{this.state.editMode? "Save":"Edit"}</button>
      </p>
      <p>
        <button className="btn btn-lg btn-primary btn-block" onClick={this.navHome}  type="button">Cancel</button>
      </p>
    </form>
  );
}
}

export default Profile;






