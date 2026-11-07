import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState("Time to drink a glass of water!");
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  }, []);

  
  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync(); // Safe check

    
    await Notifications.cancelAllScheduledNotificationsAsync();

    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "💧 Hydration Alert",
        body: message,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60, // Min -> Seconds
        repeats: true,
      },
    });

    setIsReminding(true);
    Alert.alert("Set!", `Reminding you every ${intervalMinutes} minutes.`);
  }

  
  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped", "Reminders cancelled.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>

      <Text style={styles.label}>Add a Custom Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter message"
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? "Active 🟢" : "Inactive 🔴"}
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="START REMINDERS" onPress={scheduleReminder} color="#0EA5E9" />
      </View>
      <View style={{ height: 10 }} /> 
      <View style={styles.buttonContainer}>
        <Button title="STOP REMINDERS" onPress={stopReminder} color="#EF4444" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F9FF', padding: 20, alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: 60, marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#0369A1', alignSelf: 'flex-start', marginBottom: 8, marginTop: 15 },
  input: { width: '100%', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, borderWidth: 1, borderColor: '#BAE6FD', fontSize: 16 },
  status: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginVertical: 25 },
  buttonContainer: { width: '100%', marginVertical: 5 },
});