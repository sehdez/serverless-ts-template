import type { AWS, AwsLambdaRuntime } from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: 'Serverless-template',
  frameworkVersion: '4',
  plugins: ['serverless-offline', 'serverless-lift'],
  provider: {
    name: 'aws',
    runtime: 'nodejs22.x' as AwsLambdaRuntime,
    tags: {
      key: 'value',
    },
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  functions: { hello },
  package: { individually: true },
};

module.exports = serverlessConfiguration;
