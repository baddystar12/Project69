import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {BarcodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
    getCameraPermissions=async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status===granted,
            buttonState: 'clicked'
        })
    }

    handleBarcodeScanned=async(type,data)=>{
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }
    render(){
        if(this.state.buttonState === 'clicked' && this.state.hasCameraPermissions){
            return(
                <BarcodeScanner onBarcodeScanned={scanned?undefined:this.handleBarcodeScanned}>
                </BarcodeScanner>
            )
        }
        else if(this.state.buttonState==='normal'){
        return(
            <View style={styles.container}>
                <Text>{this.state.hasCameraPermissions===true?scannedData: 'request permission'}</Text>
                <TouchableOpacity 
                    onPress={this.getCameraPermissions}
                    style = {styles.scanButton}
                    title = 'Bar Code Scanner'
                >
                    <Text style = {styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scanButton: {
        backgroundColor: 'turquoise',
        justifyContent: 'center',
        alignSelf: 'left',
        borderWidth: 2,
        borderRadius: 15,
        width: 100,
        height: 50,
        borderColor: '#6600cc'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#6600cc'
    }
  });
