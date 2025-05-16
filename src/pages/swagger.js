// src/pages/swagger.tsx
import React from 'react';
import Layout from '@theme/Layout'; // Import Layout to preserve navbar/sidebar
import SwaggerUI from 'swagger-ui-react'; // Swagger UI React component
import 'swagger-ui-react/swagger-ui.css'; // Swagger UI styling
export default function SwaggerPage() {
  return (
    <Layout
      title="Card API (Swagger)"
      description="Interact with the Card API using Swagger UI"
    >
      <div style={{ padding: '2rem', height: '100vh' }}>
        {/* <SwaggerUI url="/openapi.yml" /> */}
      </div>
    </Layout>
  );
}
