import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const url = "http://memestreamdd.herokuapp.com/memes"
let body = {};

async function PostMeme(body) {
  if(Object.keys(body).length == 3 &&
       body.name !== undefined &&
       body.url !== undefined &&
       body.caption !== undefined &&
       body['name'].trim() !== "" &&
       body['url'].trim() !== "" &&
       body['caption'].trim() !== "") {
        
        const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(res => res.json())
    
    return response;
  }
}


class MemeForm extends Component {
  state = { name: '', url: '', submittedName: '', submittedUrl: '', caption: '', submittedCaption: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, url, caption } = this.state

    this.setState({ submittedName: name, submittedUrl: url, submittedCaption: caption })
    PostMeme(body).then(res => {
      console.log(res)
    });
  }

  render() {
    const { name, url, caption, submittedName, submittedUrl, submittedCaption } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Enter Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Enter URL Of Meme'
              name='url'
              value={url}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Enter Caption Of Meme'
              name='caption'
              value={caption}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        {
        JSON.stringify({ submittedName, submittedUrl, submittedCaption }, null, 2),
        body.name = submittedName,
        body.url = submittedUrl,
        body.caption = submittedCaption
        }
      </div>
    )
  }

}





PostMeme(body).then(response => {
  console.log("POST RESPONSE",response)
})




export default MemeForm