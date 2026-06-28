"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthBackground from "../components/auth/AuthBackground";
import AuthLeftHero from "../components/auth/AuthLeftHero";
import AuthRightContent from "../components/auth/AuthRightContent";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email address or password combination.");
    } else {
      router.push("/feed");
      router.refresh();
    }
  };

  return (
    <section className="_social_login_wrapper _layout_main_wrapper">
      <AuthBackground />
      <div className="_social_login_wrap">
        <div className="container">
          <div className="row align-items-center">
            
            <AuthLeftHero type="login" />

            <AuthRightContent
              type="login"
              subtitle="Welcome back"
              title="Login to your account"
              googleBtnText="Or sign-in with google"
              footerLink={
                <p className="_social_login_bottom_txt_para">
                  Don't have an account? <Link href="/register">Create New Account</Link>
                </p>
              }
            >
              <form className="_social_login_form" onSubmit={handleLogin}>
                
                {error && (
                  <div className="alert alert-danger p-2" style={{ fontSize: "14px" }}>
                    {error}
                  </div>
                )}

                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_social_login_form_input _mar_b14">
                      <label className="_social_login_label _mar_b8">Email</label>
                      <input
                        type="email"
                        className="form-control _social_login_input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_social_login_form_input _mar_b14">
                      <label className="_social_login_label _mar_b8">Password</label>
                      <input
                        type="password"
                        className="form-control _social_login_input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                    <div className="form-check _social_login_form_check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label _social_login_form_check_label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                    <div className="_social_login_form_left">
                      <p className="_social_login_form_left_para" style={{ cursor: "pointer" }}>
                        Forgot password?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                    <div className="_social_login_form_btn _mar_t40 _mar_b60">
                      <button 
                        type="submit" 
                        className="_social_login_form_btn_link _btn1"
                        disabled={loading}
                      >
                        {loading ? "Authenticating..." : "Login now"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </AuthRightContent>

          </div>
        </div>
      </div>
    </section>
  );
}