import { useState, useEffect } from "react";
import axios from "axios";

// 컴포넌트 import
import NavbarHome from "./NavbarHome";
import VolunteerButton from "./VolunteerButton";

// import dummyData from "./dummy.json";
import ModalHome from "./ModalHome";

const Home = () => {
  const categoryMap = {
    BANK_PUBLIC_OFFICE: "은행/관공서",
    HOSPITAL: "병원",
    TICKET: "티켓 발권",
    RESTAURANT_CAFE: "식당/카페",
  };
  const [selectedCategory, setSelectedCategory] = useState(""); // 아무것도 선택되지 않은 상태
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [selectedModalItem, setSelectedModalItem] = useState(null); // 초기값은 null로 설정
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [responseData, setResponseData] = useState();
  const dummyData = [
    {
      category: "BANK_PUBLIC_OFFICE",
      detail:
        "공항 내부에서 길을 잃었어요. 도착장소로 안내해주는 키오스크가 어디에 있는지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "TICKET",
      detail:
        "기차역에서 승차권을 사려고 하는데 어떻게 해야 할지 모르겠어요. 키오스크 사용법을 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "bus",
      detail:
        "버스정류장에 키오스크가 있는데, 어떤 버스를 타야할지 모르겠어요. 버스 정보를 확인하는 방법을 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "bank",
      detail:
        "은행에서 키오스크를 사용해 입금하려고 하는데 어떻게 해야 할지 잘 모르겠어요. 도와주세요!",
      roomNumber: "3",
    },
    {
      category: "library",
      detail:
        "도서관에서 키오스크로 자리 예약을 하려고 하는데 어떻게 진행되는지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "etc",
      detail:
        "마트에 있는 키오스크를 사용해서 물건을 살려는데 어떻게 결제해야 할지 잘 모르겠어요.",
      roomNumber: "3",
    },
    {
      category: "HOSPITAL",
      detail:
        "병원에서 진료 예약을 키오스크로 하려는데 어떤 순서로 진행되는지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "RESTAURANT_CAFE",
      detail:
        "식당에 도착했는데 키오스크 주문이 처음이라 어떻게 해야 할지 모르겠어요. 도와주세요!",
      roomNumber: "3",
    },
    {
      category: "airport",
      detail:
        "공항 내부에서 출구를 찾기 어려워요. 출구로 안내하는 키오스크가 어디에 있는지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "train",
      detail:
        "기차역에서 열차 시간을 확인하려고 하는데 키오스크를 사용해야 하나요? 어떻게 해야 할지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "bus",
      detail:
        "버스정류장에 키오스크가 있는데, 어떤 버스를 타야할지 잘 모르겠어요. 키오스크 사용법을 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "bank",
      detail:
        "은행에서 키오스크를 사용해 예금 출금을 하려고 하는데 어떻게 해야 할지 잘 모르겠어요. 도와주세요!",
      roomNumber: "3",
    },
    {
      category: "library",
      detail:
        "도서관에서 키오스크로 대출을 하려고 하는데 어떻게 해야 할지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "etc",
      detail:
        "마트에 있는 키오스크를 사용해서 상품을 찾으려는데 어떻게 해야 할지 잘 모르겠어요.",
      roomNumber: "3",
    },
    {
      category: "hospital",
      detail:
        "병원에서 진료 예약을 키오스크로 하려고 하는데 어떤 순서로 진행되는지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "restaurant",
      detail:
        "식당에 도착했는데 키오스크 주문이 처음이라 어떻게 해야 할지 모르겠어요. 도와주세요!",
      roomNumber: "3",
    },
    {
      category: "airport",
      detail:
        "공항 내부에서 출구를 찾기 어려워요. 출구로 안내하는 키오스크가 어디에 있는지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "train",
      detail:
        "기차역에서 열차 시간을 확인하려고 하는데 키오스크를 사용해야 하나요? 어떻게 해야 할지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "bus",
      detail:
        "버스정류장에 키오스크가 있는데, 어떤 버스를 타야할지 잘 모르겠어요. 키오스크 사용법을 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "bank",
      detail:
        "은행에서 키오스크를 사용해 예금 출금을 하려고 하는데 어떻게 해야 할지 잘 모르겠어요. 도와주세요!",
      roomNumber: "3",
    },
    {
      category: "library",
      detail:
        "도서관에서 키오스크로 대출을 하려고 하는데 어떻게 해야 할지 알려주세요.",
      roomNumber: "3",
    },
    {
      category: "etc",
      detail:
        "마트에 있는 키오스크를 사용해서 상품을 찾으려는데 어떻게 해야 할지 잘 모르겠어요.",
      roomNumber: "3",
    },
  ];

  const openModal = (item) => {
    setSelectedModalItem(item); // 선택한 모달의 데이터를 업데이트
    setIsModalOpen(true); // 모달 열기
    setOpen(true);
  };
  const closeModal = () => {
    setSelectedModalItem(null); // 모달이 닫힐 때 선택한 항목의 index를 null로 초기화
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/help/list`)
      .then((response) => {
        // 성공적으로 데이터를 받아온 경우의 처리
        setResponseData(response.data);
      })
      .catch((error) => {
        // 에러 발생 시 처리
        console.error(error);
      });
  }, []);

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
                    {/* 키오스크 (고정 버튼) */}
                    <div className="border px-5 py-4 mt-2 rounded-lg">
                      <div className="border-b pb-2">
                        <input
                          id={`category-kiosk`}
                          className={`peer/ss form-radio mt-3 mr-2 mb-3 border-slate-300 accent-[#898C90]`}
                          type="radio"
                          name="kioskonly"
                          checked={true} // 선택된 카테고리와 일치할 때만 checked로 설정
                          readOnly // 읽기 전용으로 설정하여 변경 방지
                        />
                        <label
                          htmlFor={`category-kiosk`}
                          className={`peer-checked/kiosk text-gray-400`}
                        >
                          키오스크
                        </label>
                      </div>
                      <div className="mt-4 flex flex-wrap">
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
                                  {item.detail.length > 30
                                    ? `${item.detail.slice(0, 30)}...`
                                    : item.detail}
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
