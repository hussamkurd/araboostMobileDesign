import "./styles.css";
import {
  NativeBaseProvider,
  Button,
  Box,
  Image,
  Text,
  Heading,
  VStack
} from "native-base";
import theme, { ITheme } from "./theme";

// Making the custom theme typing available
declare module "native-base" {
  interface ICustomTheme extends ITheme {}
}

function ActionButtons() {
  return (
    <VStack space={4} mt={{ base: 10, md: 12 }}>
      <Button
        bg="warning.400"
        _hover={{
          bg: "warning.300"
        }}
        _pressed={{
          bg: "warning.600"
        }}
        variant="solid"
        py={4}
      >
        تسجيل الدخول
      </Button>
      <Button
        variant="outline"
        py={4}
        borderColor="secondary.100"
        _text={{
          color: "coolGray.50"
        }}
        _hover={{
          bg: "indigo.400"
        }}
        _pressed={{
          bg: "indigo.600"
        }}
      >
        مؤثــر جديد
      </Button>
    </VStack>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box
        _light={{ bg: "coolGray.50" }}
        _dark={{ bg: "indigo.500" }}
        minHeight="100vh"
        justifyContent="center"
        px={4}
      >
        <VStack space={5} alignItems="center">
          <Image
            source={{
              uri:
                "https://elidcloud.com/assets/araboost/araboost-logo-f39848c01a03cb1d143cb254bb1b7412eff7b41d6dd450006d1b5976465cfae6.png"
            }}
            alt="AraboostLogo"
            h="150"
            w="150"
          />
          <Heading size="lg">مها هانم</Heading>
          <Text>تطبيق منصة عربوست للمؤثرين</Text>
        </VStack>
        <ActionButtons />
      </Box>
    </NativeBaseProvider>
  );
}
