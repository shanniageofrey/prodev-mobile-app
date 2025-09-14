import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_mainstyle";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>prodev-mobile-app</Text>

      <Link href="/(home)/index" style={styles.link}>
        <Text style={styles.linkText}>Open Home (tabs)</Text>
      </Link>

      <Link href="/join" style={styles.link}>
        <Text style={styles.linkText}>Join</Text>
      </Link>

      <Link href="/signin" style={styles.link}>
        <Text style={styles.linkText}>Sign in</Text>
      </Link>
    </View>
  );
}
