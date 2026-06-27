import Image from "next/image";

interface AuthLeftHeroProps {
  type: "login" | "register";
}

export default function AuthLeftHero({ type }: AuthLeftHeroProps) {
  const isLogin = type === "login";
  const prefix = isLogin ? "_social_login" : "_social_registration";

  return (
    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
      <div className={`${prefix}_${isLogin ? "left" : "right"}`}>
        {isLogin ? (
          /* Login Page Image Element */
          <div className="_social_login_left_image">
            <Image
              src="/assets/images/login.png"
              alt="Login Illustration"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="_left_img"
              priority
            />
          </div>
        ) : (
          /* Registration Page Double-Image Set (Light + Dark mode swaps) */
          <>
            <div className="_social_registration_right_image">
              <Image
                src="/assets/images/registration.png"
                alt="Registration Illustration"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <div className="_social_registration_right_image_dark">
              <Image
                src="/assets/images/registration1.png"
                alt="Registration Dark Illustration"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}