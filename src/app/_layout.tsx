import { SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from "react";

export default function RootLayout() {

  const [loaded] = useFonts({
    Jekaterina: require('../fonts/Jekaterina.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "ENTRADAS E RESERVAS", headerStyle: { backgroundColor: "#f5f2f2" }, headerTintColor: "#000", headerTitleAlign: 'center'}}/>
      <Stack.Screen name="auth/login/index" options={{ headerTitle: "Login", headerStyle: { backgroundColor: "##0e1424" }, headerTintColor: "#fff" }} />
      <Stack.Screen name="auth/register/index" options={{ headerTitle: "Criar Conta", headerStyle: { backgroundColor: "##0e1424" }, headerTintColor: "#fff" }} />
    </Stack>
  );
}
