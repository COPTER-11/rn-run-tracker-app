import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/run");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/running-logo.png")}
        style={styles.runlogo}
      />
      <Text style={styles.runtitle1}>Run Tracker</Text>
      <Text style={styles.runtitle2}>วิ่งเพื่อสุขภาพ</Text>
      <ActivityIndicator
        size="large"
        color="#002fff"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  runtitle1: {
    fontFamily: "Kanit_700Bold",
    fontSize: 38,
    color: "#0c0077",
    marginBottom: 5,
  },
  runtitle2: {
    fontFamily: "Kanit_400Regular",
    fontSize: 22,
    color: "#0c007791",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  runlogo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
