import Image from "next/image";

interface AuthRightContentProps {
  type: "login" | "register";
  subtitle: string;
  title: string;
  googleBtnText: string;
  children: React.ReactNode;   // Injectable form area
  footerLink: React.ReactNode;  // Injectable switch redirect text
}

export default function AuthRightContent({
  type,
  subtitle,
  title,
  googleBtnText,
  children,
  footerLink,
}: AuthRightContentProps) {
  const isLogin = type === "login";
  const prefix = isLogin ? "_social_login" : "_social_registration";

  return (
    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
      <div className={`${prefix}_content`}>
        
        {/* Brand Logo */}
        <div className={`${isLogin ? "_social_login_left_logo" : "_social_registration_right_logo"} _mar_b28`}>
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            style={{ height: "auto" }}
            className={isLogin ? "_left_logo" : "_right_logo"}
          />
        </div>

        {/* Headings */}
        <p className={`${prefix}_content_para _mar_b8`}>{subtitle}</p>
        <h4 className={`${prefix}_content_title _titl4 _mar_b50 font-bold`}>{title}</h4>

        {/* OAuth Action */}
        <button type="button" className={`${prefix}_content_btn _mar_b40`}>
          <Image
            src="/assets/images/google.svg"
            alt="Google"
            width={20}
            height={20}
            className="_google_img"
          />
          <span>{googleBtnText}</span>
        </button>

        <div className={`${prefix}_content_bottom_txt _mar_b40`}>
          <span>Or</span>
        </div>

        {/* Native Form Inputs Slot */}
        {children}

        {/* Footer Link Row */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className={`${prefix}_bottom_txt`}>
              {footerLink}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}