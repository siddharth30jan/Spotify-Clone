export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "cf6426c4ec294ebc93cbbcb2f5d3cc0b";

const redirectUri = "https://spotify-clone-720bd.web.app";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
//http://localhost:3000/#access_token=BQCBJbXOjlsIR1TF_GsAGseu3m08DZLK8Xc6TD1Qf_IzWB3_D9NagfPYkUOx9yBXuqXSkdXMzA84RbpnHTfum54vnEfVKH5Q-q-MX7ykvARcfg49-epJ2MKm8tJI76ozKYfxLzhHqSMXyaDeHtsVcc6PH1ijDL1Ss75QHwH-B13rGo_Ewrpa&token_type=Bearer&expires_in=3600
