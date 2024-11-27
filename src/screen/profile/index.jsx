import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import profileStyle from '../../style.jsx/profileStyle';
import DeviceInfo from 'react-native-device-info';
import SmsRetriever from 'react-native-sms-retriever';
import { NetworkInfo } from 'react-native-network-info'; 

const UserProfileScreen = () => {
    const userData = {
        name: 'Test',
        mobile: '2017547281',
        email: 'test@example.com',
        bio: 'Software developer with a passion for building user-friendly applications and exploring new technologies.',
    };
    const profileData = (data, userData) => {
        return (
            <View style={profileStyle.profileSection}>
                <Text style={profileStyle.label}>{data}:</Text>
                <Text style={profileStyle.value}>{userData}</Text>
            </View>
        )
    }
    const deviceId = DeviceInfo.getUniqueId();
    const [batteryLevel, setBatteryLevel] = React.useState(null)
    const [isCharging, setIsCharging] = React.useState(null);
    React.useEffect(() => {
        const feathBatteryInfo = async () => {
            const level = await DeviceInfo.getBatteryLevel();
            const charging = await DeviceInfo.isBatteryCharging();
            setBatteryLevel(Math.round(level * 100));
            setIsCharging(charging);
        };

        feathBatteryInfo();
        const interval = setInterval(feathBatteryInfo, 10000);

        return () => clearInterval(interval);
    }, []);
    //REACT_NATIVE_DEVICE_INFO
    const [deviceInfo, setDeviceInfo] = React.useState({
        brand: '',
        model: '',
        systemName: '',
        systemVersion: '',
        uniqueId: '',
        getIpAdressID:'',
    });

    React.useEffect(() => {
        // Fetch device information
        const fetchDeviceInfo = async () => {
            const brand = DeviceInfo.getBrand();
            const model = DeviceInfo.getModel();
            const systemName = DeviceInfo.getSystemName();
            const systemVersion = DeviceInfo.getSystemVersion();
            const uniqueId = DeviceInfo.getUniqueId();
            const getIpAdressID = NetworkInfo.getIpAddress();
            setDeviceInfo({ brand, model, systemName, systemVersion, uniqueId , getIpAdressID });
        };

        fetchDeviceInfo();
    }, []);
    //REACT_NATIVE DEVICE INFO END ---->
    //SMS
    React.useEffect(() => {
        const startRetriever = async () => {
            try {
                const smsCode = await SmsRetriever.startSmsRetriever();
                console.log('Retrieved SMS Code:', smsCode);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        startRetriever();
    }, []);
    //---------->SMS END
    return (
        <ScrollView style={profileStyle.container}>
            <Text style={profileStyle.title}>User Profile</Text>
            {profileData('Name', userData.name)}
            {profileData('Mobile', userData.mobile)}
            {profileData('Email', userData.email)}
            {profileData('Bio', userData.bio)}
            <View>
                <Text>Mobile Details</Text>
                <Text>Device Id : {deviceId}</Text>
                <Text>Battery Percentage: {batteryLevel !== null ? `${batteryLevel}%` : 'Loading...'}</Text>
                <Text>Charging Status: {isCharging !== null ? (isCharging ? 'Charging' : 'Not Charging') : 'Loading...'}</Text>
                <Text>You'r Device is {Platform.OS}</Text>{/* differrenrt way */}
                <Text>Brand: {deviceInfo.brand}</Text>
                <Text>Model: {deviceInfo.model}</Text>
                <Text>System: {deviceInfo.systemName}</Text>
                <Text>Version: {deviceInfo.systemVersion}</Text>
                <Text>Unique ID: {deviceInfo.uniqueId}</Text>
                <Text>IP Adress : {deviceInfo.getIpAdressID}</Text>
            </View>
        </ScrollView>
    );
};

export default UserProfileScreen;
