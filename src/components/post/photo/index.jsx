import PropTypes from "prop-types";

export default function Photo({ photos }) {
   switch (photos.length) {
       case 1:
         return (
             <div className="mt-3">
                 <img src={photos[0]} alt="" className="border border-[#2f3336] max-h-[510px] object-cover rounded-xl"/>
             </div>
         )

       case 2:
           return (
               <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[#2f3336] rounded-xl overflow-hidden">
                   <img src={photos[0]} alt=""
                        className="h-full w-full object-cover"/>
                   <img src={photos[1]} alt=""
                        className="h-full w-full object-cover"/>
               </div>
           )

       case 3:
           return (
               <div
                   className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[#2f3336] rounded-xl overflow-hidden">
                   <img src={photos[0]} alt=""
                        className="h-full w-full object-cover"/>
                   <div className="h-full flex flex-col gap-0.5">
                       <div className="flex-shrink-0 flex-1 relative">
                           <img src={photos[1]} alt=""
                                className="h-ful absolute inset-0 flex-shrink-0 w-full object-cover"/>
                       </div>
                       <div className="flex-shrink-0 flex-1 relative">
                           <img src={photos[2]} alt=""
                                className="h-full absolute inset-0 flex-shrink-0 w-full object-cover"/>
                       </div>
                   </div>
               </div>
           )

       case 4:
           return (
               <div
                   className="mt-3 grid grid-cols-2 gap-0.5 h-[286px] border border-[#2f3336] rounded-xl overflow-hidden">
                   <img src={photos[0]} alt=""
                        className="h-[141px] w-full object-cover"/>
                   <img src={photos[1]} alt=""
                        className="h-[141px] w-full object-cover"/>
                   <img src={photos[2]} alt=""
                        className="h-[141px] w-full object-cover"/>
                   <img src={photos[3]} alt=""
                        className="h-[141px] w-full object-cover"/>
               </div>
           )
   }
}

Photo.propTypes = {
    photos: PropTypes.array.isRequired
};