'use client';
import Header from "@/components/common/header";
import DealPage from "@/components/home/Deal";
import Shortcut from "@/components/home/Shortcut";
import Banner from "@/components/home/banner";
import { BANNERAPI, DEALAPI, SHORTCUT } from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {

  const { isLoading, error, data:bannerData } = useQuery({
    queryKey: ['bannerData'],
    queryFn: () =>
      fetch(BANNERAPI).then((res) =>
        res.json(),
      ),
  });

  const { isLoading:shortCutLoading, data:shortCut } = useQuery({
    queryKey: ['shortCut'],
    queryFn: () =>
      fetch(SHORTCUT).then((res) =>
        res.json(),
      ),
  });

  const { isLoading:dealLoading, data:deal } = useQuery({
    queryKey: ['deal'],
    queryFn: () =>
      fetch(DEALAPI+'SINGLE').then((res) =>
        res.json(),
      ),
  });



  if (isLoading) return <div className="m-auto text-center">Loading...</div>;

  if (error) return <div className="m-auto text-center text-red-300">An error has occurred:  { error.message}</div>


 const productList =[
  {
    title:"HOT DEAL",
    subTitle:"HAPPY HOUR"
  },
  {
    title:"저렴한 거격과 보장된 성능, 더함 TV",
    subTitle:"사은품 증정이벤트"
  },
  {
    title:"판매량 TOP7 가성비 인기가전 모음",
    subTitle:"가격,성능,디자인까지"
  },
  {
    title:"성능보장, PC주변기기 & 스피커 추천",
    subTitle:"#LG #앱코 #BOSE"

  },
  {
    title:"품절임박! 마지막 수량 한정특가 상품",
    subTitle:"고민하면 품절!"
  },
  {
    title:"게임기기 최저가 & 신작 모음",
    subTitle:"#한정수량 특가 #기대신작"

  },
  {
    title:"New In",
    subTitle:"#주목할만한신상품"

  },
  {
    title:"로지텍 AS보장 정품 마우스/키보드 단독",
    subTitle:"#병행수입 아닌 정품 제품으로 확실한 AS보장!"

  },
  {
    title:"맥북 클리어런스 세일!",
    subTitle:"오직 테스트밸리에서만! 30일 체험해보고 구매하자"

  },
 ]
  

  return (
    <main className="">
    <Header />
    
 <div className="pt-5">
 {bannerData &&<Banner  banner={bannerData}/> }
 </div>
  <div className="pt-16">
  {shortCut && <Shortcut shortcut={shortCut} />}
  </div>

{
  productList.map((product,index)=>{
    return  <div className="m-auto w-[100%] md:w-[75%]  pt-16" key={index}>
 

    {deal && <DealPage 
    title={product.title}
    subtitle={product.subTitle}
    deals={deal.items} />}
  </div>
  
  })
}

<div className="pt-16"></div>
 


    </main>
  );
}
