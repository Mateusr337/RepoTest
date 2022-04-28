import Button from "../../components/button";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import {
  Container,
  Form,
  Title,
  Buttons,
  IconInput,
  InputContainer,
} from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import HorizontalDivider from "../../components/horizontalDivider";
import handleChange from "../../utils/handleChangeInput";
import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import ButtonGithub from "../../components/ButtonGitHub";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const r =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function signUp(e) {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Passwords must be the same!");
      return;
    }
    if (!r.test(signUpData.password)) {
      toast.error(
        "The password must have at least: 1 uppercase letter - 1 lowercase letter - 1 number - 1 special character - 8 characters;"
      );
      return;
    }

    setIsLoading(true);
    const promise = api.register(signUpData);
    toast.promise(promise, {
      pending: "Loading ...",
      success: "registration done!",
      error: "registration failed!",
    });
    promise
      .then((response) => navigate("/"))
      .finally(() => setIsLoading(false));
  }

  return (
    <Container>
      <Logo />

      <Form onSubmit={signUp}>
        <Title>Register</Title>

        <ButtonGithub />

        <HorizontalDivider
          text={"ou"}
          color={"#000000"}
          background={"#000000"}
        />

        <Input
          type="e-mail"
          placeholder="e-mail"
          name="email"
          onChange={(e) => handleChange(e, signUpData, setSignUpData)}
          value={signUpData.email}
          required
        />

        <InputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            onChange={(e) => handleChange(e, signUpData, setSignUpData)}
            value={signUpData.password}
            required
          />
          <IconInput>
            {showPassword ? (
              <BsEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <BsEye onClick={() => setShowPassword(true)} />
            )}
          </IconInput>
        </InputContainer>

        <InputContainer>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="confirm password"
            name="confirmPassword"
            onChange={(e) => handleChange(e, signUpData, setSignUpData)}
            value={signUpData.confirmPassword}
            required
          />

          <IconInput>
            {showConfirmPassword ? (
              <BsEyeSlash onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <BsEye onClick={() => setShowConfirmPassword(true)} />
            )}
          </IconInput>
        </InputContainer>

        <Buttons>
          <Button
            color={"#3f61d7"}
            background={"#363636"}
            type={"button"}
            action={() => navigate("/")}
            disabled={isLoading}
          >
            I already have registration
          </Button>

          <Button
            color={"#000000"}
            background={"#3f61d7"}
            width={"118px"}
            type={"submit"}
            disabled={isLoading}
          >
            {isLoading ? (
              <ThreeDots color="#FFFFFF" height={15} width={40} />
            ) : (
              "Register"
            )}
          </Button>
        </Buttons>
      </Form>

      <ToastContainer
        toastStyle={{ backgroundColor: "#252526", top: "100px" }}
        limit={1}
        dark={true}
        position={"top-center"}
      />
    </Container>
  );
}
