import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

let body = {};
let postUrl;

async function PostMeme(body, url) {
  if(Object.keys(body).length === 2 &&
       body.url !== undefined &&
       body.caption !== undefined) {
        
        const response = await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(res => res.json())

    console.log("PATCH", postUrl, "PATCH RESPONSE", response);
    
    return response;
  }
}


class EditMeme extends Component {
  state = { id: '', url: '', submittedId: '', submittedUrl: '', caption: '', submittedCaption: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { id, url, caption } = this.state

    this.setState({ submittedId: id, submittedUrl: url, submittedCaption: caption })
    postUrl = "https://memestreamdd.herokuapp.com/memes/" + id
    console.log("PATCHING", postUrl)
    console.log(body);
    PostMeme(body, postUrl).then(res => {
      console.log(res)
    });
  }

  render() {
    const { id, url, caption, submittedId, submittedUrl, submittedCaption } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Enter Id Of Meme'
              name='id'
              value={id}
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
        JSON.stringify({ submittedId, submittedUrl, submittedCaption }, null, 2),
        body.url = submittedUrl,
        body.caption = submittedCaption
        }
      </div>
    )
  }

}

// PostMeme(body).then(response => {
//   console.log("POST RESPONSE",response)
// })

export default EditMeme