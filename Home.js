import { Text, View } from "react-native"
import RollButton from "./RollButton";
import Selection from "./Selection";

/**
 *
 * App -> Home -> RollButton, Selection
 */

export default function Home(){

  return(
    <View>
      <Selection />
      <RollButton />
    </View>
  )
}