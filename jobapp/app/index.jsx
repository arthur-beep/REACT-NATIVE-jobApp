
import { SafeAreaView } from "react-native";
import { COLORS } from "../constants";

import OnboardingScreen from "../components/onboarding/onboarding";


const Home1 = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      
      <OnboardingScreen/>
    </SafeAreaView>
  );
};

export default Home1;