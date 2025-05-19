import React from 'react';
import { RedocStandalone } from 'redoc';

export default function RedocSwagger() {
  return (
    <RedocStandalone
      specUrl="/openapi.yml"
      options={{ scrollYOffset: 50 }}
    />
  );
}
