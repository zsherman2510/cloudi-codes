import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  display:block;
  height: 100%;
  margin:0 auto;
  padding: 0;
  
}
button {
  padding: 12px 16px;
  border-radius: 5px;
  color: #fff;
  background: #3C99DC;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;

}
section{
  margin-bottom: 2rem;
}
.section_one{
  background: #eee;
  padding: 3rem 8%;
  height:100%;
  background-image: url(/elevate.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.section_one .title{
  text-align: center;
  font-size: 2.5rem;
}
.section_one .box_wrapper{
  display: flex;
  flex-flow: wrap;
}

.primary{
  background-color: #3C99DC;
  color: #fff;
}

.section_two{
  text-align: center;
  border-bottom: 1px solid #eee;

  
}

.section_two h1{
  font-size: 2.5rem;
}

.section_two .wrapper{
  display: flex;
  flex-flow: wrap;
  padding: 1rem 8%;
}
.section_three{
  padding: 3rem 8%;
  
  background-image: url(/course2.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.section_three h1{
  text-align: center;
  font-size: 2.5rem;
}

.section_three .sub_header{
  text-align: center;
  
}

.section_three .wrapper{
  display: flex;
  flex-flow: wrap;
  padding-top: 3rem;
  
}

.info_box{
  
  max-width: 450px;
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  height: 100%;
  min-height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background: #eee;
}


@media screen and (min-width: 1073px){
  .info_box{
    margin-right: 1rem;
  }
}

.info_box .title{
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: .9rem;
}
.description{
  margin-bottom: .9rem;
}
.button_secondary{
  background: #eee;
  color: #3C99DC;
  border: .5px solid #3C99dc;
}
.link button{
  margin-left: 5px;
}

.status_wrapper{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.2rem;
}

.status_red{
  height: 20px;
  border-radius: 50%;
  width: 20px;
  background: red;
  margin-right: 5px;
}

.status_green{
height: 20px;
  border-radius: 50%;
  width: 20px;
  background: green;
  margin-right: 5px;
}

.comparisons{
  padding: 3rem 8%;
  background: #eee;
  
}

.comparisons h2{
  text-align: center;
  font-size: 2.5rem;
}
.comparisons .wrapper{
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  
}
.comparison_box{
  width: 100%;
  max-width: 500px;
  height: 100%;
  
  padding: 2rem 1rem;
  margin: .9rem .8rem;
  box-shadow: 2px 1px 6px 2px rgb(190, 190, 190); 
}

.comparison_box .comparison_title{
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
  

}

.comparison_box .comparison_length{
  margin-bottom: 12px;
}

.logo {
    margin: .4rem;
    font-size: 1.8rem;
}

.html {
    color: orange;
}

.light_blue {
    color: #4fc3f7;
}

.gold {
    color: gold;
}

.light {
    color: #ddd;
}

.purple {
    color: #7c62aa;
}

.green {
    color: green;
}

`;

const theme = {
  colors: {
    primary: "#3C99DC;",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
