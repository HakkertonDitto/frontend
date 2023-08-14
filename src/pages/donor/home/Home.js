import { useState } from "react";

// 모달 컴포넌트 만들어놓은건데,, 아마 안 쓸듯
import Backdrop from "../../../components/backdrop/Backdrop";
import CustomedModalHome from "../../../components/modal/CustomedModalHome";

// 컴포넌트 import
import NavbarHome from "./NavbarHome";
import VolunteerButton from "./VolunteerButton";

import dummyData from "./dummy.json";

const Home = () => {
  // state = {
  //   modalIsOpen: false,
  //   filterModalIsOpen: false,
  // };
  // showModal = () => {
  //   this.setState({ modalIsOpen: true });
  // };
  // closeModal = () => {
  //   this.setState({ modalIsOpen: false });
  // };
  const categoryMap = {
    computer: "컴퓨터/노트북",
    tablet: "태블릿",
    TV: "스마트TV",
    kiosk: "키오스크",
  };
  const [selectedCategory, setSelectedCategory] = useState("computer"); // 첫 번째 항목 선택
  const [isVolunteer, setIsVolunteer] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[360px] h-[800px] relative bg-white">
          <div className="mt-5">
            <div className="px-4">
              <fieldset className="mx-auto max-w-md bg-white py-8 text-md">
                {/* 상단바 컴포넌트 */}
                <NavbarHome />

                {/* 카테고리 버튼 - 비활성화 (Deprecated) */}
                {/* <input
                    id="draft"
                    className="peer/draft form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300"
                    type="radio"
                    name="status"
                    checked
                  />
                  <label
                    for="draft"
                    className="peer-checked/draft:text-sky-500 font-medium"
                  >
                    컴퓨터 / 노트북
                  </label>

                  <input
                    id="published"
                    className="peer/published form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
                    type="radio"
                    name="status"
                  />
                  <label
                    for="published"
                    className="peer-checked/published:text-sky-500 font-medium"
                  >
                    키오스크
                  </label> */}

                {/* 봉사 가능 버튼 컴포넌트 */}
                <VolunteerButton
                  isVolunteer={isVolunteer}
                  setIsVolunteer={setIsVolunteer}
                />

                {/* 카테고리 버튼 - 컴포넌트화 진행중 */}
                {isVolunteer && (
                  <div>
                    <div className="mt-2 flex flex-wrap">
                      {Object.keys(categoryMap).map((category, index) => (
                        <div key={index} className="mr-2">
                          <input
                            id={`category-${index}`}
                            className={`peer/${category.toLowerCase()} form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300`}
                            type="radio"
                            name="status"
                            checked={selectedCategory === category} // 선택된 카테고리와 일치할 때만 checked로 설정
                            onChange={() => setSelectedCategory(category)} // 라디오 버튼 선택 시 상태 업데이트
                          />
                          <label
                            htmlFor={`category-${index}`}
                            className={`peer-checked/${category.toLowerCase()} ${
                              selectedCategory === category
                                ? "text-sky-500 font-medium"
                                : "text-black"
                            } `}
                          >
                            {categoryMap[category]}{" "}
                            {/* categoryMap을 이용하여 한국어 카테고리로 표시 */}
                          </label>
                        </div>
                      ))}
                    </div>
                    {/* 선택된 카테고리에 따른 데이터 렌더링 컴포넌트 */}
                    <div>
                      {selectedCategory && (
                        <ul>
                          {dummyData
                            .filter(
                              (item) => item.category === selectedCategory
                            )
                            .map((item, index) => (
                              <li
                                key={index}
                                className="cursor-pointer bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 transform mt-3"
                              >
                                <p className="text-sm text-gray-300 font-medium">
                                  {categoryMap[item.category]}{" "}
                                  {/* categoryMap을 이용하여 한국어 카테고리로 표시 */}
                                </p>
                                <p className="text-black text-lg">
                                  {item.detail}
                                </p>
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                {/* 선택된 카테고리에 따른 데이터 렌더링 컴포넌트 (Deprecated */}
                {/* <div class="hidden peer-checked/computer:block">
                  <div className="w-[280px] h-[75px] pl-[25px] pr-[72px] py-[15px]  bg-white border-b border-black border-opacity-25 justify-start items-center inline-flex">
                    <div className="w-[200px] self-stretch relative">
                      <button>
                        <div className=" text-neutral-500 text-sm text-left font-normal leading-tight">
                          컴퓨터/노트북
                        </div>
                        <div className=" text-black text-xl font-bold leading-tight">
                          컴퓨터가 너무 어두워요
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-[280px] h-[75px] pl-[25px] pr-[72px] py-[15px]  bg-white border-b border-black border-opacity-25 justify-start items-center inline-flex">
                    <div className="w-[200px] self-stretch relative">
                      <button>
                        <div className=" text-neutral-500 text-sm font-normal leading-tight">
                          컴퓨터/노트북
                        </div>
                        <div className=" text-black text-xl font-bold leading-tight">
                          설정을 변경하고싶어요
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden peer-checked/태블릿:block">
                  Your post will be publicly visible on your site.
                </div> */}
              </fieldset>
            </div>
          </div>

          {/* <div className="w-[280px] h-[500px] top-[270px] relative">
            <div className="w-[280px] h-[75px] pl-[25px] pr-[72px] py-[15px] left-0 top-[170px] absolute bg-white border-b border-black border-opacity-25 justify-start items-center inline-flex">
              <div className="w-[200px] self-stretch relative">
                <button>
                  <div className="left-0 top-[25px] absolute text-neutral-500 text-sm font-normal leading-tight">
                    키오스크
                  </div>
                  <div className="left-0 top-0 absolute text-black text-xl font-bold leading-tight">
                    햄버거 주문이 어려워요
                  </div>
                </button>
              </div>
            </div>
          </div> */}
        </div>

        {/* <button onclick={this.showModal}> */}
        {/* {this.state.modalIsOpen ? (
            <CustomedModalHome
              show={this.state.modalIsOpen}
              closed={this.closeModal}
            />
          ) : null}
          {this.state.modalIsOpen ? (
            <Backdrop show={this.state.modalIsOpen} />
          ) : null} */}
      </div>
    </>
  );
};

export default Home;
