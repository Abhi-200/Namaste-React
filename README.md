# parcel
- Dev build
- Local server
- HMR = Hot module replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Dagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Namaste Food

/**
 * Header
 * - Logo
 * - Nav Item
 * Body
 * - Search
 * - ReastaurantContainer
 *   - RestaurantCard
 *    - Img
 *    - Name of Res, Star Rating, cuisines, delery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contract 
 */

TWO types of Export/Import

- Default Export/Import
  export default Component;
  import Component from "path";

- Name Export/Import
   export const Component;
   import {Component} from "path";

# React Hooks
 (Normal JS utility functions)
 - useState() -Superpowerful State Variables in react
 - useEffect()   

# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing  

 # Type of Testing
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing 

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- installed Babel depenencies
- Configure Babel
- Configure Parcel Config file to disable default babrl treanspilation
- jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- install @testing-library/jest-dom