// import { Poppins } from "next/font/google";

// const poppinsFont = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   style: ["normal"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// export default poppinsFont;
import localFont from 'next/font/local';

const playpensansFont = localFont({
  src: [
    {
      path: './PlaypenSans-Thin.ttf',
      weight: '100'
    },
    {
      path: './PlaypenSans-ExtraLight.ttf',
      weight: '200'
    },
    {
      path: './PlaypenSans-Light.ttf',
      weight: '300'
    },
    {
      path: './PlaypenSans-Regular.ttf',
      weight: '400'
    },
    {
      path: './PlaypenSans-Medium.ttf',
      weight: '500'
    },
    {
      path: './PlaypenSans-SemiBold.ttf',
      weight: '600'
    },
    {
      path: './PlaypenSans-Bold.ttf',
      weight: '700'
    },
    {
      path: './PlaypenSans-ExtraBold.ttf',
      weight: '800'
    }
  ]
});

export default playpensansFont;
