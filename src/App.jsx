// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import ReactPlayer from "react-player";

import { FaArrowRight, FaArrowLeft, FaFileSignature } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	History,
} from "swiper/modules";
import { Button } from "@/components/ui/button";

export default function App() {
	const [allowSlideNext, setAllowSlideNext] = useState(true);
	return (
		<div className='bg-black h-full flex flex-col justify-center items-center'>
			<Swiper
				effect={"coverflow"}
				history={{
					key: "swiper",
				}}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				allowSlideNext={allowSlideNext}
				allowSlidePrev={false}
				coverflowEffect={{
					rotate: 0,
					stretch: 50,
					depth: 10,
					modifier: 2.5,
					slideShadows: true,
				}}
				onSlideChangeTransitionStart={() => setAllowSlideNext(false)}
				navigation={{
					nextEl: ".btn-next",
					prevEl: ".btn-prev",
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Navigation, History]}
				className='mySwiper select-none'
			>
				<SwiperSlide
					className='videoSlider'
					data-history='swiper 1'
				>
					<div className='videoContainer'>
						<ReactPlayer
							url='https://player.vimeo.com/video/436370290?h=5ca24f182f&color=000000&title=0&byline=0&portrait=0'
							allow='autoplay; fullscreen; picture-in-picture'
							width='400px'
							height='300px'
							className='videoPlayer'
							controls={true}
							allowfullscreen
							onEnded={() => {
								setAllowSlideNext(true);
							}}
						></ReactPlayer>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className='videoSlider'
					data-history='swiper 2'
				>
					<div className='videoContainer'>
						<ReactPlayer
							url='https://player.vimeo.com/video/436370290?h=5ca24f182f&color=000000&title=0&byline=0&portrait=0'
							allow='autoplay; fullscreen; picture-in-picture'
							width='400px'
							height='300px'
							className='videoPlayer'
							controls={true}
							allowfullscreen
							onEnded={() => {
								setAllowSlideNext(true);
							}}
						></ReactPlayer>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className='videoSlider'
					data-history='swiper 3'
				>
					<div className='videoContainer'>
						<ReactPlayer
							url='https://player.vimeo.com/video/436370290?h=5ca24f182f&color=000000&title=0&byline=0&portrait=0'
							allow='autoplay; fullscreen; picture-in-picture'
							width='400px'
							height='300px'
							className='videoPlayer'
							controls={true}
							allowfullscreen
							onEnded={() => {
								setAllowSlideNext(true);
							}}
						></ReactPlayer>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className='videoSlider'
					data-history='swiper 4'
				>
					<div className='videoContainer'>
						<ReactPlayer
							url='https://player.vimeo.com/video/436370290?h=5ca24f182f&color=000000&title=0&byline=0&portrait=0'
							allow='autoplay; fullscreen; picture-in-picture'
							width='400px'
							height='300px'
							className='videoPlayer'
							controls={true}
							allowfullscreen
							onEnded={() => {
								setAllowSlideNext(true);
							}}
						></ReactPlayer>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className='videoSlider'
					data-history='swiper 5'
				>
					<div className='videoContainer'>
						<ReactPlayer
							url='https://player.vimeo.com/video/436370290?h=5ca24f182f&color=000000&title=0&byline=0&portrait=0'
							allow='autoplay; fullscreen; picture-in-picture'
							width='400px'
							height='300px'
							className='videoPlayer'
							controls={true}
							allowfullscreen
							onEnded={() => {
								setAllowSlideNext(true);
							}}
						></ReactPlayer>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className='flex w-full justify-center py-12 gap-8'>
				<Button className='bg-cyan-500 select-none gap-2 sm:w-[250px] w-[175px] font-sans text-black font-extrabold btn-prev'>
					<FaArrowLeft className='text-2xl' />
					Episódio Anterior
				</Button>
				<Button className='bg-purple-600 select-none sm:w-[250px] gap-2 w-[175px] text-white font-extrabold btn-next'>
					Próximo Episódio <FaArrowRight className='text-2xl' />
				</Button>
			</div>
			<Button
				disabled={() => {}}
				className='bg-red-600 gap-2 select-none text-slate-800 text-extrabold'
			>
				Ir Para Formulário <FaFileSignature className='text-2xl' />
			</Button>
		</div>
	);
}
