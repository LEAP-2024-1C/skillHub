
const Employeer = () => {

   return(

    <div className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#f9f9f9]">

       <div className=" h-[360px] flex  ">
       <div className="pt-[40px] w-[30%] flex flex-col items-center gap-6">
    
    <div className="avatar flex flex-col items-center gap-5 ">
       <div className="ring-primary ring-offset-base-100 w-[150px] rounded-full ring ring-offset-2">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
       </div>
    </div>
    <input
       type="file"
       className="file-input file-input-bordered file-input-success text-xs" />
   

 </div>

          <div className="w-[50%] flex flex-col items-center gap-6">
          <div className=" w-full flex flex-col h-[360px]">
              <div className="flex justify-around mt-[30px] ">
                   <div className="flex flex-col justify-start items-start gap-5 text-xl font-black font-bold text-[#181818]">
                      <p className="hover:text-[#118a00]">Нэр эсвэл Компани</p>
                      <p className="hover:text-[#118a00]">Төрөл</p>
                      <p className="hover:text-[#118a00]">И-Мэйл</p>
                      <p className="hover:text-[#118a00]">Утасны дугаар</p>
                      <p className="hover:text-[#118a00]">Компани</p>
                      <p className="hover:text-[#118a0s0]">Гишүүнчлэл</p>


                   </div>
                   <div className="flex flex-col items-end gap-6">
                       <p>Бат</p>
                       <p>Хувь хүн</p>
                       <p>Bat234@gmail.com</p>
                       <p>+97690302490</p>
                       <p>IHC</p>
                       <p>VIP</p>
                       
                   </div>
              </div>
             <p className="font-black font-bold text-2xl text-[#333333] ml-[75px] mt-[20px] ">Description</p>
          </div>
             

          </div>

          <div className="w-[20%] flex flex-col items-end pt-[30px] pr-10 text-2xl text-[#118a00]" >
            <div className="">
            <button className="btn w-[170px] hover:bg-[#118a00] hover:text-[#333333] text-xl">Edit</button>
            </div>
          </div>

       </div>
       <div role="tablist" className="tabs tabs-bordered">
           <input type="radio" name="my_tabs_2" role="tab" className="tab mx-[550px] text-2xl h-[50px] rounded-2xl border-2 bg-base-100 text-[#f9f9f9] hover:text-[#f9f9f9] hover:bg-[#118a00] mt-[40px]" aria-label="Зарын түүх" />
            <div role="tabpanel" className="tab-disabled bg-base-100 border-base-300 p-6 bg-[] h-[60vh]">
      
           <div className=" flex flex-col px-[200px] border-white rounded-lg border-2 w-[80%] p-[20px]  
               m-auto drop-shadow-lg hover:border-2 hover:border-[#118a00] hover:rounded-xl bg-[#18188] mt-[40px] hover:cursor-pointer">
         
               <h1 className="text-[20px] text-[#118a00]"><strong> Тооцооны нягтлан бодогч</strong></h1>
               <div className="flex justify-between">
                 <p className="text-[#118a00]">Date:</p>
                  <p className="text-[#f9f9f9] ml-[145px]">3өдрийн өмнө</p>
               </div>
              
                <div className="flex justify-between gap-10">
                <h1 className=" text-[#118a00] ">Нэг цагийн үнэлгээ:</h1>
                   <p className="text-[#f9f9f9]"><strong>20 000₮</strong></p>
               </div>
       
                <div className="flex justify-between gap-5 ">            
                    <h1 className="text-[#118a00]"><strong>Тавигдах шаардлага:</strong></h1>
               <p className="text-[#f9f9f9]"><strong>Бакалавр</strong></p>
              </div>

           </div>

 
  </div>

</div>
 
</div>
   )

}
export default Employeer;

