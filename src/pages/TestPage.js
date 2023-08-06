import Card from "../components/Card";

function TestPage(){
return(
    <div>
          {/* 카드 컴포넌트 시험용 */}
    <Card cardTitle1={"컴퓨터 및"} cardTitle2={"노트북"} cardImage={"smartphone.png"}/>
    <Card cardTitle1={"스마트폰 및"} cardTitle2={"태블릿"} cardImage={"smartphone.png"}/>
    <Card cardTitle1={"키오스크"} cardTitle2={""} cardImage={"smartphone.png"}/>

    </div>
)
}
export default TestPage