// src/pages/swagger.tsx
import React from 'react';
import Layout from '@theme/Layout'; // Import Layout to preserve navbar/sidebar
import SwaggerUI from 'swagger-ui-react'; // Swagger UI React component
import 'swagger-ui-react/swagger-ui.css'; // Swagger UI styling
export default function SwaggerPage() {
  return (
      <div style={{ padding: '2rem', background: 'black' }}>
        <div className='swagger-ui'>
          <div className='information-container wrapper '>
            <a href='/' className='back-button'><svg xmlns="http://www.w3.org/2000/svg" height={17} width={20} viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>Back</a>
          </div>
        </div>
        <SwaggerUI url="/openapi.yml" />
      </div>
  );
}
