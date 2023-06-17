import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    minecraft: require("../../assets/fonts/minecraft.otf"),
    "minecraft-bold": require("../../assets/fonts/minecraftBold.otf"),
    "minecraft-italic": require("../../assets/fonts/minecraftItalic.otf"),
    "minecraft-bold-italic": require("../../assets/fonts/minecraft.otf"),
    vcr: require("../../assets/fonts/vcr.ttf"),
  });

  return { fontsLoaded };
};
