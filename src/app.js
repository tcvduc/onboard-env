const envVariables = process.env;

const {
  PORT,
  DEVELOPEMENT_URI,
  API_KEY,
  APP_TITLE,

  APP_BASE_URI,
  APP_API_USER,
  APP_ENV,
  APP_TIMEZONE,
} = envVariables;

const _getRowString = function (description, envVar) {
  return `<p>${description}: <strong>${envVar}</strong> </p>`;
};

document.querySelector(".env-variables").innerHTML = `
    ${_getRowString("App title", APP_TITLE)}
    ${_getRowString("Current environment", APP_ENV)}
    ${_getRowString("API User", APP_API_USER)}
    ${_getRowString("Base URI", APP_BASE_URI)}
    ${_getRowString("Timezone", APP_TIMEZONE)}
`;

window.envVariables = envVariables;
