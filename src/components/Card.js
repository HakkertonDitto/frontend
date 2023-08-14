import { useState } from "react";

const Card = ({
  Card11,
  Card12,
  Card21,
  Card22,
  Card31,
  Card32,
  Card41,
  Card42,
  Img1Class,
  Img1src,
  Img1alt,
  Img2Class,
  Img2src,
  Img2alt,
  Img3Class,
  Img3src,
  Img3alt,
  Img4Class,
  Img4src,
  Img4alt,
}) => {
  const [isClicked, setClicked] = useState(false);
  const ChangeColor = () => {
    setClicked(!isClicked);
  };
  const newStyle = `Rectangle211 w-[160.06px] h-[157px] left-0 top-0 absolute ${
    isClicked ? "bg-customColor" : "bg-white"
  } rounded-[20px] border border-neutral-200`;

  return (
    <div className="flex justify-center">
      {/* 스마트폰 및 태블릿 */}

      <div className="Smartphone w-[300px] h-[157px] left-[16px] top-[396px] absolute">
        <div className="Rectangle212 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
        <div
          className=" w-[286px] h-[39px] left-[14px] top-[23px] absolute text-neutral-950 text-[25px] font-bold leading-3"
          style={{
            lineHeight: "2em",
            fontSize: "1.5em",
            wordBreak: "keep-all",
          }}
        >
          {Card31}
          <br />
          {Card32}
        </div>
        <img className={Img3Class} src={Img3src} alt={Img3alt} />
      </div>

      {/* 컴 및 놋북 */}

      <div className="Group95 w-[280.57px] h-[157px] left-[16px] top-[215px] absolute">
        <div className={newStyle} onClick={ChangeColor} />
        <img className={Img1Class} src={Img1src} alt={Img1alt} />
        <div
          className=" w-[266.57px] h-9 left-[14px] top-[15px] absolute text-neutral-950 text-[25px] font-bold leading-3"
          style={{
            lineHeight: "2em",
            fontSize: "1.5em",
            wordBreak: "keep-all",
          }}
        >
          {Card11}
          <br />
          {Card12}
        </div>
      </div>

      {/* 키오스크 */}
      <div className="Group94 w-[281.57px] h-[158.60px] left-[186px] top-[215px] absolute">
        <div className="Rectangle213 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
        <div
          className=" w-[266.57px] h-9 left-[15px] top-[17px] absolute text-neutral-950 text-[25px] font-bold leading-3"
          style={{
            lineHeight: "2em",
            fontSize: "1.5em",
            wordBreak: "keep-all",
          }}
        >
          {Card21}
          <br />
          {Card22}
        </div>
        <img className={Img2Class} src={Img2src} alt={Img2alt} />
      </div>

      {/* 스마트TV */}
      <div className="Tv w-[301px] h-[157px] left-[186px] top-[396px] absolute">
        <div className="Rectangle215 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
        <div
          className="Tv w-[286px] h-[39px] left-[15px] top-[18px] absolute text-neutral-950 text-[25px] font-bold leading-3"
          style={{
            lineHeight: "2em",
            fontSize: "1.5em",
            wordBreak: "keep-all",
          }}
        >
          {Card41}
          <br />
          {Card42}
        </div>
        <img className={Img4Class} src={Img4src} alt={Img4alt} />
      </div>
    </div>
  );
};

export default Card;
