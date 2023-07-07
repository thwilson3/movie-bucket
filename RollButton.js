import { Button, View } from "react-native";

/**
 * Button with roll functionality
 */

export default function RollButton({ getSelection }) {
  return (
    <View>
      <Button title="Roll" color="green" onPress={getSelection}></Button>
    </View>
  );
}
