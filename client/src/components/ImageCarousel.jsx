import React from "react";

const ImageCarousel = ({
  property1,
  className,
  holloweenClassName,
  screenshotClassName,
  screenshotClassNameOverride,
  overlapGroupClassName,
  imgClassName,
  thanksgivingClassName,
  thanksgiving = "https://c.animaapp.com/qqWqs49g/img/thanksgiving-1@2x.png",
}) => {
  return (
    <div className={`w-[1239px] h-[473px] overflow-hidden rounded-[5px] bg-white relative ${className}`}>
      <p
        className={`[font-family:'Inria_Serif',Helvetica] w-[222px] tracking-[0] text-[34px] -top-px text-transparent absolute h-[64px] font-normal text-center leading-[normal] ${
          property1 === "variant-3" ? "left-[509px]" : "left-[508px]"
        }`}
      >
        <span className="text-[#342f19]">Previous</span>
        <span className="[font-family:'Italianno',Helvetica] text-[32px] text-black">&nbsp;</span>
        <span className="[font-family:'Italianno',Helvetica] text-[42px] text-[#6d391e]">Boxes</span>
      </p>
      {property1 === "variant-2" && (
        <div className="absolute w-[642px] h-[348px] top-[-2578px] left-[154px]">
          <img
            className="absolute w-[354px] h-[348px] top-0 left-0 object-cover"
            alt="Easter"
            src="https://c.animaapp.com/qqWqs49g/img/easter-3@2x.png"
          />
          <img
            className="absolute w-[323px] h-[348px] top-0 left-[319px] object-cover"
            alt="St patrick day"
            src="https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-10-2@2x.png"
          />
        </div>
      )}

      <img
        className={`object-cover h-[348px] absolute ${property1 === "variant-2" ? "w-[302px]" : "w-[354px]"} ${
          property1 === "variant-2" ? "left-[2841px]" : property1 === "default" ? "left-[468px]" : "left-[-1033px]"
        } ${property1 === "variant-2" ? "top-[-2578px]" : property1 === "default" ? "top-[82px]" : "top-[-3074px]"}`}
        alt="Easter"
        src={
          property1 === "variant-2"
            ? "https://c.animaapp.com/qqWqs49g/img/easter-3@2x.png"
            : property1 === "default"
            ? "https://c.animaapp.com/qqWqs49g/img/easter-2@2x.png"
            : "https://c.animaapp.com/qqWqs49g/img/easter@2x.png"
        }
      />
      {["default", "variant-3"].includes(property1) && (
        <>
          <img
            className={`w-[302px] object-cover h-[348px] absolute ${
              property1 === "default" ? "left-[3991px]" : "left-[818px]"
            } ${property1 === "default" ? "top-[-2085px]" : "top-[85px]"} ${holloweenClassName}`}
            alt="Holloween"
            src={
              property1 === "default"
                ? "https://c.animaapp.com/qqWqs49g/img/holloween-1@2x.png"
                : "https://c.animaapp.com/qqWqs49g/img/holloween-3@2x.png"
            }
          />
          <img
            className={`w-[332px] object-cover h-[348px] absolute ${
              property1 === "variant-3" ? "left-[503px]" : "left-[2840px]"
            } ${property1 === "variant-3" ? "top-[-3074px]" : "top-[-2088px]"} ${screenshotClassName}`}
            alt="Screenshot"
            src={
              property1 === "variant-3"
                ? "https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-05-3@2x.png"
                : "https://c.animaapp.com/qqWqs49g/img/holloween-1@2x.png"
            }
          />
          <img
            className={`w-[308px] object-cover h-[348px] absolute ${
              property1 === "variant-3" ? "left-[141px]" : "left-[2478px]"
            } ${property1 === "variant-3" ? "top-[-3074px]" : "top-[-2088px]"} ${screenshotClassNameOverride}`}
            alt="Screenshot"
            src={
              property1 === "variant-3"
                ? "https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-05-3@2x.png"
                : "https://c.animaapp.com/qqWqs49g/img/holloween-1@2x.png"
            }
          />
        </>
      )}

      {property1 === "default" && (
        <>
          <img
            className={`w-[368px] h-[345px] top-[-2085px] left-[3226px] absolute object-cover ${overlapGroupClassName}`}
            alt="Screenshot"
            src="https://c.animaapp.com/qqWqs49g/img/holloween-1@2x.png"
          />
          <img
            className={`w-[343px] h-[348px] top-[-2088px] left-[2082px] absolute object-cover ${imgClassName}`}
            alt="Screenshot"
            src="https://c.animaapp.com/qqWqs49g/img/holloween-1@2x.png"
          />
          <img
            className="absolute w-[360px] h-[348px] top-[82px] left-[54px] object-cover"
            alt="Screenshot"
            src="https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-10-1@2x.png"
          />
        </>
      )}

      {["default", "variant-2"].includes(property1) && (
        <div
          className={`bg-cover h-[348px] bg-[50%_50%] absolute ${property1 === "default" ? "w-[323px]" : "w-[332px]"} ${
            property1 === "default" ? "left-[877px]" : "left-[854px]"
          } ${property1 === "default" ? "top-[82px]" : "top-[85px]"} ${
            property1 === "default"
              ? "bg-[url(https://c.animaapp.com/qqWqs49g/img/stpatrickday-1@2x.png)]"
              : "bg-[url(https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-05-2@2x.png)]"
          }`}
        >
          <img
            className={`h-[20px] absolute ${property1 === "default" ? "w-[20px]" : "w-[19px]"} ${
              property1 === "default" ? "left-[285px]" : "left-[303px]"
            } ${property1 === "default" ? "top-[164px]" : "top-[144px]"}`}
            alt="Right icon"
            src={
              property1 === "default"
                ? "https://c.animaapp.com/qqWqs49g/img/righticon-1.svg"
                : "https://c.animaapp.com/qqWqs49g/img/righticon-2.svg"
            }
          />
        </div>
      )}

      {property1 === "default" && (
        <img
          className={`absolute w-[288px] h-[348px] top-[-2085px] left-[3649px] object-cover ${thanksgivingClassName}`}
          alt="Thanksgiving"
          src={thanksgiving}
        />
      )}

      {property1 === "variant-3" && (
        <>
          <div
            className={`absolute w-[368px] h-[345px] top-[85px] left-[53px] bg-[url(https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-08-7@2x.png)] bg-cover bg-[50%_50%] ${overlapGroupClassName}`}
          >
            <img
              className="absolute w-[20px] h-[20px] top-[166px] left-[9px]"
              alt="Left icon"
              src="https://c.animaapp.com/qqWqs49g/img/lefticon-1.svg"
            />
          </div>
          <img
            className={`absolute w-[343px] h-[348px] top-[-3074px] left-[-255px] object-cover ${imgClassName}`}
            alt="Screenshot"
            src="https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-08-6@2x.png"
          />
        </>
      )}

      {["variant-2", "variant-3"].includes(property1) && (
        <>
          <img
            className={`object-cover h-[348px] absolute ${property1 === "variant-2" ? "w-[308px]" : "w-[360px]"} ${
              property1 === "variant-2" ? "left-[492px]" : "left-[-1447px]"
            } ${property1 === "variant-2" ? "top-[85px]" : "top-[-3074px]"}`}
            alt="Screenshot"
            src={
              property1 === "variant-2"
                ? "https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-07-2@2x.png"
                : "https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-08-6@2x.png"
            }
          />
          <img
            className={`object-cover absolute ${property1 === "variant-2" ? "w-[368px]" : "w-[323px]"} ${
              property1 === "variant-2" ? "left-[2076px]" : "left-[-624px]"
            } ${property1 === "variant-2" ? "top-[-2578px]" : "top-[-3074px]"} ${
              property1 === "variant-2" ? "h-[345px]" : "h-[348px]"
            }`}
            alt="St patrick day"
            src={
              property1 === "variant-2"
                ? "https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-08-5@2x.png"
                : "https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-08-6@2x.png"
            }
          />
        </>
      )}

      {property1 === "variant-3" && (
        <img
          className={`absolute w-[288px] h-[348px] top-[85px] left-[476px] object-cover ${thanksgivingClassName}`}
          alt="Thanksgiving"
          src="https://c.animaapp.com/qqWqs49g/img/thanksgiving-3@2x.png"
        />
      )}

      {property1 === "variant-2" && (
        <>
          <div className="absolute w-[343px] h-[348px] top-[85px] left-[96px] bg-[url(https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-08-4@2x.png)] bg-cover bg-[50%_50%]">
            <img
              className="absolute w-[19px] h-[20px] top-[154px] left-[8px]"
              alt="Left icon"
              src="https://c.animaapp.com/qqWqs49g/img/lefticon.svg"
            />
          </div>
          <img
            className="absolute w-[360px] h-[348px] top-[-2578px] left-[-260px] object-cover"
            alt="Screenshot"
            src="https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-10-2@2x.png"
          />
          <img
            className="absolute w-[288px] h-[348px] top-[-2578px] left-[2499px] object-cover"
            alt="Thanksgiving"
            src="https://c.animaapp.com/qqWqs49g/img/screenshot-2023-11-23-at-6-10-2@2x.png"
          />
        </>
      )}
    </div>
  );
};

export default ImageCarousel;