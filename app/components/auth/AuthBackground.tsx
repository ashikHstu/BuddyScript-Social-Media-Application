import Image from "next/image";

export default function AuthBackground() {
  return (
    <>
      <div className="_shape_one">
        <Image 
          src="/assets/images/shape1.svg" 
          alt="" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} // Allows the CSS file to dictate sizes flawlessly
          className="_shape_img" 
          priority 
        />
        <Image 
          src="/assets/images/dark_shape.svg" 
          alt="" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="_dark_shape" 
        />
      </div>
      
      <div className="_shape_two">
        <Image 
          src="/assets/images/shape2.svg" 
          alt="" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="_shape_img" 
        />
        <Image 
          src="/assets/images/dark_shape1.svg" 
          alt="" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="_dark_shape _dark_shape_opacity" 
        />
      </div>
      
      <div className="_shape_three">
        <Image 
          src="/assets/images/shape3.svg" 
          alt="" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="_shape_img" 
        />
        <Image 
          src="/assets/images/dark_shape2.svg" 
          alt="" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="_dark_shape _dark_shape_opacity" 
        />
      </div>
    </>
  );
}