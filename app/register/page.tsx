"use client";

import { useState } from "react";
import Link from "next/link";
import AuthBackground from "../components/auth/AuthBackground";
import AuthLeftHero from "../components/auth/AuthLeftHero";
import AuthRightContent from "../components/auth/AuthRightContent";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Submit Register:", { email, password });
  };

  return (
    <section className="_social_registration_wrapper _layout_main_wrapper">
      <AuthBackground />

      <div className="_social_registration_wrap">
        <div className="container">
          <div className="row align-items-center">

            {/* Reusable Left Illustration Side */}
            <AuthLeftHero type="register" />

            {/* Reusable Right Content Wrapper */}
            <AuthRightContent
              type="register"
              subtitle="Get Started Now"
              title="Registration"
              googleBtnText="Register with google"
              footerLink={
                <p className="_social_registration_bottom_txt_para">
                  Already have an account? <Link href="/login">Login here</Link>
                </p>
              }
            >
              {/* Form Input fields formatted cleanly according to original HTML setup */}
              <form className="_social_registration_form" onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_social_registration_form_input _mar_b14">
                      <label className="_social_registration_label _mar_b8">Email</label>
                      <input
                        type="email"
                        className="form-control _social_registration_input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_social_registration_form_input _mar_b14">
                      <label className="_social_registration_label _mar_b8">Password</label>
                      <input
                        type="password"
                        className="form-control _social_registration_input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_social_registration_form_input _mar_b14">
                      <label className="_social_registration_label _mar_b8">Repeat Password</label>
                      <input
                        type="password"
                        className="form-control _social_registration_input"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                    <div className="form-check _social_registration_form_check">
                      <input
                        className="form-check-input _social_registration_form_check_input"
                        type="checkbox"
                        id="agreeTerms"
                        required
                      />
                      <label className="form-check-label _social_registration_form_check_label" htmlFor="agreeTerms">
                        I agree to terms & conditions
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                    <div className="_social_registration_form_btn _mar_t40 _mar_b60">
                      <button type="submit" className="_btn_reg ">
                        Register now
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