import "./Modal.css";

const modal = (props) => {
  const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  return (
    <div className={cssClasses.join(" ")}>
      <div className="left-[38px] top-[30px] absolute">
        <div className="w-[125px] h-[22px] left-0 top-[35px] absolute">
          <div className="w-[125px] h-[22px] left-0 top-0 absolute bg-zinc-300 rounded-[25px]" />
          <div className="w-[95px] h-5 left-[15px] top-[1px] absolute text-black text-[17px] font-normal leading-tight">
            컴퓨터/노트북
          </div>
        </div>
        <div className=" text-black text-2xl font-bold leading-tight">
          컴퓨터가 너무 어두워요
        </div>
      </div>
      <div className="w-[253px] h-[99px]">
        <button className="button__accept">
          <div className="w-[253px] h-[42px] py-[13px]  bg-emerald-400 rounded-[48px] shadow justify-center items-center inline-flex">
            <div className="text-center text-white text-xl font-bold leading-none">
              수락하기
            </div>
          </div>
        </button>

        <button className="button__dismiss" onClick={props.closed}>
          <div className="w-[253px] h-[42px] py-[13px] mt-4 bg-white rounded-[48px] shadow border border-emerald-400 justify-center items-center inline-flex">
            <div className="text-center text-emerald-400 text-xl font-bold leading-none">
              거절하기
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default modal;
