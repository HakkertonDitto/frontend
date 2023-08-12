import { Component } from "react";
// import Modal from "../../components/modal/Modal";
import Backdrop from "../../components/backdrop/Backdrop";
import CustomedModalHome from "../../components/modal/CustomedModalHome";
import CustomedFilterModalHome from "../../components/modal/CustomedFilterModalHome";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    modalIsOpen: false,
    filterModalIsOpen: false,
  };
  showModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  showFilterModal = () => {
    this.setState({ filterModalIsOpen: true });
  };
  closeFilterModal = () => {
    this.setState({ filterModalIsOpen: false });
  };

  render() {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-[360px] h-[800px] relative bg-white">
            <div className="w-[200px] left-[20px] top-[100px] absolute text-neutral-950 text-[28px] font-bold leading-9">
              도움이 필요해요
            </div>
            <Link to="/donor/mypage">
              <div className="left-[300px] top-[40px] absolute">
                <FaRegCircleUser size="30" />
              </div>
            </Link>
            <button onClick={this.showFilterModal}>
              <div className="left-[300px] top-[102px] absolute">
                <IoFilterOutline size="30" />
              </div>
            </button>

            <div className="w-[322.02px] h-[0px] left-[19px] top-[151px] absolute border border-emerald-400"></div>
            <div className="w-[66px] h-5 left-[25px] top-[167px] absolute text-stone-600 text-[17px] font-medium leading-tight">
              현재 필터
            </div>

            <div className="w-[280px] h-[500px] left-[40px] top-[236px] absolute">
              <div className="w-[280px] h-[75px] pl-[25px] pr-[72px] py-[15px] left-0 top-0 absolute bg-white border-b border-black border-opacity-25 justify-start items-center inline-flex">
                <div className="w-[200px] self-stretch relative">
                  <button onClick={this.showModal}>
                    <div className="left-0 top-[25px] absolute text-neutral-500 text-sm font-normal leading-tight">
                      컴퓨터/노트북
                    </div>
                    <div className="left-0 top-0 absolute text-black text-xl font-bold leading-tight">
                      컴퓨터가 너무 어두워요
                    </div>
                  </button>
                </div>
              </div>

              <div className="w-[280px] h-[75px] pl-[25px] pr-[72px] py-[15px] left-0 top-[170px] absolute bg-white border-b border-black border-opacity-25 justify-start items-center inline-flex">
                <div className="w-[200px] self-stretch relative">
                  <button onClick={this.showModal}>
                    <div className="left-0 top-[25px] absolute text-neutral-500 text-sm font-normal leading-tight">
                      키오스크
                    </div>
                    <div className="left-0 top-0 absolute text-black text-xl font-bold leading-tight">
                      햄버거 주문이 어려워요
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[280px] h-[75px] pl-[25px] pr-[72px] py-[15px] left-0 top-[85px] absolute bg-white border-b border-black border-opacity-25 justify-start items-center inline-flex">
                <div className="w-[200px] self-stretch relative">
                  <button onClick={this.showModal}>
                    <div className="left-0 top-[25px] absolute text-neutral-500 text-sm font-normal leading-tight">
                      컴퓨터/노트북
                    </div>
                    <div className="left-0 top-0 absolute text-black text-xl font-bold leading-tight">
                      설정을 변경하고싶어요
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[82.50px] h-[22px] left-[226px] top-[166px] absolute">
              <div className="w-[82.50px] h-[22px] left-0 top-0 absolute bg-zinc-300 rounded-[25px]" />
              <div className="w-[60px] h-[17px] left-[11px] top-[2px] absolute text-black text-[17px] font-normal leading-tight">
                키오스크
              </div>
            </div>
            <div className="w-[125px] h-[22px] left-[96px] top-[166px] absolute">
              <div className="w-[125px] h-[22px] left-0 top-0 absolute bg-zinc-300 rounded-[25px]" />
              <div className="w-[95px] h-5 left-[15px] top-[1px] absolute text-black text-[17px] font-normal leading-tight">
                컴퓨터/노트북
              </div>
            </div>
          </div>

          {this.state.modalIsOpen ? (
            <CustomedModalHome
              show={this.state.modalIsOpen}
              closed={this.closeModal}
            />
          ) : null}
          {this.state.modalIsOpen ? (
            <Backdrop show={this.state.modalIsOpen} />
          ) : null}
          {this.state.filterModalIsOpen ? (
            <CustomedFilterModalHome
              show={this.state.filterModalIsOpen}
              closed={this.closeFilterModal}
            />
          ) : null}
          {this.state.filterModalIsOpen ? (
            <Backdrop show={this.state.filterModalIsOpen} />
          ) : null}
        </div>
      </>
    );
  }
}

export default Home;
