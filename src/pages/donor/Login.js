import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[360px] h-[800px] relative bg-white">
          <div className="w-[307px] left-[26px] top-[397px] absolute text-center text-neutral-500 text-sm font-normal leading-tight">
            회원가입 / 비밀번호찾기
          </div>
          <div className="w-[272px] left-[45px] top-[81px] absolute text-center text-neutral-950 text-[28px] font-bold leading-9">
            환영합니다!
          </div>
          <Link to="/donor/home">
            <div className="w-[327px] h-12 py-4 left-[17px] top-[339px] absolute bg-emerald-400 rounded-[48px] justify-center items-center inline-flex">
              <div className="text-center text-white text-base font-bold leading-none">
                로그인
              </div>
            </div>
          </Link>
          <div className="w-[375px] h-12 pl-[18px] pr-[333px] py-3 left-[-7px] top-[10px] absolute bg-white justify-start items-center inline-flex">
            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
          </div>
          <div className="w-[350px] h-[68px] left-[27px] top-[152px] absolute">
            <div className="h-12 pl-4 pr-[180px] py-4 left-0 top-[20px] absolute bg-white rounded-lg border border-zinc-200 justify-start items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch h-4 text-zinc-400 text-xs font-normal leading-none">
                  아이디를 입력해주세요.
                </div>
              </div>
            </div>
            <div className="w-[40px] h-4 left-0 top-0 absolute text-neutral-950 text-xs font-normal leading-none">
              아이디
            </div>
          </div>
          <div className="w-[350px] h-[68px] left-[26px] top-[244px] absolute">
            <div className="h-12 pl-4 pr-[169px] py-4 left-0 top-[20px] absolute bg-white rounded-lg border border-zinc-200 justify-start items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch h-4 text-zinc-400 text-xs font-normal leading-none">
                  비밀번호를 입력해주세요.
                </div>
              </div>
            </div>
            <div className="w-[50px] h-4 left-0 top-0 absolute text-neutral-950 text-xs font-normal leading-none">
              비밀번호
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
