import { useState } from "react";

// 컴포넌트 import
import NavbarHome from "./NavbarHome";
import VolunteerButton from "./VolunteerButton";

import dummyData from "./dummy.json";
import ModalHome from "./ModalHome";

const Home = () => {
  const categoryMap = {
    computer: "컴퓨터/노트북",
    tablet: "태블릿",
    TV: "스마트TV",
    kiosk: "키오스크",
  };
  const [selectedCategory, setSelectedCategory] = useState("computer"); // 첫 번째 항목 선택
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [selectedModalItem, setSelectedModalItem] = useState(null); // 초기값은 null로 설정
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const openModal = (item) => {
    setSelectedModalItem(item); // 선택한 모달의 데이터를 업데이트
    setIsModalOpen(true); // 모달 열기
    setOpen(true);
  };
  const closeModal = () => {
    setSelectedModalItem(null); // 모달이 닫힐 때 선택한 항목의 index를 null로 초기화
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[360px] h-[800px] relative bg-white">
          <div className="mt-5">
            <div className="px-4">
              <fieldset className="mx-auto max-w-md bg-white py-8 text-md">
                {/* 상단바 컴포넌트 */}
                <NavbarHome />

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
                            className={`peer/${category.toLowerCase()} form-radio mr-2 mb-0.5 border-slate-300 accent-green-700`}
                            type="radio"
                            name="status"
                            checked={selectedCategory === category} // 선택된 카테고리와 일치할 때만 checked로 설정
                            onChange={() => setSelectedCategory(category)} // 라디오 버튼 선택 시 상태 업데이트
                          />
                          <label
                            htmlFor={`category-${index}`}
                            className={`peer-checked/${category.toLowerCase()} ${
                              selectedCategory === category
                                ? "text-[#2CBB99] font-bold"
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
                                onClick={() => openModal(item)} // 모달 열기 함수 호출, 데이터 전달 변경
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

                    {/* 모달 컴포넌트 */}
                    {isModalOpen && selectedModalItem && (
                      <ModalHome
                        category={categoryMap[selectedModalItem.category]} // 선택된 항목의 데이터의 카테고리를 전달
                        data={selectedModalItem} // 선택된 항목의 데이터 전달
                        onClose={closeModal} // 모달 닫기 함수
                        open={open}
                        setOpen={setOpen}
                      />
                    )}
                  </div>
                )}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
