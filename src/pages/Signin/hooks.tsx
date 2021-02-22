import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Form, message } from "antd";
import { FormInstance } from "antd/lib/form";

import {
  startPasswordless,
  RetStatus,
  finishPasswordless,
} from "../../api/auth";

import { selectAuthenticated, signin } from "../../redux/authSlice";

interface ExposedHooks {
  authenticated: boolean;
  codeSubmit: () => Promise<void>;
  currentStep: number;
  emailSubmit: () => Promise<void>;
  emailSubmitAgain: () => Promise<void>;
  form: FormInstance<any>;
  goBack: () => void;
  loading: boolean;
}

const SigninHooks: () => ExposedHooks = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [form] = Form.useForm();

  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const authenticated = useSelector(selectAuthenticated);

  const emailSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      return;
    }

    let values = form.getFieldsValue();

    setLoading(true);
    let ret = await startPasswordless(values.email);
    setLoading(false);

    switch (ret.status) {
      case RetStatus.BAD_EMAIL:
        form.setFields([
          { errors: ["E-mail digitado não é válido"], name: "email" },
        ]);
        break;
      case RetStatus.ERROR:
        message.error(ret.error.toString());
        break;
      case RetStatus.OK:
        message.success("Código enviado");
        setEmail(values.email);
        setCurrentStep(currentStep + 1);
        break;
      default:
        message.warn("No ret.status handler");
    }
  };

  const codeSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      return;
    }

    let values = form.getFieldsValue();

    setLoading(true);
    let ret = await finishPasswordless(email, values.code);
    setLoading(false);

    switch (ret.status) {
      case RetStatus.ACCESS_DENIED:
        form.setFields([
          {
            errors: ["Código incorreto"],
            name: "code",
          },
        ]);
        break;
      case RetStatus.INVALID_GRANT:
        form.setFields([
          {
            errors: ["Código expirado"],
            name: "code",
          },
        ]);
        break;
      case RetStatus.ERROR:
        console.log(ret);
        message.error("Erro do servidor");
        break;
      case RetStatus.OK:
        dispatch(
          signin({
            access_token: ret.data!.access_token,
            email: email,
            expires_in: ret.data!.expires_in,
            id_token: ret.data!.id_token,
            scope: ret.data!.scope,
            token_type: ret.data!.token_type,
          })
        );
        history.push("/dashboard");
        break;
      default:
        message.warn("No ret.status handler");
    }
  };

  const emailSubmitAgain = async () => {
    setLoading(true);
    let ret = await startPasswordless(email);
    setLoading(false);

    switch (ret.status) {
      case RetStatus.BAD_EMAIL:
        message.error("E-mail digitado não é válido");
        break;
      case RetStatus.ERROR:
        console.log(ret);
        message.error("Erro do servidor");
        break;
      case RetStatus.OK:
        message.success("Código reenviado");
        break;
      default:
        message.warn("No ret.status handler");
    }
  };

  const goBack = () => {
    setEmail("");
    setCurrentStep(currentStep - 1);
  };

  return {
    authenticated,
    codeSubmit,
    currentStep,
    emailSubmit,
    emailSubmitAgain,
    form,
    goBack,
    loading,
  };
};

export default SigninHooks;
