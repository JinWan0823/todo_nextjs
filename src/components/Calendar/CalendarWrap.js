import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/swiper.css';

export default function CalendarWrap(){
  const daysInMonth = 31;

  return (
      <Swiper
        loop={true}
        spaceBetween={10} 
        slidesPerView={1} 
      >
      {[...Array(daysInMonth).keys()].map(day => (
        <SwiperSlide key={day}>
          <Card day={day} />
        </SwiperSlide>
      ))}
    </Swiper>


  )
}