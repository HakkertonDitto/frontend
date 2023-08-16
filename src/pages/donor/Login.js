import { Link } from "react-router-dom";
import iconImg from "../../assets/icon.png";

const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-[100px]" src={iconImg} alt="Ditto" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ditto
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="/donor/home" method="GET">
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="id"
                  autoComplete="id"
                  required
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  비밀번호
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#2CBB99]">
                    비밀번호를 잊으셨나요?{" "}
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2CBB99] sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-[#2CBB99] p-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                로그인
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            회원이 아니신가요?{" "}
            <a href="#" className="font-semibold leading-6 text-[#2CBB99]">
              회원가입하기
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
