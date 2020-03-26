# music-search
iTunes music search app built in React

## Setup NPM dependencies
Install NPM modules:
```
npm install
```

## Assets location
Static files are served from /static.
/dist will contain things built by node/webpack.

## Run the build
Run webpack build (production):
```
npm run build
```
Run webpack and open app (development):
```
npm run build:dev
```

## Tests
Run tests:
```
npm run test
```
Run tests with coverage output:
```
npm run test:coverage
```

## Project Structure

# Frontend
* src/
  * Contains all files to be built and/or compiled
  * files at this level are global or entry-point files
* src/components
  * React components and their SASS files
  * Ideally these components do not fetch any data, instead it is passed to them by container components
  * props passed to these components should be generic and reusable when possible
* src/containers
  * React components responsible for fetching data from providers (src/providers)
  * Keep track of advice guids
* src/helpers
  * utility methods to call from components
* src/node-scripts
  * scripts to be used by NodeJS during build from the command line
* src/pages
  * page and layout components
* src/providers
  * use services to retrieve data
  * data is returned in many cases as a Promise
  * keep track of request guids
* src/providers/services
  * service-base is used by all other services to perform requests. Axios is implemented here, and should not be referenced anywhere else.
  * perform data requests, currently return Promises for use by the providers.
  * there should be one (or more) services for every api endpoint
* src/styles
  * CSS and SASS files that are global
* src/temp_test
  * placeholder for unit tests to make sure we have some examples
* src/templates
  * templates used during Webpack build
* types/
  * TypeScript definition files
