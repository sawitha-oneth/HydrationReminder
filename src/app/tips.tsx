import { StyleSheet, Text, View } from 'react-native';

export default function TipsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Hydrate? 🌊</Text>
      <View style={styles.tipContainer}>
        <Text style={styles.tip}>Boosts skin health and beauty</Text>
        <Text style={styles.tip}>Regulates body temperature</Text>
        <Text style={styles.tip}>Flushes body waste</Text>
        <Text style={styles.tip}>Maintains blood pressure</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#0EA5E9', marginBottom: 30 },
  tipContainer: { alignItems: 'flex-start' },
  tip: { fontSize: 18, color: '#475569', marginVertical: 10, fontWeight: '500' },
});