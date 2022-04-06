
import img1 from "../components/Slide/jpg/img1.jpg"
import img2 from "../components/Slide/jpg/img2.jpg"
import img3 from "../components/Slide/jpg/img3.jpg"
import img4 from "../components/Slide/jpg/img4.jpg"
import img5 from "../components/Slide/jpg/img5.jpg"

function slidesData() {
    const slides = [
        {
          image: img1,
          text: "We're gonna do 3 fundamental exercises.",
        },
        {
          image: img2,
          text: "Do 10 reps. Remember about full range of motion. Don't rush.",
        },
        {
          image: img3,
          text: "Squats are important. Remember to keep your back straight.",
        },
        {
          image: img4,
          text: "Slightly bend your knees. Remember about full range of motion.",
        },
        {
          image: img5,
          text: "You made it, have a nice day and see you next time!",
        },
      ];
      return slides;
}

export default slidesData;
    /*const images = {
        img1 : img1,
        img2 : img2,
        img3 : img3,
        img4 : img4,
        img5 : img5
    }
    export default images;*/