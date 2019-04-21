// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCB-oXiFSq5SO7G1hrAIMlRw6_uLmXWEXQ",
    authDomain: "testauth-semper.firebaseapp.com",
    databaseURL: "https://testauth-semper.firebaseio.com",
    projectId: "testauth-semper",
    storageBucket: "testauth-semper.appspot.com",
    messagingSenderId: "292053212329"
  }
};
