import { WebAuth } from "auth0-js";

enum Status {
  BAD_EMAIL,
  ERROR,
  OK,
  ACCESS_DENIED,
}

interface ServerResponse {
  status: Status;
  error?: String | Object;
  data?: Object;
}

export const startPasswordless = (
  webAuth: WebAuth,
  email: string
): Promise<ServerResponse> => {
  return new Promise((resolve) => {
    try {
      webAuth.passwordlessStart(
        {
          connection: "email",
          send: "code",
          email: email,
        },
        function (err, res) {
          if (err?.code === "bad.email") {
            resolve({
              status: Status.BAD_EMAIL,
              error: err,
            });
            return;
          }
          if (err) {
            resolve({
              status: Status.ERROR,
              error: err,
            });
            return;
          }
          resolve({ status: Status.OK, data: res });
        }
      );
    } catch (err) {
      resolve({ status: Status.ERROR, error: err });
    }
  });
};

export const finishPasswordless = (
  webAuth: WebAuth,
  email: string,
  code: string
): Promise<ServerResponse> => {
  return new Promise((resolve) => {
    try {
      webAuth.passwordlessLogin(
        {
          connection: "email",
          email: email,
          verificationCode: code,
        },
        function (err, res) {
          if (err?.code === "access_denied") {
            resolve({
              status: Status.ACCESS_DENIED,
              error: err,
            });
            return;
          }
          if (err) {
            resolve({
              status: Status.ERROR,
              error: err,
            });
            return;
          }
          resolve({ status: Status.OK, data: res });
        }
      );
    } catch (err) {
      resolve({ status: Status.ERROR, error: err });
    }
  });
};

export const RetStatus = Status;
