import React from 'react';
import { Elements } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
import NoSSR from '@docusaurus/NoSSR';

export default function SwaggerPage() {
  return (
    <div style={{ height: '100vh' }}>
      <NoSSR>
        <Elements
          apiDescriptionUrl="/openapi.yaml"
          router="hash"
        />
      </NoSSR>
    </div>
  );
}
