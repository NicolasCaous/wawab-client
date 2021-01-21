enum Status {
  BAD_EMAIL,
  ERROR,
  OK,
  ACCESS_DENIED,
  INVALID_GRANT,
}

interface ServerResponse {
  status: Status;
  error?: String | Object;
  data?: {
    access_token: string;
    expires_in: number;
    id_token: string;
    scope: string;
    token_type: string;
  };
}

const AUTH0_AUDIENCE = "https://api.wawab.com.br/";
const AUTH0_CLIENT_ID = "DtvGvLtWw4EWIKx4CO9PkMCGnV50REdQ";
const AUTH0_DOMAIN = "wawab.eu.auth0.com";

export const startPasswordless = async (
  email: string
): Promise<ServerResponse> => {
  return await fetch(`https://${AUTH0_DOMAIN}/passwordless/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: AUTH0_CLIENT_ID,
      connection: "email",
      email: email,
      send: "code",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error === "bad.email") {
        return {
          status: Status.BAD_EMAIL,
          error: res.error,
        };
      }
      if (res.error) {
        return {
          status: Status.ERROR,
          error: res.error,
        };
      }
      return { status: Status.OK, data: res };
    })
    .catch((err) => {
      return { status: Status.ERROR, error: err };
    });
};

export const finishPasswordless = async (
  email: string,
  code: string
): Promise<ServerResponse> => {
  return await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
      client_id: AUTH0_CLIENT_ID,
      username: email,
      otp: code,
      realm: "email",
      audience: AUTH0_AUDIENCE,
      scope: "openid profile email eco:standard",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error === "access_denied") {
        return {
          status: Status.ACCESS_DENIED,
          error: res.error,
        };
      }
      if (res.error === "invalid_grant") {
        return {
          status: Status.INVALID_GRANT,
          error: res.error,
        };
      }
      if (res.error) {
        return {
          status: Status.ERROR,
          error: res.error,
        };
      }
      return { status: Status.OK, data: res };
    })
    .catch((err) => {
      return { status: Status.ERROR, error: err };
    });
};

export const RetStatus = Status;
