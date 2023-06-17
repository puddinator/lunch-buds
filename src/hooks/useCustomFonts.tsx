import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    minecraft: require("../../assets/fonts/minecraft.otf"),
    "minecraf-bold": require("../../assets/fonts/minecraftBold.otf"),
    "minecraft-italic": require("../../assets/fonts/minecraftItalic.otf"),
    "minecraft-bold-italic": require("../../assets/fonts/minecraft.otf"),
  });

  return { fontsLoaded };
};
