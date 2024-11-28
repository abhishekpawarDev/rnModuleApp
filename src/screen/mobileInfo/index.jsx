import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import SmsRetriever from 'react-native-sms-retriever';
import { NetworkInfo } from 'react-native-network-info';
import { useNavigation } from '@react-navigation/native';


const MobileInfoScreen = () =>{
    const navigation = useNavigation();
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
    return(
        <View style={styles.main}>
            <View>
                <Text style={{fontSize:25, fontWeight:'700' , textAlign:'center',color:'#3d4f41', borderWidth:1, paddingVertical:10, marginVertical:10,borderRadius:10, shadowColor:'black', elevation:10, backgroundColor:'white'}}>Mobiles Details</Text>
            </View>
                <View style={{borderWidth:1, padding:15, borderRadius:10, backgroundColor:'white', shadowColor:'black', elevation:5,}}>
                <Text style={styles.detail}>Mobile Details</Text>
                <Text style={styles.detail}>Device Id : {deviceId}</Text>
                <Text style={styles.detail}>Battery Percentage: {batteryLevel !== null ? `${batteryLevel}%` : 'Loading...'}</Text>
                <Text style={styles.detail}>Charging Status: {isCharging !== null ? (isCharging ? 'Charging' : 'Not Charging') : 'Loading...'}</Text>
                <Text style={styles.detail}>You'r Device is {Platform.OS}</Text>
                <Text style={styles.detail}>Brand: {deviceInfo.brand}</Text>
                <Text style={styles.detail}>Model: {deviceInfo.model}</Text>
                <Text style={styles.detail}>System: {deviceInfo.systemName}</Text>
                <Text style={styles.detail}>Version: {deviceInfo.systemVersion}</Text>
                <Text style={styles.detail}>Unique ID: {deviceInfo.uniqueId}</Text>
                <Text style={styles.detail}>IP Adress : {deviceInfo.getIpAdressID}</Text>
                </View>
                <View style={{shadowColor:'black', elevation:20}}>
                    <TouchableOpacity style={{borderWidth:1,padding:10, marginVertical:20, borderRadius:10, backgroundColor:'white', }} onPress={() => navigation.navigate('UserProfile')}>
                        <Text style={{textAlign:'center', fontSize:21, fontWeight:'500'}}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        margin:20,
    },
    detail:{
        fontSize:21,
        fontWeight:'700',
        color:'#5a5c4b'
    }
});
export default MobileInfoScreen;