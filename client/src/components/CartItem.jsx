import React from 'react'

const CartItem = ({cartItem}) => {
  return (
    <div className="absolute w-[1268px] h-[353px] top-[266px] left-[86px]">
            <div className="inline-flex flex-col items-start gap-[10px] absolute top-0 left-0">
              <div className="relative w-[1268px] h-[100px] bg-white rounded-[15px] shadow-[0px_1px_4px_#00000040]" />
              <div className="absolute w-[14px] top-[39px] left-[681px] [font-family:'Raleway',Helvetica] font-semibold text-[#393939] text-[22px] tracking-[0] leading-[22px] whitespace-nowrap">
                1
              </div>
              <div className="absolute w-[219px] top-[35px] left-[124px] [font-family:'Poppins',Helvetica] font-medium text-[#1e1e1e] text-[18px] tracking-[0] leading-[normal]">
                {cartItem.name}
              </div>
              <img
                className="absolute w-[92px] h-[82px] top-[9px] left-[12px]"
                alt="Rectangle"
                src="/img/rectangle-19-2.svg"
              />
              <img className="absolute w-[23px] h-[20px] top-[40px] left-[702px]" alt="Group" src="/img/group-4.png" />
              <div className="absolute w-[69px] top-[43px] left-[1029px] [font-family:'Poppins',Helvetica] font-medium text-[#393939] text-[14px] text-right tracking-[0] leading-[normal]">
                ${cartItem.price}
              </div>
              <img
                className="absolute w-[29px] h-[25px] top-[37px] left-[1169px]"
                alt="Trash can"
                src="/img/trash-can.png"
              />
            </div>
            
          </div>
  )
}

export default CartItem