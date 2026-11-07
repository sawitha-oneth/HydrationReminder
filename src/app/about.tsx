import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        Built for Mobile Application Development Lab 6. Demonstrates local notifications and Expo Router tab navigation.
      </Text>
      <Text style={styles.footer}>
        Developed with React Native and Expo.{'\n'}Created by [Savitha Oneth - PE/2022/051].
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 30, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1E293B', marginBottom: 20 },
  description: { fontSize: 16, color: '#64748B', textAlign: 'center', lineHeight: 24, marginBottom: 40 },
  footer: { fontSize: 14, color: '#94A3B8', textAlign: 'center', lineHeight: 22 },
});