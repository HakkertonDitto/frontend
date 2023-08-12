import "./CustomedFilterModalHome.css";

const modal = (props) => {
  const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  return (
    <div className={cssClasses.join(" ")}>
      <div className="w-[330px] h-[300px] relative bg-white rounded-[25px] shadow">
        <div className="left-[141px] top-[25px] absolute text-emerald-400 text-[28px] font-bold leading-tight">
          필터
        </div>
        <div className="w-[217.50px] h-[54px] left-[30px] top-[85px] absolute">
          <div className="w-[82.50px] h-[22px] left-[135px] top-0 absolute">
            <div className="w-[82.50px] h-[22px] left-0 top-0 absolute bg-green-200 rounded-[25px]" />
            <div className="w-[60px] h-[17px] left-[11px] top-[2px] absolute text-black text-[17px] font-normal leading-tight">
              키오스크
            </div>
          </div>
          <div className="w-[68px] h-[22px] left-0 top-[32px] absolute">
            <div className="w-[68px] h-[22px] left-0 top-0 absolute bg-zinc-300 rounded-[25px]" />
            <div className="w-[45px] h-[17px] left-[12px] top-[2px] absolute text-black text-[17px] font-normal leading-tight">
              휴대폰
            </div>
          </div>
          <div className="w-[125px] h-[22px] left-0 top-0 absolute">
            <div className="w-[125px] h-[22px] left-0 top-0 absolute bg-green-200 rounded-[25px]" />
            <div className="w-[95px] h-5 left-[15px] top-[1px] absolute text-black text-[17px] font-normal leading-tight">
              컴퓨터/노트북
            </div>
          </div>
        </div>

        <div className="w-[253px] h-[99px] left-[38px] top-[221px] absolute">
          <button className="button__dismiss" onClick={props.closed}>
            <div className="w-[253px] h-[42px] py-[13px] left-0 top-0 absolute bg-emerald-400 rounded-[48px] shadow justify-center items-center inline-flex">
              <div className="text-center text-white text-xl font-bold leading-none">
                완료하기
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default modal;
