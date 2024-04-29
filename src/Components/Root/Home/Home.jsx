import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Country from "../Country/Country";
import Country_Text from "../Country_Text/Country_Text";
import TestSection from "../TextSection/TestSection";




const Home = () => {
    return (
        
        <div>
           
           <Banner></Banner>
           <Country_Text></Country_Text>
           <Country></Country>
            <TestSection></TestSection>
          
           <Card></Card>
           
        </div>
    );
};

export default Home;