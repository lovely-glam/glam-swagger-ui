import React from "react";
import SwaggerUI from "swagger-ui-react";
import 'swagger-ui-react/swagger-ui.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
const SwaggerUIComponent = () => {
    const urls = [
        {url: 'https://auth.lovelyglam.life', name:  'Auth Server'},
        {url: 'https://business.lovelyglam.life', name: 'Nail Business Server'},
        {url: 'https://oauth2.lovelyglam.life', name: 'OAuth2 Server'},
        {url: 'https://system.lovelyglam.life', name: 'Lovely Glam Server'},
        {url: 'https://user.lovelyglam.life', name: 'User Server'},
        {url: 'https://ws.lovelyglam.life', name: 'Chat Socket Server'}
    ]
    const [selectedUrl, setSelectedUrl] = React.useState(urls[0].url);

    return (
        <Container>
        <h1 className="my-4">Select an API Documentation</h1>
        <Form.Group controlId="apiSelect">
          <Form.Control 
            as="select" 
            onChange={(e) => setSelectedUrl(e.target.value)} 
            value={selectedUrl}
          >
            {urls.map((api) => (
              <option key={api.name} value={api.url}>
                {api.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
  
        <SwaggerUI url={selectedUrl + '/api/v1/api-docs'} />
      </Container>
    )
}

export default SwaggerUIComponent;