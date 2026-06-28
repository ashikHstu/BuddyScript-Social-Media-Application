"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthBackground from "../components/auth/AuthBackground";
import AuthLeftHero from "../components/auth/AuthLeftHero";
import AuthRightContent from "../components/auth/AuthRightContent";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== repeatPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed.");
      }

      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="_social_registration_wrapper _layout_main_wrapper">
      <AuthBackground />
      <div className="_social_registration_wrap">
        <div className="container">
          <div className="row align-items-center">
            
            <AuthLeftHero type="register" />

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
              <form className="_social_registration_form" onSubmit={handleRegister}>
                
                {error && (
                  <div className="alert alert-danger p-2" style={{ fontSize: "14px" }}>
                    {error}
                  </div>
                )}

                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="_social_registration_form_input _mar_b14">
                      <label className="_social_registration_label _mar_b8">First Name</label>
                      <input
                        type="text"
                        className="form-control _social_registration_input"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="_social_registration_form_input _mar_b14">
                      <label className="_social_registration_label _mar_b8">Last Name</label>
                      <input
                        type="text"
                        className="form-control _social_registration_input"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

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
                      <input className="form-check-input" type="checkbox" id="agreeTerms" required />
                      <label className="form-check-label _social_registration_form_check_label" htmlFor="agreeTerms">
                        I agree to terms & conditions
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                    <div className="_social_registration_form_btn _mar_t40 _mar_b60">
                      <button 
                        type="submit" 
                        className="_btn_reg" 
                        disabled={loading}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {loading ? "Registering..." : "Register now"}
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