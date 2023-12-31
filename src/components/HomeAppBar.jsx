import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { SearchBar } from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import styles from "../styles/HomeAppBar.module.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPhotos } from "../features/search/searchThunks";
import { orderFavorites } from "../features/favorite/favoriteSlice";
import { clearPhotos } from "../features/search/searchSlice";

export function HomeAppBar({ setSearch }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [orderBy, setOrderBy] = useState("");

  const handleRandomCall = () => {
    dispatch(getPhotos());
  };

  const handleSelect = (event) => {
    const value = event.target.value;
    setOrderBy(value);
    dispatch(orderFavorites(value));
  };

  return (
    <>
      <AppBar
        style={{
          background: "rgba(22, 22, 22, 0.85)",
          height: "100px",
          textAlign: "center",
        }}
        position="sticky"
      >
        <Container
          className={styles.appBar}
          style={{
            marginRight: 0,
            marginLeft: 0,
            textAlign: "center",
          }}
          disableGutters
          maxWidth="xl"
        >
          <Toolbar
            sx={{
              textDecoration: "none",
              display: "flex",
              padding: "0.4375rem 0rem",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
            style={{
              marginRight: 0,
              marginLeft: 0,
            }}
            disableGutters
          >
            <Box
              sx={{
                textDecoration: "none",
                display: "flex",
                padding: "0.4375rem 0rem",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {location.pathname === "/" ? (
                <SvgIcon
                  className={styles.mainIconLogo}
                  sx={{
                    width: "4.125rem",
                    height: "4.75rem",
                    fill: "linear-gradient(90deg, #04DBF5 -0.2%, #FA04E0 100.21%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="66"
                    height="76"
                    viewBox="0 0 66 76"
                    fill="none"
                  >
                    <path
                      d="M23.7188 5.30574C18.6509 8.21582 12.5223 11.7432 10.0915 13.1541C7.66071 14.5504 4.41964 16.4169 2.87277 17.2988L0.0736607 18.9008L0.0294643 37.9633L0 57.011L1.72366 58.0251C2.68125 58.5836 7.23348 61.2145 11.8594 63.86C16.4853 66.5202 21.8772 69.6213 23.8661 70.7677C25.8549 71.9141 28.7129 73.5602 30.2304 74.4274L32.9705 76L42.458 70.5326C47.6732 67.5343 55.0982 63.2574 58.9728 61.0381L66 56.9963V37.9927V19.0037L62.2138 16.8285C60.1219 15.6233 52.6969 11.3464 45.6991 7.31928C38.7161 3.29221 32.9705 0 32.9558 0C32.9411 0 28.7866 2.38097 23.7188 5.30574ZM31.8362 1.94005C31.7625 2.13112 30.4513 5.11468 28.9045 8.59795C27.3723 12.0665 25.5013 16.2994 24.75 18.0043C23.9987 19.6945 23.3504 21.1348 23.2915 21.1936C23.2473 21.2524 20.8165 21.0319 17.8996 20.7233C14.9826 20.3999 11.0344 19.9737 9.13393 19.7679C2.94643 19.0919 2.03304 18.989 1.98884 18.9302C1.92991 18.8861 6.52634 16.2259 28.1384 3.79192C30.2009 2.60143 31.9098 1.61671 31.9246 1.61671C31.9393 1.61671 31.9098 1.76368 31.8362 1.94005ZM51.7098 11.802C58.3098 15.5939 63.7754 18.7538 63.8491 18.8273C64.0259 18.989 63.7607 19.0331 59.5915 19.474C55.4665 19.9002 50.7228 20.4146 45.9054 20.9437C44.1228 21.1495 42.6496 21.2818 42.6201 21.2524C42.517 21.1495 34.0312 1.85187 34.0312 1.7049C34.0312 1.6608 35.3129 2.36627 36.8746 3.26281C38.4214 4.15935 45.1098 7.99536 51.7098 11.802ZM40.9112 19.5769L41.8688 21.7521L37.9205 28.5423C35.7549 32.2901 33.8545 35.5382 33.7071 35.788C33.4567 36.2143 33.442 35.7587 33.442 19.474V2.71901L36.6978 10.0677C38.4804 14.1095 40.3808 18.3864 40.9112 19.5769ZM32.558 19.2829C32.558 32.9515 32.5286 35.597 32.3665 35.4206C32.0129 35.0385 24.308 21.6492 24.308 21.4287C24.308 21.3112 26.0906 17.1665 28.2857 12.2135C30.4808 7.2458 32.2634 3.14523 32.2634 3.07175C32.2634 2.99826 32.3371 2.93947 32.4107 2.93947C32.5138 2.93947 32.558 8.48037 32.558 19.2829ZM13.4062 21.1054C18.9603 21.708 23.5567 22.2665 23.6304 22.34C23.8366 22.5457 32.0866 36.8169 32.0424 36.8757C32.0129 36.905 25.8696 33.3924 18.3857 29.0861C10.9018 24.7797 4.28705 20.9731 3.68304 20.6204C2.8433 20.1354 2.66652 19.9884 2.94643 19.9884C3.15268 19.9884 7.85223 20.4881 13.4062 21.1054ZM62.8326 20.2676C62.5969 20.4293 58.5161 22.7809 53.7723 25.5146C49.0286 28.2336 42.7085 31.8786 39.7326 33.5981C36.742 35.3177 34.3406 36.6405 34.3701 36.5229C34.4143 36.42 36.1232 33.4365 38.171 29.8797C40.2188 26.3377 42.0455 23.163 42.2371 22.8397C42.6496 22.1048 41.8393 22.2665 49.942 21.3846C53.3893 21.0025 57.4996 20.5469 59.0759 20.3558C60.6522 20.1795 62.2433 20.0178 62.6116 20.0031L63.2746 19.9884L62.8326 20.2676ZM3.68304 24.4711C4.22813 25.1913 6.67366 28.5276 9.13393 31.8786C13.2589 37.5076 13.583 37.978 13.4062 38.2719C13.2147 38.5658 4.125 50.9704 2.26875 53.469C1.76786 54.1303 1.25223 54.8211 1.13437 55.0122C0.913393 55.3061 0.898661 53.7335 0.898661 37.9927L0.883929 20.6645L1.79732 21.8991C2.29821 22.5898 3.13795 23.7362 3.68304 24.4711ZM65.1161 38.022C65.1161 54.8652 65.1161 55.3208 64.8509 55.0416C64.6004 54.777 52.6232 38.5071 52.4022 38.1249C52.358 38.0367 53.8754 35.8615 55.7759 33.2748C57.6616 30.7028 60.5196 26.8227 62.1107 24.6475C63.7018 22.4869 65.0277 20.7233 65.0571 20.7233C65.0866 20.7233 65.1161 28.5129 65.1161 38.022ZM11.6826 26.2642C16.3969 28.9685 22.6875 32.584 25.6634 34.2889C28.6393 36.0085 31.0848 37.4488 31.0848 37.5223C31.0848 37.5811 27.3281 37.6105 22.7464 37.5958L14.3933 37.5517L8.30893 29.2771C4.95 24.7209 2.20982 20.9584 2.20982 20.929C2.20982 20.8114 2.85804 21.1789 11.6826 26.2642ZM62.5674 22.5163C61.8897 23.4276 60.225 25.691 58.8549 27.5575C54.8036 33.0837 54.1996 33.8921 52.8147 35.7587L51.4888 37.5517L43.0915 37.5958C36.0496 37.6252 34.7384 37.5958 34.9152 37.4342C35.033 37.3166 37.1545 36.0673 39.6295 34.6564C42.1045 33.2307 48.4982 29.5564 53.846 26.4699C59.1937 23.3982 63.6134 20.8702 63.6871 20.8702C63.746 20.8702 63.2451 21.6198 62.5674 22.5163ZM30.7165 38.7716C30.4808 38.9186 24.308 42.4753 17.0156 46.6641C9.72321 50.8381 3.43259 54.4684 3.03482 54.7035C2.65179 54.9387 2.29821 55.1004 2.26875 55.071C2.20982 55.0122 3.47679 53.2779 11.6237 42.1961L14.3491 38.5071H22.7464C30.9522 38.5071 31.1437 38.5218 30.7165 38.7716ZM53.7281 41.4465C61.8603 52.4842 63.7754 55.1445 63.5692 55.0563C63.2598 54.9387 35.1804 38.801 34.9888 38.6393C34.9152 38.5658 38.4509 38.5218 43.2388 38.5365L51.6067 38.5805L53.7281 41.4465ZM38.1121 47.1785C40.0567 50.5295 41.7214 53.4249 41.8098 53.6012C41.9719 53.8805 41.471 55.0857 37.8469 63.3015C35.5781 68.4603 33.6482 72.8107 33.5893 72.9723C33.5156 73.134 33.4567 65.5943 33.4567 56.2174L33.442 39.1684L34.0165 40.1238C34.3259 40.6529 36.1674 43.8275 38.1121 47.1785ZM27.5344 46.473C25.2804 50.3678 23.3799 53.6012 23.3062 53.6747C23.2326 53.7482 21.1554 54.0275 18.6951 54.3067C6.11384 55.6883 3.07902 56.0116 2.91696 55.9675C2.76964 55.9087 6.62946 53.6747 23.7188 43.8275C26.5915 42.1667 29.479 40.4912 30.1272 40.1091C30.7754 39.7269 31.3795 39.4036 31.4679 39.4036C31.571 39.3889 29.7884 42.5782 27.5344 46.473ZM49.6179 48.0897C58.8844 53.4249 63.1125 55.9381 62.8768 55.9528C62.5085 55.9969 43.0326 53.8658 42.9589 53.7776C42.7969 53.5571 34.7679 39.6681 34.7679 39.5947C34.7679 39.5506 35.0478 39.6828 35.4013 39.8886C35.7402 40.0944 42.1339 43.7834 49.6179 48.0897ZM32.558 56.4378C32.558 65.5649 32.5138 73.0458 32.4549 73.0458C32.3812 73.0458 31.954 72.164 31.4973 71.0911C31.0406 70.0329 29.1844 65.8441 27.4018 61.8024C25.6045 57.7606 24.1313 54.3802 24.1165 54.292C24.1165 54.2038 25.7223 51.3672 27.6964 47.9722C29.6558 44.5918 31.5268 41.373 31.8509 40.8145C32.1603 40.2707 32.4549 39.8298 32.4844 39.8298C32.5286 39.8298 32.558 47.2961 32.558 56.4378ZM24.1607 56.6583C24.6174 57.7018 26.4737 61.9052 28.2857 65.9911C32.1455 74.7213 32.0129 74.4127 31.8656 74.3245C31.5857 74.1775 18.4004 66.5937 14.2902 64.2274C11.8152 62.8018 8.01429 60.6119 5.84866 59.3626C2.26875 57.3197 1.92991 57.0845 2.31295 56.9963C2.53393 56.9375 4.34598 56.7318 6.33482 56.5113C13.3473 55.7764 20.8607 54.9681 21.8036 54.8358C23.3504 54.6301 23.2326 54.5419 24.1607 56.6583ZM47.8795 55.262C62.0665 56.8053 63.8049 56.9963 63.8786 57.0698C63.9228 57.1139 61.4772 58.5689 58.4571 60.3032C37.4933 72.3845 34.1049 74.3245 34.046 74.2804C34.0165 74.251 35.9317 69.8271 38.3036 64.4479L42.6201 54.6594L43.2241 54.7476C43.5629 54.7917 45.6549 55.0269 47.8795 55.262Z"
                      fill="url(#paint0_linear_198_796)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_198_796"
                        x1="-0.129973"
                        y1="38.1396"
                        x2="66.1358"
                        y2="38.1396"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#04DBF5" />
                        <stop offset="1" stopColor="#FA04E0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </SvgIcon>
              ) : (
                <SvgIcon
                  className={styles.favIconLogo}
                  sx={{
                    width: "4.125rem",
                    height: "4.75rem",
                    fill: "linear-gradient(90deg, #E82E78 -0.2%, #F198C0 100.21%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="67"
                    height="76"
                    viewBox="0 0 67 76"
                    fill="none"
                  >
                    <path
                      d="M24.2188 5.30574C19.1509 8.21582 13.0223 11.7432 10.5915 13.1541C8.16071 14.5504 4.91964 16.4169 3.37277 17.2988L0.573661 18.9008L0.529464 37.9633L0.5 57.011L2.22366 58.0251C3.18125 58.5836 7.73348 61.2145 12.3594 63.86C16.9853 66.5202 22.3772 69.6213 24.3661 70.7677C26.3549 71.9141 29.2129 73.5602 30.7304 74.4274L33.4705 76L42.958 70.5326C48.1732 67.5343 55.5982 63.2574 59.4728 61.0381L66.5 56.9963V37.9927V19.0037L62.7138 16.8285C60.6219 15.6233 53.1969 11.3464 46.1991 7.31928C39.2161 3.29221 33.4705 0 33.4558 0C33.4411 0 29.2866 2.38097 24.2188 5.30574ZM32.3362 1.94005C32.2625 2.13112 30.9513 5.11468 29.4045 8.59795C27.8723 12.0665 26.0013 16.2994 25.25 18.0043C24.4987 19.6945 23.8504 21.1348 23.7915 21.1936C23.7473 21.2524 21.3165 21.0319 18.3996 20.7233C15.4826 20.3999 11.5344 19.9737 9.63393 19.7679C3.44643 19.0919 2.53304 18.989 2.48884 18.9302C2.42991 18.8861 7.02634 16.2259 28.6384 3.79192C30.7009 2.60143 32.4098 1.61671 32.4246 1.61671C32.4393 1.61671 32.4098 1.76368 32.3362 1.94005ZM52.2098 11.802C58.8098 15.5939 64.2754 18.7538 64.3491 18.8273C64.5259 18.989 64.2607 19.0331 60.0915 19.474C55.9665 19.9002 51.2228 20.4146 46.4054 20.9437C44.6228 21.1495 43.1496 21.2818 43.1201 21.2524C43.017 21.1495 34.5312 1.85187 34.5312 1.7049C34.5312 1.6608 35.8129 2.36627 37.3746 3.26281C38.9214 4.15935 45.6098 7.99536 52.2098 11.802ZM41.4112 19.5769L42.3688 21.7521L38.4205 28.5423C36.2549 32.2901 34.3545 35.5382 34.2071 35.788C33.9567 36.2143 33.942 35.7587 33.942 19.474V2.71901L37.1978 10.0677C38.9804 14.1095 40.8808 18.3864 41.4112 19.5769ZM33.058 19.2829C33.058 32.9515 33.0286 35.597 32.8665 35.4206C32.5129 35.0385 24.808 21.6492 24.808 21.4287C24.808 21.3112 26.5906 17.1665 28.7857 12.2135C30.9808 7.2458 32.7634 3.14523 32.7634 3.07175C32.7634 2.99826 32.8371 2.93947 32.9107 2.93947C33.0138 2.93947 33.058 8.48037 33.058 19.2829ZM13.9062 21.1054C19.4603 21.708 24.0567 22.2665 24.1304 22.34C24.3366 22.5457 32.5866 36.8169 32.5424 36.8757C32.5129 36.905 26.3696 33.3924 18.8857 29.0861C11.4018 24.7797 4.78705 20.9731 4.18304 20.6204C3.3433 20.1354 3.16652 19.9884 3.44643 19.9884C3.65268 19.9884 8.35223 20.4881 13.9062 21.1054ZM63.3326 20.2676C63.0969 20.4293 59.0161 22.7809 54.2723 25.5146C49.5286 28.2336 43.2085 31.8786 40.2326 33.5981C37.242 35.3177 34.8406 36.6405 34.8701 36.5229C34.9143 36.42 36.6232 33.4365 38.671 29.8797C40.7188 26.3377 42.5455 23.163 42.7371 22.8397C43.1496 22.1048 42.3393 22.2665 50.442 21.3846C53.8893 21.0025 57.9996 20.5469 59.5759 20.3558C61.1522 20.1795 62.7433 20.0178 63.1116 20.0031L63.7746 19.9884L63.3326 20.2676ZM4.18304 24.4711C4.72813 25.1913 7.17366 28.5276 9.63393 31.8786C13.7589 37.5076 14.083 37.978 13.9062 38.2719C13.7147 38.5658 4.625 50.9704 2.76875 53.469C2.26786 54.1303 1.75223 54.8211 1.63437 55.0122C1.41339 55.3061 1.39866 53.7335 1.39866 37.9927L1.38393 20.6645L2.29732 21.8991C2.79821 22.5898 3.63795 23.7362 4.18304 24.4711ZM65.6161 38.022C65.6161 54.8652 65.6161 55.3208 65.3509 55.0416C65.1004 54.777 53.1232 38.5071 52.9022 38.1249C52.858 38.0367 54.3754 35.8615 56.2759 33.2748C58.1616 30.7028 61.0196 26.8227 62.6107 24.6475C64.2018 22.4869 65.5277 20.7233 65.5571 20.7233C65.5866 20.7233 65.6161 28.5129 65.6161 38.022ZM12.1826 26.2642C16.8969 28.9685 23.1875 32.584 26.1634 34.2889C29.1393 36.0085 31.5848 37.4488 31.5848 37.5223C31.5848 37.5811 27.8281 37.6105 23.2464 37.5958L14.8933 37.5517L8.80893 29.2771C5.45 24.7209 2.70982 20.9584 2.70982 20.929C2.70982 20.8114 3.35804 21.1789 12.1826 26.2642ZM63.0674 22.5163C62.3897 23.4276 60.725 25.691 59.3549 27.5575C55.3036 33.0837 54.6996 33.8921 53.3147 35.7587L51.9888 37.5517L43.5915 37.5958C36.5496 37.6252 35.2384 37.5958 35.4152 37.4342C35.533 37.3166 37.6545 36.0673 40.1295 34.6564C42.6045 33.2307 48.9982 29.5564 54.346 26.4699C59.6937 23.3982 64.1134 20.8702 64.1871 20.8702C64.246 20.8702 63.7451 21.6198 63.0674 22.5163ZM31.2165 38.7716C30.9808 38.9186 24.808 42.4753 17.5156 46.6641C10.2232 50.8381 3.93259 54.4684 3.53482 54.7035C3.15179 54.9387 2.79821 55.1004 2.76875 55.071C2.70982 55.0122 3.97679 53.2779 12.1237 42.1961L14.8491 38.5071H23.2464C31.4522 38.5071 31.6437 38.5218 31.2165 38.7716ZM54.2281 41.4465C62.3603 52.4842 64.2754 55.1445 64.0692 55.0563C63.7598 54.9387 35.6804 38.801 35.4888 38.6393C35.4152 38.5658 38.9509 38.5218 43.7388 38.5365L52.1067 38.5805L54.2281 41.4465ZM38.6121 47.1785C40.5567 50.5295 42.2214 53.4249 42.3098 53.6012C42.4719 53.8805 41.971 55.0857 38.3469 63.3015C36.0781 68.4603 34.1482 72.8107 34.0893 72.9723C34.0156 73.134 33.9567 65.5943 33.9567 56.2174L33.942 39.1684L34.5165 40.1238C34.8259 40.6529 36.6674 43.8275 38.6121 47.1785ZM28.0344 46.473C25.7804 50.3678 23.8799 53.6012 23.8062 53.6747C23.7326 53.7482 21.6554 54.0275 19.1951 54.3067C6.61384 55.6883 3.57902 56.0116 3.41696 55.9675C3.26964 55.9087 7.12946 53.6747 24.2188 43.8275C27.0915 42.1667 29.979 40.4912 30.6272 40.1091C31.2754 39.7269 31.8795 39.4036 31.9679 39.4036C32.071 39.3889 30.2884 42.5782 28.0344 46.473ZM50.1179 48.0897C59.3844 53.4249 63.6125 55.9381 63.3768 55.9528C63.0085 55.9969 43.5326 53.8658 43.4589 53.7776C43.2969 53.5571 35.2679 39.6681 35.2679 39.5947C35.2679 39.5506 35.5478 39.6828 35.9013 39.8886C36.2402 40.0944 42.6339 43.7834 50.1179 48.0897ZM33.058 56.4378C33.058 65.5649 33.0138 73.0458 32.9549 73.0458C32.8812 73.0458 32.454 72.164 31.9973 71.0911C31.5406 70.0329 29.6844 65.8441 27.9018 61.8024C26.1045 57.7606 24.6313 54.3802 24.6165 54.292C24.6165 54.2038 26.2223 51.3672 28.1964 47.9722C30.1558 44.5918 32.0268 41.373 32.3509 40.8145C32.6603 40.2707 32.9549 39.8298 32.9844 39.8298C33.0286 39.8298 33.058 47.2961 33.058 56.4378ZM24.6607 56.6583C25.1174 57.7018 26.9737 61.9052 28.7857 65.9911C32.6455 74.7213 32.5129 74.4127 32.3656 74.3245C32.0857 74.1775 18.9004 66.5937 14.7902 64.2274C12.3152 62.8018 8.51429 60.6119 6.34866 59.3626C2.76875 57.3197 2.42991 57.0845 2.81295 56.9963C3.03393 56.9375 4.84598 56.7318 6.83482 56.5113C13.8473 55.7764 21.3607 54.9681 22.3036 54.8358C23.8504 54.6301 23.7326 54.5419 24.6607 56.6583ZM48.3795 55.262C62.5665 56.8053 64.3049 56.9963 64.3786 57.0698C64.4228 57.1139 61.9772 58.5689 58.9571 60.3032C37.9933 72.3845 34.6049 74.3245 34.546 74.2804C34.5165 74.251 36.4317 69.8271 38.8036 64.4479L43.1201 54.6594L43.7241 54.7476C44.0629 54.7917 46.1549 55.0269 48.3795 55.262Z"
                      fill="url(#paint0_linear_197_778)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_197_778"
                        x1="0.370027"
                        y1="38.1396"
                        x2="66.6358"
                        y2="38.1396"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E82E78" />
                        <stop offset="1" stopColor="#F198C0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </SvgIcon>
              )}

              <Typography
                className={styles.logoText}
                sx={{
                  textAlign: "center",
                  fontFamily: "AvenirNext",
                  fontSize: "2.0625rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Frame&Camera
              </Typography>
            </Box>

            <Box
              className={styles.searchBar}
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SearchBar setSearch={setSearch} />
            </Box>

            {location.pathname === "/" ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  className={styles.searchButton}
                  sx={{
                    fontWeight: "600",
                    color: "#5197E4",
                    borderColor: "#5197E4",
                    "&:hover": {
                      borderColor: "#70B5FF",
                    },
                  }}
                  onClick={handleRandomCall}
                  variant="outlined"
                  size="medium"
                  startIcon={<SearchIcon />}
                >
                  Random Search
                </Button>
                <SearchIcon
                  className={styles.searchIcon}
                  style={{ display: "none" }}
                  onClick={handleRandomCall}
                />
              </Box>
            ) : (
              <Box sx={{ width: "20%", textAlign: "center" }}>
                <FormControl fullWidth size="small">
                  <InputLabel
                    id={"demo-simple-select-label"}
                    htmlFor={"filter-select-input-id"}
                    className={styles.orderBy}
                    sx={{ color: "white" }}
                  >
                    Order by
                  </InputLabel>
                  <Select
                    onChange={handleSelect}
                    sx={{ background: "#F297BF", color: "white", p: "0" }}
                    labelId={"demo-simple-select-label"}
                    name="selector"
                    id={"filter-select"}
                    inputProps={{ id: "filter-select-input-id" }}
                    value={orderBy}
                    label={"Order by"}
                  >
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"width"}
                    >
                      width
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"height"}
                    >
                      height
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"likes"}
                    >
                      likes
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"date"}
                    >
                      date
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
            {location.pathname === "/" ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to={"favs"}>
                  <Button
                    className={styles.favButton}
                    sx={{
                      color: "#BB37CD",
                      borderColor: "#BB37CD",
                      "&:hover": {
                        borderColor: "#E945FF",
                      },
                    }}
                    size="medium"
                    variant="outlined"
                    startIcon={<FavoriteIcon />}
                  >
                    Favorites
                  </Button>
                </Link>
                <Link to={"/favs"}>
                  <FavoriteIcon
                    className={styles.favIcon}
                    style={{ display: "none" }}
                  />
                </Link>
              </Box>
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <Link to={"/"}>
                  <Button
                    className={styles.homeButton}
                    sx={{
                      color: "#FC7CBC",
                      borderColor: "#FC7CBC",
                      "&:hover": {
                        borderColor: "#FC44A0",
                      },
                    }}
                    startIcon={<HomeSharpIcon />}
                    variant="outlined"
                    onClick={() => dispatch(clearPhotos())}
                  >
                    Home
                  </Button>
                </Link>
                <Link to={"/"}>
                  <HomeSharpIcon
                    className={styles.homeIcon}
                    style={{ display: "none" }}
                  />
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
