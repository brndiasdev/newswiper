// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import ReactPlayer from "react-player";

import { swiperData } from "./data/swiperData";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
	const [allowSlideNext, setAllowSlideNext] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [playing, setPlaying] = useState(false);

	const handleSlideChange = (swiper) => {
		setCurrentIndex(swiper.realIndex);
		setAllowSlideNext(false);
	};

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
				allowSlidePrev={true}
				coverflowEffect={{
					rotate: 0,
					stretch: -20,
					depth: 10,
					modifier: 2.5,
					slideShadows: false,
				}}
				onSlideChangeTransitionStart={() => setAllowSlideNext(false)}
				onSlideChange={handleSlideChange}
				navigation={{
					nextEl: ".btn-next",
					prevEl: ".btn-prev",
				}}
				modules={[EffectCoverflow, Pagination, Navigation, History]}
				className='mySwiper select-none'
			>
				{swiperData.map((item, index) => (
					<SwiperSlide
						className='videoSlider'
						data-history={`swiper${item.id}`}
						key={index}
					>
						<div
							className={`videoContainer ${
								item.id === currentIndex ? "" : "blurred"
							}`}
						>
							<ReactPlayer
								url={item.url}
								light={item.thumb}
								playing={playing}
								onClick={() => setPlaying(true)}
								allow='autoplay; fullscreen; picture-in-picture'
								width='400px'
								height='300px'
								className='videoPlayer'
								controls={true}
								playIcon={true}
								allowFullScreen
								onEnded={() => {
									setAllowSlideNext(true);
								}}
							></ReactPlayer>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='flex w-full justify-center py-12 gap-8'>
				<Button
					className={`bg-cyan-500 select-none gap-2 sm:w-[250px] w-[175px] font-sans text-black font-bold btn-prev ${
						currentIndex === 0 ? "hidden" : ""
					}`}
					onClick={() => setAllowSlideNext(true)}
				>
					<FaArrowLeft className='text-2xl' />
					Episódio Anterior
				</Button>
				<Button
					className={`bg-purple-600 select-none sm:w-[250px] gap-2 w-[175px] text-white font-bold btn-next ${
						currentIndex === swiperData.length - 1 ? "bg-green-600" : ""
					}`}
					onClick={() => {
						setAllowSlideNext(false);
					}}
				>
					{currentIndex === swiperData.length - 1
						? "Preencha o Formulário"
						: "Proxímo Epísodio"}
					<FaArrowRight className='text-2xl' />
				</Button>
			</div>
		</div>
	);
}
