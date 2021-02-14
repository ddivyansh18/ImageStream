import { Button, Card, Icon, Image, Label } from 'semantic-ui-react'


const fetch = require("node-fetch")
const url = "http://memestreamdd.herokuapp.com/all"

async function likeMeme(id) {
  const likeUrl = "http://memestreamdd.herokuapp.com/memes/like/" + id
  const response = await fetch(likeUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    console.log("RESPONSE", response);
    return response;

}

function PostModel(id, name, url, caption, likes) {
  
    return( 
    <Card color='grey'>
    <Image src={url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {caption}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>

    <Button as='div' labelPosition='left' onClick ={() => likeMeme(id)}>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        {likes}
      </Label>
    </Button>

    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='info' />
        Id
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        {id}
      </Label>
    </Button>

  </div>
    </Card.Content>
  </Card>
    )
}

async function fetchPosts() {
  const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    
    console.log("RESPONSE", response);
    return response;
}


function PostDecorator(post) {
    return PostModel(post.id, post.name, post.url, post.caption, post.likes)
}


let Ret;

async function RenderPosts() {
    
    Ret = await fetchPosts()
    .then(fetchedPosts => fetchedPosts.map(PostDecorator))

}

RenderPosts()

export default function Posts() {
  return <Card.Group itemsPerRow={4}>
    {Ret}
  </Card.Group>
}







