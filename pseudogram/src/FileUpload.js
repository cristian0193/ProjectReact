import React, {Component} from 'react';
import firebase from 'firebase';

class FileUpload extends Component {

constructor(){
  super();
  this.state = {
    uploadValue: 0,
    picture:null
  };

  this.handleUpload = this.handleUpload.bind(this);
}

handleUpload (event) {
  const file = event.target.files[0];
  const storafeRef = firebase.storage().ref(`/foto/${file.name}`);
  const task = storafeRef.put(file);

  task.on('state_changed', snapshot => {
    let porcentage = (snapshot.bytesTranferred / snapshot.totalBytes) * 100;
    this.setState({
      uploadValue: porcentage
    })
  }, error => {
    console.log(error.message);
  }, () => {
    this.setState({
        uploadValue:100,
        picture: task.snapshot.downloadURL
      });
    });
  }

  render(){
    return(
      <div>
          <progress value={this.state.uploadValue} max="100"></progress>
          <br/>
          <input type="file" onChange={this.handleUpload}/>
          <br/>
          <img width="320" src={this.state.picture} alt=""/>
      </div>
    )
  }
}

export default FileUpload;
