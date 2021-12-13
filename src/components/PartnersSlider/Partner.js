import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Box, Heading, IconButton, useBreakpointValue, VStack } from "@chakra-ui/react";
import Slider from 'react-slick';
import Card from "../Card";
// import Text from "antd/es/typography/Text";


const Partner = ({ comps, length }) => {
    const [slider, setSlider] = React.useState(null)
    console.log("COmps ", comps.length)
    // Settings for the slider
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        slidesToShow: length,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    // const top = useBreakpointValue({base: '90%', md: '50%'});
    // const side = useBreakpointValue({base: '30%', md: '40px'});

    return (
        <>
            <Box
                position={'relative'}
                height={'auto'}
                width={'auto'}
                overflow={'hidden'}>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    variant="ghost"
                    position="absolute"
                    // left={side}
                    // top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt size="30px" color={"#0092ef"} />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    variant="ghost"
                    position="absolute"
                    // right={side}
                    // top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt size="30px" color={"#0092ef"} />
                </IconButton>
                <div style={{ width: "90%", margin: 'auto' }}>
                    {/* Slider */}
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {
                            comps?.map((comp) => (
                                comp
                            ))
                        }
                    </Slider>
                </div>
            </Box>


        </>
    )
}
export default Partner
