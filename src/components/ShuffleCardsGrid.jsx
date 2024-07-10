import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
const squareData = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1685015991843-682e96076102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1537365587684-f490102e1225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1569851935333-6ca1448cc299?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9sbHl3b29kJTIwZGFuY2VzfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    src: "https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/420968862_349572987936010_3272607495742199860_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=raBxFeoAJskQ7kNvgFCS7y6&_nc_ht=scontent.fixc8-2.fna&oh=00_AYDNvhN_AreCovEhVmjYFcBX_Y-SeZOT45Qtw4BPqn5qlA&oe=6691A201",
  },
  {
    id: 6,
    src: "https://scontent.fixc8-3.fna.fbcdn.net/v/t39.30808-6/435096321_395805946646047_165711020108868224_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u8jtYV-R-pkQ7kNvgFTFxeU&_nc_ht=scontent.fixc8-3.fna&oh=00_AYDvp00ysm-NGJ-krKKX5vE6Dgg6cf443YIOJmXmEPfJPA&oe=6691794A",
  },
  {
    id: 7,
    src: "https://scontent.fixc8-3.fna.fbcdn.net/v/t39.30808-6/340493515_754314172998715_2875583965403777976_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wd2V3Px88n0Q7kNvgH9DkPS&_nc_ht=scontent.fixc8-3.fna&oh=00_AYDNp2WVjYWoV37WsCab2FwhmPx0ipBut_mhlUD0OFRBOg&oe=66917043",
  },
  {
    id: 8,
    src: "https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/340642377_1365608570885998_8614162721002772244_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y-RcTYWtiG8Q7kNvgEmERwE&_nc_ht=scontent.fixc8-2.fna&oh=00_AYCtRP-Etchhl9DPly3t54Vm9dD7Y9n47sOo0i4mdO9AFw&oe=66917FB0",
  },
  {
    id: 9,
    src: "https://scontent.fixc8-1.fna.fbcdn.net/v/t39.30808-6/311428587_110876925138952_2963939257565696037_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c2TzgFcyxEQQ7kNvgECMxpA&_nc_ht=scontent.fixc8-1.fna&oh=00_AYDiGfBmNOwGkOvgmYiIKing_FliSiJFN-g3kX-8VcVEbQ&oe=6691A3D3",
  },
  {
    id: 10,
    src: "https://scontent.fixc8-3.fna.fbcdn.net/v/t39.30808-6/340520152_3388299211410574_5547759540453076686_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KXi49Hwjt_wQ7kNvgHMbEmv&_nc_ht=scontent.fixc8-3.fna&oh=00_AYC5wI-yi50DYyniDE1G-p9FqSf83KWGif2G8QDgghvUbg&oe=669194ED",
  },
  {
    id: 11,
    src: "https://scontent.fixc8-1.fna.fbcdn.net/v/t39.30808-6/340899805_213211837993030_9013799238347086233_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ljg4VX9qlGAQ7kNvgEwIC8P&_nc_ht=scontent.fixc8-1.fna&oh=00_AYAM_l52dDQEUiG07sng4xt1P5NgYgEFly8bIaKuq1GvSg&oe=66917E98",
  },
  {
    id: 12,
    src: "https://scontent.fixc8-1.fna.fbcdn.net/v/t39.30808-6/310586884_105436162349695_7144223585762826391_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R-SA-ka3Td0Q7kNvgGIcBuS&_nc_ht=scontent.fixc8-1.fna&oh=00_AYDjJ43GfJ0GjM22570O3ADXmX0INVu3ioLeLggj1DuYHw&oe=66917EB0",
  },
  {
    id: 13,
    src: "https://scontent.fixc8-1.fna.fbcdn.net/v/t39.30808-6/310762950_105435999016378_5908570823830921867_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-omYXYLWsaYQ7kNvgFapnX8&_nc_ht=scontent.fixc8-1.fna&oh=00_AYAXlZPFMYp4ym_OBs6JSvC2tU4VRjUH2M2RRyHJG8YGtQ&oe=66916CD2",
  },
  {
    id: 14,
    src: "https://scontent.fixc8-3.fna.fbcdn.net/v/t39.30808-6/311463236_110081911885120_2268121862384153596_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OmvQoMUWTfYQ7kNvgHg0ZZJ&_nc_ht=scontent.fixc8-3.fna&oh=00_AYCicDhfUYYV2wY5SjVmQAgFGsOf6mNbbkp3VASssHkxpg&oe=669189E4",
  },
  {
    id: 15,
    src: "https://scontent.fixc8-1.fna.fbcdn.net/v/t39.30808-6/404281358_315650051328304_8818059261969428850_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NRMR552w_yAQ7kNvgEnchKV&_nc_ht=scontent.fixc8-1.fna&oh=00_AYCBaW9GRG1naiz0oK3E-Q5Ipjqt1bNzocSsVDRAksOeRw&oe=6691A182",
  },
  {
    id: 16,
    src: "https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/404354867_315710014655641_6017263220233086549_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ydr-N8ZekbEQ7kNvgE6y2Kd&_nc_ht=scontent.fixc8-2.fna&oh=00_AYBaJDmDrIFDCBpCyaVTVPYSzVwQIpuofdNyqb2VLCh92A&oe=66916E03",
  },
];
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};
const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid w-[80vw] lg:w-1/2 grid-cols-4 grid-rows-4 mx-auto h-[450px] gap-1 pb-5">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleGrid;
