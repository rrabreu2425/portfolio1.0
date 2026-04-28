import heroImage from '@/assets/hero.png';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useRef } from 'react';
export function Footer() {
    const autoScroll = useRef(
        AutoScroll({
            speed: 1,
            startDelay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    );

    const featuredSkills = [
        {
            title: 'React',
            subtitle: 'Interfaces modernas y escalables',
            image: reactLogo,
            alt: 'React logo',
        },
        {
            title: 'Vite',
            subtitle: 'Builds rapidos y experiencia DX',
            image: viteLogo,
            alt: 'Vite logo',
        },
        {
            title: 'TypeScript',
            subtitle: 'Tipado estatico para mayor seguridad',
            image: heroImage,
            alt: 'TypeScript logo',
        },
        {
            title: 'Frontend Craft',
            subtitle: 'Diseno UI con enfoque en detalle',
            image: heroImage,
            alt: 'Portfolio hero artwork',
        },
        {
            title: 'React',
            subtitle: 'Interfaces modernas y escalables',
            image: reactLogo,
            alt: 'React logo',
        },
    ];
    const carouselSkills = [...featuredSkills, ...featuredSkills, ...featuredSkills];

    return (
        <footer className="rounded-3xl px-20 py-40 backdrop-blur-xl">

            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    dragFree: true,
                }}
                plugins={[autoScroll.current]}
                className="mx-10"
            >
                <CarouselContent className="-ml-2">
                    {carouselSkills.map((skill, index) => (
                        <CarouselItem key={`${skill.title}-${index}`} className="basis-full pl-2 md:basis-1/2 lg:basis-1/3">
                            <article className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl">
                                <img src={skill.image} alt={skill.alt} className="h-24 w-full bg-slate-900/60 p-3 object-contain" />
                                <div className="space-y-1 px-4 py-3">
                                    <h4 className="text-sm font-semibold text-white">{skill.title}</h4>
                                    <p className="text-xs text-slate-300">{skill.subtitle}</p>
                                </div>
                            </article>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </footer>
    );
}