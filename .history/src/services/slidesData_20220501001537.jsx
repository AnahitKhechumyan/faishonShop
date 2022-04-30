import images from "./imgData";
 
 
    //function startSlider(){
     // sliderInterval = setInterval(SLIDES, 2500);
   // }
function slidesData(){
  let sliderInterval = null;
     const SLIDES = [
        {
            image: images.img1,
            text: "Always remember, a person is greeted with clothes.",
          },
          {
            image: images.img2,
            text: "Shopping is the best way to deal with stress.",
          },
          {
            image: images.img3,
            text: "The clothes give a mood!",
          },
          
          {
            image: images.img4,
            text: "Every detail is very important!",
          },
          {
            image: images.img5,
            text: " Be different not only in your inner self but also in your outer self!",
          },
          {
            image: images.img6,
            text: "Be unique in every case!",
          },
          {
            image: images.img6,
            text: "Fashion shop",
          },
    ];
    sliderInterval = setInterval(SLIDES, 2500);
    return sliderInterval;
}
export default slidesData;