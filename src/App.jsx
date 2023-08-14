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

// Mobile
const mobileWidth = "100%";
const mobileHeight = "50vh"; // 16:9 ratio

// Tablet
const tabletWidth = "640px";
const tabletHeight = "360px";

// Desktop
const desktopWidth = "750px";
const desktopHeight = "350px";

export default function App() {
	const [allowSlideNext, setAllowSlideNext] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [playing, setPlaying] = useState(null);

	// Usage
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	const isDesktop = useIsDesktop();

	const playerWidth = isMobile
		? mobileWidth
		: isTablet
		? tabletWidth
		: desktopWidth;
	const playerHeight = isMobile
		? mobileHeight
		: isTablet
		? tabletHeight
		: desktopHeight;

	// Hook
	function useIsMobile() {
		const [width] = useState(window.innerWidth);

		return width <= 768;
	}

	function useIsTablet() {
		const [width] = useState(window.innerWidth);

		return width >= 769 && width <= 1024;
	}

	function useIsDesktop() {
		const [width] = useState(window.innerWidth);

		return width > 1024;
	}

	const handleSlideChange = (swiper) => {
		setPlaying(null);
		setCurrentIndex(swiper.realIndex);
		setAllowSlideNext(false);
	};

	const handlePrevClick = () => {
		setPlaying(null);
		setAllowSlideNext(true);
	};

	const handleNextClick = () => {
		setPlaying(null);
		setAllowSlideNext(false);
	};

	return (
		<div className='bg-black relative h-full flex flex-col justify-center items-center'>
			<Swiper
				effect={"coverflow"}
				history={{
					key: "swiper",
				}}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"1.3"}
				allowSlideNext={allowSlideNext}
				allowSlidePrev={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 40,
					depth: 10,
					modifier: 2.5,
					slideShadows: false,
				}}
				onSlideChange={handleSlideChange}
				autoplay={true}
				watchSlidesProgress={true}
				navigation={{
					nextEl: ".btn-next",
					prevEl: ".btn-prev",
				}}
				modules={[EffectCoverflow, Pagination, Navigation, History]}
				className='sm:h-full justify-center items-center md:h-full h-[55vh] mb-2 select-none'
			>
				{swiperData.map((item, index) => (
					<SwiperSlide
						className='videoSlider rounded-xl'
						data-history={`swiper${item.id}`}
						key={index}
					>
						<div
							className={`player-wrapper rounded-xl thumbnail-wrapper ${
								item.id === currentIndex ? "" : "blurred pointer-events-none"
							}`}
						>
							<ReactPlayer
								key={item.id}
								url={item.url}
								light={item.thumb}
								playing={playing === index}
								onClick={() => setPlaying(true)}
								allow='autoplay; fullscreen; picture-in-picture'
								width={playerWidth}
								height={playerHeight}
								className='react-player'
								controls={true}
								allowFullScreen
								onPlay={() => setPlaying(index)}
								onEnded={() => {
									setAllowSlideNext(true);
								}}
							></ReactPlayer>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='flex relative w-full pt-8 justify-center gap-8'>
				<Button
					className={`bg-[#4dcdc1] sm:py-2 md:py-2 py-8 select-none gap-2 sm/:w-[250px] w-[175px] font-sans text-black font-bold btn-prev ${
						currentIndex === 0 ? "hidden" : ""
					}`}
					onClick={handlePrevClick}
				>
					<FaArrowLeft className='text-2xl' />
					Episódio Anterior
				</Button>
				<Button
					className={`bg-purple-600 sm:py-2 md:py-2 py-8 select-none sm:w-[250px] gap-2 w-[175px] text-white font-bold btn-next ${
						currentIndex === swiperData.length - 1 ? "bg-green-600" : ""
					}`}
					onClick={handleNextClick}
				>
					{currentIndex === swiperData.length - 1
						? "Preencha o Formulário"
						: "Próximo Episódio"}
					<FaArrowRight className='text-2xl' />
				</Button>
			</div>
		</div>
	);
}
