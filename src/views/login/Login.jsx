import React, { createRef, useRef } from "react";
import {
  Form,
  Input,
  Select,
  TimePicker,
  Layout,
  Switch,
  Checkbox,
  DatePicker,
  Radio,
  Button,
} from "element-react";
import "element-theme-default";
import "./login.less";
import { login } from "../../api/login";
import { useEffect, useState } from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
      ruleForm: {
        username: "",
        password: "",
        phone: "",
        nickname: "",
        code: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号(大小写字母、数字、下划线)",
            trigger: "blur",
          },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
          {
            validator: function (rule, value, callback) {
              if (
                /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
                  value
                ) == false
              ) {
                callback(new Error("请输入正确的手机号"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      dialogVisible: false,
      active: 0,
      forgotpswForm: {
        username: "",
        answerInput_1: "",
        answerInput_2: "",
        answerInput_3: "",
        newPwd: "",
        reNewPwd: "",
      },
      question: {},
      checkCode: {
        code: "",
        codeText: "",
      },
    };
  }

  async componentDidMount() {
    // login().then(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(key, value) {
    console.log("onChange", key, value);
    this.setState({
      ruleForm: Object.assign({}, this.state.ruleForm, { [key]: value }),
    });
  }

  submitRegisterForm(formName) {
    console.log('submitRegisterForm');
  }

  resetForm(formName) {
    console.log('resetForm');
  }

  visitor() {
    console.log('visitor');
  }
  render() {
    return (
      <div className="login-register">
        <div className="contain">
          <div className={`big-box ${this.state.isLogin ? "active" : null}`}>
            <div className="sysname">中南林业科技大学物品找回平台</div>
            <div className="big-contain">
              <div className="btitle" style={{ marginBottom: "20px" }}>
                账户登录
              </div>
              <Form
                className="demo-ruleForm"
                labelWidth="80px"
                style={{ width: "auto" }}
                ref={(ref) => (this.ruleForm = ref)}
                model={this.state.ruleForm}
                rules={this.state.rules}
              >
                <Form.Item label="账号" prop="username">
                  <Input ref={(ref) => (this.inputUsername = ref)}></Input>
                </Form.Item>
                <Form.Item label="密码" prop="password">
                  <Input type="password" style={{ width: "200px" }}></Input>
                  <span
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => (this.state.dialogVisible = true)}
                  >
                    忘记密码
                  </span>
                </Form.Item>
                <Form.Item label="验证码" prop="code">
                  <div
                    className="pswInput"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Input
                      type="text"
                      style={{ width: "200px" }}
                      value={this.state.ruleForm.code}
                      onChange={this.onChange.bind(this, "code")}
                    ></Input>
                    <div title="看不清？点击更换"></div>
                  </div>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={e => {this.submitRegisterForm('ruleForm')}}>登录</Button>
                  <Button onClick={e => {this.resetForm('ruleForm')}}>重置</Button>
                  <Button type='success' onClick={this.visitor}>游客模式</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
